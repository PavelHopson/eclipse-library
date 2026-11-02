(function () {
  'use strict';
  const R = window.EclipseLearningGames;
  const P = window.EclipseLearningGameProgress;
  const examples = { quiz: ['Викторина: безопасная работа с кодом', 'learning-examples/quiz.json'], 'escape-room': ['Квест: путь к безопасному релизу', 'learning-examples/escape-room.json'] };
  let host, game = null, state = null, selection = null, activeId = '', activeHash = '', revision = 0, controller = null, timer = null;
  let entries = [], expectedRaw = null, loaded = false, loading = null, loadError = '', dirty = false, version = 0, queue = Promise.resolve();
  const deleting = new Set();
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
  const link = (text, href) => { const n = el('a', text); n.href = href; return n; };
  const button = (text, action) => { const n = el('button', text); n.type = 'button'; n.addEventListener('click', action); return n; };
  const routeFor = id => '#learn/games/saved/' + id;
  function storage() { try { return window.localStorage; } catch (_) { return null; } }
  function warn(event) { event.preventDefault(); event.returnValue = ''; }
  function pending(value) { dirty = value; window.removeEventListener('beforeunload', warn); if (dirty) window.addEventListener('beforeunload', warn); }
  function cancelRead() { revision++; if (controller) controller.abort(); controller = null; clearTimeout(timer); }
  function leave(nextHash) {
    if (!activeHash || nextHash === activeHash) return true;
    cancelRead(); activeHash = ''; activeId = ''; game = null; state = null; return true;
  }
  function status(text, error = false) { if (!activeHash || !host) return; const n = host.querySelector('.learning-status'); if (n) { n.textContent = text; n.classList.toggle('is-error', error); } host.querySelectorAll('.game-retry-save').forEach(b => { b.hidden = !dirty && !loadError; }); }
  async function ensureLoaded() {
    if (loaded) return;
    if (!loading) loading = P.loadCollection(storage()).then(result => { entries = result.entries; expectedRaw = result.raw; loadError = result.error || ''; loaded = true; }).finally(() => { loading = null; });
    await loading;
  }
  function persist() {
    pending(true); version++;
    queue = queue.then(async () => {
      const snapshotVersion = version; const result = await P.saveCollection(storage(), entries.slice(), expectedRaw);
      if (result.ok) { expectedRaw = result.raw; loadError = ''; if (snapshotVersion === version) pending(false); status(dirty ? 'Есть несохранённые изменения. Скачайте попытку.' : 'Попытка сохранена в этом браузере.', dirty); }
      else { loadError = result.error; status(result.error + ' Попытка остаётся в этой вкладке. Скачайте её до закрытия страницы.', true); }
      return result;
    }).catch(error => { loadError = error.message; status(error.message, true); return { ok: false }; });
    return queue;
  }
  function update(next, selected) {
    if (deleting.has(activeId)) { status('Удаление попытки ещё выполняется.', true); return false; }
    const current = entries.find(e => e.id === activeId); const entry = P.withProgress(current, next, selected);
    entries = entries.map(e => e.id === entry.id ? entry : e); state = entry.state; selection = entry.selected; persist(); return true;
  }
  function download(entry) { if (!entry) { status('Попытка уже удалена. Вернитесь к списку игр.', true); return; } const raw = P.exportBundle(entry); const href = URL.createObjectURL(new Blob([raw], { type: 'application/json' })); const a = link('Попытка', href); a.download = 'game-' + entry.id.slice(0, 12) + '.json'; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(href), 1000); }
  function shell(title) {
    host.replaceChildren(); host.append(link('← Практикумы', '#learn'), el('h1', title, 'learning-title'), el('p', 'Игра без ИИ. Попытки сохраняются в этом браузере. Для другого устройства скачайте игру с прогрессом.', 'learning-intro'));
    const message = el('p', '', 'learning-status'); message.setAttribute('role', 'status'); message.setAttribute('aria-live', 'polite'); host.append(message);
    if (loadError) status(loadError + ' Данные хранилища не перезаписаны. Скачайте несохранённые попытки.', true);
    else if (dirty) status('Есть несохранённые изменения. Они доступны в этой вкладке; скачайте попытку до закрытия страницы.', true);
  }
  function focusContent() { const n = host.querySelector('.game-content h2') || host.querySelector('h1'); if (n) { n.tabIndex = -1; n.focus({ preventScroll: true }); } }
  function show(entry) { if (deleting.has(entry.id)) { shell('Попытка удаляется'); host.append(link('Все учебные игры', '#learn/games')); return; } cancelRead(); activeId = entry.id; game = entry.game; state = entry.state; selection = entry.selected; activeHash = routeFor(entry.id); history.replaceState(null, '', activeHash); render(); }
  function activate(entry, restore = false) {
    if (deleting.has(entry.id)) { status('Дождитесь окончания удаления этой попытки.', true); return; }
    const existing = entries.find(e => e.id === entry.id);
    if (existing && !restore) { show(existing); return; }
    if (!existing && entries.length >= P.MAX_ENTRIES) { status('Сохранено 5 игр. Скачайте и удалите одну попытку перед добавлением новой.', true); return; }
    if (restore && !window.confirm(existing ? 'Заменить сохранённую попытку прогрессом из файла?' : 'Добавить игру и восстановить прогресс из файла?')) return;
    entries = existing ? entries.map(e => e.id === entry.id ? entry : e) : [...entries, entry]; persist(); show(entry);
  }
  function restart() { if (window.confirm('Начать заново? Сохранённые ответы и предметы этой попытки будут сброшены.')) { const next = game.type === 'QUIZ' ? R.initialQuiz(game) : R.initialEscape(game); if (update(next, null)) render(); } }
  function menu() { cancelRead(); activeHash = ''; activeId = ''; game = null; state = null; history.replaceState(null, '', '#learn/games'); return open('#learn/games'); }
  function retryButton() { const b = button('Повторить сохранение', persist); b.className = 'game-retry-save'; b.hidden = !dirty && !loadError; return b; }
  function render() {
    shell(game.title); host.append(el('p', game.description, 'learning-body'));
    const content = el('article', undefined, 'game-content'); if (game.type === 'QUIZ') renderQuiz(content); else renderEscape(content); host.append(content);
    const actions = el('div', undefined, 'learning-tools'); actions.append(button('Скачать игру и прогресс', () => download(entries.find(e => e.id === activeId))), retryButton(), button('Начать заново', restart), button('Все учебные игры', menu)); host.append(actions); focusContent();
  }  function renderQuiz(content) {
    const result = R.quizResult(game, state);
    if (state.complete) { content.append(el('h2', 'Викторина завершена'), el('p', 'Правильно: ' + result.correct + ' из ' + result.total + '.', 'game-result'), el('p', 'Результат этой попытки. Это учебная самопроверка, не сертификат.')); return; }
    const question = game.quizData[state.index]; const answered = state.answers.find(a => a.questionId === question.id);
    content.append(el('span', 'Вопрос ' + (state.index + 1) + ' из ' + game.quizData.length, 'learning-meta'), el('h2', question.question));
    const group = el('fieldset', undefined, 'game-options'); group.append(el('legend', 'Выберите один ответ'));
    question.options.forEach(option => {
      const label = el('label', undefined, 'game-option'); const input = el('input'); input.type = 'radio'; input.name = 'game-answer'; input.value = option.id; input.checked = (answered ? answered.optionId : selection) === option.id; input.disabled = !!answered;
      input.addEventListener('change', () => { if (update(state, option.id)) check.disabled = false; });
      label.append(input, el('span', option.text)); if (answered && option.isCorrect) label.append(el('strong', 'Верный ответ', 'game-answer-note')); group.append(label);
    }); content.append(group);
    const check = button('Проверить ответ', () => { try { if (update(R.answerQuiz(game, state, selection), null)) render(); } catch (e) { status(e.message, true); } }); check.disabled = selection === null;
    if (!answered) content.append(check);
    else {
      const explanation = el('section', undefined, 'learning-review'); const correct = question.options.find(o => o.id === answered.optionId)?.isCorrect;
      explanation.append(el('h3', correct ? 'Верно' : 'Неверно — разберём ответ'), el('p', question.explanation, 'learning-body'));
      explanation.append(button(state.index === game.quizData.length - 1 ? 'Показать результат' : 'Следующий вопрос', () => { try { if (update(R.nextQuiz(game, state), null)) render(); } catch (e) { status(e.message, true); } })); content.append(explanation);
    }
  }
  function renderEscape(content) {
    const scene = game.escapeRoomData.scenes.find(s => s.id === state.sceneId);
    content.append(el('span', state.ended ? 'ФИНАЛ' : 'СЦЕНА', 'learning-meta'), el('h2', scene.title), el('p', scene.description, 'learning-body'));
    const inventory = el('section', undefined, 'game-inventory'); inventory.append(el('h3', 'Инвентарь'));
    if (!state.inventory.length) inventory.append(el('p', 'Пока пусто')); else { const list = el('ul'); state.inventory.forEach(item => list.append(el('li', item))); inventory.append(list); } content.append(inventory);
    if (state.ended) { content.append(el('p', 'Квест завершён. Можно начать новую попытку или выбрать другую игру.', 'game-result')); return; }
    const choices = el('div', undefined, 'game-choices');
    scene.choices.forEach((choice, index) => { const locked = choice.requiredItem && !state.inventory.includes(choice.requiredItem); const b = button(choice.text, () => { try { if (update(R.moveEscape(game, state, index), null)) render(); } catch (e) { status(e.message, true); } }); b.disabled = !!locked; if (locked) b.append(el('small', 'Нужен предмет: ' + choice.requiredItem)); choices.append(b); }); content.append(choices);
  }
  async function loadExample(id) {
    const example = examples[id]; if (!example) { shell('Игра не найдена'); host.append(link('Все учебные игры', '#learn/games')); return; }
    shell(example[0]); status('Загружаю пример…'); const token = revision; controller = new AbortController(); const own = controller; timer = setTimeout(() => own.abort(), 10000);
    try {
      const response = await fetch(example[1], { signal: own.signal, credentials: 'same-origin' }); if (!response.ok) throw new Error('Не удалось загрузить пример. HTTP ' + response.status);
      if (Number(response.headers.get('content-length')) > R.MAX_BYTES) throw new Error('Пример превышает допустимый размер');
      const raw = await response.text(); if (token !== revision) return; const entry = await P.createEntry(raw); if (token !== revision) return; activate(entry);
    } catch (e) { if (token !== revision) return; status(e.name === 'AbortError' ? 'Загрузка заняла слишком много времени. Попробуйте ещё раз.' : e.message, true); host.append(button('Повторить загрузку', () => { cancelRead(); return loadExample(id); }), link('Все учебные игры', '#learn/games')); }
    finally { if (token === revision) { clearTimeout(timer); controller = null; } }
  }
  async function remove(entry) {
    if (deleting.has(entry.id) || !window.confirm('Удалить игру «' + entry.game.title + '» и её попытку из этого браузера? Сначала можно скачать копию.')) return;
    deleting.add(entry.id); const token = revision;
    queue = queue.then(async () => {
      const snapshotVersion = version; const candidate = entries.filter(e => e.id !== entry.id); const result = await P.saveCollection(storage(), candidate, expectedRaw);
      if (!result.ok) { if (token === revision) status(result.error + ' Попытка не удалена.', true); return result; }
      entries = entries.filter(e => e.id !== entry.id); expectedRaw = result.raw; loadError = ''; if (snapshotVersion === version) pending(false); if (activeHash === routeFor(entry.id)) menu(); else if (token === revision) overview(); return result;
    }).catch(error => { status(error.message, true); return { ok: false }; }).finally(() => { deleting.delete(entry.id); });
    return queue;
  }
  async function reread() {
    if (!window.confirm(dirty ? 'Перечитать хранилище и отказаться от несохранённых изменений? Сначала скачайте попытки.' : 'Перечитать актуальные попытки из хранилища браузера?')) return;
    const token = revision, snapshotVersion = version; await queue; if (token !== revision) return;
    if (snapshotVersion !== version) { status('После подтверждения появились новые изменения. Повторите чтение хранилища.', true); return; }
    const result = await P.loadCollection(storage()); if (token !== revision) return;
    if (snapshotVersion !== version) { status('После подтверждения появились новые изменения. Повторите чтение хранилища.', true); return; }
    if (result.error) { status(result.error + ' Данные вкладки сохранены.', true); return; }
    entries = result.entries; expectedRaw = result.raw; loadError = ''; pending(false); overview();
  }
  function overview() {
    cancelRead();
    shell('Учебные игры');
    const saved = el('section', undefined, 'learning-courses'); saved.append(el('h2', 'Мои попытки'));
    if (!entries.length) saved.append(el('p', 'Сохранённых игр пока нет. Начните пример или выберите JSON.'));
    entries.forEach(entry => { const row = el('article'); const progress = entry.game.type === 'QUIZ' ? R.quizResult(entry.game, entry.state) : null; const summary = progress ? (progress.complete ? 'Завершено. ' : '') + 'Ответов: ' + progress.answered + ' из ' + progress.total : (entry.state.ended ? 'Квест завершён' : 'Сцена: ' + entry.game.escapeRoomData.scenes.find(s => s.id === entry.state.sceneId).title) + ' · предметов: ' + entry.state.inventory.length;
      row.append(el('h3', entry.game.title), el('p', summary), link('Продолжить →', routeFor(entry.id))); const actions = el('div', undefined, 'learning-tools'); actions.append(button('Скачать игру и прогресс', () => download(entry)), button('Удалить попытку', () => remove(entry))); row.append(actions); saved.append(row); }); host.append(saved, retryButton());
    const list = el('div', undefined, 'learning-courses'); Object.entries(examples).forEach(([id, value]) => { const row = el('article'); row.append(el('h2', value[0]), el('p', id === 'quiz' ? 'Выберите ответ и разберите каждую ошибку.' : 'Соберите доказательства и откройте путь к релизу.'), link('Начать →', '#learn/games/' + id)); list.append(row); }); host.append(list);
    const section = el('section', undefined, 'learning-deck'); section.append(el('h2', 'Открыть свою игру'), el('p', 'GameContent JSON до 128 КиБ или копия игры с прогрессом до 160 КиБ. До 5 игр без автоматического удаления. Файл не отправляется на сервер. Только текстовый формат: поле imageUrl не поддерживается.'));
    const label = el('label', 'Выбрать JSON игры', 'learning-file'); const input = el('input'); input.type = 'file'; input.accept = '.json,application/json'; label.append(input); section.append(label); const preview = el('div'); section.append(preview); host.append(section, button('Перечитать попытки', reread)); const token = revision; let selectionId = 0;
    input.addEventListener('change', async () => { const file = input.files[0]; if (!file) return; const request = ++selectionId; preview.replaceChildren(); status('Проверяю файл…');
      try {
        if (file.size > P.MAX_BUNDLE_BYTES) throw new Error('Размер файла превышает 160 КиБ'); const raw = await file.text(); if (token !== revision || request !== selectionId) return;
        const object = JSON.parse(raw); const restore = !!object && typeof object === 'object' && Object.hasOwn(object, 'schemaVersion'); const entry = restore ? await P.importBundle(raw) : await P.createEntry(raw); if (token !== revision || request !== selectionId) return;
        preview.append(el('h3', entry.game.title), el('p', entry.game.description), el('p', restore ? 'Копия игры с прогрессом. Замена существующей попытки потребует подтверждения.' : 'Готовая игра. Если она уже есть, продолжится сохранённая попытка.'), button(restore ? 'Восстановить попытку' : 'Открыть импортированную игру', () => { if (token !== revision || request !== selectionId) return; activate(entry, restore); })); status('Формат проверен. Можно открыть игру.');
      } catch (e) { if (token === revision && request === selectionId) status(e.message, true); } finally { input.value = ''; }
    }); focusContent();
  }
  async function open(hash) {
    host = document.getElementById('learningView'); host.hidden = false; document.body.classList.add('learning-mode'); if (activeHash === hash) return;
    cancelRead(); activeHash = hash; const token = revision; shell('Учебные игры'); status('Читаю сохранённые попытки…'); document.querySelectorAll('[data-view-link]').forEach(a => a.classList.toggle('active', a.dataset.viewLink === 'learn'));
    await ensureLoaded(); if (token !== revision) return;
    const parts = hash.split('/'); if (parts[2] === 'saved') { const entry = entries.find(e => e.id === parts[3]); if (entry) show(entry); else { shell('Попытка не найдена в этом браузере'); host.append(link('Открыть игры или восстановить копию', '#learn/games')); } }
    else if (parts[2]) await loadExample(parts[2]); else overview();
  }
  window.EclipseLearningGameView = { open, leave };
}());