// Gallery adapter by Eclipse. Original sheets/component: Kamran Ahmed, MIT.
export const directions = ['Вверх-влево', 'Вверх', 'Вверх-вправо', 'Влево', 'Прямо', 'Вправо', 'Вниз-влево', 'Вниз', 'Вниз-вправо'];
export const reactions = ['Моргание', 'Сердечко', 'Искры', 'Удивление', 'Подмигивание', 'Смущение', 'Сонливость', 'Головокружение', 'Восторг'];
const categories = { animals: 'Животные', people: 'Люди', robots: 'Роботы', styles: 'Стили' };
const styles = { colour: 'Цветной', ink: 'Тушь', sketch: 'Набросок', riso: 'Ризография', paper: 'Бумага', pixel: 'Пиксели' };
export function spriteCell(index) {
  if (!Number.isInteger(index) || index < 0 || index > 8) throw Error('Invalid cell');
  return { x: index % 3, y: Math.floor(index / 3) };
}
export function validateManifest(data) {
  if (data?.schemaVersion !== 1 || !Array.isArray(data.items) || !data.items.length || data.items.length !== data.totalVariants) throw Error('Invalid manifest');
  const ids = new Set();
  let bytes = 0;
  for (const item of data.items) {
    if (!/^[a-z0-9-]+$/.test(item.id) || ids.has(item.id) || typeof item.name !== 'string' || !item.name.trim() || !Object.hasOwn(categories, item.category) || !Object.hasOwn(styles, item.style)) throw Error('Invalid character');
    ids.add(item.id);
    if (item.directions !== `assets/${item.id}-directions.webp` || item.reactions !== `assets/${item.id}-reactions.webp`) throw Error('Unsafe asset path');
    if (!Number.isSafeInteger(item.bytes) || item.bytes <= 0) throw Error('Invalid bytes');
    bytes += item.bytes;
  }
  if (data.totalFiles !== data.items.length * 2 || data.totalBytes !== bytes || data.licensePath !== 'LICENSE.txt' || data.archivePath !== 'downloads/koboyo-page-mascot.zip' || !/^[a-f0-9]{40}$/.test(data.upstreamCommit)) throw Error('Inconsistent manifest');
  return data;
}
export function reactExample(item) {
  // Called only with an item from validatedManifest.
  return `import { Mascot } from 'page-mascot'\n\n<Mascot\n  directions="/mascots/${item.id}-directions.webp"\n  reactions="/mascots/${item.id}-reactions.webp"\n  label={${JSON.stringify(item.name)}}\n/>`;
}

async function init() {
  const $ = id => document.getElementById(id);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const cache = new Map();
  const ctx = $('mascotCanvas').getContext('2d');
  let manifest, current, query = '', category = 'all', limit = 12;
  let desired = { kind: 'directions', index: 4 }, serial = 0, animation;
  let observer;
  function quiet() { return reduced.matches || $('staticMode').checked || document.hidden; }
  function stop() { animation?.cancel(); animation = null; }
  function getImage(path) {
    const url = new URL(path, location.href).href;
    if (cache.has(path)) return cache.get(path);
    const pending = new Promise((resolve, reject) => {
      const img = new Image();
      const timer = setTimeout(() => { img.onload = img.onerror = null; img.src = ''; reject(Error('Image timeout')); }, 12000);
      img.onload = () => {
        clearTimeout(timer);
        if (!img.naturalWidth || img.naturalWidth !== img.naturalHeight || img.naturalWidth % 3 !== 0) return reject(Error('Invalid sheet geometry'));
        resolve(img);
      };
      img.onerror = () => { clearTimeout(timer); reject(Error('Image unavailable')); };
      img.src = url;
    });
    cache.set(path, pending);
    // Keep at most two full character pairs decoded, never all 116 sheets.
    if (cache.size > 4) cache.delete(cache.keys().next().value);
    pending.catch(() => { if (cache.get(path) === pending) cache.delete(path); });
    return pending;
  }
  async function frame(kind, index) {
    if (!current || !ctx) return;
    spriteCell(index);
    desired = { kind, index };
    const token = ++serial, item = current;
    const path = item[kind];
    if (!cache.has(path)) $('previewStatus').textContent = 'Загружаем изображение…';
    $('retrySheet').hidden = true;
    try {
      const image = await getImage(path);
      if (token !== serial || current.id !== item.id) return;
      const { x, y } = spriteCell(index), cell = image.naturalWidth / 3;
      ctx.clearRect(0, 0, 480, 480);
      ctx.drawImage(image, x * cell, y * cell, cell, cell, 0, 0, 480, 480);
      $('mascotCanvas').hidden = false;
      $('pet').disabled = false;
      $('frameLabel').textContent = (kind === 'directions' ? directions : reactions)[index];
      $('previewStatus').textContent = quiet() ? 'Статичный режим. Кадры можно выбрать кнопками.' : 'Готово. Выберите направление или эмоцию.';
      $('previewStage').dataset.frame = `${kind}:${index}`;
      document.querySelectorAll('[data-frame-kind]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.frameKind === kind && Number(b.dataset.frameIndex) === index)));
    } catch {
      if (token !== serial) return;
      $('mascotCanvas').hidden = true;
      $('pet').disabled = true;
      $('previewStatus').textContent = 'Не удалось загрузить изображение. Можно повторить или выбрать другого персонажа.';
      $('retrySheet').hidden = false;
    }
  }
  function select(item, scroll = false) {
    current = item; stop();
    $('selectedName').textContent = item.name;
    $('selectedStyle').textContent = styles[item.style];
    $('selectedSize').textContent = `Два WebP · ${(item.bytes / 1024).toFixed(0)} КБ`;
    $('pet').setAttribute('aria-label', `Показать следующую эмоцию: ${item.name}`);
    for (const kind of ['directions', 'reactions']) {
      const a = $(kind === 'directions' ? 'downloadDirections' : 'downloadReactions');
      a.href = item[kind]; a.download = `${item.id}-${kind}.webp`;
    }
    $('reactCode').textContent = reactExample(item);
    $('copyStatus').textContent = ''; $('manualCopy').hidden = true;
    $('mascotCanvas').hidden = true; $('pet').disabled = true;
    delete $('previewStage').dataset.frame;
    document.querySelectorAll('[data-character]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.character === item.id)));
    history.replaceState(null, '', '#' + item.id);
    frame('directions', 4);
    if (scroll && matchMedia('(max-width: 720px)').matches) {
      $('preview').scrollIntoView({ block: 'start', behavior: 'auto' });
      $('preview').focus({ preventScroll: true });
    }
  }
  function renderList() {
    observer?.disconnect();
    const items = manifest.items.filter(i => (category === 'all' || category === i.category) && `${i.name} ${i.id} ${styles[i.style]}`.toLowerCase().includes(query));
    $('resultCount').textContent = `${items.length} из ${manifest.totalVariants}`;
    $('emptyState').hidden = items.length !== 0;
    $('loadMore').hidden = items.length <= limit;
    $('loadMore').textContent = `Показать ещё ${Math.min(12, Math.max(0, items.length - limit))}`;
    $('characterList').replaceChildren();
    observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { loadThumb(entry.target); observer.unobserve(entry.target); }
    }, { rootMargin: '80px' }) : null;
    function loadThumb(thumb) {
      const img = new Image();
      img.onload = () => { thumb.style.backgroundImage = `url("${thumb.dataset.src}")`; };
      img.onerror = () => { thumb.dataset.failed = 'true'; };
      img.src = thumb.dataset.src;
    }
    for (const item of items.slice(0, limit)) {
      const li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.className = 'kg-character'; b.dataset.character = item.id;
      b.setAttribute('aria-pressed', String(current?.id === item.id));
      b.setAttribute('aria-controls', 'preview'); b.setAttribute('aria-label', `Выбрать: ${item.name}, ${styles[item.style]}`);
      const thumb = document.createElement('span'); thumb.className = 'kg-thumb'; thumb.setAttribute('aria-hidden', 'true'); thumb.dataset.src = item.directions;
      const name = document.createElement('b'); name.textContent = item.name;
      const sub = document.createElement('small'); sub.textContent = styles[item.style];
      b.append(thumb, name, sub); li.append(b); $('characterList').append(li);
      b.addEventListener('click', () => select(item, true));
      if (observer) observer.observe(thumb); else loadThumb(thumb);
    }
  }
  for (const [kind, labels, target] of [['directions', directions, 'directionButtons'], ['reactions', reactions, 'reactionButtons']]) labels.forEach((label, index) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    b.dataset.frameKind = kind; b.dataset.frameIndex = index; b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => frame(kind, index)); $(target).append(b);
  });
  $('pet').addEventListener('click', () => {
    frame('reactions', desired.kind === 'reactions' ? (desired.index + 1) % 9 : 0);
    stop();
    if (!quiet()) animation = $('pet').animate([{ opacity: .8 }, { opacity: 1 }], { duration: 140, iterations: 1 });
  });
  $('previewStage').addEventListener('pointermove', event => {
    if (quiet() || !fine.matches || desired.kind === 'reactions' || !current) return;
    const r = $('pet').getBoundingClientRect();
    const dx = event.clientX - r.x - r.width / 2, dy = event.clientY - r.y - r.height / 2;
    const clockwise = [5, 8, 7, 6, 3, 0, 1, 2];
    const index = Math.hypot(dx, dy) < 34 ? 4 : clockwise[(Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8];
    if (desired.index !== index) frame('directions', index);
  }, { passive: true });
  $('previewStage').addEventListener('pointerleave', () => { if (!quiet()) frame('directions', 4); });
  $('staticMode').addEventListener('change', () => { stop(); frame('directions', 4); });
  reduced.addEventListener('change', () => { stop(); frame('directions', 4); });
  document.addEventListener('visibilitychange', stop);
  $('retrySheet').addEventListener('click', () => frame(desired.kind, desired.index));
  $('mascotSearch').addEventListener('input', e => { query = e.target.value.trim().toLowerCase().slice(0, 80); limit = 12; renderList(); });
  document.querySelectorAll('[data-category]').forEach(b => b.addEventListener('click', () => {
    category = b.dataset.category; limit = 12;
    document.querySelectorAll('[data-category]').forEach(other => other.setAttribute('aria-pressed', String(other === b)));
    renderList();
  }));
  $('resetFilters').addEventListener('click', () => { query = ''; category = 'all'; limit = 12; $('mascotSearch').value = ''; document.querySelector('[data-category="all"]').click(); $('mascotSearch').focus(); });
  $('loadMore').addEventListener('click', () => { const old = limit; limit += 12; renderList(); $('characterList').children[old]?.querySelector('button').focus(); });
  $('copyCode').addEventListener('click', async () => {
    if (!current) return;
    const text = reactExample(current);
    try { await navigator.clipboard.writeText(text); $('copyStatus').textContent = 'Пример скопирован.'; $('manualCopy').hidden = true; }
    catch { $('manualCopy').hidden = false; $('codeText').value = text; $('codeText').focus(); $('codeText').select(); $('copyStatus').textContent = 'Буфер недоступен. Скопируйте текст вручную.'; }
  });
  async function load() {
    $('loadError').hidden = true; $('retryManifest').disabled = true;
    try {
      const response = await fetch('manifest.json', { signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw Error('Manifest unavailable');
      manifest = validateManifest(await response.json());
      $('collectionMeta').textContent = `${manifest.totalVariants} вариантов · ${manifest.totalFiles} WebP · ${(manifest.totalBytes / 1048576).toFixed(1)} МБ`;
      $('sourceRevision').textContent = `Версия источника: ${manifest.upstreamCommit}. Проверено: ${manifest.verifiedAt}.`;
      $('workbench').hidden = false;
      select(manifest.items.find(i => i.id === location.hash.slice(1)) || manifest.items.find(i => i.id === 'cat') || manifest.items[0]);
      renderList();
    } catch {
      $('loadError').hidden = false; $('workbench').hidden = true;
      $('collectionMeta').textContent = 'Список временно недоступен';
    } finally { $('retryManifest').disabled = false; }
  }
  $('retryManifest').addEventListener('click', load);
  await load();
}
if (typeof document !== 'undefined') init();
