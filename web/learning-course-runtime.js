/* Adapted from Educator-AI, Copyright (c) 2025 PavelHopson, MIT.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions: The above copyright notice and this
 * permission notice shall be included in all copies or substantial portions of
 * the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
 * EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EclipseLearningCourses = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var MAX_BYTES = 256 * 1024, MAX_BUNDLE_BYTES = 288 * 1024, MAX_COURSES = 5;
  var STORAGE_KEY = 'eclipse-learning-courses-v1', entries = new WeakSet();
  function fail(message, code) { var error = new Error(message); error.code = code || 'INVALID'; throw error; }
  function record(value, allowed) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) fail('Ожидался простой объект');
    Reflect.ownKeys(value).forEach(function (key) {
      var prop = Object.getOwnPropertyDescriptor(value, key);
      if (!allowed.includes(key) || ['__proto__', 'constructor', 'prototype'].includes(key) || !prop.enumerable || !('value' in prop)) fail('Неизвестное или небезопасное поле');
    });
    return value;
  }
  function text(value, max) {
    if (typeof value !== 'string' || !value.trim() || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) fail('Некорректный или слишком длинный текст');
    return value;
  }
  function list(value, min, max) {
    if (!Array.isArray(value) || Object.getPrototypeOf(value) !== Array.prototype || value.length < min || value.length > max || Reflect.ownKeys(value).length !== value.length + 1) fail('Неверное число элементов');
    for (var i = 0; i < value.length; i++) { var prop = Object.getOwnPropertyDescriptor(value, String(i)); if (!prop || !('value' in prop)) fail('Некорректный массив'); }
    return value;
  }
  function freeze(value) { if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); } return value; }
  function decode(raw, max) {
    if (typeof raw !== 'string') return raw;
    if (new TextEncoder().encode(raw).length > max) fail('Файл превышает допустимый размер');
    try { return JSON.parse(raw); } catch (_) { fail('Некорректный JSON'); }
  }
  function encode(value, max) {
    var raw = JSON.stringify(value);
    if (new TextEncoder().encode(raw).length > max) fail('Данные превышают допустимый размер');
    return raw;
  }
  function normalize(input) {
    record(input, ['title', 'summary', 'level', 'modules']); var count = 0;
    var course = { title: text(input.title, 200), summary: text(input.summary, 8000), level: text(input.level, 120), modules: list(input.modules, 1, 20).map(function (module) {
      record(module, ['title', 'lessons', 'quiz']);
      var result = { title: text(module.title, 200), lessons: list(module.lessons, 1, 100).map(function (lesson) {
        if (++count > 100) fail('В курсе может быть не больше 100 уроков');
        record(lesson, ['heading', 'content', 'example']);
        var out = { heading: text(lesson.heading, 200), content: text(lesson.content, 24000) };
        if (Object.hasOwn(lesson, 'example')) out.example = text(lesson.example, 12000);
        return out;
      }) };
      if (Object.hasOwn(module, 'quiz')) result.quiz = list(module.quiz, 0, 30).map(function (q) { record(q, ['question', 'answer']); return { question: text(q.question, 4000), answer: text(q.answer, 8000) }; });
      return result;
    }) };
    encode(course, MAX_BYTES); return course;
  }
  async function parseCourse(raw) {
    var course = normalize(decode(raw, MAX_BYTES));
    if (!globalThis.crypto || !globalThis.crypto.subtle) fail('SHA-256 недоступен. Откройте библиотеку через HTTPS или localhost');
    var digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(course)));
    var entry = freeze({ id: Array.from(new Uint8Array(digest)).map(function (byte) { return byte.toString(16).padStart(2, '0'); }).join(''), course: course });
    entries.add(entry); return entry;
  }
  function refs(entry) {
    if (!entries.has(entry)) fail('Сначала загрузите курс');
    var result = []; entry.course.modules.forEach(function (module, m) { module.lessons.forEach(function (_, l) { result.push(m + ':' + l); }); }); return result;
  }
  function validateProgress(entry, progress) {
    record(progress, ['current', 'completed']); var valid = refs(entry);
    if (!valid.includes(progress.current)) fail('Текущий урок не найден в курсе');
    list(progress.completed, 0, valid.length).forEach(function (ref) { if (!valid.includes(ref)) fail('Отметка относится к другому уроку'); });
    if (new Set(progress.completed).size !== progress.completed.length) fail('Повтор отметки урока');
    return { current: progress.current, completed: valid.filter(function (ref) { return progress.completed.includes(ref); }) };
  }
  function initialProgress(entry) { return freeze({ current: refs(entry)[0], completed: [] }); }
  function setCurrent(entry, progress, ref) {
    var next = validateProgress(entry, progress); if (!refs(entry).includes(ref)) fail('Урок не найден'); next.current = ref; return freeze(next);
  }
  function completeLesson(entry, progress, ref, completed) {
    if (completed === undefined) completed = true;
    if (typeof completed !== 'boolean' || !refs(entry).includes(ref)) fail('Некорректная отметка урока');
    var next = validateProgress(entry, progress); next.completed = next.completed.filter(function (id) { return id !== ref; });
    if (completed) next.completed.push(ref); return freeze(validateProgress(entry, next));
  }
  function exportBundle(entry, progress) {
    return encode({ schemaVersion: 1, id: entry.id, course: entry.course, progress: validateProgress(entry, progress) }, MAX_BUNDLE_BYTES);
  }
  function markdownText(value) {
    // Imported content is plain text, including HTML, links and Markdown syntax.
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/[\\`*_{}\[\]()#+.!|~:\-@]/g, '\\$&');
  }
  function markdownHeading(value) { return markdownText(value.replace(/[\r\n\t]+/g, ' ')); }
  function courseToMarkdown(entry) {
    if (!entries.has(entry)) fail('Сначала загрузите курс');
    var course = entry.course;
    var lines = ['# ' + markdownHeading(course.title), '', 'Уровень: ' + markdownHeading(course.level), '', markdownText(course.summary), ''];
    course.modules.forEach(function (module, index) {
      lines.push('## ' + (index + 1) + '. ' + markdownHeading(module.title), '');
      module.lessons.forEach(function (lesson) {
        lines.push('### ' + markdownHeading(lesson.heading), '', markdownText(lesson.content), '');
        if (lesson.example) {
          var runs = lesson.example.match(/`+/g) || [];
          var fence = '`'.repeat(Math.max(3, runs.reduce(function (length, run) { return Math.max(length, run.length + 1); }, 0)));
          lines.push('Пример:', '', fence + 'text', lesson.example, fence, '');
        }
      });
      if (module.quiz && module.quiz.length) {
        lines.push('### Самопроверка', '');
        module.quiz.forEach(function (item, questionIndex) { lines.push('Вопрос ' + (questionIndex + 1) + ': ' + markdownText(item.question), '', 'Ответ: ' + markdownText(item.answer), ''); });
      }
    });
    return lines.join('\n');
  }
  async function importBundle(raw) {
    var bundle = record(decode(raw, MAX_BUNDLE_BYTES), ['schemaVersion', 'id', 'course', 'progress']);
    if (bundle.schemaVersion !== 1 || typeof bundle.id !== 'string' || !/^[a-f0-9]{64}$/.test(bundle.id)) fail('Неизвестная версия или ID курса');
    var parsed = await parseCourse(bundle.course);
    if (parsed.id !== bundle.id) fail('Содержимое курса изменилось: ID не совпадает');
    var result = freeze({ id: parsed.id, course: parsed.course, progress: freeze(validateProgress(parsed, bundle.progress)) }); entries.add(result); return result;
  }
  async function validateEntries(values) {
    if (!Array.isArray(values)) fail('Некорректная коллекция');
    if (values.length > MAX_COURSES) fail('Сохранено пять курсов. Сначала удалите один вручную', 'LIMIT');
    list(values, 0, MAX_COURSES); var result = [];
    for (var i = 0; i < values.length; i++) {
      var value = record(values[i], ['id', 'course', 'progress']);
      var entry = await importBundle({ schemaVersion: 1, id: value.id, course: value.course, progress: value.progress });
      if (result.some(function (item) { return item.id === entry.id; })) fail('Курс уже есть в коллекции'); result.push(entry);
    }
    return result;
  }
  async function decodeCollection(raw) {
    if (raw === null) return { entries: [], revision: 0 };
    var data = record(decode(raw, MAX_BUNDLE_BYTES * MAX_COURSES), ['schemaVersion', 'revision', 'entries']);
    if (data.schemaVersion !== 1 || !Number.isSafeInteger(data.revision) || data.revision < 1) fail('Неизвестная версия коллекции');
    return { entries: await validateEntries(data.entries), revision: data.revision };
  }
  async function loadCollection(storage) {
    var raw;
    try { raw = storage.getItem(STORAGE_KEY); } catch (_) { return { entries: [], raw: null, revision: 0, error: 'Локальное хранилище недоступно. Используйте экспорт JSON', code: 'STORAGE_UNAVAILABLE' }; }
    try { var data = await decodeCollection(raw); return { entries: data.entries, raw: raw, revision: data.revision, error: null, code: null }; }
    catch (_) { return { entries: [], raw: raw, revision: 0, error: 'Сохранённая коллекция повреждена. Она не была перезаписана', code: 'CORRUPT' }; }
  }
  async function saveCollection(storage, values, expectedRaw) {
    try {
      if (expectedRaw !== null && typeof expectedRaw !== 'string') fail('Неизвестное состояние хранилища');
      var current;
      try { current = storage.getItem(STORAGE_KEY); } catch (_) { fail('Локальное хранилище недоступно. Используйте экспорт JSON', 'STORAGE_UNAVAILABLE'); }
      if (current !== expectedRaw) fail('Коллекция изменена в другой вкладке. Перезагрузите её', 'CONFLICT');
      var previous;
      try { previous = await decodeCollection(current); } catch (_) { fail('Повреждённая коллекция не перезаписана', 'CORRUPT'); }
      var validated = await validateEntries(values);
      if (previous.revision >= Number.MAX_SAFE_INTEGER) fail('Достигнут предел ревизий');
      var raw = encode({ schemaVersion: 1, revision: previous.revision + 1, entries: validated }, MAX_BUNDLE_BYTES * MAX_COURSES);
      try {
        if (storage.getItem(STORAGE_KEY) !== expectedRaw) fail('Коллекция изменена в другой вкладке. Перезагрузите её', 'CONFLICT');
        storage.setItem(STORAGE_KEY, raw);
      } catch (error) {
        if (error.code === 'CONFLICT') throw error;
        if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') fail('Недостаточно места. Курс остался в памяти: экспортируйте JSON', 'QUOTA');
        fail('Не удалось сохранить. Курс остался в памяти: экспортируйте JSON', 'STORAGE_UNAVAILABLE');
      }
      return { ok: true, raw: raw, revision: previous.revision + 1, error: null, code: null };
    } catch (error) { return { ok: false, raw: expectedRaw, error: error.message, code: error.code || 'INVALID' }; }
  }
  return { MAX_BYTES: MAX_BYTES, MAX_BUNDLE_BYTES: MAX_BUNDLE_BYTES, MAX_COURSES: MAX_COURSES, STORAGE_KEY: STORAGE_KEY, parseCourse: parseCourse, initialProgress: initialProgress, setCurrent: setCurrent, completeLesson: completeLesson, exportBundle: exportBundle, courseToMarkdown: courseToMarkdown, importBundle: importBundle, loadCollection: loadCollection, saveCollection: saveCollection };
}));
