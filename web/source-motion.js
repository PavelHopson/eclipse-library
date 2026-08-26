(() => {
  const items = Array.isArray(window.SOURCE_MOTION_ITEMS) ? window.SOURCE_MOTION_ITEMS : [];
  const list = document.querySelector('#items');
  const search = document.querySelector('#search');
  const filters = document.querySelector('#filters');
  const frame = document.querySelector('#demo-frame');
  const loading = document.querySelector('#loading');
  const title = document.querySelector('#item-title');
  const category = document.querySelector('#item-category');
  const hint = document.querySelector('#item-hint');
  const fileName = document.querySelector('#file-name');
  const visibleCount = document.querySelector('#visible-count');
  const interaction = document.querySelector('#interaction-label');
  const openDemo = document.querySelector('#open-demo');
  const replay = document.querySelector('#replay');
  let active = items[0] || null;
  let filter = 'Все';

  const actionLabels = {
    auto: 'Наблюдайте за циклом', click: 'Нажмите внутри сцены', focus: 'Перейдите по полям', input: 'Введите данные в форму', pointer: 'Двигайте курсор внутри сцены'
  };

  function select(item, updateHash = true) {
    active = item;
    title.textContent = item.title;
    category.textContent = item.category;
    hint.textContent = item.hint;
    fileName.textContent = item.path.replace('source-motion/', '');
    interaction.textContent = actionLabels[item.action] || actionLabels.click;
    openDemo.href = item.path;
    loading.classList.remove('is-hidden');
    frame.src = `${item.path}?preview=1&v=1`;
    document.querySelectorAll('.item').forEach((button) => button.setAttribute('aria-current', String(button.dataset.id === item.id)));
    if (updateHash) history.replaceState(null, '', `#${item.id}`);
  }

  function render() {
    const query = search.value.trim().toLocaleLowerCase('ru');
    const filtered = items.filter((item) => (filter === 'Все' || item.category === filter) && `${item.title} ${item.category} ${item.hint}`.toLocaleLowerCase('ru').includes(query));
    visibleCount.textContent = String(filtered.length);
    list.replaceChildren(...filtered.map((item, index) => {
      const button = document.createElement('button');
      button.className = 'item';
      button.type = 'button';
      button.dataset.id = item.id;
      button.setAttribute('aria-current', String(active?.id === item.id));
      button.innerHTML = `<span class="item-index">${String(index + 1).padStart(2, '0')}</span><span class="item-copy"><strong></strong><small></small></span><span class="item-state" aria-hidden="true"></span>`;
      button.querySelector('strong').textContent = item.title;
      button.querySelector('small').textContent = item.category;
      button.addEventListener('click', () => select(item));
      return button;
    }));
  }

  const categories = ['Все', ...new Set(items.map((item) => item.category))];
  filters.replaceChildren(...categories.map((name) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = name;
    button.setAttribute('aria-pressed', String(name === filter));
    button.addEventListener('click', () => {
      filter = name;
      filters.querySelectorAll('button').forEach((entry) => entry.setAttribute('aria-pressed', String(entry === button)));
      render();
    });
    return button;
  }));
  search.addEventListener('input', render);
  frame.addEventListener('load', () => loading.classList.add('is-hidden'));
  replay.addEventListener('click', () => active && select(active, false));
  render();
  const requested = items.find((item) => item.id === location.hash.slice(1));
  select(requested || active, false);
})();
