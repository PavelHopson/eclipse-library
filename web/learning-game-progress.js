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
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./learning-games.js'));
  else root.EclipseLearningGameProgress = factory(root.EclipseLearningGames);
}(typeof globalThis !== 'undefined' ? globalThis : this, function (R) {
  'use strict';
  var MAX_BUNDLE_BYTES = 160 * 1024, MAX_ENTRIES = 5;
  var STORAGE_KEY = 'eclipse-learning-games-v1', entries = new WeakSet();
  function fail(message, code) { var error = new Error(message); error.code = code || 'INVALID'; throw error; }
  function record(value, allowed) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) fail('Ожидался простой объект');
    Reflect.ownKeys(value).forEach(function (key) {
      var prop = Object.getOwnPropertyDescriptor(value, key);
      if (!allowed.includes(key) || ['__proto__', 'constructor', 'prototype'].includes(key) || !prop.enumerable || !('value' in prop)) fail('Неизвестное или небезопасное поле');
    });
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
  async function createEntry(rawGame) {
    var game = R.parseGame(rawGame);
    if (!globalThis.crypto || !globalThis.crypto.subtle) fail('SHA-256 недоступен. Откройте библиотеку через HTTPS или localhost');
    var hash = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(game)));
    var id = Array.from(new Uint8Array(hash)).map(function (byte) { return byte.toString(16).padStart(2, '0'); }).join('');
    var entry = freeze({ id: id, game: game, state: game.type === 'QUIZ' ? R.initialQuiz(game) : R.initialEscape(game), selected: null });
    entries.add(entry); return entry;
  }
  function withProgress(entry, state, selected) {
    if (!entries.has(entry)) fail('Сначала загрузите игру');
    if (selected === undefined) selected = null;
    var checked = R.cloneState(entry.game, state);
    if (selected !== null) {
      if (entry.game.type !== 'QUIZ' || checked.complete || checked.answers.length > checked.index || !entry.game.quizData[checked.index].options.some(function (option) { return option.id === selected; })) fail('Выбор не соответствует текущему вопросу');
    }
    var result = freeze({ id: entry.id, game: entry.game, state: checked, selected: selected }); entries.add(result); return result;
  }
  function exportBundle(entry) {
    var checked = withProgress(entry, entry.state, entry.selected);
    return encode({ schemaVersion: 1, id: checked.id, game: checked.game, state: checked.state, selected: checked.selected }, MAX_BUNDLE_BYTES);
  }
  async function importBundle(raw) {
    var bundle = record(decode(raw, MAX_BUNDLE_BYTES), ['schemaVersion', 'id', 'game', 'state', 'selected']);
    if (bundle.schemaVersion !== 1 || typeof bundle.id !== 'string' || !/^[a-f0-9]{64}$/.test(bundle.id) || !Object.hasOwn(bundle, 'selected')) fail('Неизвестная версия или ID игры');
    var entry = await createEntry(bundle.game);
    if (entry.id !== bundle.id) fail('Содержимое игры изменилось: ID не совпадает');
    var result = withProgress(entry, bundle.state, bundle.selected);
    encode({ schemaVersion: 1, id: result.id, game: result.game, state: result.state, selected: result.selected }, MAX_BUNDLE_BYTES);
    return result;
  }
  async function validateEntries(values) {
    if (!Array.isArray(values)) fail('Некорректная коллекция');
    if (values.length > MAX_ENTRIES) fail('Сохранено пять игр. Сначала удалите один вручную', 'LIMIT');
    list(values, 0, MAX_ENTRIES); var result = [];
    for (var i = 0; i < values.length; i++) {
      var value = record(values[i], ['id', 'game', 'state', 'selected']);
      var entry = await importBundle({ schemaVersion: 1, id: value.id, game: value.game, state: value.state, selected: value.selected });
      if (result.some(function (item) { return item.id === entry.id; })) fail('Игра уже есть в коллекции'); result.push(entry);
    }
    return result;
  }
  async function decodeCollection(raw) {
    if (raw === null) return { entries: [], revision: 0 };
    var data = record(decode(raw, MAX_BUNDLE_BYTES * MAX_ENTRIES + 1024), ['schemaVersion', 'revision', 'entries']);
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
      var raw = encode({ schemaVersion: 1, revision: previous.revision + 1, entries: validated }, MAX_BUNDLE_BYTES * MAX_ENTRIES + 1024);
      try {
        if (storage.getItem(STORAGE_KEY) !== expectedRaw) fail('Коллекция изменена в другой вкладке. Перезагрузите её', 'CONFLICT');
        storage.setItem(STORAGE_KEY, raw);
      } catch (error) {
        if (error.code === 'CONFLICT') throw error;
        if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') fail('Недостаточно места. Игра осталась в памяти: экспортируйте JSON', 'QUOTA');
        fail('Не удалось сохранить. Игра осталась в памяти: экспортируйте JSON', 'STORAGE_UNAVAILABLE');
      }
      return { ok: true, raw: raw, revision: previous.revision + 1, error: null, code: null };
    } catch (error) { return { ok: false, raw: expectedRaw, error: error.message, code: error.code || 'INVALID' }; }
  }
  return { MAX_ENTRIES: MAX_ENTRIES, MAX_BUNDLE_BYTES: MAX_BUNDLE_BYTES, STORAGE_KEY: STORAGE_KEY, createEntry: createEntry, withProgress: withProgress, exportBundle: exportBundle, importBundle: importBundle, loadCollection: loadCollection, saveCollection: saveCollection };
}));
