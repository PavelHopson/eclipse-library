import { createHash } from 'node:crypto';

export const PACKET_SCHEMA = 'eclipse-library.review-packet.v2';
export const PREVIEW_SCHEMA = 'eclipse-library.review-preview.v1';
export const DECISION_SCHEMA = 'eclipse-library.review-decision.v1';
export const MAX_PACKET_BYTES = 128 * 1024;
export const MAX_PATCH_BYTES = 2 * 1024 * 1024;
export const MAX_PATCH_FILES = 25;
export const REQUIRED_APPROVAL_CHECKS = Object.freeze(['quality', 'security', 'responsive']);
export const REQUIRED_PACKET_CHECKS = Object.freeze(['source', 'terms', 'risk', 'fit']);

const SAFE_EDITORIAL_PATHS = [
  /^catalog\/resources\.json$/,
  /^guides\/[a-z0-9][a-z0-9-]*\.md$/,
  /^README\.md$/,
  /^ROADMAP\.md$/,
];

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}
export function assertNoCheckoutFilters(entries) {
  for (const entry of entries) {
    if (/(^|\s)[!-]?filter(?:=|\s|$)/m.test(String(entry?.content || ''))) throw new Error(`Base commit contains a checkout filter in ${entry?.path || '.gitattributes'}.`);
  }
  return true;
}

export function safeResourceId(value) {
  const id = typeof value === 'string' ? value.trim() : '';
  if (!/^[a-z0-9][a-z0-9._-]{0,119}$/i.test(id)) throw new Error('Review packet has an invalid resource id.');
  return id;
}

export function validateReviewPacket(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Review packet must be a JSON object.');
  if (value.schemaVersion !== PACKET_SCHEMA) throw new Error(`Review packet schema must be ${PACKET_SCHEMA}.`);
  if (value.authority !== 'local-review-only' || value.catalogMutationAllowed !== false) throw new Error('Review packet authority must stay local and non-mutating.');
  if (value.review?.ready !== true || value.review?.outcome !== 'approve') throw new Error('Preview requires a completed editorial review with outcome approve.');
  const missingChecks = REQUIRED_PACKET_CHECKS.filter((id) => value.review?.checks?.[id]?.passed !== true);
  if (missingChecks.length) throw new Error(`Review packet is missing evidence checks: ${missingChecks.join(', ')}.`);
  if (!value.preview || value.preview.autoApply !== false || value.preview.autoMerge !== false || value.preview.autoDeploy !== false) throw new Error('Review packet preview contract must disable automatic apply, merge and deploy.');
  const resourceId = safeResourceId(value.resource?.id);
  return Object.freeze({ packet: value, resourceId });
}

export function normalizePatchPath(value) {
  let path = String(value || '').trim().replace(/\\/g, '/');
  if (path === '/dev/null') return path;
  path = path.replace(/^[ab]\//, '');
  if (!path || path.length > 240 || /[\x00-\x1f\x7f]/.test(path)) throw new Error('Patch contains an empty or invalid path.');
  if (/^(?:[a-z]:|\/)/i.test(path) || path.split('/').some((part) => !part || part === '.' || part === '..')) throw new Error(`Patch path escapes the repository: ${path}`);
  if (!/^[A-Za-z0-9._/-]+$/.test(path)) throw new Error(`Patch path uses unsupported characters: ${path}`);
  if (path === '.git' || path.startsWith('.git/') || path === '.artifacts' || path.startsWith('.artifacts/')) throw new Error(`Patch path is protected: ${path}`);
  if (!SAFE_EDITORIAL_PATHS.some((pattern) => pattern.test(path))) throw new Error(`Patch path is outside the editorial allowlist: ${path}`);
  return path;
}

export function inspectPatch(patchText) {
  if (typeof patchText !== 'string' || !patchText.trim()) throw new Error('Patch is empty.');
  if (Buffer.byteLength(patchText, 'utf8') > MAX_PATCH_BYTES) throw new Error('Patch exceeds the 2 MiB limit.');
  if (patchText.includes('\0')) throw new Error('Patch contains NUL bytes.');
  if (/^GIT binary patch$/m.test(patchText) || /^Binary files /m.test(patchText)) throw new Error('Binary patches are not allowed.');
  if (/^(?:old mode|new mode|new file mode|deleted file mode) /m.test(patchText)) throw new Error('New, deleted, executable, symlink, submodule and mode changes are not allowed.');
  if (/^(?:rename|copy) (?:from|to) /m.test(patchText)) throw new Error('Rename and copy patches are not allowed.');

  const files = [];
  const markerPaths = [];
  for (const line of patchText.replace(/\r\n?/g, '\n').split('\n')) {
    const match = line.match(/^diff --git a\/([^\s]+) b\/([^\s]+)$/);
    if (!match) continue;
    const before = normalizePatchPath(`a/${match[1]}`);
    const after = normalizePatchPath(`b/${match[2]}`);
    if (before !== after) throw new Error('Patch must not rename files.');
    if (files.includes(after)) throw new Error(`Patch contains duplicate diff headers for ${after}.`);
    files.push(after);
    continue;
  }
  for (const line of patchText.replace(/\r\n?/g, '\n').split('\n')) {
    const marker = line.match(/^(?:---|\+\+\+) ([^\t]+)(?:\t.*)?$/);
    if (!marker) continue;
    if (marker[1] === '/dev/null') throw new Error('New and deleted files are not allowed.');
    markerPaths.push(normalizePatchPath(marker[1]));
  }
  if (!files.length) throw new Error('Patch has no unified diff file headers.');
  if (markerPaths.some((path) => !files.includes(path))) throw new Error('Patch file markers do not match the validated diff headers.');
  if (files.length > MAX_PATCH_FILES) throw new Error(`Patch changes more than ${MAX_PATCH_FILES} files.`);
  if (!files.includes('catalog/resources.json')) throw new Error('Editorial preview must change catalog/resources.json.');
  const diffHeaderCount = patchText.match(/^diff --git /gm)?.length || 0;
  if (diffHeaderCount !== files.length) throw new Error('Patch contains duplicate or malformed diff headers.');
  if (markerPaths.length !== files.length * 2) throw new Error('Patch must contain exactly one ---/+++ pair for every changed file.');
  return Object.freeze({ files: Object.freeze(files), bytes: Buffer.byteLength(patchText, 'utf8'), sha256: sha256(patchText) });
}

function itemMap(catalog) {
  if (!catalog || !Array.isArray(catalog.items)) throw new Error('Catalog payload must contain items.');
  const result = new Map();
  catalog.items.forEach((item) => {
    const id = safeResourceId(item?.id);
    if (result.has(id)) throw new Error(`Catalog contains a duplicate resource id: ${id}.`);
    result.set(id, item);
  });
  return result;
}

function changedTopLevelFields(before, after) {
  return [...new Set([...Object.keys(before), ...Object.keys(after)])]
    .filter((key) => JSON.stringify(before[key]) !== JSON.stringify(after[key]))
    .sort();
}

export function summarizeCatalogChange(beforeCatalog, afterCatalog, resourceId, files = []) {
  const id = safeResourceId(resourceId);
  const withoutItems = (catalog) => Object.fromEntries(Object.entries(catalog).filter(([key]) => key !== 'items'));
  if (JSON.stringify(withoutItems(beforeCatalog)) !== JSON.stringify(withoutItems(afterCatalog))) throw new Error('Patch must not change catalog metadata outside the reviewed resource.');
  const beforeItems = itemMap(beforeCatalog);
  const afterItems = itemMap(afterCatalog);
  const added = [...afterItems.keys()].filter((key) => !beforeItems.has(key));
  const removed = [...beforeItems.keys()].filter((key) => !afterItems.has(key));
  const modified = [...beforeItems.keys()].filter((key) => afterItems.has(key) && JSON.stringify(beforeItems.get(key)) !== JSON.stringify(afterItems.get(key)));
  if (added.length || removed.length || modified.length !== 1 || modified[0] !== id) throw new Error('Patch must modify exactly the reviewed catalog resource and no other catalog records.');
  const before = beforeItems.get(id);
  const after = afterItems.get(id);
  const fields = changedTopLevelFields(before, after);
  if (!fields.length) throw new Error('Reviewed resource has no semantic changes.');
  return Object.freeze({ resourceId: id, titleBefore: String(before.title || ''), titleAfter: String(after.title || ''), changedFields: Object.freeze(fields), files: Object.freeze([...files]) });
}

export function renderSemanticSummary(summary, baseCommit, patchSha) {
  const files = summary.files.map((file) => `- \`${file}\``).join('\n');
  const fields = summary.changedFields.map((field) => `- \`${field}\``).join('\n');
  return `# Editorial preview\n\n- Resource: \`${summary.resourceId}\`\n- Base commit: \`${baseCommit}\`\n- Patch SHA-256: \`${patchSha}\`\n- Automatic apply: **disabled**\n- Automatic merge/deploy: **disabled**\n\n## Changed fields\n\n${fields}\n\n## Changed files\n\n${files}\n\n## Next gate\n\nRead \`full.diff\`, run quality, security and responsive checks, then record a separate approve/reject decision.\n`;
}

export function validateDecisionInput({ decision, checks = [], confirmNoAutoMerge = false, note = '' }) {
  if (!['approve', 'reject'].includes(decision)) throw new Error('Decision must be approve or reject.');
  const normalizedChecks = [...new Set(checks.map((item) => String(item).trim()).filter(Boolean))].sort();
  const unknown = normalizedChecks.filter((item) => !REQUIRED_APPROVAL_CHECKS.includes(item));
  if (unknown.length) throw new Error(`Decision contains unsupported checks: ${unknown.join(', ')}.`);
  if (decision === 'approve') {
    const missing = REQUIRED_APPROVAL_CHECKS.filter((item) => !normalizedChecks.includes(item));
    if (missing.length) throw new Error(`Approval is missing required checks: ${missing.join(', ')}.`);
    if (confirmNoAutoMerge !== true) throw new Error('Approval must explicitly confirm that no automatic merge will happen.');
  }
  return Object.freeze({
    schemaVersion: DECISION_SCHEMA,
    authority: 'local-human-review-only',
    decision,
    approvedForManualTransfer: decision === 'approve',
    mergeAllowed: false,
    deployAllowed: false,
    checks: Object.freeze(normalizedChecks),
    note: typeof note === 'string' ? note.trim().slice(0, 1000) : '',
  });
}
