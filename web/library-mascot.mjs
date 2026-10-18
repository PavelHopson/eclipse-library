// A-40 character "Лист", versioned local sketch snapshot 0.1.0 (not approved art).
// No framework, remote requests, telemetry, cursor tracking or frame loop.
export function resultState(detail) {
  if (!detail || typeof detail.active !== 'boolean' ||
      !Number.isSafeInteger(detail.count) || detail.count < 0) return null;
  return !detail.active ? 'welcome' : detail.count ? 'found' : 'empty';
}

const messages = {
  welcome: 'Начнём с вашей задачи?',
  found: 'Подборка готова. Посмотрите материалы ниже.',
  empty: 'Совпадений нет. Попробуйте другое слово или снимите фильтры.',
  tap: 'Мур. Я рядом, а выбор — за вами.'
};

export function mountMascot(form) {
  if (!form || document.getElementById('libraryMascot')) return;
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = new URL('./library-mascot.css', import.meta.url).href;
  document.head.append(css);
  const root = document.createElement('section');
  root.id = 'libraryMascot';
  root.className = 'library-mascot';
  root.setAttribute('aria-label', 'Кот библиотеки — локальный эскиз');
  root.innerHTML = `
    <div class="library-mascot-body">
      <button type="button" class="library-mascot-pet" aria-label="Погладить кота библиотеки">
        <img class="library-mascot-art" width="96" height="96" alt="" decoding="async">
        <span class="library-mascot-fallback" hidden aria-hidden="true">Лист</span>
      </button>
      <div class="library-mascot-copy"><span class="library-mascot-label">Лист · кот библиотеки · эскиз</span><p class="library-mascot-message"></p>
        <div class="library-mascot-controls"><button type="button" data-mascot-static aria-pressed="false">Без движения</button><button type="button" data-mascot-hide>Скрыть кота</button></div>
      </div>
    </div>
    <button type="button" class="library-mascot-restore" hidden>Вернуть кота</button>`;
  form.before(root);
  const body = root.querySelector('.library-mascot-body');
  const restore = root.querySelector('.library-mascot-restore');
  const pet = root.querySelector('.library-mascot-pet');
  const toggle = root.querySelector('[data-mascot-static]');
  const message = root.querySelector('.library-mascot-message');
  const head = root.querySelector('.library-mascot-art');
  const assetRoot = new URL('./assets/mascots/library-list-v0.1.0/', import.meta.url);
  let assetDegraded = false;
  function updateArt(next) {
    if (assetDegraded) return;
    const artState = still || reduced.matches ? 'rest' : ({ welcome: 'greet', found: 'curious', empty: 'idle', tap: 'delight' }[next] || 'idle');
    const src = new URL(`${artState}.svg`, assetRoot).href;
    if (head.src !== src) head.src = src;
  }
  head.addEventListener('error', () => {
    if (!assetDegraded) {
      assetDegraded = true;
      root.dataset.asset = 'fallback';
      head.src = new URL('idle.svg', assetRoot).href;
    } else {
      head.hidden = true;
      root.querySelector('.library-mascot-fallback').hidden = false;
      root.dataset.asset = 'unavailable';
    }
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const key = 'eclipse-library:mascot-preview:v1';
  let pref = {};
  try { pref = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  let hidden = pref.hidden === true;
  let still = pref.still === true;
  let state = 'welcome';
  let animation;
  let resetTimer;
  let inView = true;
  function save() {
    try { localStorage.setItem(key, JSON.stringify({ hidden, still })); } catch {}
  }
  function stop() { animation?.cancel(); animation = null; clearTimeout(resetTimer); }
  function sync() {
    body.hidden = hidden;
    restore.hidden = !hidden;
    root.dataset.motion = still || reduced.matches ? 'static' : 'enabled';
    toggle.setAttribute('aria-pressed', String(still));
    toggle.disabled = reduced.matches;
    toggle.textContent = reduced.matches ? 'Движение отключено системой' : 'Без движения';
    if (hidden || still || reduced.matches || document.hidden) stop();
  }
  function react(next, move = true) {
    stop();
    root.dataset.state = next;
    message.textContent = messages[next];
    updateArt(next);
    if (move && !hidden && !still && !reduced.matches && !document.hidden && inView && head.animate) {
      animation = head.animate([
        { opacity: .75 }, { opacity: 1 }
      ], { duration: 180, easing: 'ease-out', iterations: 1 });
    }
  }
  pet.addEventListener('click', () => {
    react('tap');
    if (!hidden && !document.hidden) resetTimer = setTimeout(() => react(state, false), 2200);
  });
  toggle.addEventListener('click', () => { still = !still; save(); sync(); react(state, false); });
  root.querySelector('[data-mascot-hide]').addEventListener('click', () => {
    hidden = true; save(); sync(); restore.focus();
  });
  restore.addEventListener('click', () => { hidden = false; save(); sync(); react(state, false); pet.focus(); });
  reduced.addEventListener('change', () => { sync(); react(state, false); });
  document.addEventListener('visibilitychange', () => { stop(); react(state, false); });
  if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (!inView) stop();
  }).observe(root);
  document.addEventListener('library:catalog-results', (event) => {
    const next = resultState(event.detail);
    if (next === null) return;
    const changed = next !== state;
    state = next;
    react(state, changed);
  });
  sync();
  react(state, false);
  return root;
}

if (typeof document !== 'undefined' && new URLSearchParams(location.search).get('mascot') === 'preview') {
  mountMascot(document.getElementById('heroCommand'));
}
