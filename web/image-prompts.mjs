import { exampleCategories, categoryLabel, filterExamples } from './example-categories.mjs';
import { exampleSeries, filterBySeries, seriesCounts, validSeries, PAGE_SIZE } from './example-series.mjs?v=2';
export function normalizeSearch(value) {
  return String(value ?? '').normalize('NFKC').toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
}

export function filterEntries(entries, groups, query = '', group = '') {
  const labels = new Map(groups.map(item => [item.id, item.title]));
  const words = normalizeSearch(query).split(/\s+/).filter(Boolean);
  return entries.filter(entry => {
    if (group && entry.group !== group) return false;
    const haystack = normalizeSearch([entry.code, entry.title, labels.get(entry.group), entry.effect, entry.when, entry.example, entry.limitation].join(' '));
    return words.every(word => haystack.includes(word));
  });
}

// Связь справочника и галереи: styleCode примера — точный code приёма; пустой styleCode ни с чем не связан.
export function filterByStyle(examples, code = '') {
  return code ? examples.filter(example => example?.styleCode === code) : examples;
}

export function groupByStyle(examples, codes) {
  const map = new Map();
  for (const example of examples) {
    const code = example?.styleCode;
    if (typeof code !== 'string' || !codes.has(code)) continue;
    if (!map.has(code)) map.set(code, []);
    map.get(code).push(example);
  }
  return map;
}

export function expandedText(entry) {
  return `${entry.code} — ${entry.title}\nЧто меняется: ${entry.effect}\nКогда применять: ${entry.when}\nПример фрагмента: ${entry.example}\nОграничение: ${entry.limitation}\nЭто творческая подсказка, не команда генератора.`;
}

export function validateCodebook(data) {
  if (data?.schemaVersion !== 1 || !Array.isArray(data.groups) || data.groups.length !== 10 || !Array.isArray(data.entries) || data.entries.length !== 100) throw new Error('Неверная структура справочника');
  const groupIds = new Set(data.groups.map(group => group.id));
  if (groupIds.size !== 10 || data.groups.some(group => !group.title)) throw new Error('Неверные группы');
  const codes = new Set();
  data.entries.forEach((entry, index) => {
    if (entry.number !== index + 1 || !/^\/[a-zA-Z0-9]+$/.test(entry.code) || codes.has(entry.code) || !groupIds.has(entry.group)) throw new Error('Неверный код или порядок');
    codes.add(entry.code);
    for (const field of ['title', 'effect', 'when', 'example', 'limitation']) {
      if (typeof entry[field] !== 'string' || !entry[field].trim()) throw new Error('Неполная запись');
    }
    if (entry.image !== undefined) {
      const image = entry.image;
      const local = /^assets\/image-codes\/[a-z0-9-]+\.webp$/;
      if (!image || !local.test(image.src) || !local.test(image.full) || !Number.isInteger(image.width) || !Number.isInteger(image.height) || typeof image.alt !== 'string' || !image.alt.trim()) throw new Error('Неверный пример изображения');
    }
  });
  if (!Array.isArray(data.recipes) || data.recipes.length !== 5 || data.recipes.some(recipe => !recipe.title || !recipe.prompt || !Array.isArray(recipe.codes) || recipe.codes.some(code => !codes.has(code)))) throw new Error('Неверные рецепты');
  if (!data.source?.title || !data.source.author || !data.source.publishedAt || !data.source.checkedAt || !data.source.rights || !data.source.verification) throw new Error('Нет сведений об источнике');
  return data;
}

if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  const scrollKey = `library-scroll:${location.pathname}${location.search}${location.hash}`;
  let scrollSaveTimer;
  let scrollRestored = false;
  // Читаем до первых событий scroll: прокрутка к #якорю во время загрузки не должна подменять сохранённую позицию.
  const savedScroll = Number(sessionStorage.getItem(scrollKey));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function rememberScroll() { sessionStorage.setItem(scrollKey, String(Math.round(window.scrollY))); }
  function restoreScroll() {
    if (scrollRestored) return;
    const saved = savedScroll;
    if (!Number.isFinite(saved) || saved <= 0) return;
    scrollRestored = true;
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: saved, left: 0, behavior: 'auto' })));
  }
  window.addEventListener('scroll', () => { clearTimeout(scrollSaveTimer); scrollSaveTimer = setTimeout(rememberScroll, 120); }, { passive: true });
  window.addEventListener('pagehide', rememberScroll);
  const search = $('code-search');
  const group = $('code-group');
  let data;
  let projectExamples;
  let projectQuery = '';
  let projectProduct = '';
  let projectCategory = '';
  let projectSeries = validSeries(new URLSearchParams(location.search).get('series') || '') ? (new URLSearchParams(location.search).get('series') || '') : '';
  let projectStyle = '';
  let examplesByCode = new Map();
  let projectLimit = PAGE_SIZE;
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('project-example-category').append(...exampleCategories.map(([id,label])=>new Option(label,id)), new Option('Без категории','uncategorized'));
  let messageTimer;
  let copyTrigger;
  const lightbox = $('image-lightbox');
  const lightboxPreview = $('image-lightbox-preview');
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };

  async function copy(text, trigger) {
    clearTimeout(messageTimer);
    $('copy-status').textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      $('copy-status').textContent = 'Скопировано в буфер обмена';
      messageTimer = setTimeout(() => { $('copy-status').textContent = ''; }, 4500);
    } catch {
      copyTrigger = trigger;
      $('copy-text').value = text;
      $('copy-dialog').showModal();
      $('copy-text').focus();
      $('copy-text').select();
    }
  }
  $('copy-dialog').addEventListener('close', () => copyTrigger?.focus());
  $('image-lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('cancel', event => { event.preventDefault(); lightbox.close(); });
  function copyButton(label, text, accessibleLabel) {
    const button = el('button', label, 'btn');
    button.type = 'button';
    button.setAttribute('aria-label', accessibleLabel);
    button.addEventListener('click', () => copy(text, button));
    return button;
  }
  function exampleFigure(entry) {
    const figure = el('figure', undefined, 'image-code-example');
    const link = el('a', undefined, 'image-code-example__link');
    link.href = entry.image.full;
    link.title = 'Открыть пример в полном размере';
    const image = el('img');
    image.src = entry.image.src;
    image.alt = entry.image.alt;
    image.width = entry.image.width;
    image.height = entry.image.height;
    image.loading = 'lazy';
    image.decoding = 'async';
    link.append(image);
    link.addEventListener('click', event => { event.preventDefault(); lightboxPreview.src = entry.image.full; lightboxPreview.alt = entry.image.alt; lightbox.showModal(); });
    figure.append(link, el('figcaption', 'Пример: сгенерировано в ChatGPT'));
    return figure;
  }
  function openLightbox(src, alt) { lightboxPreview.src = src; lightboxPreview.alt = alt; lightbox.showModal(); }
  function showSection(target, focusTarget = target) {
    target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    focusTarget.focus({ preventScroll: true });
  }
  function styleHref(code) {
    const url = new URL(location.href);
    url.searchParams.set('style', code);
    url.hash = 'project-examples';
    return url.pathname + url.search + url.hash;
  }
  function galleryBlock(entry, linked) {
    const box = el('div', undefined, 'image-code-gallery');
    const title = el('p', 'В галерее', 'image-code-gallery__title');
    title.id = `code-${entry.number}-gallery`;
    box.setAttribute('role', 'group');
    box.setAttribute('aria-labelledby', title.id);
    box.append(title);
    const thumbs = linked.filter(example => example.imageUrl).slice(0, 3).map(example => {
      const item = el('li');
      const link = el('a', undefined, 'image-code-gallery__thumb');
      link.href = example.imageUrl;
      link.title = 'Открыть изображение в полном размере';
      const image = el('img');
      image.src = example.imageUrl;
      image.alt = `Пример ${entry.code} в галерее: ${example.title || entry.title}`;
      image.width = 96;
      image.height = 96;
      image.loading = 'lazy';
      image.decoding = 'async';
      link.append(image);
      link.addEventListener('click', event => { event.preventDefault(); openLightbox(example.imageUrl, image.alt); });
      item.append(link);
      return item;
    });
    if (thumbs.length) { const list = el('ul', undefined, 'image-code-gallery__thumbs'); list.append(...thumbs); box.append(list); }
    const all = el('a', `Все примеры (${linked.length})`, 'image-code-gallery__all');
    all.href = styleHref(entry.code);
    all.setAttribute('aria-label', `Все примеры приёма ${entry.code} в галерее: ${linked.length}`);
    all.addEventListener('click', event => { event.preventDefault(); setStyle(entry.code); showSection($('project-examples'), $('project-examples-title')); });
    box.append(all);
    return box;
  }
  function openCodebookEntry(entry) {
    search.value = entry.code;
    group.value = '';
    render();
    const heading = $(`code-${entry.number}`);
    if (heading) showSection($('codebook'), heading);
  }
  function render(updateUrl = true) {
    const matches = filterEntries(data.entries, data.groups, search.value, group.value);
    const fragment = document.createDocumentFragment();
    const labels = new Map(data.groups.map(item => [item.id, item.title]));
    matches.forEach(entry => {
      const li = el('li');
      li.value = entry.number;
      const article = el('article');
      const meta = el('div', undefined, 'image-code-meta');
      meta.append(el('span', String(entry.number).padStart(2, '0')), el('code', entry.code), el('span', labels.get(entry.group)));
      const heading = el('h3', entry.title);
      heading.id = `code-${entry.number}`;
      heading.tabIndex = -1;
      article.setAttribute('aria-labelledby', heading.id);
      const details = el('details');
      details.append(el('summary', 'Когда применять, пример и ограничения'));
      const dl = el('dl');
      for (const [label, value] of [['Когда применять', entry.when], ['Пример фрагмента промпта', entry.example], ['Ограничение', entry.limitation]]) dl.append(el('dt', label), el('dd', value));
      details.append(dl);
      const actions = el('div', undefined, 'image-actions');
      actions.append(copyButton('Код', entry.code, `Копировать код ${entry.code}`), copyButton('Описание', expandedText(entry), `Копировать описание ${entry.code}`));
      if (entry.image) article.append(exampleFigure(entry));
      article.append(meta, heading, el('p', entry.effect), details);
      const linked = examplesByCode.get(entry.code);
      if (linked?.length) article.append(galleryBlock(entry, linked));
      article.append(actions);
      li.append(article);
      fragment.append(li);
    });
    $('code-list').replaceChildren(fragment);
    $('result-count').textContent = `Показано ${matches.length} из ${data.entries.length}`;
    $('empty-results').hidden = matches.length !== 0;
    if (updateUrl) {
      const url = new URL(location.href);
      search.value.trim() ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
      group.value ? url.searchParams.set('group', group.value) : url.searchParams.delete('group');
      history.replaceState(null, '', url);
    }
  }
  function applyUrl() {
    const params = new URLSearchParams(location.search);
    search.value = params.get('q') || '';
    group.value = data.groups.some(item => item.id === params.get('group')) ? params.get('group') : '';
    const style = params.get('style') || '';
    projectStyle = data.entries.some(entry => entry.code === style) ? style : '';
  }
  function updateGalleryUrl() {
    const params = new URLSearchParams(location.search);
    if (projectSeries) params.set('series', projectSeries); else params.delete('series');
    if (projectStyle) params.set('style', projectStyle); else params.delete('style');
    const query = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${query ? '?' + query : ''}${location.hash}`);
  }
  function setStyle(code) {
    projectStyle = data.entries.some(entry => entry.code === code) ? code : '';
    projectLimit = PAGE_SIZE;
    updateGalleryUrl();
    renderProjectExamples();
  }
  function renderSeriesChips() {
    const counts = seriesCounts(projectExamples);
    const chip = (id, label, count) => { const button = el('button', undefined, 'project-series-chip'); button.type = 'button'; button.dataset.series = id; button.setAttribute('aria-pressed', String(projectSeries === id)); button.append(el('span', label), el('span', String(count), 'project-series-chip__count')); return button; };
    $('project-example-series').replaceChildren(chip('', 'Все', projectExamples.length), ...exampleSeries.filter(([id]) => counts[id] > 0).map(([id, label]) => chip(id, label, counts[id])));
  }
  function setSeries(id) {
    projectSeries = validSeries(id) ? id : '';
    projectLimit = PAGE_SIZE;
    updateGalleryUrl();
    renderSeriesChips();
    renderProjectExamples();
  }
  function renderStyleFilter() {
    const note = $('project-example-style');
    const entry = projectStyle && data.entries.find(item => item.code === projectStyle);
    note.hidden = !entry;
    if (!entry) { note.replaceChildren(); return; }
    const link = el('a', `${entry.code} · ${entry.title}`);
    link.href = `${location.pathname}?q=${encodeURIComponent(entry.code)}#code-${entry.number}`;
    link.addEventListener('click', event => { event.preventDefault(); openCodebookEntry(entry); });
    note.replaceChildren(document.createTextNode('Приём: '), link, document.createTextNode(' · «Сбросить» вернёт все примеры'));
  }
  function renderProjectExamples() {
    renderStyleFilter();
    const matches = filterExamples(filterBySeries(filterByStyle(projectExamples, projectStyle), projectSeries), {query:projectQuery, product:projectProduct, category:projectCategory});
    const visible = matches.slice(0, projectLimit);
    $('project-example-count').textContent = `${matches.length} из ${projectExamples.length} примеров`;
    $('project-example-empty').hidden = matches.length !== 0;
    const more = $('project-example-more');
    const rest = matches.length - visible.length;
    more.hidden = rest <= 0;
    more.textContent = `Показать ещё ${Math.min(rest, PAGE_SIZE)} · осталось ${rest}`;
    $('project-example-list').replaceChildren(...visible.map(example => {
      const article = el('article', undefined, 'image-project-example');
      const head = el('div', undefined, 'image-project-example__head');
      head.append(el('span', example.category ? categoryLabel(example.category) : example.project, 'image-project-example__project'), el('span', example.format, 'image-project-example__format'));
      const style=data.entries.find(entry=>entry.code===example.styleCode);if(style){const link=el('a',style.code+' · '+style.title,'image-project-example__style');link.href='images.html?q='+encodeURIComponent(style.code)+'#code-'+style.number;link.setAttribute('aria-label',`Приём ${style.code} в справочнике: ${style.title}`);link.addEventListener('click',event=>{event.preventDefault();openCodebookEntry(style);});head.append(link);}
      const media = el('div', undefined, 'image-project-example__media');
      if (example.imageUrl) { const imageLink = el('a', undefined, 'image-project-example__image-link'); imageLink.href = example.imageUrl; imageLink.title = 'Открыть изображение в полном размере'; const image = el('img', undefined, 'image-project-example__image'); image.src = example.imageUrl; image.alt = `Пример изображения: ${example.title}. Нажмите, чтобы открыть полный размер`; image.loading = 'lazy'; imageLink.append(image); imageLink.addEventListener('click', event => { event.preventDefault(); lightboxPreview.src = example.imageUrl; lightboxPreview.alt = image.alt; lightbox.showModal(); }); media.append(imageLink); }
      else media.append(el('span', 'Пример изображения пока не загружен', 'image-project-example__placeholder'));
      const body = el('div', undefined, 'image-project-example__body');
      body.append(head, el('h3', example.title), el('p', example.description || example.check || ''));
      const promptDetails = el('details', undefined, 'image-project-example__prompt-details');
      const promptSummary = el('summary', undefined, 'image-project-example__prompt-summary');
      promptSummary.append(el('span', 'Открыть полный промпт'), el('span', `${example.prompt.length} знаков`, 'image-project-example__prompt-size'));
      const promptBody = el('div', undefined, 'image-project-example__prompt-body');
      const section = el('section', undefined, 'image-project-example__prompt-section'); section.append(el('pre', example.prompt)); promptBody.append(section);
      promptDetails.append(promptSummary, promptBody);
      body.append(promptDetails);
      const source = example.sourceUrl || example.source_url;
      const rights = example.rightsNote || example.rights_note;
      if (source || rights) { const provenance = el('p', undefined, 'image-project-example__provenance'); if (source) provenance.append(el('a', 'Источник ↗')); provenance.querySelector('a')?.setAttribute('href', source); provenance.querySelector('a')?.setAttribute('target', '_blank'); provenance.querySelector('a')?.setAttribute('rel', 'noopener'); if (rights) provenance.append(document.createTextNode(`${source ? ' · ' : ''}${rights}`)); body.append(provenance); }
      if (example.check && example.check !== example.description) { const note = el('p', undefined, 'image-project-example__check'); note.append(el('strong', 'Проверка: '), document.createTextNode(example.check)); body.append(note); }
      body.append(copyButton('Скопировать промпт', example.prompt, `Копировать промпт: ${example.project}`));
      article.append(media, body);
      return article;
    }));
  }
  async function load() {
    $('load-error').hidden = true;
    $('retry-load').disabled = true;
    $('code-list').setAttribute('aria-busy', 'true');
    $('result-count').textContent = 'Загрузка справочника…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('image-prompt-codes.json?v=4', { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = validateCodebook(await response.json());
      group.replaceChildren(new Option('Все группы', ''));
      data.groups.forEach(item => group.append(new Option(item.title, item.id)));
      [search, group, $('reset-filters')].forEach(node => { node.disabled = false; });
      applyUrl();
      render(false);
      $('recipe-list').replaceChildren(...data.recipes.map(recipe => {
        const article = el('article', undefined, 'image-recipe');
        article.append(el('h3', recipe.title), el('code', recipe.codes.join(' ')), el('p', recipe.prompt), copyButton('Скопировать рецепт', recipe.prompt, `Копировать рецепт: ${recipe.title}`));
        return article;
      }));
      $('source-details').replaceChildren(el('p', `${data.source.title} · ${data.source.author} · статья: ${data.source.publishedAt} · проверено: ${data.source.checkedAt}.`), el('p', data.source.verification), el('p', data.source.rights));
      const examplesResponse = await fetch('image-project-examples.json', { signal: controller.signal });
      if (!examplesResponse.ok) throw new Error(`HTTP ${examplesResponse.status}`);
      const examplesPayload = await examplesResponse.json();
      if (examplesPayload.schemaVersion !== 1 || !Array.isArray(examplesPayload.examples) || examplesPayload.examples.length !== 6) throw new Error('Неверная структура примеров');
      projectExamples = examplesPayload.examples;
      try {
        const liveResponse = await fetch('/editor-api/api/public/image-examples', { signal: controller.signal });
        if (liveResponse.ok) {
          const livePayload = await liveResponse.json();
          if (livePayload.schemaVersion === 1 && Array.isArray(livePayload.examples)) projectExamples = livePayload.examples;
        }
      } catch { /* статический набор остаётся резервом при недоступности API */ }
      // Справочник уже показан; перерисовываем его, чтобы появились блоки «В галерее».
      examplesByCode = groupByStyle(projectExamples, new Set(data.entries.map(entry => entry.code)));
      render(false);
      const products = [...new Set(projectExamples.map(example => example.project).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ru'));
      $('project-example-project').replaceChildren(new Option('Все продукты', ''), ...products.map(product => new Option(product, product)));
      renderSeriesChips();
      renderProjectExamples();
      const anchor = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (anchor && !(savedScroll > 0)) requestAnimationFrame(() => anchor.scrollIntoView({ block: 'start' }));
    } catch {
      $('load-error').hidden = false;
      $('result-count').textContent = 'Справочник не загружен';
    } finally {
      clearTimeout(timeout);
      $('retry-load').disabled = false;
      $('code-list').setAttribute('aria-busy', 'false');
      restoreScroll();
    }
  }
  $('image-filters').addEventListener('submit', event => { event.preventDefault(); if (data) render(); });
  search.addEventListener('input', () => render());
  group.addEventListener('change', () => render());
  $('project-example-filters').addEventListener('submit', event=>event.preventDefault());
  $('project-example-category').addEventListener('change', event=>{projectCategory=event.target.value;projectLimit=PAGE_SIZE;renderProjectExamples();});
  $('project-example-search').addEventListener('input', event => { projectQuery = event.target.value; projectLimit = PAGE_SIZE; renderProjectExamples(); });
  $('project-example-project').addEventListener('change', event => { projectProduct = event.target.value; projectLimit = PAGE_SIZE; renderProjectExamples(); });
  $('project-example-series').addEventListener('click', event => { const button = event.target.closest('[data-series]'); if (button) setSeries(button.dataset.series); });
  $('project-example-more').addEventListener('click', () => { const first = projectLimit; projectLimit += PAGE_SIZE; renderProjectExamples(); $('project-example-list').children[first]?.querySelector('a, button, summary')?.focus({ preventScroll: true }); });
  $('project-example-reset').addEventListener('click', () => { projectQuery = ''; projectProduct = ''; projectCategory=''; projectLimit = PAGE_SIZE; projectStyle = ''; projectSeries = ''; updateGalleryUrl(); renderSeriesChips(); $('project-example-category').value=''; $('project-example-search').value = ''; $('project-example-project').value = ''; renderProjectExamples(); });
  $('reset-filters').addEventListener('click', () => { search.value = ''; group.value = ''; render(); search.focus(); });
  $('retry-load').addEventListener('click', async (event) => { event.preventDefault(); const scrollY = window.scrollY; await load(); window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' }); });
  window.addEventListener('popstate', () => { if (data) { applyUrl(); render(false); if (projectExamples) renderProjectExamples(); } });
  load();
}
