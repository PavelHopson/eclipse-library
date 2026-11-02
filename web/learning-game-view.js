(function () {
  'use strict';
  const R = window.EclipseLearningGames;
  const examples = { quiz: ['Викторина: безопасная работа с кодом', 'learning-examples/quiz.json'], 'escape-room': ['Квест: путь к безопасному релизу', 'learning-examples/escape-room.json'] };
  let host, game = null, state = null, selection = null, activeHash = '', revision = 0, controller = null, timer = null;
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
  const link = (text, href) => { const n = el('a', text); n.href = href; return n; };
  const button = (text, action) => { const n = el('button', text); n.type = 'button'; n.addEventListener('click', action); return n; };
  function unfinished() { return !!game && (game.type === 'QUIZ' ? !state.complete : !state.ended); }
  function warn(event) { event.preventDefault(); event.returnValue = ''; }
  function guard() { window.removeEventListener('beforeunload', warn); if (unfinished()) window.addEventListener('beforeunload', warn); }
  function cancelRead() { revision++; if (controller) controller.abort(); controller = null; clearTimeout(timer); }
  function leave(nextHash) {
    if (!activeHash || nextHash === activeHash) return true;
    if (unfinished() && !window.confirm('Выйти из незавершённой игры? Результат этой попытки не сохранится.')) { history.replaceState(null, '', activeHash); return false; }
    cancelRead(); activeHash = ''; game = null; state = null; guard(); return true;
  }
  function status(text, error = false) { const n = host.querySelector('.learning-status'); if (n) { n.textContent = text; n.classList.toggle('is-error', error); } }
  function shell(title) {
    host.replaceChildren(); host.append(link('← Практикумы', '#learn'), el('h1', title, 'learning-title'), el('p', 'Игра без ИИ. Прогресс только в текущей попытке: при выходе или перезагрузке он сбрасывается.', 'learning-intro'));
    const message = el('p', '', 'learning-status'); message.setAttribute('role', 'status'); message.setAttribute('aria-live', 'polite'); host.append(message);
  }
  function focusContent() { const n = host.querySelector('.game-content h2') || host.querySelector('h1'); if (n) { n.tabIndex = -1; n.focus({ preventScroll: true }); } }
  function start(parsed) { game = parsed; state = game.type === 'QUIZ' ? R.initialQuiz(game) : R.initialEscape(game); selection = null; guard(); render(); }
  function restart() { if (!unfinished() || window.confirm('Начать заново? Ответы и предметы этой попытки будут сброшены.')) start(game); }
  function menu() {
    if (unfinished() && !window.confirm('Выйти из незавершённой игры? Результат этой попытки не сохранится.')) return;
    cancelRead(); activeHash = ''; game = null; state = null; guard(); history.replaceState(null, '', '#learn/games'); open('#learn/games');
  }
  function render() {
    shell(game.title); host.append(el('p', game.description, 'learning-body'));
    const content = el('article', undefined, 'game-content');
    if (game.type === 'QUIZ') renderQuiz(content); else renderEscape(content);
    host.append(content);
    const actions = el('div', undefined, 'learning-tools'); actions.append(button('Начать заново', restart), button('Все учебные игры', menu)); host.append(actions);
    guard(); focusContent();
  }
  function renderQuiz(content) {
    const result = R.quizResult(game, state);
    if (state.complete) { content.append(el('h2', 'Викторина завершена'), el('p', 'Правильно: ' + result.correct + ' из ' + result.total + '.', 'game-result'), el('p', 'Результат этой попытки. Это учебная самопроверка, не сертификат.')); return; }
    const question = game.quizData[state.index]; const answered = state.answers.find(a => a.questionId === question.id);
    content.append(el('span', 'Вопрос ' + (state.index + 1) + ' из ' + game.quizData.length, 'learning-meta'), el('h2', question.question));
    const group = el('fieldset', undefined, 'game-options'); group.append(el('legend', 'Выберите один ответ'));
    question.options.forEach(option => {
      const label = el('label', undefined, 'game-option'); const input = el('input'); input.type = 'radio'; input.name = 'game-answer'; input.value = option.id; input.checked = (answered ? answered.optionId : selection) === option.id; input.disabled = !!answered;
      input.addEventListener('change', () => { selection = option.id; check.disabled = false; });
      label.append(input, el('span', option.text)); if (answered && option.isCorrect) label.append(el('strong', 'Верный ответ', 'game-answer-note')); group.append(label);
    }); content.append(group);
    const check = button('Проверить ответ', () => { try { state = R.answerQuiz(game, state, selection); render(); } catch (e) { status(e.message, true); } }); check.disabled = selection === null;
    if (!answered) content.append(check);
    else {
      const explanation = el('section', undefined, 'learning-review'); const correct = question.options.find(o => o.id === answered.optionId)?.isCorrect;
      explanation.append(el('h3', correct ? 'Верно' : 'Неверно — разберём ответ'), el('p', question.explanation, 'learning-body'));
      explanation.append(button(state.index === game.quizData.length - 1 ? 'Показать результат' : 'Следующий вопрос', () => { try { state = R.nextQuiz(game, state); selection = null; render(); } catch (e) { status(e.message, true); } })); content.append(explanation);
    }
  }
  function renderEscape(content) {
    const scene = game.escapeRoomData.scenes.find(s => s.id === state.sceneId);
    content.append(el('span', state.ended ? 'ФИНАЛ' : 'СЦЕНА', 'learning-meta'), el('h2', scene.title), el('p', scene.description, 'learning-body'));
    const inventory = el('section', undefined, 'game-inventory'); inventory.append(el('h3', 'Инвентарь'));
    if (!state.inventory.length) inventory.append(el('p', 'Пока пусто')); else { const list = el('ul'); state.inventory.forEach(item => list.append(el('li', item))); inventory.append(list); } content.append(inventory);
    if (state.ended) { content.append(el('p', 'Квест завершён. Можно начать новую попытку или выбрать другую игру.', 'game-result')); return; }
    const choices = el('div', undefined, 'game-choices');
    scene.choices.forEach((choice, index) => { const locked = choice.requiredItem && !state.inventory.includes(choice.requiredItem); const b = button(choice.text, () => { try { state = R.moveEscape(game, state, index); render(); } catch (e) { status(e.message, true); } }); b.disabled = !!locked; if (locked) b.append(el('small', 'Нужен предмет: ' + choice.requiredItem)); choices.append(b); }); content.append(choices);
  }
  async function loadExample(id) {
    const example = examples[id]; if (!example) { shell('Игра не найдена'); host.append(link('Все учебные игры', '#learn/games')); return; }
    shell(example[0]); status('Загружаю пример…'); const token = revision; controller = new AbortController(); const signal = controller.signal;
    timer = setTimeout(() => controller?.abort(), 10000);
    try {
      const response = await fetch(example[1], { signal, credentials: 'same-origin' }); if (!response.ok) throw new Error('Не удалось загрузить пример. HTTP ' + response.status);
      const declared = Number(response.headers.get('content-length')); if (declared > R.MAX_BYTES) throw new Error('Пример превышает допустимый размер');
      const raw = await response.text(); if (token !== revision) return; start(R.parseGame(raw));
    } catch (e) { if (token !== revision) return; status(e.name === 'AbortError' ? 'Загрузка заняла слишком много времени. Попробуйте ещё раз.' : e.message, true); host.append(button('Повторить загрузку', () => { cancelRead(); loadExample(id); }), link('Все учебные игры', '#learn/games')); }
    finally { if (token === revision) { clearTimeout(timer); controller = null; } }
  }
  function overview() {
    shell('Учебные игры');
    const list = el('div', undefined, 'learning-courses'); Object.entries(examples).forEach(([id, value]) => { const row = el('article'); row.append(el('h2', value[0]), el('p', id === 'quiz' ? 'Выберите ответ и разберите каждую ошибку.' : 'Соберите доказательства и откройте путь к релизу.'), link('Начать →', '#learn/games/' + id)); list.append(row); }); host.append(list);
    const section = el('section', undefined, 'learning-deck'); section.append(el('h2', 'Открыть свою игру'), el('p', 'JSON формата Educator GameContent: QUIZ или ESCAPE_ROOM, до 128 КиБ. Файл не отправляется на сервер. Только текстовый формат. Поле imageUrl не поддерживается; удалите его перед импортом.'));
    const label = el('label', 'Выбрать JSON игры', 'learning-file'); const input = el('input'); input.type = 'file'; input.accept = '.json,application/json'; label.append(input); section.append(label); const preview = el('div'); section.append(preview); host.append(section);
    const token = revision; let selectionId = 0;
    input.addEventListener('change', async () => { const file = input.files[0]; if (!file) return; const request = ++selectionId; preview.replaceChildren(); status('Читаю файл…');
      try { if (file.size > R.MAX_BYTES) throw new Error('Размер файла превышает 128 КиБ'); const raw = await file.text(); if (token !== revision || request !== selectionId) return; const parsed = R.parseGame(raw); preview.append(el('h3', parsed.title), el('p', parsed.description), el('p', parsed.type === 'QUIZ' ? 'Викторина · вопросов: ' + parsed.quizData.length : 'Квест · сцен: ' + parsed.escapeRoomData.scenes.length), button('Начать импортированную игру', () => { cancelRead(); start(parsed); })); status('Формат проверен. Можно начать игру.'); }
      catch (e) { if (token === revision && request === selectionId) status(e.message, true); } finally { input.value = ''; }
    }); focusContent();
  }
  function open(hash) {
    host = document.getElementById('learningView'); host.hidden = false; document.body.classList.add('learning-mode');
    if (activeHash === hash) return;
    cancelRead(); activeHash = hash; host = document.getElementById('learningView'); host.hidden = false; document.body.classList.add('learning-mode');
    document.querySelectorAll('[data-view-link]').forEach(a => a.classList.toggle('active', a.dataset.viewLink === 'learn'));
    const id = hash.split('/')[2]; if (id) loadExample(id); else overview();
  }
  window.EclipseLearningGameView = { open, leave };
}());
