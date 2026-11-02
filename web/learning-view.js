(function () {
  'use strict';
  const R = window.EclipseLearningRuntime;
  const courses = window.EclipseLearningContent.courses;
  let host, activeCourse, state, blocked = false, revision = 0;
  const pending = new Map();
  function warnUnsaved(event) { event.preventDefault(); event.returnValue = ''; }
  function updatePending(course, value) {
    if (value) pending.set(course.id, value); else pending.delete(course.id);
    window.removeEventListener('beforeunload', warnUnsaved);
    if (pending.size) window.addEventListener('beforeunload', warnUnsaved);
  }
  function readProgress(course) {
    return pending.has(course.id) ? { state: pending.get(course.id), error: null } : R.loadProgress(course);
  }
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
  const link = (text, href) => { const n = el('a', text); n.href = href; return n; };
  const button = (text, action) => { const n = el('button', text); n.type = 'button'; n.addEventListener('click', action); return n; };
  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = link(name, url); a.download = name; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function notice(text, error = false) {
    const n = host.querySelector('.learning-status'); n.textContent = text; n.classList.toggle('is-error', error);
  }
  function persist() {
    if (blocked) { notice('Сохранённые данные повреждены. Сначала импортируйте копию или сбросьте прогресс.', true); return false; }
    const result = R.saveProgress(activeCourse, state);
    updatePending(activeCourse, result.ok ? null : state);
    notice(result.ok ? 'Сохранено в этом браузере' : 'Не удалось сохранить: ' + result.error, !result.ok);
    return result.ok;
  }
  function fileInput(label, max, read) {
    const wrap = el('label', label, 'learning-file');
    const renderRevision = revision; let selection = 0;
    const input = el('input'); input.type = 'file'; input.accept = '.json,application/json';
    input.addEventListener('change', async () => {
      const file = input.files[0]; if (!file) return;
      const request = ++selection;
      try {
        if (file.size > max) throw new Error('Файл превышает допустимый размер');
        const raw = await file.text();
        if (renderRevision !== revision || request !== selection) return;
        await read(raw);
      }
      catch (error) { if (renderRevision === revision && request === selection) notice(error.message, true); }
      finally { input.value = ''; }
    });
    wrap.append(input); return wrap;
  }
  function deckPanel() {
    const details = el('details', undefined, 'learning-deck'); details.append(el('summary', 'Импорт учебного материала из презентации'));
    details.append(el('p', 'JSON deck.job.v1, статус approved, до 128 КиБ. Сначала проверьте содержание. Генерация ИИ здесь не выполняется.'));
    const preview = el('div');
    details.append(fileInput('Выбрать JSON презентации', 128 * 1024, raw => {
      preview.replaceChildren();
      const deck = R.parseApprovedDeckJob(raw);
      preview.append(el('h3', deck.input.title), el('p', deck.input.objective), el('p', 'Аудитория: ' + deck.input.audience));
      deck.input.evidenceUrls.forEach(url => { const a = link(url, url); a.target = '_blank'; a.rel = 'noopener noreferrer'; preview.append(a, el('br')); });
      const list = el('ol');
      deck.slides.forEach(slide => { const item = el('li'); item.append(el('strong', slide.title)); slide.bullets.forEach(b => item.append(el('p', b))); if (slide.speakerNotes) item.append(el('p', slide.speakerNotes)); list.append(item); });
      preview.append(list);
      const label = el('label', undefined, 'learning-check'); const check = el('input'); check.type = 'checkbox'; label.append(check, el('span', 'Я проверил(а) материал как преподаватель и подтверждаю экспорт'));
      const exportButton = button('Экспорт урока в Markdown', () => { if (check.checked) download(deck.id + '.md', R.deckToLessonMarkdown(deck), 'text/markdown;charset=utf-8'); }); exportButton.disabled = true;
      check.addEventListener('change', () => { exportButton.disabled = !check.checked; });
      preview.append(label, exportButton); notice('Материал проверен по формату. Проверьте содержание ниже.');
    }), preview); return details;
  }
  function overview() {
    host.append(el('h1', 'Практика', 'learning-title'), el('p', 'От инструкции к результату: выполните задание, сохраните доказательства и проверьте себя.', 'learning-intro'));
    const list = el('div', undefined, 'learning-courses');
    courses.forEach(course => {
      const loaded = readProgress(course); const count = Object.values(loaded.state.lessons).filter(l => l.completed).length;
      const row = el('article'); row.append(el('span', String(course.lessons.length).padStart(2, '0') + ' уроков · ' + count + ' завершено', 'learning-meta'), el('h2', course.title), el('p', course.summary), link(count ? 'Продолжить →' : 'Открыть практику →', '#learn/' + course.id));
      if (loaded.error) row.append(el('p', 'Есть ошибка сохранённых данных. Откройте курс для восстановления.', 'is-error'));
      list.append(row);
    }); host.append(list, deckPanel());
  }
  function courseView(course, lessonId) {
    activeCourse = course; const loaded = readProgress(course); state = loaded.state; blocked = !!loaded.error;
    const lesson = course.lessons.find(l => l.id === lessonId) || course.lessons.find(l => !state.lessons[l.id].completed) || course.lessons[0];
    host.append(link('← Все практикумы', '#learn'), el('h1', course.title, 'learning-title'));
    const tools = el('div', undefined, 'learning-tools');
    tools.append(button('Скачать прогресс', () => { try { download(course.id + '-progress.json', R.exportProgress(course, state), 'application/json'); } catch (e) { notice(e.message, true); } }), fileInput('Восстановить прогресс', R.MAX_PROGRESS_BYTES, raw => {
      const imported = R.importProgress(course, raw);
      const count = Object.values(imported.lessons).filter(l => l.completed).length;
      if (!window.confirm('Курс: ' + course.title + '. Завершено уроков: ' + count + '. Заменить текущий прогресс данными из файла?')) return;
      const saved = R.saveProgress(course, imported); if (!saved.ok) throw new Error(saved.error);
      updatePending(course, null); open(location.hash); notice('Прогресс восстановлен');
    }), button('Сбросить', () => {
      if (!window.confirm('Удалить ответы и прогресс этого курса в этом браузере? Сначала можно скачать копию.')) return;
      const saved = R.saveProgress(course, R.emptyProgress(course)); if (!saved.ok) { notice(saved.error, true); return; } updatePending(course, null); open(location.hash); notice('Прогресс сброшен');
    })); host.append(tools);
    const layout = el('div', undefined, 'learning-layout'); const nav = el('nav', undefined, 'learning-outline'); nav.setAttribute('aria-label', 'Уроки курса');
    course.lessons.forEach((l, index) => { const a = link(String(index + 1).padStart(2, '0') + '  ' + l.title + (state.lessons[l.id].completed ? ' · выполнено' : ''), '#learn/' + course.id + '/' + l.id); if (l.id === lesson.id) a.setAttribute('aria-current', 'step'); nav.append(a); });
    const article = el('article', undefined, 'learning-lesson'); article.append(el('span', 'УРОК ' + (course.lessons.indexOf(lesson) + 1) + ' / ' + course.lessons.length, 'learning-meta'), el('h2', lesson.title), el('p', lesson.body, 'learning-body'), el('h3', 'Задание'), el('p', lesson.task, 'learning-body'));
    const form = el('form'); const answer = state.lessons[lesson.id];
    const review = el('section', undefined, 'learning-review'); review.hidden = !R.validateLesson(lesson, answer).ok;
    const errors = el('div', undefined, 'learning-errors'); errors.setAttribute('role', 'alert');
    lesson.fields.forEach(field => {
      const label = el('label', undefined, 'learning-field'); label.append(el('span', field.label));
      const input = el('textarea'); input.name = field.id; input.rows = 5; input.maxLength = R.MAX_ANSWER; input.value = answer.answers[field.id] || ''; input.disabled = blocked;
      const hint = el('small', 'Минимум ' + field.minLength + ' символов. Без паролей и личных данных.'); hint.id = 'learn-hint-' + field.id; input.setAttribute('aria-describedby', hint.id);
      input.addEventListener('input', () => { state = R.editAnswer(course, state, lesson.id, field.id, input.value); review.hidden = true; review.querySelectorAll('input').forEach(c => { c.checked = false; }); errors.replaceChildren(); persist(); });
      label.append(input, hint); form.append(label);
    });
    const submit = el('button', 'Сохранить и открыть разбор'); submit.type = 'submit'; submit.disabled = blocked; form.append(errors, submit);
    form.addEventListener('submit', event => { event.preventDefault(); errors.replaceChildren(); const result = R.validateLesson(lesson, state.lessons[lesson.id]); if (!result.ok) { result.errors.forEach(e => errors.append(el('p', e))); errors.tabIndex = -1; errors.focus(); return; } if (!persist()) return; review.hidden = false; review.tabIndex = -1; review.focus(); });
    review.append(el('h3', 'Разбор'), el('p', lesson.debrief, 'learning-body'), el('h3', 'Самопроверка'), el('p', 'Это ваша оценка по критериям, а не проверка преподавателя или ИИ.'));
    const checks = [];
    lesson.criteria.forEach((criterion, index) => { const label = el('label', undefined, 'learning-check'); const check = el('input'); check.type = 'checkbox'; check.checked = answer.assessment.includes(index); check.disabled = blocked; checks.push(check); check.addEventListener('change', () => { state = R.setAssessment(course, state, lesson.id, checks.flatMap((c, i) => c.checked ? [i] : [])); persist(); }); label.append(check, el('span', criterion)); review.append(label); });
    review.append(el('h3', 'Применение'), el('p', lesson.transfer, 'learning-body'), button('Завершить урок', () => { try { state = R.completeLesson(course, state, lesson.id); if (!persist()) return; const next = course.lessons[course.lessons.indexOf(lesson) + 1]; if (next) location.hash = '#learn/' + course.id + '/' + next.id; else { open(location.hash); notice('Практикум завершён по вашей самооценке. Прогресс можно скачать.'); } } catch (e) { notice(e.message, true); } }));
    article.append(form, review); layout.append(nav, article); host.append(layout);
    if (blocked) notice(loaded.error + ' Импортируйте копию или сбросьте данные. Исходная запись не изменена.', true);
  }
  function open(hash) {
    revision++;
    host = document.getElementById('learningView'); host.replaceChildren(); host.hidden = false; document.body.classList.add('learning-mode');
    const status = el('p', '', 'learning-status'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); host.append(status);
    document.querySelectorAll('[data-view-link]').forEach(a => a.classList.toggle('active', a.dataset.viewLink === 'learn'));
    const parts = hash.split('/'); const course = courses.find(c => c.id === parts[1]);
    if (parts[1] && !course) { host.append(el('h1', 'Курс не найден'), link('Все практикумы', '#learn')); }
    else if (course) courseView(course, parts[2]); else overview();
    host.append(el('p', 'Ответы хранятся только в этом браузере. Для переноса на другое устройство скачайте прогресс.', 'learning-footnote'), link('Educator-AI · MIT', 'licenses/educator-ai-MIT.txt'));
    if (pending.size) notice('Есть несохранённые ответы. Они доступны в этой вкладке; вернитесь в курс и скачайте прогресс до закрытия страницы.', true);
    const title = host.querySelector('h1'); if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
    window.scrollTo({ top: 0 });
  }
  function close() { revision++; document.body.classList.remove('learning-mode'); const n = document.getElementById('learningView'); if (n) n.hidden = true; }
  window.EclipseLearningView = { open, close };
}());
