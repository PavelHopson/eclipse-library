/* Local, fail-closed review surface for Webclaw knowledge.candidate.v1 files. */
export const MAX_MARKDOWN_BYTES = 512 * 1024;
export const MAX_FILE_BYTES = 2 * 1024 * 1024;
export const REVIEW_GATES = Object.freeze([
  Object.freeze({ id: 'source', label: 'Источник подтверждён' }),
  Object.freeze({ id: 'license', label: 'Лицензия и условия сверены' }),
  Object.freeze({ id: 'risk', label: 'Риски описаны' }),
  Object.freeze({ id: 'relevance', label: 'Польза для Library ясна' }),
]);
const TOP_LEVEL = ['schemaVersion', 'candidateId', 'createdAtEpochMs', 'source', 'content', 'trust', 'review'];
const SOURCE_LEVEL = ['url', 'title', 'contentHashSha256', 'extractor', 'publicOnly'];
const CONTENT_LEVEL = ['markdown', 'byteLength', 'wordCount'];
const TRUST_LEVEL = ['content', 'instructions', 'license', 'sourcePolicy'];
const REVIEW_LEVEL = ['status', 'canonical', 'agentEligible'];

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

function exactKeys(value, expected, label, errors) {
  if (!isObject(value)) {
    errors.push(`${label} must be an object`);
    return;
  }
  Object.keys(value).forEach((key) => {
    if (!expected.includes(key)) errors.push(`${label} has unknown field: ${key}`);
  });
  expected.forEach((key) => {
    if (!(key in value)) errors.push(`${label} is missing field: ${key}`);
  });
}

function isBlockedHost(hostname) {
  const host = String(hostname || '').replace(/^\[|\]$/g, '').replace(/\.$/, '').toLowerCase();
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local')) return true;
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) {
    const parts = host.split('.').map(Number);
    const [a, b] = parts;
    return parts.some((part) => part > 255) || a === 0 || a === 10 || a === 127 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || a >= 224;
  }
  if (host.includes(':')) return host === '::1' || host === '::' || host.startsWith('fc') || host.startsWith('fd') || host.startsWith('fe80:');
  return false;
}

function isPublicSource(rawUrl, errors) {
  let parsed;
  try { parsed = new URL(rawUrl); } catch { errors.push('source.url must be a valid URL'); return null; }
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password || parsed.hash || isBlockedHost(parsed.hostname)) {
    errors.push('source.url must be a public http(s) URL without credentials');
  }
  return parsed;
}

function byteLength(value) {
  return new TextEncoder().encode(value).byteLength;
}

export async function sha256Hex(value) {
  if (!globalThis.crypto?.subtle) throw new Error('Web Crypto API is unavailable.');
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function validateCandidateForReview(candidate) {
  const errors = [];
  exactKeys(candidate, TOP_LEVEL, 'candidate', errors);
  if (candidate?.schemaVersion !== 'knowledge.candidate.v1') errors.push('schemaVersion must be knowledge.candidate.v1');
  if (!/^[a-f0-9]{64}$/.test(candidate?.candidateId || '')) errors.push('candidateId must be lowercase SHA-256 hex');
  if (!Number.isInteger(candidate?.createdAtEpochMs) || candidate.createdAtEpochMs < 1) errors.push('createdAtEpochMs must be a positive integer');

  exactKeys(candidate?.source, SOURCE_LEVEL, 'source', errors);
  const sourceUrl = isPublicSource(candidate?.source?.url, errors);
  if (candidate?.source?.title !== null && typeof candidate?.source?.title !== 'string') errors.push('source.title must be string or null');
  if (!/^[a-f0-9]{64}$/.test(candidate?.source?.contentHashSha256 || '')) errors.push('source.contentHashSha256 must be lowercase SHA-256 hex');
  if (candidate?.source?.extractor !== 'eclipse-claw') errors.push('source.extractor must be eclipse-claw');
  if (candidate?.source?.publicOnly !== true) errors.push('source.publicOnly must be true');

  exactKeys(candidate?.content, CONTENT_LEVEL, 'content', errors);
  const markdown = candidate?.content?.markdown;
  const markdownBytes = typeof markdown === 'string' ? byteLength(markdown) : 0;
  if (typeof markdown !== 'string' || markdown.length === 0) errors.push('content.markdown must be non-empty');
  if (markdownBytes > MAX_MARKDOWN_BYTES) errors.push(`content.markdown exceeds ${MAX_MARKDOWN_BYTES} bytes`);
  if (candidate?.content?.byteLength !== markdownBytes) errors.push('content.byteLength must match UTF-8 markdown length');
  if (!Number.isInteger(candidate?.content?.wordCount) || candidate.content.wordCount < 0) errors.push('content.wordCount must be a non-negative integer');

  exactKeys(candidate?.trust, TRUST_LEVEL, 'trust', errors);
  if (candidate?.trust?.content !== 'untrusted') errors.push('trust.content must be untrusted');
  if (candidate?.trust?.instructions !== 'data_only') errors.push('trust.instructions must be data_only');
  if (candidate?.trust?.license !== 'unknown') errors.push('trust.license must be unknown until review');
  if (candidate?.trust?.sourcePolicy !== 'public_only') errors.push('trust.sourcePolicy must be public_only');

  exactKeys(candidate?.review, REVIEW_LEVEL, 'review', errors);
  if (candidate?.review?.status !== 'needs_review') errors.push('review.status must be needs_review');
  if (candidate?.review?.canonical !== false) errors.push('review.canonical must be false');
  if (candidate?.review?.agentEligible !== false) errors.push('review.agentEligible must be false');

  if (typeof markdown === 'string' && /^[a-f0-9]{64}$/.test(candidate?.source?.contentHashSha256 || '')) {
    const contentHash = await sha256Hex(markdown);
    if (candidate.source.contentHashSha256 !== contentHash) errors.push('source.contentHashSha256 does not match markdown');
    if (sourceUrl && candidate.candidateId !== await sha256Hex(`${sourceUrl.toString()}\n${contentHash}`)) errors.push('candidateId does not match source URL and content hash');
  }
  return Object.freeze({ ok: errors.length === 0, errors: Object.freeze(errors) });
}

export function normalizeGates(gates) {
  return Object.freeze(Object.fromEntries(REVIEW_GATES.map(({ id }) => [id, gates?.[id] === true])));
}

export function canSaveDraft(validation, gates) {
  const normalized = normalizeGates(gates);
  return validation?.ok === true && REVIEW_GATES.every(({ id }) => normalized[id] === true);
}

export function createDecisionPacket(candidate, gates, decision, note = '', createdAt = new Date().toISOString()) {
  if (!candidate || !['draft', 'rejected'].includes(decision)) throw new Error('A candidate and a supported decision are required.');
  const normalizedGates = normalizeGates(gates);
  if (decision === 'draft' && !REVIEW_GATES.every(({ id }) => normalizedGates[id])) throw new Error('All evidence gates are required for draft.');
  const safeCreatedAt = Number.isFinite(Date.parse(createdAt)) ? new Date(createdAt).toISOString() : new Date().toISOString();
  return Object.freeze({
    schemaVersion: 'eclipse-library.candidate-review.v1',
    authority: 'local-review-only',
    catalogMutationAllowed: false,
    publishAllowed: false,
    agentEligible: false,
    createdAt: safeCreatedAt,
    decision,
    candidate: JSON.parse(JSON.stringify(candidate)),
    evidence: {
      gates: normalizedGates,
      allRequiredPassed: REVIEW_GATES.every(({ id }) => normalizedGates[id]),
      note: typeof note === 'string' ? note.slice(0, 1600) : '',
    },
    nextGate: 'Separate maintainer review, semantic summary, full diff and quality/security checks are required before catalog merge.',
  });
}

function text(value, limit = 280) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

function node(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value != null) element.textContent = value;
  return element;
}

function renderMeta(root, candidate) {
  root.replaceChildren();
  const rows = [
    ['Источник', candidate.source?.url || '—', true],
    ['Название', candidate.source?.title || 'Без названия', false],
    ['Кандидат ID', candidate.candidateId || '—', false],
    ['Контент SHA-256', candidate.source?.contentHashSha256 || '—', false],
    ['Получен', Number.isInteger(candidate.createdAtEpochMs) ? new Date(candidate.createdAtEpochMs).toISOString() : '—', false],
    ['Извлекатель', candidate.source?.extractor || '—', false],
  ];
  rows.forEach(([label, value, link]) => {
    const item = document.createElement('div');
    item.append(node('dt', '', label));
    const dd = node('dd', link ? '' : 'mono');
    if (link && /^https?:\/\//i.test(value)) {
      const anchor = document.createElement('a');
      anchor.href = value;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = value;
      dd.append(anchor);
    } else dd.textContent = value;
    item.append(dd);
    root.append(item);
  });
}

function downloadPacket(packet) {
  const id = text(packet.candidate?.candidateId, 64).slice(0, 12) || 'candidate';
  const blob = new Blob([`${JSON.stringify(packet, null, 2)}\n`], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `eclipse-library-candidate-${id}-${packet.decision}.json`;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

if (typeof document !== 'undefined') {
  const fileInput = document.querySelector('#candidateFile');
  const importStatus = document.querySelector('#importStatus');
  const panel = document.querySelector('#candidatePanel');
  const badge = document.querySelector('#validationBadge');
  const errorsRoot = document.querySelector('#validationErrors');
  const metaRoot = document.querySelector('#candidateMeta');
  const contentRoot = document.querySelector('#candidateContent');
  const contentCount = document.querySelector('#contentCount');
  const note = document.querySelector('#decisionNote');
  const noteCount = document.querySelector('#noteCount');
  const decisionState = document.querySelector('#decisionState');
  const decisionHint = document.querySelector('#decisionHint');
  const decisionStatus = document.querySelector('#decisionStatus');
  const saveDraft = document.querySelector('#saveDraft');
  const rejectCandidate = document.querySelector('#rejectCandidate');
  const gateInputs = [...document.querySelectorAll('[data-gate]')];
  let candidate = null;
  let validation = { ok: false, errors: ['Файл ещё не проверен.'] };

  const setStatus = (root, message, state = 'neutral') => {
    root.textContent = message;
    root.className = `status status-${state}`;
  };
  const currentGates = () => Object.fromEntries(gateInputs.map((input) => [input.dataset.gate, input.checked]));
  const updateActions = () => {
    const draftReady = canSaveDraft(validation, currentGates());
    const hasValidCandidate = validation.ok === true && candidate;
    saveDraft.disabled = !draftReady;
    rejectCandidate.disabled = !hasValidCandidate;
    if (!hasValidCandidate) {
      decisionState.textContent = 'Сначала загрузите корректный кандидат';
      decisionHint.textContent = 'JSON должен пройти все структурные проверки.';
    } else if (draftReady) {
      decisionState.textContent = 'Кандидат готов к локальному draft';
      decisionHint.textContent = 'Пакет будет скачан и не изменит каталог.';
    } else {
      const passed = REVIEW_GATES.filter(({ id }) => currentGates()[id]).length;
      decisionState.textContent = `${passed} из ${REVIEW_GATES.length} gates пройдено`;
      decisionHint.textContent = 'Отметьте все пункты после отдельной проверки evidence и лицензии.';
    }
  };
  const showValidation = () => {
    badge.dataset.state = validation.ok ? 'valid' : 'invalid';
    badge.textContent = validation.ok ? 'Структура подтверждена' : 'Проверка не пройдена';
    errorsRoot.replaceChildren();
    errorsRoot.hidden = validation.ok;
    if (!validation.ok) {
      errorsRoot.append(node('strong', '', 'Кандидат заблокирован до исправления входного JSON.'));
      const list = node('ul');
      validation.errors.slice(0, 12).forEach((error) => list.append(node('li', '', error)));
      errorsRoot.append(list);
    }
  };
  const resetReview = () => {
    candidate = null;
    validation = { ok: false, errors: ['Файл ещё не проверен.'] };
    panel.hidden = true;
    fileInput.value = '';
    gateInputs.forEach((input) => { input.checked = false; });
    note.value = '';
    noteCount.textContent = '0 / 1600';
    setStatus(importStatus, 'Файл ещё не выбран.');
    decisionStatus.textContent = '';
    updateActions();
  };
  const parseFile = async (file) => {
    if (!file) return;
    resetReview();
    if (file.size > MAX_FILE_BYTES) {
      setStatus(importStatus, 'Файл больше 2 МБ и не был открыт.', 'error');
      return;
    }
    setStatus(importStatus, 'Читаю файл локально и проверяю хэш…');
    try {
      candidate = JSON.parse(await file.text());
      validation = await validateCandidateForReview(candidate);
      panel.hidden = false;
      if (candidate && typeof candidate === 'object') {
        renderMeta(metaRoot, candidate);
        contentRoot.textContent = typeof candidate.content?.markdown === 'string' ? candidate.content.markdown : '';
        contentCount.textContent = `${candidate.content?.byteLength || 0} bytes · ${candidate.content?.wordCount || 0} слов`;
      }
      showValidation();
      setStatus(importStatus, validation.ok ? 'Кандидат проверен локально. Сеть не использовалась.' : `Кандидат отклонён валидатором: ${validation.errors.length} проблем.`, validation.ok ? 'success' : 'error');
      updateActions();
    } catch (error) {
      candidate = null;
      validation = { ok: false, errors: [error instanceof SyntaxError ? 'Файл не является корректным JSON.' : 'Не удалось проверить файл локально.'] };
      panel.hidden = false;
      showValidation();
      setStatus(importStatus, validation.errors[0], 'error');
      updateActions();
    }
  };

  fileInput.addEventListener('change', () => parseFile(fileInput.files?.[0]));
  gateInputs.forEach((input) => input.addEventListener('change', updateActions));
  note.addEventListener('input', () => { noteCount.textContent = `${note.value.length} / 1600`; });
  rejectCandidate.addEventListener('click', () => {
    if (!candidate || !validation.ok) return;
    downloadPacket(createDecisionPacket(candidate, currentGates(), 'rejected', note.value));
    setStatus(decisionStatus, 'Кандидат отклонён. Скачан локальный rejection-пакет; каталог не изменён.', 'success');
  });
  saveDraft.addEventListener('click', () => {
    if (!candidate || !canSaveDraft(validation, currentGates())) return;
    downloadPacket(createDecisionPacket(candidate, currentGates(), 'draft', note.value));
    setStatus(decisionStatus, 'Draft-пакет скачан. Для каталога потребуется отдельное ручное согласование.', 'success');
  });
  updateActions();
}
