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
  else root.EclipseLearningRuntime = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var VERSION = 1, MAX_ANSWER = 8000, MAX_PROGRESS_BYTES = 512 * 1024;
  var controls = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
  function fail(message) { throw new Error(message); }
  function record(value, allowed, label) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) fail(label + ': ожидался простой объект');
    Object.keys(value).forEach(function (key) { if (!allowed.includes(key) || ['__proto__', 'prototype', 'constructor'].includes(key)) fail(label + ': неизвестное поле'); });
    return value;
  }
  function text(value, min, max, label) {
    if (typeof value !== 'string' || value.length < min || value.length > max || controls.test(value)) fail(label + ': некорректный текст');
    return value;
  }
  function array(value, min, max, label) {
    if (!Array.isArray(value) || value.length < min || value.length > max) fail(label + ': неверное число элементов');
    return value;
  }
  function id(value) {
    if (typeof value !== 'string' || !/^[a-z][a-z0-9-]{0,79}$/.test(value) || ['constructor', 'prototype'].includes(value)) fail('Некорректный ID');
    return value;
  }
  function schema(course) {
    id(course.id);
    array(course.lessons, 1, 32, 'Уроки');
    var ids = new Set();
    course.lessons.forEach(function (lesson) {
      id(lesson.id); if (ids.has(lesson.id)) fail('Повтор ID урока'); ids.add(lesson.id);
      var fields = new Set();
      array(lesson.fields, 1, 12, 'Поля').forEach(function (field) {
        id(field.id); if (fields.has(field.id)) fail('Повтор ID поля'); fields.add(field.id);
        if (!Number.isInteger(field.minLength) || field.minLength < 1 || field.minLength > MAX_ANSWER) fail('Некорректный порог ответа');
      });
      array(lesson.criteria, 1, 32, 'Критерии');
    });
    return course;
  }
  function emptyProgress(course) {
    schema(course);
    var lessons = {};
    course.lessons.forEach(function (lesson) {
      var answers = {}; lesson.fields.forEach(function (field) { answers[field.id] = ''; });
      lessons[lesson.id] = { answers: answers, assessment: [], completed: false };
    });
    return { version: VERSION, courseId: course.id, lessons: lessons };
  }
  function validateLesson(lesson, state) {
    var errors = [];
    lesson.fields.forEach(function (field) {
      var answer = state && state.answers && state.answers[field.id];
      if (typeof answer !== 'string' || answer.trim().length < field.minLength || answer.length > MAX_ANSWER || controls.test(answer)) errors.push(field.label + ': от ' + field.minLength + ' до ' + MAX_ANSWER + ' символов');
    });
    return { ok: errors.length === 0, errors: errors };
  }
  function normalize(course, value) {
    schema(course);
    record(value, ['version', 'courseId', 'lessons'], 'Прогресс');
    if (value.version !== VERSION || value.courseId !== course.id) fail('Версия или курс файла не совпадает');
    var lessonIds = course.lessons.map(function (lesson) { return lesson.id; });
    record(value.lessons, lessonIds, 'Уроки');
    var result = emptyProgress(course);
    course.lessons.forEach(function (lesson) {
      var row = record(value.lessons[lesson.id], ['answers', 'assessment', 'completed'], 'Урок');
      var fields = lesson.fields.map(function (field) { return field.id; });
      record(row.answers, fields, 'Ответы');
      var answers = {};
      fields.forEach(function (field) { answers[field] = text(row.answers[field], 0, MAX_ANSWER, 'Ответ'); });
      var assessment = array(row.assessment, 0, lesson.criteria.length, 'Самооценка').slice();
      if (new Set(assessment).size !== assessment.length || assessment.some(function (index) { return !Number.isInteger(index) || index < 0 || index >= lesson.criteria.length; })) fail('Некорректная самооценка');
      if (typeof row.completed !== 'boolean') fail('Некорректный статус урока');
      var next = { answers: answers, assessment: assessment.sort(function (a, b) { return a - b; }), completed: row.completed };
      if ((assessment.length || row.completed) && !validateLesson(lesson, next).ok) fail('Сначала заполните ответы');
      if (row.completed && assessment.length !== lesson.criteria.length) fail('Завершение требует самооценки по всем критериям');
      result.lessons[lesson.id] = next;
    });
    return result;
  }
  function parse(raw, maxBytes) {
    if (typeof raw !== 'string' || new TextEncoder().encode(raw).byteLength > maxBytes) fail('Файл превышает допустимый размер');
    try { return JSON.parse(raw); } catch (_) { fail('Не удалось прочитать JSON'); }
  }
  function importProgress(course, raw) { return normalize(course, parse(raw, MAX_PROGRESS_BYTES)); }
  function exportProgress(course, state) {
    var raw = JSON.stringify(normalize(course, state), null, 2);
    if (new TextEncoder().encode(raw).byteLength > MAX_PROGRESS_BYTES) fail('Прогресс превышает допустимый размер');
    return raw;
  }
  function storageKey(course) { return 'eclipse-library.learning.v1.' + id(course.id); }
  function storageOrDefault(storage) { return storage === undefined ? globalThis.localStorage : storage; }
  function loadProgress(course, storage) {
    var empty = emptyProgress(course);
    try {
      var raw = storageOrDefault(storage).getItem(storageKey(course));
      return { state: raw === null ? empty : importProgress(course, raw), error: null };
    } catch (error) { return { state: empty, error: 'Не удалось прочитать прогресс: ' + error.message + '. Сохранённые данные не перезаписаны.' }; }
  }
  function saveProgress(course, state, storage) {
    try { storageOrDefault(storage).setItem(storageKey(course), exportProgress(course, state)); return { ok: true, error: null }; }
    catch (error) { return { ok: false, error: 'Не удалось сохранить прогресс: ' + error.message + '. Экспортируйте файл, чтобы не потерять ответ.' }; }
  }
  function findLesson(course, lessonId) {
    var lesson = course.lessons.find(function (item) { return item.id === lessonId; });
    if (!lesson) fail('Урок не найден');
    return lesson;
  }
  function editAnswer(course, state, lessonId, fieldId, value) {
    var next = normalize(course, state), lesson = findLesson(course, lessonId);
    if (!lesson.fields.some(function (field) { return field.id === fieldId; })) fail('Поле не найдено');
    var row = next.lessons[lessonId];
    if (row.answers[fieldId] !== value) { row.answers[fieldId] = text(value, 0, MAX_ANSWER, 'Ответ'); row.assessment = []; row.completed = false; }
    return next;
  }
  function setAssessment(course, state, lessonId, indices) {
    var next = normalize(course, state); findLesson(course, lessonId);
    next.lessons[lessonId].assessment = indices; next.lessons[lessonId].completed = false;
    return normalize(course, next);
  }
  function completeLesson(course, state, lessonId) {
    var next = normalize(course, state); findLesson(course, lessonId);
    next.lessons[lessonId].completed = true;
    return normalize(course, next);
  }
  function dateTime(value, label) {
    text(value, 10, 64, label);
    if (!/^\d{4}-\d{2}-\d{2}T/.test(value) || !Number.isFinite(Date.parse(value))) fail(label + ': некорректная дата');
    return value;
  }
  function https(value) {
    text(value, 8, 480, 'Источник');
    var url; try { url = new URL(value); } catch (_) { fail('Некорректная ссылка'); }
    if (url.protocol !== 'https:' || url.username || url.password) fail('Разрешён только HTTPS без учётных данных');
    url.hash = ''; return url.toString();
  }
  function parseApprovedDeckJob(raw) {
    var root = record(parse(raw, 128 * 1024), ['schemaVersion', 'id', 'status', 'createdAt', 'updatedAt', 'input', 'slides', 'policy', 'approval'], 'Deck job');
    if (root.schemaVersion !== 'deck.job.v1' || root.status !== 'approved') fail('Нужен утверждённый deck.job.v1');
    dateTime(root.createdAt, 'Дата создания'); dateTime(root.updatedAt, 'Дата изменения');
    var input = record(root.input, ['title', 'objective', 'audience', 'format', 'sourceText', 'evidenceUrls'], 'Исходные данные');
    if (!['project-recap', 'lesson', 'pitch'].includes(input.format)) fail('Неизвестный формат презентации');
    text(input.sourceText, 40, 60000, 'Исходный текст');
    var policyKeys = ['externalActions', 'toolsAllowed', 'sourceContentTrusted', 'autoPublishAllowed', 'pptxRendered'];
    var policy = record(root.policy, policyKeys, 'Политика');
    policyKeys.forEach(function (key) { if (policy[key] !== false) fail('Небезопасная политика: ' + key); });
    var approval = record(root.approval, ['claimsVerified', 'rightsConfirmed', 'finalReviewComplete', 'approvedAt'], 'Approval');
    if (approval.claimsVerified !== true || approval.rightsConfirmed !== true || approval.finalReviewComplete !== true) fail('Approval заполнен не полностью');
    var slides = array(root.slides, 3, 20, 'Слайды').map(function (value) {
      var slide = record(value, ['id', 'kind', 'title', 'bullets', 'speakerNotes', 'sourceRefs'], 'Слайд');
      if (!['cover', 'content', 'evidence', 'summary'].includes(slide.kind)) fail('Неизвестный тип слайда');
      return { id: text(slide.id, 1, 256, 'ID слайда'), kind: slide.kind, title: text(slide.title, 2, 120, 'Заголовок'), bullets: array(slide.bullets, 1, 8, 'Тезисы').map(function (item) { return text(item, 2, 500, 'Тезис'); }), speakerNotes: text(slide.speakerNotes, 0, 2000, 'Заметки'), sourceRefs: array(slide.sourceRefs, 0, 12, 'Источники слайда').map(function (item) { return text(item, 1, 32, 'Ссылка на источник'); }) };
    });
    if (new Set(slides.map(function (slide) { return slide.id; })).size !== slides.length) fail('ID слайдов должны быть уникальны');
    return { schemaVersion: 'deck.job.v1', id: text(root.id, 1, 128, 'ID'), status: 'approved', input: { title: text(input.title, 3, 120, 'Название'), objective: text(input.objective, 10, 500, 'Цель'), audience: text(input.audience, 3, 240, 'Аудитория'), format: input.format, evidenceUrls: array(input.evidenceUrls, 0, 12, 'Источники').map(https) }, slides: slides, upstreamApprovedAt: dateTime(approval.approvedAt, 'Дата approval') };
  }
  function deckToLessonMarkdown(deck) {
    var lines = ['# ' + deck.input.title, '', '> Цель: ' + deck.input.objective, '> Аудитория: ' + deck.input.audience, '', 'Декларации approval в файле не заменяют проверку преподавателем.', ''];
    deck.slides.forEach(function (slide, index) { lines.push('## ' + (index + 1) + '. ' + slide.title, ''); slide.bullets.forEach(function (bullet) { lines.push('- ' + bullet); }); if (slide.speakerNotes) lines.push('', 'Заметки преподавателя: ' + slide.speakerNotes); lines.push(''); });
    if (deck.input.evidenceUrls.length) lines.push('## Источники', '', deck.input.evidenceUrls.join('\n'));
    return lines.join('\n');
  }
  return Object.freeze({ VERSION: VERSION, MAX_ANSWER: MAX_ANSWER, MAX_PROGRESS_BYTES: MAX_PROGRESS_BYTES, emptyProgress: emptyProgress, loadProgress: loadProgress, saveProgress: saveProgress, validateLesson: validateLesson, editAnswer: editAnswer, setAssessment: setAssessment, completeLesson: completeLesson, importProgress: importProgress, exportProgress: exportProgress, storageKey: storageKey, parseApprovedDeckJob: parseApprovedDeckJob, deckToLessonMarkdown: deckToLessonMarkdown });
}));
