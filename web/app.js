/* Eclipse Library — client-side directory over the curated README.
   No build, no framework. Fetches README.md, parses md tables, renders. */
(() => {
  'use strict';

  const REPO = 'PavelHopson/eclipse-library';
  const RAW = `https://raw.githubusercontent.com/${REPO}/master/README.md`;
  const REPO_URL = `https://github.com/${REPO}`;
  const DETAILS_URL = 'catalog-index.json?v=1';
  const LINK_HEALTH_URL = 'link-health.json?v=1';
  const GITHUB_METADATA_URL = 'github-metadata.json?v=1';
  const MCP_AUDIT_URL = 'mcp-audit.json?v=2';
  const PROJECTS_URL = 'projects.json?v=1';
  const PAGE_SIZE = 36;
  const FAVORITES_KEY = 'eclipse-library:favorites:v1';
  const RECENT_KEY = 'eclipse-library:recent:v1';
  const DECISIONS = {
    now: 'Внедрить сейчас',
    roadmap: 'Добавить в roadmap',
    reference: 'Оставить как reference',
    no: 'Не использовать',
  };
  const TRUST = {
    official: 'Официальный источник',
    verified: 'Источник проверен',
    community: 'Community-проект',
    caution: 'Нужна осторожность',
    unknown: 'Нужна проверка',
  };
  const RISK = {
    low: 'Низкий риск',
    medium: 'Средний риск',
    high: 'Высокий риск',
  };
  const FRESHNESS = {
    fresh: 'Проверено недавно',
    review: 'Нужно перепроверить',
    unknown: 'Без даты проверки',
  };
  const LINK_HEALTH = {
    ok: 'Ссылка работает',
    restricted: 'Сервис отвечает с ограничением',
    unavailable: 'Временно недоступна',
    unknown: 'Не удалось проверить',
    broken: 'Ссылка не работает',
    blocked: 'Заблокирована проверкой безопасности',
    skipped: 'Автопроверка пропущена',
    unchecked: 'Ещё не проверялась автоматически',
  };
  const REPOSITORY_STATE = {
    active: 'Активный GitHub-репозиторий',
    archived: 'GitHub-репозиторий архивирован',
    disabled: 'GitHub-репозиторий отключён',
    unknown: 'Состояние GitHub не проверено',
  };
  const COST = {
    free: 'Бесплатно',
    freemium: 'Можно начать бесплатно',
    paid: 'Только платно',
    unknown: 'Стоимость нужно проверить',
  };
  const SIGNUP = {
    none: 'Без регистрации',
    optional: 'Регистрация необязательна',
    required: 'Нужен аккаунт',
    unknown: 'Регистрацию нужно проверить',
  };
  const RUNTIME = {
    local: 'На своём устройстве',
    'self-host': 'На своём сервере',
    cloud: 'В облаке',
    hybrid: 'Локально и в облаке',
    unknown: 'Место запуска нужно проверить',
  };
  const MCP_AUDIT = {
    'static-reviewed': 'Статически проверен',
    'runtime-pending': 'Runtime-аудит ожидается',
    'runtime-scanned': 'Автоскан metadata пройден',
    'runtime-reviewed': 'Runtime-аудит пройден',
    blocked: 'Не запускать',
  };
  const TOPIC_ROUTES = {
    verified: { title: 'Проверено редактором', description: 'Материалы с ручной проверкой источника, лицензии, условий, рисков и применимости к проектам Eclipse Forge.', match: (c) => Boolean(c.resource.detail) },
    skills: { title: 'Skills для AI-агентов', description: 'Готовые инструкции и повторяемые workflows. Перед установкой проверьте permissions и содержимое skill.', type: 'skill', match: (c) => c.type === 'skill' },
    mcp: { title: 'MCP и интеграции', description: 'Серверы и инструменты, которые подключают AI к внешним данным и действиям. Начинайте с минимальных прав.', match: (c) => /\bmcp\b/i.test(c.text) },
    models: { title: 'AI-модели', description: 'Локальные и облачные модели. Сравнивайте качество, требования к железу, стоимость и лицензию.', type: 'model', match: (c) => c.type === 'model' },
    prompts: { title: 'Промпты', description: 'Готовые запросы для типовых задач. Не вставляйте секреты и проверяйте результат перед использованием.', type: 'prompt', match: (c) => c.type === 'prompt' },
    security: { title: 'Security и privacy', description: 'Защитные инструменты и рискованные материалы с явными ограничениями и безопасным сценарием проверки.', match: (c) => c.type === 'grey' || c.type === 'privacy' || /security|безопас|privacy|opsec/i.test(c.text) },
    courses: { title: 'Курсы и обучение', description: 'Практические материалы, которые можно пройти по порядку и закрепить небольшим проектом.', type: 'learn', match: (c) => c.type === 'learn' },
  };
  const TASK_ROUTES = {
    'local-ai': { label: 'Запустить AI локально', hint: 'без отправки данных во внешний API', match: (c) => ['model', 'tool', 'oss'].includes(c.type) && (c.platforms.includes('Local') || /ollama|lm studio|gpt4all|local ai|local model/i.test(c.text)) },
    automation: { label: 'Автоматизировать работу', hint: 'agents, skills и повторяемые workflows', match: (c) => ['agent', 'skill'].includes(c.type) || /automation|автоматизац|оркестрац/i.test(c.text) },
    research: { label: 'Искать и разбирать данные', hint: 'research, RAG, OCR и документы', match: (c) => /research|rag|ocr|поиск|документ|knowledge|crawl|scrap/i.test(c.text) },
    growth: { label: 'Продвигать бренд', hint: 'контент, SEO, офферы и аналитика', match: (c) => /marketing|growth|smm|seo|бренд|контент|реклам|лид-магнит|lead magnet|конверси|аудит профил/i.test(c.text) },
    security: { label: 'Проверить безопасность', hint: 'privacy, аудит и защитные инструменты', match: (c) => TOPIC_ROUTES.security.match(c) },
    media: { label: 'Создать или обработать медиа', hint: 'изображения, видео и аудио', match: (c) => c.type === 'media' },
    commerce: { label: 'Сделать сайт или магазин', hint: 'лендинг, storefront и платежи', match: (c) => c.type === 'shop' || /storefront|e-commerce|интернет-магазин|лендинг|payment|платеж/i.test(c.text) },
  };
  let detailsByUrl = new Map();
  let catalogTotals = { all: 0, verified: 0, inferred: 0 };
  let linkHealthByUrl = new Map();
  let linkHealthSnapshot = null;
  let githubMetadataByRepo = new Map();
  let githubMetadataSnapshot = null;
  let mcpAuditByUrl = new Map();
  let mcpAuditSnapshot = null;
  let duplicateCount = 0;
  let projects = [];
  let projectStatus = '';
  let currentView = 'catalog';
  let favorites = loadFavorites();
  let recentKeys = loadRecent();
  const compareKeys = new Set();
  let feedbackTimer = 0;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const slug = (s) => s.toLowerCase().replace(/[^\wа-яё]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 60);
  const canonicalUrl = (url) => {
    try {
      const u = new URL(url);
      u.hash = '';
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'erid'].forEach((key) => u.searchParams.delete(key));
      u.hostname = u.hostname.toLowerCase().replace(/^www\./, '');
      u.pathname = u.pathname.replace(/\/+$/, '') || '/';
      return u.toString().replace(/\/$/, '');
    } catch (e) { return (url || '').trim().toLowerCase().replace(/#.*$/, '').replace(/\/$/, ''); }
  };
  const reservedGithubRoutes = new Set(['collections', 'events', 'features', 'login', 'marketplace', 'new', 'orgs', 'search', 'settings', 'sponsors', 'topics', 'users']);
  const githubRepoKey = (value) => {
    try {
      const url = new URL(String(value).replace(/[.,;:!?]+$/, ''));
      if (url.hostname.toLowerCase().replace(/^www\./, '') !== 'github.com') return null;
      const [owner, rawRepo] = url.pathname.split('/').filter(Boolean);
      const repo = rawRepo?.replace(/\.git$/i, '');
      return owner && repo && !reservedGithubRoutes.has(owner.toLowerCase()) ? `${owner.toLowerCase()}/${repo.toLowerCase()}` : null;
    } catch (error) { return null; }
  };
  function loadFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
      return new Set(Array.isArray(stored) ? stored.filter((value) => typeof value === 'string' && /^https?:\/\//.test(value)).slice(0, 500) : []);
    } catch (error) { return new Set(); }
  }

  function loadRecent() {
    try {
      const stored = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      return Array.isArray(stored) ? stored.filter((value) => typeof value === 'string' && /^https?:\/\//.test(value)).slice(0, 8) : [];
    } catch (error) { return []; }
  }

  function persistFavorites() {
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites])); }
    catch (error) { showFeedback('Не удалось сохранить выбор в этом браузере.'); }
  }

  function pruneFavorites() {
    const valid = new Set(cards.map((card) => card.favoriteKey));
    const next = new Set([...favorites].filter((key) => valid.has(key)));
    if (next.size === favorites.size) return;
    favorites = next;
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites])); } catch (error) {}
  }

  function pruneRecent() {
    const valid = new Set(cards.map((card) => card.favoriteKey));
    const next = recentKeys.filter((key, index) => valid.has(key) && recentKeys.indexOf(key) === index).slice(0, 8);
    if (next.length === recentKeys.length) return;
    recentKeys = next;
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(recentKeys)); } catch (error) {}
  }

  function favoriteButton(resource, wide = false) {
    const button = el('button', `save-button${wide ? ' save-button-wide' : ''}`);
    button.type = 'button';
    button.dataset.favoriteKey = canonicalUrl(resource.url);
    button.dataset.favoriteTitle = resource.title;
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 4.5c0-1 .8-1.7 1.7-1.7h7c.9 0 1.7.8 1.7 1.7v16l-5.2-3.3-5.2 3.3z"/></svg><span>В избранное</span>';
    return button;
  }

  function compareButton(resource, wide = false) {
    const button = el('button', `compare-button${wide ? ' compare-button-wide' : ''}`);
    button.type = 'button';
    button.dataset.compareKey = canonicalUrl(resource.url);
    button.dataset.compareTitle = resource.title;
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16M17 4v16M3.5 8H10M14 16h6.5M5 6l2-2 2 2M15 18l2 2 2-2"/></svg><span>К сравнению</span>';
    return button;
  }

  function updateFavoritesUI() {
    document.querySelectorAll('[data-favorite-key]').forEach((button) => {
      const saved = favorites.has(button.dataset.favoriteKey);
      button.classList.toggle('saved', saved);
      button.setAttribute('aria-pressed', String(saved));
      button.setAttribute('aria-label', `${saved ? 'Убрать из избранного' : 'Сохранить в избранное'}: ${button.dataset.favoriteTitle || 'материал'}`);
      const label = button.querySelector('span');
      if (label) label.textContent = saved ? 'Сохранено' : 'В избранное';
    });
    const toggle = $('#savedToggle');
    if (toggle) {
      toggle.classList.toggle('active', activeFavorites);
      toggle.setAttribute('aria-pressed', String(activeFavorites));
      toggle.disabled = favorites.size === 0 && !activeFavorites;
    }
    const count = $('#savedCount');
    if (count) count.textContent = String(favorites.size);
    renderPersonalPanel();
  }

  function recordRecent(resource) {
    const key = canonicalUrl(resource.url);
    recentKeys = [key, ...recentKeys.filter((item) => item !== key)].slice(0, 8);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(recentKeys)); } catch (error) {}
    renderPersonalPanel();
  }

  function renderPersonalPanel() {
    const panel = $('#personalPanel');
    if (!panel) return;
    const recent = recentKeys.map((key) => cards.find((card) => card.favoriteKey === key)).filter(Boolean);
    panel.hidden = recent.length === 0 && favorites.size === 0;
    $('#personalSavedCount').textContent = String(favorites.size);
    $('#personalSaved').disabled = favorites.size === 0;
    $('#personalRecentCount').textContent = String(recent.length);
    $('#clearRecent').hidden = recent.length === 0;
    $('#recentList').innerHTML = recent.map((card) =>
      `<a href="#item/${encodeURIComponent(card.resource.id)}"><span>${esc(TYPES[card.type] || card.type)}</span><b>${esc(card.resource.title)}</b><small>${esc(card.resource.useCases[0] || card.resource.simpleDescription)}</small></a>`
    ).join('');
  }

  function toggleFavorite(key, title) {
    if (!cards.some((card) => card.favoriteKey === key)) return;
    const saved = favorites.has(key);
    if (saved) favorites.delete(key); else favorites.add(key);
    persistFavorites();
    updateFavoritesUI();
    applyFilters(false);
    showFeedback(saved ? `«${title}» убрано из избранного.` : `«${title}» сохранено на этом устройстве.`);
  }

  function updateCompareUI() {
    document.querySelectorAll('[data-compare-key]').forEach((button) => {
      const selected = compareKeys.has(button.dataset.compareKey);
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', `${selected ? 'Убрать из сравнения' : 'Добавить к сравнению'}: ${button.dataset.compareTitle || 'материал'}`);
      const label = button.querySelector('span');
      if (label) label.textContent = selected ? 'В сравнении' : 'К сравнению';
    });
    const selected = [...compareKeys].map((key) => cards.find((card) => card.favoriteKey === key)).filter(Boolean);
    const tray = $('#compareTray');
    tray.hidden = selected.length === 0 || !$('#compareView').hidden;
    $('#compareHint').textContent = selected.length < 2 ? 'Выберите ещё один материал' : `${selected.length} из 3 выбрано`;
    $('#compareOpen').disabled = selected.length < 2;
    $('#compareOpen').textContent = selected.length < 2 ? 'Сравнить' : `Сравнить ${selected.length}`;
    $('#comparePills').innerHTML = selected.map((card) => `<button type="button" data-compare-remove="${escAttr(card.favoriteKey)}" aria-label="Убрать из сравнения: ${escAttr(card.resource.title)}">${esc(card.resource.title)} <span>×</span></button>`).join('');
  }

  function toggleCompare(key, title) {
    if (!cards.some((card) => card.favoriteKey === key)) return;
    if (compareKeys.has(key)) compareKeys.delete(key);
    else if (compareKeys.size >= 3) { showFeedback('Можно сравнить не больше трёх материалов.'); return; }
    else compareKeys.add(key);
    updateCompareUI();
    showFeedback(compareKeys.has(key) ? `«${title}» добавлено к сравнению.` : `«${title}» убрано из сравнения.`);
  }

  function clearCompare() {
    compareKeys.clear();
    closeCompare();
    updateCompareUI();
  }

  function openCompare() {
    const selected = [...compareKeys].map((key) => cards.find((card) => card.favoriteKey === key)).filter(Boolean);
    if (selected.length < 2) { showFeedback('Добавьте к сравнению ещё один материал.'); return; }
    closeGuide(); closeItem();
    const rows = [
      ['Что это', (card) => card.resource.simpleDescription],
      ['Когда пригодится', (card) => card.resource.useCases[0] || 'Не указано'],
      ['Где работает', (card) => card.platforms.join(', ')],
      ['Стоимость', (card) => card.resource.pricing],
      ['Лицензия', (card) => card.license],
      ['Доверие', (card) => TRUST[card.trust] || TRUST.unknown],
      ['Решение Eclipse', (card) => DECISIONS[card.resource.decision] || DECISIONS.reference],
      ['Риск', (card) => RISK[card.resource.riskLevel] || RISK.medium],
      ['Проекты Eclipse', (card) => card.projects.join(', ') || 'Не подтверждено'],
    ];
    $('#compareBody').innerHTML = `<h1 id="compareTitle">Сравнение ${selected.length} материалов</h1><p>Смотрите на задачу, условия и риски — не только на список функций.</p><div class="compare-table-wrap"><table><thead><tr><th>Критерий</th>${selected.map((card) => `<th><span>${esc(TYPES[card.type] || card.type)}</span><b>${esc(card.resource.title)}</b><a href="#item/${encodeURIComponent(card.resource.id)}">Открыть карточку →</a></th>`).join('')}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th>${esc(label)}</th>${selected.map((card) => `<td>${esc(value(card))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    $('#compareView').hidden = false;
    $('#compareTray').hidden = true;
    document.body.classList.add('noscroll');
    requestAnimationFrame(() => $('#compareBack').focus());
  }

  function closeCompare() {
    const view = $('#compareView');
    if (!view || view.hidden) return;
    view.hidden = true;
    document.body.classList.remove('noscroll');
    updateCompareUI();
  }

  function showFeedback(message) {
    const toast = $('#feedbackToast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => { toast.hidden = true; }, 2600);
  }
  const plain = (s) => (s || '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*`\x60]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const firstSentence = (s, max = 230) => {
    const text = plain(s);
    const stop = text.search(/[.!?]\s/);
    const candidate = stop > 45 ? text.slice(0, stop + 1) : text;
    if (candidate.length <= max) return candidate;
    return candidate.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
  };
  function freshnessState(value) {
    if (!value) return 'unknown';
    const verified = new Date(`${value}T00:00:00Z`);
    if (Number.isNaN(verified.getTime())) return 'unknown';
    const days = Math.floor((Date.now() - verified.getTime()) / 86400000);
    return days <= 180 ? 'fresh' : 'review';
  }

  // ---- markdown inline → safe-ish HTML ----
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function escAttr(s) { return esc(String(s || '')).replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function absUrl(u) {
    if (/^https?:\/\//.test(u)) return u;
    if (u.startsWith('#')) return REPO_URL + '/blob/master/README.md' + u;
    return `${REPO_URL}/blob/master/${u.replace(/^\.?\//, '')}`;
  }
  function inline(md) {
    let s = esc(md || '');
    s = s.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      const g = u.match(/guides\/([\w-]+)\.md/);
      if (g) return `<a href="#guide/${g[1]}">${t}</a>`;
      return `<a href="${absUrl(u)}" target="_blank" rel="noopener">${t}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s.replace(/^\s*[·—-]\s*/, '').trim();
  }

  // ---- type inference (для ориентировки) ----
  const TYPES = {
    skill:  'Claude Code skill',
    agent:  'агент / оркестрация',
    model:  'модель / LLM',
    api:    'API / доступ',
    prompt: 'промпты',
    learn:  'обучение',
    media:  'медиа',
    privacy:'privacy / self-host',
    ours:   'наш проект',
    drop:   'находка дропа',
    grey:   'grey / risk',
    oss:    'open-source',
    tool:   'инструмент',
    shop:   'e-commerce',
  };
  const TYPE_GROUPS = {
    ai: { label: 'AI и агенты', types: ['skill', 'agent', 'model', 'api', 'prompt'] },
    tools: { label: 'Инструменты', types: ['tool', 'oss'] },
    media: { label: 'Медиа', types: ['media'] },
    learn: { label: 'Обучение', types: ['learn'] },
    privacy: { label: 'Security и privacy', types: ['privacy', 'grey'] },
    shop: { label: 'E-commerce', types: ['shop'] },
    ecosystem: { label: 'Eclipse Forge', types: ['ours', 'drop'] },
  };
  const LICENSE_GROUPS = {
    open: 'Open-source лицензия',
    service: 'Условия сервиса',
    unknown: 'Лицензия неясна',
  };

  function licenseGroup(value) {
    if (/MIT|Apache|AGPL|GPL|BSD|MPL|CC BY|Open Source License/i.test(value || '')) return 'open';
    if (/уточнить|не указана|не раскрыт/i.test(value || '')) return 'unknown';
    return 'service';
  }

  function inferCost(pricing) {
    const value = String(pricing || '').toLowerCase();
    if (/уточнить|проверьте актуальные|не раскрыт/.test(value)) return 'unknown';
    const paidSource = value.replace(/бесплат\w*/g, '');
    const hasFree = /бесплат|без оплаты|free|open-source|open source|включ[её]нн?ая .*квот/.test(value);
    const hasPaid = /платн|оплач|pay-as-you-go|paid|подпис|тариф|billing|commercial|credits?/.test(paidSource);
    if (hasFree && hasPaid) return 'freemium';
    if (hasFree) return 'free';
    if (hasPaid) return 'paid';
    return 'unknown';
  }

  function inferRuntime(platforms, text) {
    const values = new Set(platforms || []);
    const source = `${[...(platforms || [])].join(' ')} ${text || ''}`.toLowerCase();
    const selfHosted = values.has('Self-host') || /self-host|сво(?:й|ём) сервер|docker/.test(source);
    const localPlatform = ['Local', 'Desktop', 'CLI', 'Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Apple Silicon'].some((value) => values.has(value));
    const cloudPlatform = ['Cloud', 'Remote', 'API'].some((value) => values.has(value));
    const hasRuntimePlatform = selfHosted || localPlatform || cloudPlatform;
    const local = selfHosted || localPlatform || (!hasRuntimePlatform && /локальн|offline|on-device/.test(source));
    const cloud = cloudPlatform || (!hasRuntimePlatform && /облак|hosted|saas/.test(source));
    if (local && cloud) return 'hybrid';
    if (selfHosted) return 'self-host';
    if (local) return 'local';
    if (cloud || values.has('Web')) return 'cloud';
    return 'unknown';
  }

  function inferSignup(platforms, text, runtime) {
    const source = String(text || '').toLowerCase();
    if (/без регистрац|no[- ]signup|без аккаунт/.test(source)) return 'none';
    if (/регистрац.*необяз|optional account/.test(source)) return 'optional';
    if (/нужен аккаунт|требуется аккаунт|создать .*аккаунт|api key|получить .*key|test key|console|подписк|billing project/.test(source)) return 'required';
    if (['local', 'self-host'].includes(runtime) && !/(cloud|hosted|remote)/.test(source)) return 'none';
    return 'unknown';
  }

  function typeGroup(type) {
    return Object.entries(TYPE_GROUPS).find(([, group]) => group.types.includes(type))?.[0] || 'tools';
  }

  const NAV_GROUPS = [
    { id: 'start', title: 'Быстрый старт' },
    { id: 'build', title: 'Разработка и рост' },
    { id: 'ops', title: 'Инфра и безопасность' },
    { id: 'learn', title: 'Обучение' },
    { id: 'drops', title: 'Подборки по датам' },
    { id: 'own', title: 'Наши проекты' },
    { id: 'other', title: 'Остальное' },
  ];
  function navGroupId(label) {
    const l = label.toLowerCase();
    if (/наши проекты/.test(l)) return 'own';
    if (/подборка eclipse/.test(l)) return 'drops';
    if (/ai & claude|скиллы для claude/.test(l)) return 'start';
    if (/интернет-магазин|лендинг|seo|маркетинг|dev tools|cli|media|download|gamedev/.test(l)) return 'build';
    if (/self-hosted|privacy|opsec|hardware|workstation/.test(l)) return 'ops';
    if (/обучение|компьютерные науки/.test(l)) return 'learn';
    return 'other';
  }
  function inferType(r, cat, sub) {
    const ctx = (cat.label + ' ' + (sub ? sub.title : '')).toLowerCase();
    let host = ''; try { if (r.url) host = new URL(r.url).hostname; } catch (e) {}
    if (r.risk) return 'grey';
    if (/интернет-магазин|e-?commerce|storefront|checkout|headless.*commerce|платеж|payment|корзин|магазин/.test(ctx)) return 'shop';
    if (/промпт|prompt/.test(ctx)) return 'prompt';
    if (/skill|скилл/.test(ctx)) return 'skill';
    if (/оркестрац|агент|agent|мультиагент/.test(ctx)) return 'agent';
    if (/uncensored|model|модел|llm|локальн.*запуск/.test(ctx) || /huggingface\.co$/.test(host)) return 'model';
    if (/api|прокси|бесплатн|грант|доступ/.test(ctx)) return 'api';
    if (/обучени|гайд|курс|learning|mit|компьютерн/.test(ctx)) return 'learn';
    if (/media|медиа|download|видео|изображени|генерац/.test(ctx)) return 'media';
    if (/privacy|opsec|self-host|hardware|workstation/.test(ctx)) return 'privacy';
    if (/наши проекты/.test(cat.label.toLowerCase())) return 'ours';
    if (/подборка/.test(cat.label.toLowerCase())) return 'drop';
    if (r.starsRepo) return 'oss';
    return 'tool';
  }

  function inferPlatforms(ctx) {
    const rules = [
      ['Windows', /windows|win32|powershell/],
      ['macOS', /macos|mac os|macbook/],
      ['Apple Silicon', /apple silicon|m[1-9]\b/],
      ['Linux', /linux|ubuntu|debian/],
      ['Android', /android/],
      ['iOS', /\bios\b|iphone|ipad/],
      ['Web', /\bweb\b|browser|браузер|website|сайт/],
      ['CLI', /\bcli\b|terminal|командн.*строк/],
      ['Self-host', /self-host|локальн|local-first|docker/],
      ['NVIDIA GPU', /nvidia|cuda|rtx|vram/],
    ];
    const found = rules.filter(([, re]) => re.test(ctx)).map(([name]) => name);
    return found.length ? found : ['Web'];
  }

  function inferLicense(ctx) {
    const match = ctx.match(/\b(AGPL-3\.0|GPL-3\.0|Apache-2\.0|Apache 2\.0|MIT|CC BY 4\.0|BSD-3-Clause|MPL-2\.0)\b/i);
    if (match) {
      const normalized = match[1].toLowerCase().replace('apache 2.0', 'apache-2.0');
      return {
        'agpl-3.0': 'AGPL-3.0',
        'gpl-3.0': 'GPL-3.0',
        'apache-2.0': 'Apache-2.0',
        mit: 'MIT',
        'cc by 4.0': 'CC BY 4.0',
        'bsd-3-clause': 'BSD-3-Clause',
        'mpl-2.0': 'MPL-2.0',
      }[normalized] || match[1];
    }
    if (/нет (?:явной )?лицензии|лицензия .*отсутств/i.test(ctx)) return 'Не указана';
    return 'Уточнить';
  }

  function inferProjects(ctx) {
    const rules = [
      ['Eclipse Chat', /eclipse chat/],
      ['Eclipse AI Hub', /eclipse ai hub|ai hub/],
      ['Hopson Sentinel', /hopson sentinel|sentinel/],
      ['Eclipse DnD Forge', /dnd forge|eclipse dnd/],
      ['Eclipse Forge Landing', /eclipseforge landing|eclipse forge landing|landing/],
      ['Eclipse Media', /eclipse media/],
      ['Shotforge', /shotforge/],
      ['Text2Image', /text2image/],
      ['Educator-AI', /educator-ai/],
      ['oh-my-claudecode', /oh-my-claudecode|\bomc\b/],
      ['Eclipse Library', /eclipse library|\blibrary\b/],
    ];
    return rules.filter(([, re]) => re.test(ctx)).map(([name]) => name);
  }

  function defaultUseCases(type) {
    const cases = {
      skill: ['Добавить повторяемую инструкцию в workflow агента', 'Проверить skill вручную на тестовом репозитории'],
      agent: ['Автоматизировать многошаговую задачу', 'Сравнить orchestration и контроль tools'],
      model: ['Проверить качество на своих примерах', 'Сравнить скорость, память и стоимость'],
      api: ['Подключить возможность через API', 'Сначала проверить лимиты, privacy и стоимость'],
      prompt: ['Скопировать промпт и заменить примеры своими данными', 'Сравнить результат с базовым запросом'],
      learn: ['Пройти материал по порядку', 'Закрепить знания небольшим практическим заданием'],
      media: ['Сделать тестовый media workflow', 'Проверить качество и права на входные данные'],
      privacy: ['Запустить в изолированном окружении', 'Проверить какие данные покидают устройство'],
      shop: ['Собрать небольшой proof of concept', 'Проверить checkout, данные и ограничения провайдера'],
      oss: ['Изучить README и архитектуру', 'Запустить pinned release только в sandbox'],
      tool: ['Решить одну небольшую задачу', 'Сравнить результат с текущим способом работы'],
      grey: ['Использовать только как reference', 'Сначала провести ручной security/legal review'],
    };
    return cases[type] || cases.tool;
  }

  function defaultSteps(r) {
    if (r.type === 'prompt') return ['Откройте источник и прочитайте ограничения.', 'Скопируйте промпт без личных и секретных данных.', 'Проверьте результат на небольшом примере.'];
    if (r.type === 'learn') return ['Откройте материал и выберите один раздел.', 'Повторите пример самостоятельно.', 'Зафиксируйте результат в небольшом проекте.'];
    if (r.type === 'model') return ['Проверьте лицензию и требования к железу.', 'Возьмите pinned model version.', 'Прогоните свой небольшой eval до интеграции.'];
    if (r.starsRepo) return ['Прочитайте README, LICENSE и последние issues.', 'Скачайте pinned release или commit в sandbox.', 'Проверьте permissions, network calls и данные до основного использования.'];
    return ['Откройте официальный источник.', 'Проверьте тариф, privacy и ограничения.', 'Начните с одной небольшой тестовой задачи.'];
  }

  function enrichResource(r, cat, sub) {
    const ctx = plain(`${cat.label} ${sub ? sub.title : ''} ${r.rawText || ''}`).toLowerCase();
    const detail = detailsByUrl.get(canonicalUrl(r.url)) || null;
    const host = (() => { try { return new URL(r.url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } })();
    const inferredTrust = r.risk ? 'caution' : (r.starsRepo ? 'community' : 'unknown');
    const inferredLicense = inferLicense(ctx);
    r.detail = detail?.reviewStatus === 'verified' ? detail : null;
    r.type = detail?.type || r.type;
    r.id = detail?.id || slug(`${r.title}-${host}`) || `item-${Math.random().toString(36).slice(2, 9)}`;
    r.simpleDescription = detail?.simpleDescription || firstSentence(r.rawText) || 'Краткое описание пока не заполнено. Откройте источник и проверьте назначение перед использованием.';
    r.useCases = detail?.useCases || defaultUseCases(r.type);
    r.platforms = detail?.platforms || inferPlatforms(ctx);
    r.license = detail?.license || inferredLicense;
    r.pricing = detail?.pricing || (r.starsRepo ? 'Репозиторий доступен бесплатно; hosting и внешние API могут оплачиваться отдельно' : 'Проверьте актуальные условия на официальном сайте');
    r.runtime = detail?.access?.runtime || inferRuntime(r.platforms, `${r.simpleDescription} ${r.pricing}`);
    r.cost = detail?.access?.cost || inferCost(r.pricing);
    r.signup = detail?.access?.signup || inferSignup(r.platforms, `${r.simpleDescription} ${r.pricing}`, r.runtime);
    r.trust = detail?.trust || inferredTrust;
    r.trustReason = detail?.trustReason || (r.risk ? 'Материал содержит признаки повышенного риска или неполные условия использования.' : 'Ссылка присутствует в каталоге, но подробный редакторский аудит продукта ещё не выполнен.');
    r.projects = detail?.projects || inferProjects(ctx);
    r.decision = detail?.decision || (r.risk ? 'reference' : 'reference');
    r.riskLevel = detail?.riskLevel || (r.risk ? 'high' : 'medium');
    r.risks = detail?.risks || (r.risk ? ['Проверьте лицензию, permissions и обработку данных до запуска.'] : ['Условия, цена и возможности могут измениться после даты проверки.']);
    r.verifiedAt = detail?.verifiedAt || null;
    r.freshness = freshnessState(r.verifiedAt);
    r.quickStart = detail?.quickStart || defaultSteps(r);
    r.guide = detail?.guide || '';
    r.linkHealth = linkHealthByUrl.get(canonicalUrl(r.url)) || { status: 'unchecked', httpStatus: null };
    r.githubRepoKey = githubRepoKey(r.url);
    r.repositoryMetadata = r.githubRepoKey
      ? githubMetadataByRepo.get(r.githubRepoKey) || { key: r.githubRepoKey, state: 'unknown', pushedAt: null, updatedAt: null }
      : null;
    r.repositoryState = r.repositoryMetadata?.state || '';
    r.mcpAudit = mcpAuditByUrl.get(canonicalUrl(r.url)) || null;
    return r;
  }

  function deduplicate(cats) {
    const best = new Map();
    cats.forEach((cat) => cat.subs.forEach((sub) => sub.resources.forEach((r) => {
      const key = canonicalUrl(r.url);
      const score = (r.detail ? 10000 : 0) + (!/подборка/i.test(cat.label) ? 1000 : 0) + plain(r.rawText).length;
      const current = best.get(key);
      if (!current || score > current.score) best.set(key, { resource: r, score });
    })));
    const seen = new Set();
    let rawCount = 0;
    cats.forEach((cat) => cat.subs.forEach((sub) => {
      rawCount += sub.resources.length;
      sub.resources = sub.resources.filter((r) => {
        const key = canonicalUrl(r.url);
        if (best.get(key)?.resource !== r || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }));
    duplicateCount = Math.max(0, rawCount - seen.size);
    cats.forEach((cat) => { cat.subs = cat.subs.filter((sub) => sub.resources.length); });
    return cats.filter((cat) => cat.subs.length);
  }

  // ---- parser ----
  function parse(md) {
    const lines = md.split('\n');
    const isSep = (l) => /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && l.includes('-') && l.includes('|');
    const cats = [];
    let cat = null, sub = null;
    const ensureSub = () => { if (!sub) { sub = { title: '', resources: [] }; if (cat) cat.subs.push(sub); } };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const h2 = line.match(/^##\s+(?!#)(.+?)\s*$/);
      const h3 = line.match(/^###\s+(.+?)\s*$/);
      if (h2) {
        const full = h2[1].trim();
        const first = full.split(/\s+/)[0];
        const hasIcon = /\p{Extended_Pictographic}|[←-➿⬀-⯿]/u.test(first);
        const icon = hasIcon ? first : '';
        const label = (hasIcon ? full.slice(first.length).trim() : full);
        if (/^Содержание$/i.test(label)) { cat = null; sub = null; continue; }
        cat = { id: slug(label) || `c${cats.length}`, icon, label, intro: '', subs: [] };
        cats.push(cat); sub = null; continue;
      }
      if (h3 && cat) { sub = { title: h3[1].trim(), intro: '', resources: [] }; cat.subs.push(sub); continue; }
      if (!cat) continue;
      const t = line.trim();
      if (t.startsWith('>')) {
        const q = t.replace(/^>\s?/, '');
        if (sub && !sub.resources.length) sub.intro += (sub.intro ? ' ' : '') + q;
        else if (!sub && cat) cat.intro += (cat.intro ? ' ' : '') + q;
        continue;
      }
      if (t.startsWith('|')) {
        if (isSep(t)) continue;
        if (lines[i + 1] && isSep(lines[i + 1].trim())) continue;
        const cells = t.split('|').slice(1, -1).map((c) => c.trim());
        if (!cells.length) continue;
        const res = parseRow(cells, t, cat, sub);
        if (res) {
          ensureSub();
          res.type = inferType(res, cat, sub);
          enrichResource(res, cat, sub);
          sub.resources.push(res);
        }
      }
    }
    return cats.filter((c) => c.subs.some((s) => s.resources.length));
  }

  function parseRow(cells, raw, cat, sub) {
    const head = cells[0];
    const bold = head.match(/^\*\*([^*]+)\*\*/);
    const link = head.match(/\[([^\]]+)\]\(([^)\s]+)\)/);
    let title = bold ? bold[1] : (link ? link[1] : head.replace(/[*`]/g, '').trim());
    title = title.replace(/[*`]/g, '').trim();
    if (!title || title === '—') return null;
    let url = link ? link[2] : null;
    if (url && !/^https?:/.test(url)) url = absUrl(url);
    if (!url) return null;
    const stars = raw.match(/img\.shields\.io\/github\/stars\/([\w.-]+)\/([\w.-]+)/);
    const starsRepo = stars ? `${stars[1]}/${stars[2]}` : null;
    const descCells = cells.slice(1).filter((c) => c && c !== '—' && !/img\.shields\.io\/github\/stars/.test(c));
    const rawText = descCells.join(' · ');
    const descHtml = inline(descCells.join(' · '));
    const ctx = `${cat.label} ${sub ? sub.title : ''} ${raw}`;
    const risk = /grey|high-risk|high privilege|risk:|supply-chain boundary|reference-only|не использовать|uncensored|⚠️|🚨|🃏|пиратств/i.test(ctx);
    return { title, url, descHtml, rawText, starsRepo, risk };
  }

  // ---- render ----
  const cards = []; // {node, text, type, sub, cat, grid, order}
  let allCats = [];
  function render(cats) {
    allCats = cats;
    const nav = $('#nav'), results = $('#results'), catgrid = $('#catgrid');
    cards.length = 0;
    nav.innerHTML = ''; results.innerHTML = ''; catgrid.innerHTML = '';
    let total = 0;
    const typeCounts = {};
    const navEntries = [];

    cats.forEach((cat) => {
      const cnt = cat.subs.reduce((a, s) => a + s.resources.length, 0);
      total += cnt;

      // sidebar nav
      navEntries.push({ cat, cnt });

      // hero quick-grid tile
      const tile = el('a', 'cat-tile'); tile.href = `#${cat.id}`;
      tile.innerHTML = `<span class="ct-ico" aria-hidden="true">${cat.icon || '·'}</span><span class="ct-label">${esc(cat.label)}</span><span class="ct-cnt">${cnt}</span>`;
      catgrid.appendChild(tile);

      const section = el('section', 'cat'); section.id = cat.id;
      const head = el('header', 'cat-head');
      head.innerHTML = `<h2>${cat.icon ? `<span class="ch-ico" aria-hidden="true">${cat.icon}</span> ` : ''}${esc(cat.label)}</h2><span class="cat-cnt">${cnt} ${plural(cnt)}</span>`;
      section.appendChild(head);
      if (cat.intro) section.appendChild(el('p', 'cat-intro', inline(cat.intro)));

      cat.subs.forEach((s) => {
        if (!s.resources.length) return;
        const subWrap = el('div', 'sub');
        if (s.title) subWrap.appendChild(el('h3', null, esc(s.title.replace(/[*`]/g, ''))));
        if (s.intro) subWrap.appendChild(el('p', 'sub-intro', inline(s.intro)));
        const grid = el('div', 'grid');
        s.resources.forEach((r) => {
          typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
          const repositoryInactive = ['archived', 'disabled'].includes(r.repositoryState);
          const card = el('article', 'card' + (r.riskLevel === 'high' || r.trust === 'caution' ? ' risk' : '') + (r.detail ? ' enriched' : '') + (repositoryInactive ? ' repository-inactive' : ''));
          card.dataset.type = r.type;
          card.dataset.itemId = r.id;
          card.dataset.freshness = r.freshness;

          const top = el('div', 'card-top');
          top.appendChild(el('span', 'type-chip t-' + r.type, esc(TYPES[r.type] || r.type)));
          top.appendChild(el('span', `trust-chip trust-${r.trust}`, esc(TRUST[r.trust] || TRUST.unknown)));
          const health = el('span', `link-health health-${r.linkHealth.status}`, esc(LINK_HEALTH[r.linkHealth.status] || LINK_HEALTH.unchecked));
          health.title = 'Автоматическая проверка доступности ссылки, а не гарантия безопасности продукта';
          top.appendChild(health);
          if (repositoryInactive) {
            const repository = el('span', `repository-state repository-${r.repositoryState}`, esc(r.repositoryState === 'archived' ? 'Репозиторий архивирован' : 'Репозиторий отключён'));
            repository.title = 'Проект больше не принимает обычные изменения; используйте как reference и ищите поддерживаемую альтернативу.';
            top.appendChild(repository);
          }
          if (r.mcpAudit) {
            const auditStatus = ['runtime-reviewed', 'runtime-scanned', 'blocked'].includes(r.mcpAudit.status) ? r.mcpAudit.status : 'runtime-pending';
            const auditLabel = r.mcpAudit.status === 'runtime-scanned' && r.mcpAudit.manualReview?.outcome === 'conditional'
              ? 'Проверено с ограничениями'
              : MCP_AUDIT[r.mcpAudit.status] || MCP_AUDIT['runtime-pending'];
            const audit = el('span', `mcp-audit mcp-audit-${auditStatus}`, esc(auditLabel));
            audit.title = r.mcpAudit.status === 'runtime-reviewed'
              ? 'Tool descriptions проверены вручную, а разрешённые boundary tests пройдены в изолированном окружении.'
              : r.mcpAudit.status === 'blocked'
                ? r.mcpAudit.summary
              : r.mcpAudit.status === 'runtime-scanned'
                ? r.mcpAudit.manualReview?.outcome === 'conditional'
                  ? `Ручной review завершён с ограничением: ${r.mcpAudit.manualReview.finding}`
                  : 'Pinned server проверен автоматическим inspector в disposable runner; перед рабочим подключением ещё нужен ручной review приватного artifact.'
                : 'Сервер не запускался на основной машине: перед подключением нужен sandbox-аудит tool descriptions.';
            top.appendChild(audit);
          }
          if (r.starsRepo) {
            const img = el('img', 'stars'); img.loading = 'lazy'; img.alt = 'GitHub stars';
            img.src = `https://img.shields.io/github/stars/${r.starsRepo}?style=flat&color=8b5cf6&labelColor=15151c&logo=github&logoColor=cfcfe0`;
            top.appendChild(img);
          }
          top.appendChild(compareButton(r));
          top.appendChild(favoriteButton(r));
          card.appendChild(top);

          const h = el('h4', 'card-title');
          h.innerHTML = `<a href="#item/${encodeURIComponent(r.id)}">${esc(r.title)}<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6"/></svg></a>`;
          card.appendChild(h);

          card.appendChild(el('p', 'desc', esc(r.simpleDescription)));
          const use = el('p', 'card-use');
          use.innerHTML = `<b>Когда пригодится:</b> ${esc(r.useCases[0] || 'для небольшой тестовой задачи')}`;
          card.appendChild(use);

          const meta = el('div', 'card-meta');
          meta.appendChild(el('span', 'meta-chip', esc(RUNTIME[r.runtime] || RUNTIME.unknown)));
          meta.appendChild(el('span', 'meta-chip meta-price', esc(COST[r.cost] || COST.unknown)));
          meta.appendChild(el('span', 'meta-chip', esc(SIGNUP[r.signup] || SIGNUP.unknown)));
          const license = el('span', 'meta-chip', esc(LICENSE_GROUPS[licenseGroup(r.license)]));
          license.title = `Точные условия: ${r.license}`;
          meta.appendChild(license);
          card.appendChild(meta);

          let dom = ''; try { dom = new URL(r.url).hostname.replace(/^www\./, ''); } catch (e) {}
          const foot = el('div', 'card-foot');
          foot.innerHTML =
            `<a class="detail-link" href="#item/${encodeURIComponent(r.id)}">Понять и применить →</a>` +
            (r.linkHealth.status === 'blocked'
              ? '<span class="source-link source-blocked">Источник заблокирован</span>'
              : `<a class="source-link" href="${escAttr(r.url)}" target="_blank" rel="noopener" aria-label="Открыть официальный источник">${esc(dom || 'Источник')} ↗</a>`);
          card.appendChild(foot);

          grid.appendChild(card);
          const searchText = [
            r.title, r.rawText, r.simpleDescription, r.type, r.license, r.pricing,
            r.platforms.join(' '), r.projects.join(' '), r.useCases.join(' '), TRUST[r.trust], LINK_HEALTH[r.linkHealth.status], REPOSITORY_STATE[r.repositoryState] || '',
            COST[r.cost], SIGNUP[r.signup], RUNTIME[r.runtime], MCP_AUDIT[r.mcpAudit?.status] || '',
          ].join(' ').toLowerCase();
          cards.push({
            node: card,
            resource: r,
            favoriteKey: canonicalUrl(r.url),
            grid,
            order: cards.length,
            type: r.type,
            platforms: r.platforms,
            license: r.license,
            licenseGroup: licenseGroup(r.license),
            trust: r.trust,
            projects: r.projects,
            freshness: r.freshness,
            repositoryState: r.repositoryState,
            cost: r.cost,
            signup: r.signup,
            runtime: r.runtime,
            text: searchText,
            sub: subWrap,
            cat: section,
          });
        });
        subWrap.appendChild(grid);
        section.appendChild(subWrap);
      });
      results.appendChild(section);
    });
    renderSideNav(navEntries);
    const catBrowserCount = $('#catBrowserCount');
    if (catBrowserCount) catBrowserCount.textContent = `${cats.length} разделов`;

    // stats
    $('#stats').innerHTML =
      stat(total, 'уникальных материалов') + stat(catalogTotals.verified, 'подробно проверено') +
      stat(cats.length, 'категорий') +
      stat(Object.keys(typeCounts).length, 'типов');
    renderHealthSummary();

    buildFilters(typeCounts);
    buildQuickRoutes(cats, typeCounts);
    pruneFavorites();
    pruneRecent();
    updateFavoritesUI();
    updateCompareUI();
    $('#status').hidden = true;
    requestAnimationFrame(() => { scrollSpy(); entryReveal(); });
  }

  function renderSideNav(entries) {
    const nav = $('#nav');
    const archive = entries.filter(({ cat }) => /подборка eclipse/i.test(cat.label));
    const primaryEntries = entries.filter(({ cat }) => !/подборка eclipse/i.test(cat.label));
    const byGroup = new Map(NAV_GROUPS.map((g) => [g.id, []]));
    primaryEntries.forEach((entry) => {
      const gid = navGroupId(entry.cat.label);
      (byGroup.get(gid) || byGroup.get('other')).push(entry);
    });
    nav.innerHTML = '';
    const projectsLink = el('a', 'nav-pinned');
    projectsLink.href = '#projects';
    projectsLink.dataset.navText = 'проекты eclipse forge';
    projectsLink.innerHTML = `<span class="ico" aria-hidden="true">◆</span><span class="label">Проекты Eclipse Forge</span><span class="cnt">${projects.length}</span>`;
    nav.appendChild(projectsLink);
    NAV_GROUPS.forEach((group) => {
      const items = byGroup.get(group.id) || [];
      if (!items.length) return;
      const wrap = el('div', 'nav-group');
      wrap.dataset.group = group.id;
      const count = items.reduce((sum, x) => sum + x.cnt, 0);
      wrap.appendChild(el('div', 'nav-group-title', `<span>${esc(group.title)}</span><i>${count}</i>`));
      items.forEach(({ cat, cnt }) => wrap.appendChild(makeNavLink(cat, cnt)));
      nav.appendChild(wrap);
    });
    if (archive.length) {
      const latest = archive.at(-1);
      const count = archive.reduce((sum, entry) => sum + entry.cnt, 0);
      const wrap = el('div', 'nav-group nav-archive');
      wrap.appendChild(el('div', 'nav-group-title', `<span>Архив подборок</span><i>${count}</i>`));
      const link = makeNavLink(latest.cat, latest.cnt);
      link.querySelector('.label').textContent = 'Свежая подборка';
      link.dataset.navText += ' архив подборок';
      wrap.appendChild(link);
      nav.appendChild(wrap);
    }
  }

  function makeNavLink(cat, cnt) {
    const a = el('a');
    a.href = `#${cat.id}`;
    a.dataset.navText = `${cat.label} ${cnt}`.toLowerCase();
    a.innerHTML = `<span class="ico" aria-hidden="true">${cat.icon || '·'}</span><span class="label">${esc(cat.label)}</span><span class="cnt">${cnt}</span>`;
    return a;
  }

  function findCat(cats, re) {
    return cats.find((c) => re.test(c.label.toLowerCase()));
  }

  function buildQuickRoutes(cats, typeCounts) {
    const box = $('#quickRoutes');
    if (!box) return;
    const ai = findCat(cats, /ai & claude/);
    const ecommerce = findCat(cats, /интернет-магазин/);
    const projects = findCat(cats, /наши проекты/);
    const latestDrop = [...cats].reverse().find((c) => /подборка eclipse/.test(c.label.toLowerCase()));
    const routes = [
      { label: 'Проверено', hint: 'полный редакторский разбор', href: '#browse/verified', count: cards.filter(TOPIC_ROUTES.verified.match).length },
      { label: 'Skills', hint: 'готовые роли и workflows', href: '#browse/skills', count: typeCounts.skill || 0 },
      { label: 'MCP', hint: 'данные и внешние действия', href: '#browse/mcp', count: cards.filter(TOPIC_ROUTES.mcp.match).length },
      { label: 'AI-модели', hint: 'local и cloud inference', href: '#browse/models', count: typeCounts.model || 0 },
      { label: 'Промпты', hint: 'готовые сценарии запросов', href: '#browse/prompts', count: typeCounts.prompt || 0 },
      { label: 'Security', hint: 'риски, privacy и защита', href: '#browse/security', count: cards.filter(TOPIC_ROUTES.security.match).length },
      { label: 'Курсы', hint: 'обучение по шагам', href: '#browse/courses', count: typeCounts.learn || 0 },
      latestDrop && { label: 'Свежая подборка', hint: latestDrop.label.replace(/^Подборка Eclipse\s*/i, ''), href: `#${latestDrop.id}`, count: latestDrop.subs.reduce((a, s) => a + s.resources.length, 0) },
      ecommerce && { label: 'E-commerce', hint: 'магазины, платежи, storefront', href: `#${ecommerce.id}`, count: ecommerce.subs.reduce((a, s) => a + s.resources.length, 0) },
      projects && { label: 'Наши проекты', hint: 'куда внедрять находки', href: `#${projects.id}`, count: projects.subs.reduce((a, s) => a + s.resources.length, 0) },
    ].filter(Boolean);
    box.innerHTML = routes.map((r) => {
      const meta = typeof r.count === 'number' ? `${r.count} ${plural(r.count)}` : 'гайды';
      return `<a href="${r.href}" class="quick-route"><span><b>${esc(r.label)}</b><small>${esc(r.hint)}</small></span><i>${esc(meta)}</i></a>`;
    }).join('');
  }

  const plural = (n) => (n % 10 === 1 && n % 100 !== 11) ? 'находка' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'находки' : 'находок';
  const stat = (n, l) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`;

  // ---- filters (type + platform + license + trust + project + search) ----
  let activeTask = '', activeType = null, activeCost = '', activeSignup = '', activeRuntime = '', activePlatform = '', activeLicense = '', activeTrust = '', activeProject = '', activeFreshness = '', activeRepositoryState = '', activeTopic = '', activeSort = 'catalog', activeFavorites = false;
  let query = '', navQuery = '', visibleLimit = PAGE_SIZE;
  let filterStateReady = false;
  function buildFilters(typeCounts) {
    const bar = $('#filters');
    const taskBar = $('#taskFilters');
    taskBar.innerHTML = Object.entries(TASK_ROUTES).map(([id, task]) => {
      const count = cards.filter(task.match).length;
      return `<button type="button" class="task-chip" data-task="${id}" aria-pressed="false"><span>${esc(task.label)}</span><small>${esc(task.hint)}</small><i>${count}</i></button>`;
    }).join('');
    taskBar.addEventListener('click', (event) => {
      const button = event.target.closest('[data-task]');
      if (!button) return;
      clearTopicRoute();
      activeTask = activeTask === button.dataset.task ? '' : button.dataset.task;
      updateTaskState();
      applyFilters();
    });
    const typeBar = $('#typeFilters');
    typeBar.innerHTML = '';
    typeBar.appendChild(chip(null, 'Все', cards.length, true));
    Object.entries(TYPE_GROUPS).forEach(([id, group]) => {
      const count = cards.filter((card) => group.types.includes(card.type)).length;
      if (count) typeBar.appendChild(chip(id, group.label, count, false));
    });

    fillSelect($('#platformFilter'), [...new Set(cards.flatMap((c) => c.platforms))]);
    fillSelect($('#licenseFilter'), [...new Set(cards.map((c) => c.licenseGroup))], (value) => LICENSE_GROUPS[value] || value);
    fillSelect($('#trustFilter'), [...new Set(cards.map((c) => c.trust))], (value) => TRUST[value] || value);
    fillSelect($('#projectFilter'), [...new Set(cards.flatMap((c) => c.projects))]);
    fillSelect($('#freshnessFilter'), [...new Set(cards.map((c) => c.freshness))], (value) => FRESHNESS[value] || value);
    fillSelect($('#repositoryFilter'), [...new Set(cards.map((c) => c.repositoryState))], (value) => REPOSITORY_STATE[value] || value);

    const reset = $('#filterReset');
    reset.addEventListener('click', () => clearLibraryFilters({ focus: true }));
    $('#costFilter').addEventListener('change', (e) => { activeCost = e.target.value; applyFilters(); });
    $('#signupFilter').addEventListener('change', (e) => { activeSignup = e.target.value; applyFilters(); });
    $('#runtimeFilter').addEventListener('change', (e) => { activeRuntime = e.target.value; applyFilters(); });
    $('#platformFilter').addEventListener('change', (e) => { activePlatform = e.target.value; applyFilters(); });
    $('#licenseFilter').addEventListener('change', (e) => { activeLicense = e.target.value; applyFilters(); });
    $('#trustFilter').addEventListener('change', (e) => { activeTrust = e.target.value; applyFilters(); });
    $('#projectFilter').addEventListener('change', (e) => { activeProject = e.target.value; applyFilters(); });
    $('#freshnessFilter').addEventListener('change', (e) => { activeFreshness = e.target.value; applyFilters(); });
    $('#repositoryFilter').addEventListener('change', (e) => { activeRepositoryState = e.target.value; applyFilters(); });
    $('#sortFilter').addEventListener('change', (e) => { activeSort = e.target.value; applyFilters(); });
    $('#savedToggle').addEventListener('click', () => {
      activeFavorites = !activeFavorites;
      updateFavoritesUI();
      applyFilters();
    });
    restoreFilterStateFromUrl();
    filterStateReady = true;
    updateTaskState();
    updateChipState();
    bar.hidden = false;
    $('#resultcount').textContent = `${cards.length} материалов`;
  }

  function updateTaskState() {
    document.querySelectorAll('#taskFilters [data-task]').forEach((button) => {
      const selected = button.dataset.task === activeTask;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function selectHasValue(id, value) {
    return value && [...$(id).options].some((option) => option.value === value) ? value : '';
  }

  function restoreFilterStateFromUrl() {
    const params = new URLSearchParams(location.search);
    const task = params.get('task') || '';
    const type = params.get('type') || '';
    const sort = params.get('sort') || '';
    activeTask = TASK_ROUTES[task] ? task : '';
    activeType = TYPE_GROUPS[type] ? type : null;
    activeCost = ['free-start', 'free', 'paid', 'unknown'].includes(params.get('cost')) ? params.get('cost') : '';
    activeSignup = ['none', 'optional', 'required', 'unknown'].includes(params.get('signup')) ? params.get('signup') : '';
    activeRuntime = ['local-start', 'local', 'self-host', 'cloud', 'hybrid', 'unknown'].includes(params.get('runtime')) ? params.get('runtime') : '';
    activePlatform = selectHasValue('#platformFilter', params.get('platform'));
    activeLicense = selectHasValue('#licenseFilter', params.get('license'));
    activeTrust = selectHasValue('#trustFilter', params.get('trust'));
    activeProject = selectHasValue('#projectFilter', params.get('project'));
    activeFreshness = selectHasValue('#freshnessFilter', params.get('freshness'));
    activeRepositoryState = selectHasValue('#repositoryFilter', params.get('repo'));
    activeSort = ['recommended', 'trust', 'freshness', 'title'].includes(sort) ? sort : 'catalog';
    query = (params.get('q') || '').trim().slice(0, 160);
    search.value = query;
    $('#costFilter').value = activeCost;
    $('#signupFilter').value = activeSignup;
    $('#runtimeFilter').value = activeRuntime;
    $('#platformFilter').value = activePlatform;
    $('#licenseFilter').value = activeLicense;
    $('#trustFilter').value = activeTrust;
    $('#projectFilter').value = activeProject;
    $('#freshnessFilter').value = activeFreshness;
    $('#repositoryFilter').value = activeRepositoryState;
    $('#sortFilter').value = activeSort;
  }

  function syncFilterUrl() {
    if (!filterStateReady) return;
    const params = new URLSearchParams();
    const values = {
      q: query.trim().slice(0, 160), task: activeTask, type: activeType || '', cost: activeCost,
      signup: activeSignup, runtime: activeRuntime, platform: activePlatform,
      license: activeLicense, trust: activeTrust, project: activeProject, freshness: activeFreshness,
      repo: activeRepositoryState, sort: activeSort === 'catalog' ? '' : activeSort,
    };
    Object.entries(values).forEach(([key, value]) => { if (value) params.set(key, value); });
    const next = `${location.pathname}${params.size ? `?${params}` : ''}${location.hash}`;
    history.replaceState(null, '', next);
  }

  function fillSelect(select, values, format = (value) => value) {
    const first = select.options[0];
    select.innerHTML = '';
    select.appendChild(first);
    values.filter(Boolean).sort((a, b) => format(a).localeCompare(format(b), 'ru')).forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = format(value);
      select.appendChild(option);
    });
  }

  function chip(type, label, n, active) {
    const c = el('button', 'chip' + (active ? ' active' : ''), `${esc(label)} <i>${n}</i>`);
    c.type = 'button';
    c.dataset.typeGroup = type || '';
    c.addEventListener('click', () => {
      clearTopicRoute();
      activeType = (activeType === type) ? null : type;
      updateChipState();
      applyFilters();
    });
    return c;
  }

  function updateChipState() {
    const highlightedType = activeType || TOPIC_ROUTES[activeTopic]?.type || null;
    document.querySelectorAll('#typeFilters .chip').forEach((x) => {
      const highlightedGroup = highlightedType && TYPE_GROUPS[highlightedType] ? highlightedType : typeGroup(highlightedType);
      const active = highlightedType ? x.dataset.typeGroup === highlightedGroup : (!activeTopic && !x.dataset.typeGroup);
      x.classList.toggle('active', active);
    });
  }

  function setTypeFilter(type) {
    activeType = type ? typeGroup(type) : null;
    query = '';
    if (search) search.value = '';
    updateChipState();
    applyFilters();
  }

  function clearLibraryFilters(opts = {}) {
    activeTask = '';
    activeType = null;
    activeCost = '';
    activeSignup = '';
    activeRuntime = '';
    activePlatform = '';
    activeLicense = '';
    activeTrust = '';
    activeProject = '';
    activeFreshness = '';
    activeRepositoryState = '';
    activeSort = 'catalog';
    activeFavorites = false;
    clearTopicRoute();
    query = '';
    if (search) search.value = '';
    $('#costFilter').value = '';
    $('#signupFilter').value = '';
    $('#runtimeFilter').value = '';
    $('#platformFilter').value = '';
    $('#licenseFilter').value = '';
    $('#trustFilter').value = '';
    $('#projectFilter').value = '';
    $('#freshnessFilter').value = '';
    $('#repositoryFilter').value = '';
    $('#sortFilter').value = 'catalog';
    updateFavoritesUI();
    updateTaskState();
    updateChipState();
    applyFilters();
    if (opts.focus && search) search.focus();
  }

  function applyFilters(resetPage = true) {
    if (resetPage) visibleLimit = PAGE_SIZE;
    const q = query.trim().toLowerCase();
    const matching = cards.filter((c) =>
        (!q || c.text.includes(q)) &&
        (!activeTask || TASK_ROUTES[activeTask]?.match(c)) &&
        (!activeType || TYPE_GROUPS[activeType]?.types.includes(c.type)) &&
        (!activeCost || (activeCost === 'free-start' ? ['free', 'freemium'].includes(c.cost) : c.cost === activeCost)) &&
        (!activeSignup || c.signup === activeSignup) &&
        (!activeRuntime || (activeRuntime === 'local-start' ? ['local', 'self-host', 'hybrid'].includes(c.runtime) : c.runtime === activeRuntime)) &&
        (!activePlatform || c.platforms.includes(activePlatform)) &&
        (!activeLicense || c.licenseGroup === activeLicense) &&
        (!activeTrust || c.trust === activeTrust) &&
        (!activeProject || c.projects.includes(activeProject)) &&
        (!activeFreshness || c.freshness === activeFreshness) &&
        (!activeRepositoryState || c.repositoryState === activeRepositoryState) &&
        (!activeFavorites || favorites.has(c.favoriteKey)) &&
        (!activeTopic || TOPIC_ROUTES[activeTopic]?.match(c))
    ).sort(sortCards);
    const visible = new Set(matching.slice(0, visibleLimit));
    cards.sort((a, b) => a.order - b.order).forEach((c) => c.grid.appendChild(c.node));
    cards.forEach((c) => { c.node.hidden = !visible.has(c); });
    const sortedMode = activeSort !== 'catalog';
    const sortedResults = $('#sortedResults');
    const sortedGrid = $('#sortedGrid');
    if (sortedMode) matching.slice(0, visibleLimit).forEach((c) => sortedGrid.appendChild(c.node));
    $('#results').hidden = sortedMode;
    sortedResults.hidden = !sortedMode;
    const matched = matching.length;
    document.querySelectorAll('.sub').forEach((s) => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    document.querySelectorAll('.cat').forEach((s) => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    if (!sortedMode) updateNavVisibility();
    const filtering = !!(q || activeTask || activeType || activeCost || activeSignup || activeRuntime || activePlatform || activeLicense || activeTrust || activeProject || activeFreshness || activeRepositoryState || activeTopic || activeFavorites);
    $('#hero').classList.toggle('dim', filtering);
    const shown = Math.min(matched, visibleLimit);
    $('#resultcount').textContent = shown < matched ? `${shown} из ${matched}` : `${matched} ${matched === 1 ? 'материал' : 'материалов'}`;
    const loadMoreWrap = $('#loadMoreWrap');
    const loadMore = $('#loadMore');
    if (loadMoreWrap && loadMore) {
      loadMoreWrap.hidden = shown >= matched;
      loadMore.textContent = `Показать ещё ${Math.min(PAGE_SIZE, matched - shown)} · осталось ${matched - shown}`;
    }
    const reset = $('#filterReset');
    if (reset) reset.hidden = !(filtering || activeSort !== 'catalog');
    const advancedCount = [activeCost, activeSignup, activeRuntime, activePlatform, activeLicense, activeTrust, activeProject, activeFreshness, activeRepositoryState].filter(Boolean).length;
    const advancedLabel = $('#advancedFilterCount');
    if (advancedLabel) advancedLabel.textContent = advancedCount ? `выбрано: ${advancedCount}` : 'стоимость, регистрация, место запуска и проверка';
    const advanced = $('#advancedFilters');
    if (advanced && advancedCount && !window.matchMedia('(max-width: 620px)').matches) advanced.open = true;
    const empty = $('#empty');
    empty.hidden = !(filtering && matched === 0);
    if (!empty.hidden) {
      const costReason = activeCost === 'free-start' ? 'Можно начать бесплатно' : COST[activeCost] || '';
      const runtimeReason = activeRuntime === 'local-start' ? 'На своём устройстве или сервере' : RUNTIME[activeRuntime] || '';
      const reason = q || TASK_ROUTES[activeTask]?.label || TOPIC_ROUTES[activeTopic]?.title || costReason || (SIGNUP[activeSignup] || '') || runtimeReason || activeProject || activePlatform || (LICENSE_GROUPS[activeLicense] || '') || (FRESHNESS[activeFreshness] || '') || (REPOSITORY_STATE[activeRepositoryState] || '') || (TRUST[activeTrust] || '') || (TYPE_GROUPS[activeType]?.label || '');
      $('#emptyMessage').textContent = activeFavorites && favorites.size === 0
        ? 'В избранном пока пусто. Сохраните нужный материал кнопкой-закладкой на карточке.'
        : `По выбранным условиям ничего не найдено${reason ? `: ${reason}` : '.'}`;
    }
    syncFilterUrl();
    const share = $('#shareFilters');
    if (share) share.disabled = !(filtering || activeSort !== 'catalog');
    const sheetResult = $('#filterSheetResult');
    if (sheetResult) sheetResult.textContent = `${matched} ${matched === 1 ? 'материал' : 'материалов'}`;
    entryReveal();
  }

  function sortCards(a, b) {
    if (activeSort === 'catalog') return a.order - b.order;
    if (activeSort === 'title') return a.resource.title.localeCompare(b.resource.title, 'ru');
    const trustRank = { official: 5, verified: 4, community: 3, unknown: 2, caution: 1 };
    const decisionRank = { now: 4, roadmap: 3, reference: 2, no: 0 };
    const dateA = Date.parse(a.resource.verifiedAt || '') || 0;
    const dateB = Date.parse(b.resource.verifiedAt || '') || 0;
    if (activeSort === 'trust') return (trustRank[b.trust] || 0) - (trustRank[a.trust] || 0) || dateB - dateA || a.order - b.order;
    if (activeSort === 'freshness') return dateB - dateA || (trustRank[b.trust] || 0) - (trustRank[a.trust] || 0) || a.order - b.order;
    const score = (card) => (card.resource.detail ? 30 : 0) + (decisionRank[card.resource.decision] || 0) * 8 + (trustRank[card.trust] || 0) * 4 + (card.freshness === 'fresh' ? 8 : 0) - (card.resource.riskLevel === 'high' ? 8 : 0) - (['archived', 'disabled'].includes(card.repositoryState) ? 40 : 0);
    return score(b) - score(a) || dateB - dateA || a.order - b.order;
  }

  function renderProjects() {
    const grid = $('#projectGrid');
    const filters = $('#projectFilters');
    if (!grid || !filters) return;
    if (!filters.childElementCount) {
      const counts = projects.reduce((map, project) => map.set(project.status, (map.get(project.status) || 0) + 1), new Map());
      const options = [['', 'Все'], ['live', 'Работает'], ['active', 'В разработке'], ['beta', 'Beta']];
      filters.innerHTML = options.filter(([value]) => !value || counts.has(value)).map(([value, label]) =>
        `<button type="button" class="chip${value === projectStatus ? ' active' : ''}" data-project-status="${value}">${label} <i>${value ? counts.get(value) : projects.length}</i></button>`
      ).join('');
      filters.addEventListener('click', (event) => {
        const button = event.target.closest('[data-project-status]');
        if (!button) return;
        projectStatus = button.dataset.projectStatus;
        renderProjects();
      });
    }
    filters.querySelectorAll('button').forEach((button) => button.classList.toggle('active', button.dataset.projectStatus === projectStatus));
    const q = query.trim().toLowerCase();
    const visible = projects.filter((project) => (!projectStatus || project.status === projectStatus) && (!q || [project.name, project.kind, project.summary, project.problem, ...project.audience, ...project.tech].join(' ').toLowerCase().includes(q)));
    grid.innerHTML = visible.map((project) => {
      const status = project.status === 'live' ? 'Работает' : project.status === 'beta' ? 'Beta' : 'В разработке';
      const repositoryState = project.repoUrl ? githubMetadataByRepo.get(githubRepoKey(project.repoUrl))?.state : '';
      const repositoryBadge = ['archived', 'disabled'].includes(repositoryState)
        ? `<i class="project-status status-${repositoryState}">${repositoryState === 'archived' ? 'Репозиторий архивирован' : 'Репозиторий отключён'}</i>`
        : '';
      const links = [
        project.liveUrl && `<a class="project-primary" href="${escAttr(project.liveUrl)}" target="_blank" rel="noopener">Открыть проект ↗</a>`,
        project.repoUrl && `<a href="${escAttr(project.repoUrl)}" target="_blank" rel="noopener">Исходный код ↗</a>`,
      ].filter(Boolean).join('');
      return `<article class="project-card${project.featured ? ' project-featured' : ''}${repositoryBadge ? ' repository-inactive' : ''}">
        <div class="project-top"><span>${esc(project.kind)}</span><div><i class="project-status status-${project.status}">${status}</i>${repositoryBadge}</div></div>
        <h3>${esc(project.name)}</h3><p class="project-summary">${esc(project.summary)}</p>
        <div class="project-solves"><b>Что решает</b><p>${esc(project.problem)}</p></div>
        <div class="project-tags">${project.tech.map((item) => `<span>${esc(item)}</span>`).join('')}</div>
        <p class="project-audience"><b>Для кого:</b> ${esc(project.audience.join(', '))}</p>
        <div class="project-actions">${links}</div>
      </article>`;
    }).join('');
    $('#projectEmpty').hidden = visible.length > 0;
  }

  function setView(view) {
    const nextView = view === 'projects' ? 'projects' : 'catalog';
    if (currentView !== nextView) {
      query = '';
      search.value = '';
    }
    currentView = nextView;
    const projectMode = currentView === 'projects';
    document.body.classList.toggle('projects-mode', projectMode);
    $('#projectsView').hidden = !projectMode;
    $('#hero').hidden = projectMode;
    $('#topicContext').hidden = projectMode || !activeTopic;
    $('#filters').hidden = projectMode;
    $('#results').hidden = projectMode || activeSort !== 'catalog';
    $('#sortedResults').hidden = projectMode || activeSort === 'catalog';
    $('#loadMoreWrap').hidden = projectMode || Math.min(cards.length, visibleLimit) >= cards.length;
    $('#empty').hidden = true;
    document.querySelectorAll('[data-view-link]').forEach((link) => link.classList.toggle('active', link.dataset.viewLink === currentView));
    search.placeholder = projectMode ? 'Найти проект по задаче или технологии…' : 'Найти инструмент, модель, skill или гайд…';
    if (projectMode) renderProjects(); else applyFilters(false);
  }

  function applyTopicRoute(topic) {
    const config = TOPIC_ROUTES[topic];
    if (!config) return false;
    activeTopic = topic;
    updateChipState();
    const context = $('#topicContext');
    $('#topicTitle').textContent = config.title;
    $('#topicDescription').textContent = config.description;
    context.hidden = false;
    const guidesBand = $('#guidesFeat');
    if (guidesBand) guidesBand.hidden = topic !== 'courses';
    applyFilters();
    requestAnimationFrame(() => context.scrollIntoView({ block: 'start' }));
    return true;
  }

  function clearTopicRoute() {
    activeTopic = '';
    const context = $('#topicContext');
    if (context) context.hidden = true;
    const guidesBand = $('#guidesFeat');
    if (guidesBand) guidesBand.hidden = false;
    updateChipState();
  }

  function updateNavVisibility() {
    const q = navQuery.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll('#nav a').forEach((a) => {
      const id = (a.getAttribute('href') || '').slice(1);
      const sec = document.getElementById(id);
      const hiddenByFilter = sec && sec.hidden;
      const hiddenByQuery = q && !(a.dataset.navText || a.textContent || '').toLowerCase().includes(q);
      a.hidden = !!(hiddenByFilter || hiddenByQuery);
      if (!a.hidden) visible++;
    });
    document.querySelectorAll('.nav-group').forEach((g) => { g.hidden = !g.querySelector('a:not([hidden])'); });
    const empty = $('#navEmpty');
    if (empty) empty.hidden = !(q && visible === 0);
    const clear = $('#navClear');
    if (clear) clear.hidden = !q;
  }

  // ---- entry reveal (staggered) ----
  let revealObs;
  function entryReveal() {
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
    }
    cards.forEach((c) => { if (!c.node.hidden && !c.node.classList.contains('in')) revealObs.observe(c.node); });
  }

  // ---- scrollspy ----
  function revealActiveNavLink(link) {
    const nav = $('#nav');
    if (!nav) return;

    // On tablet/mobile the category navigation is a horizontal strip above the
    // catalog. scrollIntoView() also scrolls the page vertically, so calling it
    // from IntersectionObserver can throw the reader back to the top.
    if (window.matchMedia('(max-width: 960px)').matches) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      if (linkRect.left < navRect.left) nav.scrollLeft -= navRect.left - linkRect.left;
      else if (linkRect.right > navRect.right) nav.scrollLeft += linkRect.right - navRect.right;
      return;
    }

    link.scrollIntoView({ block: 'nearest' });
  }

  function scrollSpy() {
    const links = [...document.querySelectorAll('#nav a')];
    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove('active'));
          const a = map.get(e.target.id); if (a) { a.classList.add('active'); revealActiveNavLink(a); }
        }
      });
    }, { rootMargin: '-120px 0px -72% 0px' });
    document.querySelectorAll('.cat').forEach((s) => obs.observe(s));
  }

  // ---- spotlight hover (cursor-follow glow) ----
  function spotlight() {
    let raf = 0, ev = null;
    [$('#results'), $('#sortedResults')].forEach((container) => container.addEventListener('pointermove', (e) => {
      ev = e; if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0; const card = ev.target.closest && ev.target.closest('.card');
        if (card) { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', (ev.clientX - r.left) + 'px'); card.style.setProperty('--my', (ev.clientY - r.top) + 'px'); }
      });
    }, { passive: true }));
  }

  // ---- courses & guides feature band (auto-discovered from README guide links) ----
  async function renderGuides(md) {
    const seen = new Map();
    const re = /\[([^\]]+)\]\((?:\.\/)?guides\/([\w-]+)\.md(?:#[\w-]+)?\)/g;
    let m;
    while ((m = re.exec(md))) {
      const label = m[1].replace(/[*`]/g, '').trim(), name = m[2];
      const prev = seen.get(name);
      if (!prev || (/курс|гайд/i.test(label) && !/курс|гайд/i.test(prev))) seen.set(name, label);
    }
    if (!seen.size) return;
    const pl = (n, a, b, c) => (n % 10 === 1 && n % 100 !== 11) ? a : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? b : c;

    const guides = await Promise.all([...seen.entries()].map(async ([name, label]) => {
      const g = { name, title: label, blurb: '', modules: 0, lessons: 0 };
      try {
        const r = await fetch(`guides/${name}.md`, { cache: 'no-cache' });
        if (r.ok) {
          const t = await r.text();
          const h1 = t.match(/^#\s+(.+)$/m); if (h1) g.title = h1[1];
          const bqm = t.match(/^(>.*(?:\n>.*)*)/m);
          if (bqm) {
            let b = bqm[1].replace(/^>\s?/gm, '').replace(/\n/g, ' ')
              .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`<>]/g, '').replace(/\s+/g, ' ').trim();
            const dot = b.search(/\.\s/);
            if (dot > 40 && dot < 190) b = b.slice(0, dot + 1);
            else if (b.length > 175) b = b.slice(0, 174).replace(/\s+\S*$/, '').replace(/[\s.,;:—–-]+$/, '') + '…';
            g.blurb = b;
          }
          // \s (not \b) — Cyrillic words have no ASCII word-boundary after them
          g.modules = (t.match(/^##\s+(?:Модуль|Module)\s/gmi) || []).length;
          g.lessons = (t.match(/^###\s+(?:Урок|Lesson)\s/gmi) || []).length;
        }
      } catch (e) {}
      g.title = g.title.replace(/[#*`]/g, '').trim();
      return g;
    }));
    guides.sort((a, b) => (b.modules - a.modules) || a.title.localeCompare(b.title, 'ru'));

    const hero = $('#hero');
    let band = $('#guidesFeat');
    if (!band) {
      band = el('section', 'guides-feat');
      band.id = 'guidesFeat';
      ($('#results') || hero).insertAdjacentElement('afterend', band);
    }
    band.innerHTML =
      `<div class="gf-head"><h2><span aria-hidden="true">📚</span> Курсы и гайды</h2>` +
      `<span class="gf-sub">учебные материалы — открываются прямо на сайте</span></div>` +
      `<div class="gf-grid">` + guides.map((g) => {
        const course = g.modules > 0;
        const meta = course
          ? `<div class="cc-meta"><span><b>${g.modules}</b> ${pl(g.modules, 'модуль', 'модуля', 'модулей')}</span>` +
            (g.lessons ? `<span><b>${g.lessons}</b> ${pl(g.lessons, 'урок', 'урока', 'уроков')}</span>` : '') + `</div>`
          : '';
        return `<a class="course-card" href="#guide/${g.name}">` +
          `<span class="cc-kicker">${course ? '🎓 курс' : '📖 гайд'}</span>` +
          `<h3 class="cc-title">${esc(g.title)}</h3>` +
          (g.blurb ? `<p class="cc-blurb">${esc(g.blurb)}</p>` : '') +
          meta +
          `<span class="cc-cta">Открыть →</span>` +
        `</a>`;
      }).join('') + `</div>`;
    if (activeTopic) band.hidden = activeTopic !== 'courses';

    const nav = $('#nav');
    if (nav && !$('#navGuides')) {
      const a = el('a'); a.id = 'navGuides'; a.href = '#guidesFeat';
      a.className = 'nav-pinned';
      a.dataset.navText = `курсы и гайды ${guides.length}`.toLowerCase();
      a.innerHTML = `<span class="ico" aria-hidden="true">📚</span><span class="label">Курсы и гайды</span><span class="cnt">${guides.length}</span>`;
      nav.insertBefore(a, nav.firstChild);
      updateNavVisibility();
    }
    const catgrid = $('#catgrid');
    if (catgrid && !$('#tileGuides')) {
      const tile = el('a', 'cat-tile'); tile.id = 'tileGuides'; tile.href = '#guidesFeat';
      tile.innerHTML = `<span class="ct-ico" aria-hidden="true">📚</span><span class="ct-label">Курсы и гайды</span><span class="ct-cnt">${guides.length}</span>`;
      catgrid.insertBefore(tile, catgrid.firstChild);
    }
  }

  // ---- guide viewer (markdown → premium doc) ----
  function splitRow(l) { return l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()); }
  function inlineG(s) {
    s = esc(s || '');
    s = s.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      if (/README\.md/.test(u)) { const a = (u.match(/#(.+)$/) || [])[1]; return `<a href="#${a || 'top'}">${t}</a>`; }
      const g = u.match(/(?:^|\/)([\w-]+)\.md(?:#[\w-]+)?$/);
      if (g && !/^https?:/.test(u)) return `<a href="#guide/${g[1]}">${t}</a>`;
      return `<a href="${/^https?:/.test(u) ? u : absUrl(u)}" target="_blank" rel="noopener">${t}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s;
  }
  function mdToHtml(md) {
    const L = md.replace(/\r/g, '').split('\n'); let out = ''; let i = 0;
    const stop = (l) => /^(#{1,6}\s|```|>|\||\s*[-*]\s|\s*\d+\.\s|---+\s*$|\s*$)/.test(l);
    while (i < L.length) {
      const l = L[i];
      if (/^```/.test(l)) { i++; let c = ''; while (i < L.length && !/^```/.test(L[i])) { c += L[i] + '\n'; i++; } i++; out += `<pre><code>${esc(c.replace(/\n$/, ''))}</code></pre>`; continue; }
      const h = l.match(/^(#{1,6})\s+(.*)$/); if (h) { const n = h[1].length; out += `<h${n}>${inlineG(h[2])}</h${n}>`; i++; continue; }
      if (/^---+\s*$/.test(l)) { out += '<hr>'; i++; continue; }
      if (/^>\s?/.test(l)) { let q = ''; while (i < L.length && /^>\s?/.test(L[i])) { q += L[i].replace(/^>\s?/, '') + '\n'; i++; } out += `<blockquote>${mdToHtml(q)}</blockquote>`; continue; }
      if (/^\|/.test(l) && L[i + 1] && /^\|?[\s:|-]+\|?$/.test(L[i + 1]) && L[i + 1].includes('-')) {
        const hd = splitRow(l); i += 2; const rows = [];
        while (i < L.length && /^\|/.test(L[i])) { rows.push(splitRow(L[i])); i++; }
        out += `<div class="t-wrap"><table><thead><tr>${hd.map((c) => `<th>${inlineG(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inlineG(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
        const ol = /^\s*\d+\./.test(l); let items = '';
        while (i < L.length && /^\s*([-*]|\d+\.)\s+/.test(L[i])) {
          let it = L[i].replace(/^\s*([-*]|\d+\.)\s+/, '');
          const tk = it.match(/^\[([ xX])\]\s+(.*)$/);
          items += tk ? `<li class="task"><span class="cb${tk[1].trim() ? ' on' : ''}"></span>${inlineG(tk[2])}</li>` : `<li>${inlineG(it)}</li>`;
          i++;
        }
        out += `<${ol ? 'ol' : 'ul'}>${items}</${ol ? 'ol' : 'ul'}>`; continue;
      }
      if (/^\s*$/.test(l)) { i++; continue; }
      let p = ''; while (i < L.length && !stop(L[i])) { p += L[i] + ' '; i++; }
      if (p.trim()) out += `<p>${inlineG(p.trim())}</p>`;
    }
    return out;
  }
  // clickable table of contents (modules) for the guide viewer
  let guideTocObs = null;
  function revealActiveGuideLink(link) {
    if (window.matchMedia('(min-width: 1080px)').matches) {
      link.scrollIntoView({ block: 'nearest' });
    }
  }

  function buildGuideToc(body) {
    const toc = $('#guideToc'); if (!toc) return;
    if (guideTocObs) { guideTocObs.disconnect(); guideTocObs = null; }
    const heads = [...body.querySelectorAll('h2, h3')];
    const h2s = heads.filter((h) => h.tagName === 'H2');
    if (h2s.length < 3) { toc.hidden = true; toc.innerHTML = ''; return; }
    const used = new Set();
    heads.forEach((h) => {
      if (h.id) { used.add(h.id); return; }
      let base = slug(h.textContent) || 'sec', id = base, n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id); h.id = id;
    });
    toc.hidden = false;
    const tocOpen = window.matchMedia('(min-width: 1080px)').matches ? ' open' : '';
    toc.innerHTML = `<details class="gt-details"${tocOpen}><summary class="gt-head">Содержание</summary><div class="gt-list">` +
      h2s.map((h) => `<button type="button" class="gt-link" data-target="${h.id}">${esc(h.textContent.trim())}</button>`).join('') +
      `</div></details>`;
    const map = new Map(h2s.map((h) => [h.id, toc.querySelector(`.gt-link[data-target="${h.id}"]`)]));
    guideTocObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        toc.querySelectorAll('.gt-link.active').forEach((x) => x.classList.remove('active'));
        const link = map.get(e.target.id);
        if (link) { link.classList.add('active'); revealActiveGuideLink(link); }
      });
    }, { root: $('#guideView'), rootMargin: '-82px 0px -70% 0px' });
    h2s.forEach((h) => guideTocObs.observe(h));
  }

  function itemList(items) {
    return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function formatVerifiedAt(value) {
    if (!value) return 'Дата подробной проверки не указана';
    const [year, month, day] = value.split('-');
    return `Проверено ${day}.${month}.${year}`;
  }

  function formatAutomaticCheck(value) {
    if (!value || Number.isNaN(Date.parse(value))) return 'дата неизвестна';
    return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(value));
  }

  function renderHealthSummary() {
    const node = $('#healthSummary');
    if (!node) return;
    if (!linkHealthSnapshot) {
      node.className = 'health-summary health-summary-unknown';
      node.innerHTML = '<span class="health-summary-dot" aria-hidden="true"></span><span><b>Автопроверка ссылок временно недоступна.</b> Каталог работает, но доступность источников нужно проверять вручную.</span>';
      return;
    }
    const totals = linkHealthSnapshot.totals || {};
    const attention = (totals.broken || 0) + (totals.blocked || 0) + (totals.unavailable || 0) + (totals.unknown || 0);
    const archived = githubMetadataSnapshot?.totals?.archived || 0;
    const repositoryNote = githubMetadataSnapshot
      ? ` ${archived} GitHub-репозитория архивированы и помечены отдельно.`
      : ' Состояние GitHub-репозиториев сейчас не проверено.';
    node.className = `health-summary${attention ? ' health-summary-attention' : ''}`;
    node.innerHTML = `<span class="health-summary-dot" aria-hidden="true"></span><span><b>${totals.ok || 0} ссылок работают.</b> ${attention} требуют внимания, ${totals.restricted || 0} отвечают с ограничением.${esc(repositoryNote)} Автопроверка: ${esc(formatAutomaticCheck(linkHealthSnapshot.checkedAt))}.</span>`;
  }

  function relatedCardsFor(entry, limit = 3) {
    const verified = cards.filter((candidate) => candidate !== entry && candidate.resource.detail && candidate.resource.decision !== 'no' && !['archived', 'disabled'].includes(candidate.repositoryState));
    const sameMcpTopic = /\bmcp\b/i.test(entry.resource.title)
      ? verified.filter((candidate) => /\bmcp\b/i.test(candidate.resource.title))
      : [];
    const sameType = verified.filter((candidate) => candidate.type === entry.type);
    const candidates = sameMcpTopic.length >= limit
      ? sameMcpTopic
      : sameType.length >= limit
        ? sameType
        : verified;
    return candidates
      .map((candidate) => {
        const sharedProjects = candidate.projects.filter((project) => entry.projects.includes(project));
        const sharedPlatforms = candidate.platforms.filter((platform) => entry.platforms.includes(platform));
        let score = sharedProjects.length * 4 + sharedPlatforms.length;
        if (candidate.type === entry.type) score += 6;
        if (candidate.cat === entry.cat) score += 5;
        if (candidate.licenseGroup === entry.licenseGroup) score += 1;
        if (candidate.resource.decision === 'now') score += 1;
        const reason = sharedProjects.length
          ? `Подходит для ${sharedProjects.slice(0, 2).join(' и ')}`
          : candidate.type === entry.type
            ? `Похожий тип: ${TYPES[candidate.type] || candidate.type}`
            : candidate.cat === entry.cat
              ? 'Из того же тематического раздела'
              : `Общая платформа: ${sharedPlatforms[0] || candidate.platforms[0]}`;
        return { candidate, score, reason };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.candidate.order - b.candidate.order)
      .slice(0, limit);
  }

  function renderRelatedItems(entry) {
    const section = $('#relatedSection');
    const grid = $('#relatedGrid');
    if (!section || !grid) return;
    const related = relatedCardsFor(entry);
    section.hidden = related.length === 0;
    grid.innerHTML = '';
    related.forEach(({ candidate, reason }) => {
      const r = candidate.resource;
      const card = el('article', 'related-card');
      card.innerHTML = `<span>${esc(reason)}</span><h3><a href="#item/${encodeURIComponent(r.id)}">${esc(r.title)} →</a></h3><p>${esc(r.simpleDescription)}</p><div class="related-meta"><b>${esc(TRUST[r.trust] || TRUST.unknown)}</b><small>${esc(DECISIONS[r.decision] || DECISIONS.reference)}</small></div><div class="related-actions"></div>`;
      card.querySelector('.related-actions').appendChild(compareButton(r, true));
      grid.appendChild(card);
    });
  }

  let itemReturnFocus = null;
  function openItem(id) {
    const entry = cards.find((card) => card.resource.id === id);
    if (!entry) return;
    closeGuide();
    closeCompare();
    itemReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const r = entry.resource;
    recordRecent(r);
    const view = $('#itemView');
    const body = $('#itemBody');
    const sourceTop = $('#itemSourceTop');
    const sourceBlocked = r.linkHealth.status === 'blocked';
    sourceTop.hidden = sourceBlocked;
    if (sourceBlocked) sourceTop.removeAttribute('href'); else sourceTop.href = r.url;
    const trustClass = `trust-${r.trust}`;
    const projectHtml = r.projects.length
      ? `<div class="project-list">${r.projects.map((project) => `<span>${esc(project)}</span>`).join('')}</div>`
      : '<p class="item-muted">Прямая применимость к проектам Eclipse Forge пока не подтверждена.</p>';
    const repositoryNotice = r.repositoryState === 'archived'
      ? '<div class="repository-notice"><b>Репозиторий архивирован.</b> Код остаётся доступен, но обычная разработка остановлена. Используйте материал как reference или выберите поддерживаемую альтернативу.</div>'
      : r.repositoryState === 'disabled'
        ? '<div class="repository-notice"><b>Репозиторий отключён GitHub.</b> Не устанавливайте и не внедряйте его без отдельной проверки причины и безопасной альтернативы.</div>'
        : '';
    const mcpAuditNotice = r.mcpAudit
      ? `<div class="repository-notice"><b>${esc(MCP_AUDIT[r.mcpAudit.status] || MCP_AUDIT['runtime-pending'])}.</b> ${esc(r.mcpAudit.summary)}</div>`
      : '';
    body.innerHTML =
      `<div class="item-kicker"><span class="type-chip t-${r.type}">${esc(TYPES[r.type] || r.type)}</span>` +
        `<span class="trust-chip ${trustClass}">${esc(TRUST[r.trust] || TRUST.unknown)}</span>` +
        `<span class="link-health health-${r.linkHealth.status}">${esc(LINK_HEALTH[r.linkHealth.status] || LINK_HEALTH.unchecked)}</span>` +
        `<span class="verify-date">${esc(formatVerifiedAt(r.verifiedAt))}</span></div>` +
      `<h1 id="itemTitle">${esc(r.title)}</h1>` +
      `<p class="item-lead">${esc(r.simpleDescription)}</p>` +
      repositoryNotice +
      mcpAuditNotice +
      `<div id="itemActionSlot" class="item-action-slot"></div>` +
      `<div class="fact-grid">` +
        `<div><span>Где работает</span><b>${esc(r.platforms.join(', '))}</b></div>` +
        `<div><span>Где запускается</span><b>${esc(RUNTIME[r.runtime] || RUNTIME.unknown)}</b></div>` +
        `<div><span>Стоимость</span><b>${esc(r.pricing)}</b></div>` +
        `<div><span>Нужна ли регистрация</span><b>${esc(SIGNUP[r.signup] || SIGNUP.unknown)}</b></div>` +
        `<div><span>Лицензия</span><b>${esc(r.license)}</b></div>` +
        `<div><span>Решение Eclipse</span><b>${esc(DECISIONS[r.decision] || DECISIONS.reference)}</b></div>` +
        `<div><span>Актуальность</span><b>${esc(FRESHNESS[r.freshness] || FRESHNESS.unknown)}</b></div>` +
        `${r.repositoryState ? `<div><span>Состояние GitHub</span><b>${esc(REPOSITORY_STATE[r.repositoryState] || REPOSITORY_STATE.unknown)}</b><small>Автопроверка ${esc(formatAutomaticCheck(githubMetadataSnapshot?.checkedAt))}.</small></div>` : ''}` +
        `<div><span>Доступность ссылки</span><b>${esc(LINK_HEALTH[r.linkHealth.status] || LINK_HEALTH.unchecked)}</b><small>Автопроверка ${esc(formatAutomaticCheck(linkHealthSnapshot?.checkedAt))}; это не гарантия безопасности.</small></div>` +
      `</div>` +
      `<section class="item-section"><h2>Когда пригодится</h2>${itemList(r.useCases)}</section>` +
      `<section class="item-section"><h2>Как начать безопасно</h2><ol>${r.quickStart.map((step) => `<li>${esc(step)}</li>`).join('')}</ol></section>` +
      `<section class="item-section"><h2>Для каких проектов Eclipse</h2>${projectHtml}</section>` +
      `<section class="item-section item-risk-section"><h2>Что важно знать до запуска</h2>` +
        `<div class="risk-summary risk-${r.riskLevel}"><b>${esc(RISK[r.riskLevel] || RISK.medium)}</b><span>${esc(r.trustReason)}</span></div>` +
        `${itemList(r.risks)}</section>` +
      `<section id="relatedSection" class="item-section related-section" hidden><div class="related-head"><div><span>Следующий шаг</span><h2>Похожие проверенные материалы</h2></div><p>Подобраны по общей задаче, платформе и проектам Eclipse.</p></div><div id="relatedGrid" class="related-grid"></div></section>` +
      `<details class="original-note"><summary>Показать исходное техническое описание</summary><p>${esc(plain(r.rawText))}</p></details>` +
      `<div class="item-cta">${sourceBlocked ? '<strong class="blocked-source">Источник скрыт: автоматическая проверка обнаружила небезопасное назначение.</strong>' : `<a href="${escAttr(r.url)}" target="_blank" rel="noopener">Открыть официальный источник ↗</a>`}` +
        `<span>${r.detail ? 'Карточка проверена и дополнена редактором Eclipse Library.' : 'Это базовая карточка. Перед внедрением нужна дополнительная проверка.'}</span></div>`;
    const actionSlot = $('#itemActionSlot');
    if (r.guide) {
      const guideLink = el('a', 'item-guide-button', 'Открыть полный гайд →');
      guideLink.href = `#guide/${encodeURIComponent(r.guide)}`;
      actionSlot.appendChild(guideLink);
    }
    actionSlot.appendChild(favoriteButton(r, true));
    actionSlot.appendChild(compareButton(r, true));
    renderRelatedItems(entry);
    updateFavoritesUI();
    updateCompareUI();
    view.hidden = false;
    view.scrollTop = 0;
    document.body.classList.add('noscroll');
    requestAnimationFrame(() => $('#itemBack').focus());
  }

  function closeItem() {
    const view = $('#itemView');
    if (view.hidden) return;
    view.hidden = true;
    document.body.classList.remove('noscroll');
    if (itemReturnFocus && document.contains(itemReturnFocus)) itemReturnFocus.focus();
    itemReturnFocus = null;
  }

  async function openGuide(name) {
    const v = $('#guideView'), b = $('#guideBody'), t = $('#guideTitle'), toc = $('#guideToc');
    closeItem(); closeCompare();
    v.hidden = false; document.body.classList.add('noscroll'); v.scrollTop = 0;
    if (toc) { toc.hidden = true; toc.innerHTML = ''; }
    $('#guideGh').href = `${REPO_URL}/blob/master/guides/${name}.md`;
    b.innerHTML = '<div class="status">Загружаю гайд…</div>';
    let md;
    try { const r = await fetch(`guides/${name}.md`, { cache: 'no-cache' }); if (!r.ok) throw 0; md = await r.text(); }
    catch (e) { try { md = await (await fetch(`https://raw.githubusercontent.com/${REPO}/master/guides/${name}.md`)).text(); } catch (e2) { b.innerHTML = '<div class="status err">Гайд не найден.</div>'; return; } }
    const m = md.match(/^#\s+(.+)$/m);
    t.textContent = m ? m[1].replace(/[#*\x60]/g, '').replace(/\p{Extended_Pictographic}/gu, '').trim() : name;
    b.innerHTML = mdToHtml(md); buildGuideToc(b); v.scrollTop = 0;
  }
  function closeGuide() { const v = $('#guideView'); if (v.hidden) return; v.hidden = true; document.body.classList.remove('noscroll'); if (guideTocObs) { guideTocObs.disconnect(); guideTocObs = null; } }
  function route() {
    const h = location.hash;
    if (/^#guide\//.test(h)) { openGuide(decodeURIComponent(h.slice(7))); return; }
    if (/^#item\//.test(h)) { openItem(decodeURIComponent(h.slice(6))); return; }
    if (h === '#projects') { closeGuide(); closeItem(); closeCompare(); clearTopicRoute(); setView('projects'); window.scrollTo({ top: 0 }); return; }
    if (/^#browse\//.test(h)) { setView('catalog'); closeGuide(); closeItem(); applyTopicRoute(decodeURIComponent(h.slice(8))); return; }
    clearTopicRoute();
    setView('catalog');
    closeGuide();
    closeItem();
    if (h === '#catalog') { window.scrollTo({ top: 0 }); return; }
    if (h.length > 1) { const t = document.getElementById(decodeURIComponent(h.slice(1))); if (t) t.scrollIntoView(); }
  }

  // ---- boot ----
  async function load() {
    let md;
    try { const r = await fetch('README.md', { cache: 'no-cache' }); if (!r.ok) throw 0; md = await r.text(); }
    catch (e) {
      try { md = await (await fetch(RAW, { cache: 'no-cache' })).text(); }
      catch (e2) { const s = $('#status'); s.className = 'status err'; s.innerHTML = `Не удалось загрузить библиотеку. <a href="${REPO_URL}" target="_blank" rel="noopener">Открыть на GitHub →</a>`; return; }
    }
    try {
      await Promise.all([
        (async () => {
          try {
            const response = await fetch(DETAILS_URL, { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const catalog = await response.json();
            if (catalog?.schemaVersion !== 1 || !Array.isArray(catalog.items)) throw new Error('catalog-index.json имеет неверный формат');
            if (catalog.totals?.all !== catalog.items.length || catalog.totals?.verified + catalog.totals?.inferred !== catalog.totals?.all) throw new Error('catalog-index.json содержит неверные счётчики');
            catalogTotals = catalog.totals;
            detailsByUrl = new Map(catalog.items.map((detail) => [canonicalUrl(detail.url), detail]));
          } catch (error) {
            console.warn('Structured catalog details are unavailable; using safe inferred metadata.', error);
          }
        })(),
        (async () => {
          try {
            const response = await fetch(LINK_HEALTH_URL, { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const snapshot = await response.json();
            const statuses = new Set(Object.keys(LINK_HEALTH).filter((status) => status !== 'unchecked'));
            const totalFields = ['checked', ...statuses];
            const validTotals = totalFields.every((field) => Number.isInteger(snapshot?.totals?.[field]) && snapshot.totals[field] >= 0);
            const validLinks = Array.isArray(snapshot?.links) && snapshot.links.every((item) => {
              try { return ['http:', 'https:'].includes(new URL(item.url).protocol) && statuses.has(item.status); }
              catch { return false; }
            });
            if (snapshot?.schemaVersion !== 1 || !Number.isFinite(Date.parse(snapshot?.checkedAt)) || !validTotals || !validLinks || snapshot.totals.checked !== snapshot.links.length) {
              throw new Error('Некорректный link-health snapshot');
            }
            linkHealthSnapshot = snapshot;
            linkHealthByUrl = new Map(snapshot.links.map((item) => [canonicalUrl(item.url), item]));
          } catch (error) {
            console.warn('Automatic link health is unavailable; showing an honest unknown state.', error);
          }
        })(),
        (async () => {
          try {
            const response = await fetch(GITHUB_METADATA_URL, { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const snapshot = await response.json();
            const states = new Set(Object.keys(REPOSITORY_STATE));
            const validRepositories = Array.isArray(snapshot?.repositories) && snapshot.repositories.every((repo) =>
              /^[a-z0-9_.-]+\/[a-z0-9_.-]+$/.test(repo?.key || '') && states.has(repo?.state),
            );
            if (snapshot?.schemaVersion !== 1 || !Number.isFinite(Date.parse(snapshot?.checkedAt)) || !validRepositories || snapshot?.totals?.repositories !== snapshot.repositories.length) {
              throw new Error('Некорректный GitHub metadata snapshot');
            }
            githubMetadataSnapshot = snapshot;
            githubMetadataByRepo = new Map(snapshot.repositories.map((repo) => [repo.key, repo]));
          } catch (error) {
            console.warn('GitHub repository metadata is unavailable; archived state remains unknown.', error);
          }
        })(),
        (async () => {
          try {
            const response = await fetch(MCP_AUDIT_URL, { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const snapshot = await response.json();
            const statuses = new Set(Object.keys(MCP_AUDIT));
            const validServers = Array.isArray(snapshot?.servers) && snapshot.servers.every((server) => {
              try {
                return typeof server?.id === 'string' && ['http:', 'https:'].includes(new URL(server.url).protocol) && statuses.has(server.status) && typeof server.summary === 'string';
              } catch { return false; }
            });
            if (snapshot?.schemaVersion !== 1 || !Number.isFinite(Date.parse(snapshot?.updatedAt)) || !validServers) throw new Error('Некорректный MCP audit snapshot');
            mcpAuditSnapshot = snapshot;
            mcpAuditByUrl = new Map(snapshot.servers.map((server) => [canonicalUrl(server.url), server]));
          } catch (error) {
            console.warn('MCP audit status is unavailable; runtime safety remains unverified.', error);
          }
        })(),
        (async () => {
          try {
            const response = await fetch(PROJECTS_URL, { cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            if (data.schemaVersion !== 1 || !Array.isArray(data.projects)) throw new Error('Некорректный каталог проектов');
            projects = data.projects;
          } catch (error) {
            console.warn('Eclipse Forge projects are unavailable.', error);
          }
        })(),
      ]);
      render(deduplicate(parse(md))); spotlight();
      await renderGuides(md);
      requestAnimationFrame(route);
    }
    catch (e) { $('#status').className = 'status err'; $('#status').textContent = 'Ошибка разбора README: ' + e.message; }
  }

  // ---- events ----
  const search = $('#search');
  const navSearch = $('#navSearch');
  let timer;
  search.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => {
    query = search.value;
    if (currentView === 'projects') renderProjects(); else applyFilters();
  }, 110); });
  if (navSearch) {
    let navTimer;
    navSearch.addEventListener('input', () => {
      clearTimeout(navTimer);
      navTimer = setTimeout(() => { navQuery = navSearch.value; updateNavVisibility(); }, 90);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('filter-sheet-open')) {
      $('#advancedFilters').open = false;
      $('#advancedFilters summary').focus();
      return;
    }
    if (e.key === 'Tab' && !$('#compareView').hidden) {
      const focusable = [...$('#compareView').querySelectorAll('a[href], button:not([disabled])')].filter((node) => !node.hidden);
      if (focusable.length) {
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (e.key === 'Tab' && !$('#itemView').hidden) {
      const focusable = [...$('#itemView').querySelectorAll('a[href], button:not([disabled]), summary')].filter((node) => !node.hidden);
      if (focusable.length) {
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (e.key === 'Escape' && !$('#compareView').hidden) { closeCompare(); return; }
    if (e.key === 'Escape' && !$('#itemView').hidden) { closeItem(); history.replaceState(null, '', location.pathname + location.search); return; }
    if (e.key === 'Escape' && !$('#guideView').hidden) { closeGuide(); history.replaceState(null, '', location.pathname + location.search); return; }
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; query = ''; applyFilters(); search.blur(); }
    if (e.key === 'Escape' && document.activeElement === navSearch) { navSearch.value = ''; navQuery = ''; updateNavVisibility(); navSearch.blur(); }
  });
  window.addEventListener('hashchange', route);
  $('#guideBack').addEventListener('click', () => { closeGuide(); history.replaceState(null, '', location.pathname + location.search); });
  $('#itemBack').addEventListener('click', () => { closeItem(); history.replaceState(null, '', location.pathname + location.search); });
  $('#compareBack').addEventListener('click', closeCompare);
  $('#compareOpen').addEventListener('click', openCompare);
  $('#compareClear').addEventListener('click', clearCompare);
  $('#compareClearTop').addEventListener('click', clearCompare);
  $('#clearRecent').addEventListener('click', () => {
    recentKeys = [];
    try { localStorage.setItem(RECENT_KEY, '[]'); } catch (error) {}
    renderPersonalPanel();
    showFeedback('История просмотров очищена.');
  });
  $('#personalSaved').addEventListener('click', () => {
    if (!favorites.size) return;
    activeFavorites = true;
    updateFavoritesUI();
    applyFilters();
    $('#filters').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#guideToc').addEventListener('click', (e) => {
    const b = e.target.closest('.gt-link'); if (!b) return;
    const target = document.getElementById(b.dataset.target);
    const tocDetails = b.closest('.gt-details');
    if (tocDetails && !window.matchMedia('(min-width: 1080px)').matches) tocDetails.open = false;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#emptyClear').addEventListener('click', () => clearLibraryFilters({ focus: true }));
  $('#shareFilters').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      showFeedback('Ссылка на эту подборку скопирована.');
    } catch (error) {
      showFeedback('Не удалось скопировать автоматически. Скопируйте адрес из строки браузера.');
    }
  });
  const advancedFilters = $('#advancedFilters');
  const syncFilterSheetState = () => {
    const mobileOpen = advancedFilters.open && window.matchMedia('(max-width: 620px)').matches;
    document.body.classList.toggle('filter-sheet-open', mobileOpen);
  };
  advancedFilters.addEventListener('toggle', () => {
    syncFilterSheetState();
  });
  $('#filterSheetClose').addEventListener('click', () => { advancedFilters.open = false; advancedFilters.querySelector('summary').focus(); });
  $('#filterSheetApply').addEventListener('click', () => { advancedFilters.open = false; $('#filters').scrollIntoView({ block: 'start' }); });
  window.addEventListener('resize', syncFilterSheetState, { passive: true });
  $('#loadMore').addEventListener('click', () => { visibleLimit += PAGE_SIZE; applyFilters(false); });
  document.addEventListener('click', (event) => {
    const favorite = event.target.closest('[data-favorite-key]');
    if (favorite) { toggleFavorite(favorite.dataset.favoriteKey, favorite.dataset.favoriteTitle || 'Материал'); return; }
    const compare = event.target.closest('[data-compare-key]');
    if (compare) { toggleCompare(compare.dataset.compareKey, compare.dataset.compareTitle || 'Материал'); return; }
    const remove = event.target.closest('[data-compare-remove]');
    if (remove) {
      const card = cards.find((item) => item.favoriteKey === remove.dataset.compareRemove);
      if (card) toggleCompare(card.favoriteKey, card.resource.title);
    }
  });
  $('#projectReset').addEventListener('click', () => {
    projectStatus = '';
    query = '';
    search.value = '';
    renderProjects();
    search.focus();
  });
  $('#navClear').addEventListener('click', () => { if (!navSearch) return; navSearch.value = ''; navQuery = ''; updateNavVisibility(); navSearch.focus(); });
  $('#topicClear').addEventListener('click', () => { clearLibraryFilters({ focus: true }); history.replaceState(null, '', location.pathname + location.search); });

  const toTop = $('#toTop');
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 600; }, { passive: true });

  load();
})();
