(function () {
  'use strict';
  const R = window.EclipseLearningCourses;
  const verified = new Map();
  const trusted = entry => verified.get(entry.id) || entry;
  let host, entries = [], expectedRaw = null, loadError = '', loaded = false, loading = null;
  let revision = 0, activeHash = '', changeVersion = 0, dirty = false, queue = Promise.resolve(), controller = null;
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
  const link = (text, href) => { const n = el('a', text); n.href = href; return n; };
  const button = (text, action) => { const n = el('button', text); n.type = 'button'; n.addEventListener('click', action); return n; };
  const url = (id, ref) => '#learn/courses/' + id + (ref ? '/' + ref.replace(':', '/') : '');
  function warn(event) { event.preventDefault(); event.returnValue = ''; }
  function pending(value) { dirty = value; window.removeEventListener('beforeunload', warn); if (dirty) window.addEventListener('beforeunload', warn); }
  function storage() { try { return window.localStorage; } catch (_) { return null; } }
  function status(text, error = false) { if (!activeHash || !host) return; host.querySelectorAll('.course-save-retry').forEach(n => { n.hidden = !dirty && !loadError; }); const n = host.querySelector('.learning-status'); if (n) { n.textContent = text; n.classList.toggle('is-error', error); } }
  async function ensureLoaded() {
    if (loaded) return;
    if (!loading) loading = R.loadCollection(storage()).then(result => { entries = result.entries; entries.forEach(e => verified.set(e.id, e)); expectedRaw = result.raw; loadError = result.error || ''; loaded = true; }).finally(() => { loading = null; });
    await loading;
  }
  function save() {
    pending(true); changeVersion++;
    queue = queue.then(async () => {
      const snapshot = entries.slice(); const snapshotVersion = changeVersion;
      const result = await R.saveCollection(storage(), snapshot, expectedRaw);
      if (result.ok) { expectedRaw = result.raw; loadError = ''; if (snapshotVersion === changeVersion) pending(false); status(dirty ? 'Есть несохранённые изменения. Скачайте копию курса.' : 'Курс и прогресс сохранены в этом браузере.', dirty); }
      else { loadError = result.error; status(result.error + ' Изменения доступны в этой вкладке. Скачайте курс с прогрессом до закрытия страницы.', true); }
      return result;
    }).catch(error => { loadError = error.message; status(error.message, true); return { ok: false }; });
    return queue;
  }
  function downloadFile(name, raw, type) {
    const href = URL.createObjectURL(new Blob([raw], { type })); const a = link('Курс', href); a.download = name; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(href), 1000);
  }
  function download(entry) { downloadFile('course-' + entry.id.slice(0, 12) + '.json', R.exportBundle(trusted(entry), entry.progress), 'application/json'); }
  function close() { revision++; activeHash = ''; if (controller) controller.abort(); controller = null; }
  function shell(title) {
    host.replaceChildren(); host.append(link('← Практикумы', '#learn'), el('h1', title, 'learning-title'));
    const message = el('p', '', 'learning-status'); message.setAttribute('role', 'status'); message.setAttribute('aria-live', 'polite'); host.append(message);
    if (loadError) status(loadError + ' Исходные данные не перезаписаны. Новые изменения можно скачать файлом.', true);
    else if (dirty) status('Есть несохранённые изменения в этой вкладке. Скачайте курс с прогрессом.', true);
  }
  async function reread() {
    if (!window.confirm(dirty ? 'Перечитать хранилище и отказаться от несохранённых изменений? Сначала скачайте нужные курсы.' : 'Перечитать актуальные курсы из хранилища браузера?')) return;
    const token = revision; const version = changeVersion; await queue;
    if (token !== revision) return;
    if (version !== changeVersion) { status('Данные вкладки изменились после подтверждения. Повторите чтение хранилища.', true); return; }
    const result = await R.loadCollection(storage()); if (token !== revision) return;
    if (version !== changeVersion) { status('Данные вкладки изменились. Повторите чтение хранилища.', true); return; }
    if (result.error) { status(result.error + ' Текущие данные вкладки сохранены.', true); return; }
    entries = result.entries; entries.forEach(e => verified.set(e.id, e)); expectedRaw = result.raw; loadError = ''; pending(false); await open(activeHash);
  }
  function preview(entry, restore, box) {
    box.replaceChildren(); box.append(el('h3', entry.course.title), el('p', entry.course.summary, 'learning-body'), el('p', 'Уровень: ' + entry.course.level));
    const list = el('ol'); entry.course.modules.forEach(m => list.append(el('li', m.title + ' · ' + m.lessons.length + ' ур.'))); box.append(list);
    const existing = entries.find(e => e.id === entry.id); let adding = false;
    box.append(button(existing && !restore ? 'Продолжить этот курс' : restore ? 'Восстановить курс и прогресс' : 'Добавить курс', async () => {
      if (adding) return;
      const current = entries.find(e => e.id === entry.id);
      if (current && !restore) { location.hash = url(current.id); return; }
      if (!current && entries.length >= 5) { status('Уже добавлено 5 курсов. Скачайте и удалите один из них перед добавлением нового.', true); return; }
      if (!window.confirm(restore ? 'Восстановить курс и его прогресс из файла? Существующий прогресс этого курса будет заменён.' : 'Добавить этот курс в локальную библиотеку браузера?')) return;
      adding = true; verified.set(entry.id, entry); const token = revision; const item = { ...entry, progress: entry.progress || R.initialProgress(entry) }; entries = current ? entries.map(e => e.id === item.id ? item : e) : [...entries, item];
      await save(); adding = false; if (token === revision) location.hash = url(item.id);
    }));
  }
  async function parse(raw) {
    const object = JSON.parse(raw);
    if (Object.hasOwn(object, 'schemaVersion')) return { entry: await R.importBundle(raw), restore: true };
    return { entry: await R.parseCourse(raw), restore: false };
  }
  function importer() {
    const section = el('section', undefined, 'learning-deck'); section.append(el('h2', 'Добавить готовый курс'), el('p', 'CourseContent JSON до 256 КиБ или копия курса с прогрессом до 288 КиБ. Файл остаётся в браузере. До 5 курсов, без автоматического удаления.'));
    const label = el('label', 'Выбрать JSON курса', 'learning-file'); const input = el('input'); input.type = 'file'; input.accept = '.json,application/json'; label.append(input); section.append(label); const box = el('div'); section.append(box); const token = revision; let selection = 0;
    input.addEventListener('change', async () => { const file = input.files[0]; if (!file) return; const request = ++selection; box.replaceChildren(); status('Проверяю курс…');
      try { if (file.size > R.MAX_BUNDLE_BYTES) throw new Error('Файл превышает 288 КиБ'); const raw = await file.text(); if (token !== revision || request !== selection) return; const parsed = await parse(raw); if (token !== revision || request !== selection) return; preview(parsed.entry, parsed.restore, box); status('Формат проверен. Просмотрите содержание перед добавлением.'); }
      catch (e) { if (token === revision && request === selection) status(e.message, true); } finally { input.value = ''; }
    });
    section.append(button('Открыть пример курса', async () => {
      const request = ++selection; box.replaceChildren(); status('Загружаю пример…'); if (controller) controller.abort(); controller = new AbortController(); const ownController = controller; const timer = setTimeout(() => ownController.abort(), 10000);
      try { const response = await fetch('learning-examples/course.json', { signal: ownController.signal, credentials: 'same-origin' }); if (!response.ok) throw new Error('Пример недоступен: HTTP ' + response.status); const raw = await response.text(); if (token !== revision || request !== selection) return; const entry = await R.parseCourse(raw); if (token !== revision || request !== selection) return; preview(entry, false, box); status('Пример готов. Добавьте его, чтобы начать.'); }
      catch (e) { if (token === revision && request === selection) status(e.name === 'AbortError' ? 'Загрузка прервана. Попробуйте ещё раз.' : e.message, true); } finally { clearTimeout(timer); if (controller === ownController) controller = null; }
    })); return section;
  }
  async function remove(entry) {
    if (!window.confirm('Удалить «' + entry.course.title + '» и его прогресс из этого браузера? Сначала можно скачать копию.')) return;
    const token = revision;
    queue = queue.then(async () => {
      const version = changeVersion; const candidate = entries.filter(e => e.id !== entry.id); const result = await R.saveCollection(storage(), candidate, expectedRaw);
      if (!result.ok) { if (token === revision) status(result.error + ' Курс не удалён.', true); return result; }
      entries = entries.filter(e => e.id !== entry.id); expectedRaw = result.raw; loadError = ''; if (version === changeVersion) pending(false);
      if (token === revision) { if (activeHash === '#learn/courses') renderList(); else location.hash = '#learn/courses'; }
      return result;
    }).catch(error => { status(error.message, true); return { ok: false }; });
    return queue;
  }
  function exportTools(entry) {
    const panel = el('details', undefined, 'course-question learning-export'); panel.append(el('summary', 'Экспорт курса'));
    panel.append(el('p', 'JSON — для переноса курса и прогресса. Markdown — для чтения и заметок.', 'learning-export-note'));
    const actions = el('div', undefined, 'learning-tools');
    const message = el('p', '', 'learning-export-note'); message.setAttribute('role', 'status'); message.setAttribute('aria-live', 'polite');
    const notify = (text, error = false) => { message.textContent = text; message.classList.toggle('is-error', error); };
    const copy = button('Скопировать Markdown', async () => {
      const token = revision; copy.disabled = true; notify('Копирую…');
      try {
        if (!window.navigator?.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await window.navigator.clipboard.writeText(R.courseToMarkdown(trusted(entry)));
        if (token === revision && activeHash && host.contains(panel)) notify('Markdown скопирован.');
      } catch (_) { if (token === revision && activeHash && host.contains(panel)) notify('Не удалось скопировать. Скачайте курс .md.', true); }
      finally { copy.disabled = false; }
    });
    actions.append(button('Скачать курс и прогресс', () => { try { download(entry); } catch (error) { notify(error.message, true); } }), button('Скачать курс .md', () => {
      try { downloadFile('course-' + entry.id.slice(0, 12) + '.md', R.courseToMarkdown(trusted(entry)), 'text/markdown;charset=utf-8'); } catch (error) { notify(error.message, true); }
    }), copy); panel.append(actions, message); return panel;
  }
  function tools(entry) {
    const row = el('div', undefined, 'learning-tools'); const retry = button('Повторить сохранение', save); retry.className = 'course-save-retry'; retry.hidden = !dirty && !loadError; row.append(exportTools(entry), retry, button('Удалить курс', () => remove(entry))); return row;
  }
  function renderList() {
    shell('Мои курсы'); host.append(el('p', 'Готовые материалы без внешнего ИИ. Прогресс отмечает прочтение, а не подтверждённые знания.', 'learning-intro'));
    if (!entries.length) host.append(el('p', 'Курсов пока нет. Откройте пример или выберите свой JSON.'));
    const list = el('div', undefined, 'learning-courses'); entries.forEach(entry => { const row = el('article'); const total = entry.course.modules.reduce((n, m) => n + m.lessons.length, 0); row.append(el('h2', entry.course.title), el('p', entry.course.summary, 'learning-body'), el('span', 'Прочитано ' + entry.progress.completed.length + ' из ' + total, 'learning-meta'), link('Продолжить курс →', url(entry.id)), tools(entry)); list.append(row); }); host.append(list, importer(), button('Перечитать хранилище', reread));
  }
  function reader(entry, ref) {
    const refs = entry.course.modules.flatMap((m, mi) => m.lessons.map((l, li) => mi + ':' + li)); if (!refs.includes(ref)) { shell('Урок не найден'); host.append(link('Продолжить курс', url(entry.id))); return; }
    const [mi, li] = ref.split(':').map(Number); const module = entry.course.modules[mi]; const lesson = module.lessons[li];
    if (entry.progress.current !== ref) { const progress = R.setCurrent(trusted(entry), entry.progress, ref); entry = { ...entry, progress }; entries = entries.map(e => e.id === entry.id ? entry : e); save(); }
    shell(entry.course.title); host.append(link('← Мои курсы', '#learn/courses'), tools(entry));
    const layout = el('div', undefined, 'learning-layout'); const nav = el('nav', undefined, 'learning-outline'); nav.setAttribute('aria-label', 'Модули и уроки');
    entry.course.modules.forEach((m, mIndex) => { nav.append(el('h3', m.title)); m.lessons.forEach((l, lIndex) => { const key = mIndex + ':' + lIndex; const a = link(l.heading + (entry.progress.completed.includes(key) ? ' · прочитано' : ''), url(entry.id, key)); if (key === ref) a.setAttribute('aria-current', 'step'); nav.append(a); }); });
    const article = el('article', undefined, 'learning-lesson course-reader'); article.append(el('span', 'Модуль ' + (mi + 1) + ' · урок ' + (li + 1), 'learning-meta'), el('h2', lesson.heading), el('p', lesson.content, 'learning-body'));
    if (lesson.example) article.append(el('h3', 'Пример'), el('pre', lesson.example, 'course-example'));
    if (module.quiz?.length) { const questions = el('section'); questions.append(el('h3', 'Проверьте себя')); module.quiz.forEach(q => { const details = el('details', undefined, 'course-question'); details.append(el('summary', q.question + ' — показать ответ'), el('p', q.answer, 'learning-body')); questions.append(details); }); article.append(questions); }
    const completed = entry.progress.completed.includes(ref); article.append(button(completed ? 'Снять отметку «прочитано»' : 'Отметить как прочитанное', async () => { const token = revision; const current = entries.find(e => e.id === entry.id); const progress = R.completeLesson(trusted(current), current.progress, ref, !current.progress.completed.includes(ref)); entries = entries.map(e => e.id === entry.id ? { ...e, progress } : e); await save(); if (token === revision) reader(entries.find(e => e.id === entry.id), ref); }), el('p', 'Отметка означает, что вы прочитали урок. Она не проверяет понимание.', 'learning-footnote'));
    const pager = el('nav', undefined, 'learning-tools'); pager.setAttribute('aria-label', 'Переход между уроками'); const index = refs.indexOf(ref); if (index > 0) pager.append(link('← Предыдущий урок', url(entry.id, refs[index - 1]))); if (index < refs.length - 1) pager.append(link('Следующий урок →', url(entry.id, refs[index + 1]))); else pager.append(link('К списку курсов →', '#learn/courses')); article.append(pager); const contents = el('details', undefined, 'course-outline'); contents.open = window.matchMedia ? window.matchMedia('(min-width: 761px)').matches : true; contents.append(el('summary', 'Содержание курса · урок ' + (mi + 1) + '.' + (li + 1)), nav); layout.append(contents, article); host.append(layout);
  }
  async function open(hash) {
    close(); activeHash = hash; const token = revision; host = document.getElementById('learningView'); host.hidden = false; document.body.classList.add('learning-mode'); shell('Мои курсы'); status('Читаю локальные курсы…');
    document.querySelectorAll('[data-view-link]').forEach(a => a.classList.toggle('active', a.dataset.viewLink === 'learn'));
    await ensureLoaded(); if (token !== revision) return;
    const parts = hash.split('/'); if (!parts[2]) renderList(); else { const entry = entries.find(e => e.id === parts[2]); if (!entry) { shell('Курс не найден в этом браузере'); host.append(link('Импортировать или открыть другой курс', '#learn/courses')); } else reader(entry, parts.length > 3 ? parts[3] + ':' + parts[4] : entry.progress.current); }
    const title = host.querySelector('h1'); if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); } window.scrollTo({ top: 0 });
  }
  window.EclipseLearningCourseView = { open, close };
}());
