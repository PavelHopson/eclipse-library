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
  });
  if (!Array.isArray(data.recipes) || data.recipes.length !== 5 || data.recipes.some(recipe => !recipe.title || !recipe.prompt || !Array.isArray(recipe.codes) || recipe.codes.some(code => !codes.has(code)))) throw new Error('Неверные рецепты');
  if (!data.source?.title || !data.source.author || !data.source.publishedAt || !data.source.checkedAt || !data.source.rights || !data.source.verification) throw new Error('Нет сведений об источнике');
  return data;
}

if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  const search = $('code-search');
  const group = $('code-group');
  let data;
  let messageTimer;
  let copyTrigger;
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
  function copyButton(label, text, accessibleLabel) {
    const button = el('button', label, 'btn');
    button.type = 'button';
    button.setAttribute('aria-label', accessibleLabel);
    button.addEventListener('click', () => copy(text, button));
    return button;
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
      article.setAttribute('aria-labelledby', heading.id);
      const details = el('details');
      details.append(el('summary', 'Когда применять, пример и ограничения'));
      const dl = el('dl');
      for (const [label, value] of [['Когда применять', entry.when], ['Пример фрагмента промпта', entry.example], ['Ограничение', entry.limitation]]) dl.append(el('dt', label), el('dd', value));
      details.append(dl);
      const actions = el('div', undefined, 'image-actions');
      actions.append(copyButton('Код', entry.code, `Копировать код ${entry.code}`), copyButton('Описание', expandedText(entry), `Копировать описание ${entry.code}`));
      article.append(meta, heading, el('p', entry.effect), details, actions);
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
  }
  async function load() {
    $('load-error').hidden = true;
    $('retry-load').disabled = true;
    $('code-list').setAttribute('aria-busy', 'true');
    $('result-count').textContent = 'Загрузка справочника…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('image-prompt-codes.json', { signal: controller.signal });
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
    } catch {
      $('load-error').hidden = false;
      $('result-count').textContent = 'Справочник не загружен';
    } finally {
      clearTimeout(timeout);
      $('retry-load').disabled = false;
      $('code-list').setAttribute('aria-busy', 'false');
    }
  }
  $('image-filters').addEventListener('submit', event => { event.preventDefault(); if (data) render(); });
  search.addEventListener('input', () => render());
  group.addEventListener('change', () => render());
  $('reset-filters').addEventListener('click', () => { search.value = ''; group.value = ''; render(); search.focus(); });
  $('retry-load').addEventListener('click', load);
  window.addEventListener('popstate', () => { if (data) { applyUrl(); render(false); } });
  load();
}
