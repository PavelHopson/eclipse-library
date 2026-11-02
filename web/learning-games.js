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
  else root.EclipseLearningGames = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var MAX_BYTES = 128 * 1024, MAX_HISTORY = 512, MAX_STATES = 4096;
  var games = new WeakSet();
  function fail(message) { throw new Error(message); }
  function record(value, keys) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) fail('Ожидался простой объект');
    Reflect.ownKeys(value).forEach(function (key) {
      var prop = Object.getOwnPropertyDescriptor(value, key);
      if (!keys.includes(key) || ['__proto__', 'constructor', 'prototype'].includes(key) || !prop.enumerable || !('value' in prop)) fail('Неизвестное или небезопасное поле');
    });
    return value;
  }
  function text(value, max) {
    if (typeof value !== 'string' || !value.trim() || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) fail('Некорректный или слишком длинный текст');
    return value;
  }
  function id(value) {
    text(value, 80);
    if (!/^[\w-]+$/.test(value) || ['__proto__', 'constructor', 'prototype'].includes(value)) fail('Некорректный ID');
    return value;
  }
  function list(value, min, max) {
    if (!Array.isArray(value) || Object.getPrototypeOf(value) !== Array.prototype || value.length < min || value.length > max || Reflect.ownKeys(value).length !== value.length + 1) fail('Неверное число элементов');
    for (var i = 0; i < value.length; i++) { var prop = Object.getOwnPropertyDescriptor(value, String(i)); if (!prop || !('value' in prop)) fail('Некорректный массив'); }
    return value;
  }
  function freeze(value) {
    if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); }
    return value;
  }
  function unique(values) { if (new Set(values).size !== values.length) fail('Повторяющиеся ID'); }
  function pickup(scene, inventory) { return scene.itemFound && !inventory.includes(scene.itemFound) ? inventory.concat(scene.itemFound).sort() : inventory.slice(); }
  function validateRoutes(data) {
    var scenes = new Map(data.scenes.map(function (s) { return [s.id, s]; }));
    if (!scenes.has(data.startSceneId)) fail('Стартовая сцена не найдена');
    data.scenes.forEach(function (scene) { scene.choices.forEach(function (choice) { if (!scenes.has(choice.nextSceneId)) fail('Переход ведёт в неизвестную сцену'); }); });
    var nodes = [], known = new Map(), reachableScenes = new Set(), usable = new Set();
    function visit(sceneId, inventory) {
      var items = pickup(scenes.get(sceneId), inventory), key = JSON.stringify([sceneId, items]);
      if (known.has(key)) return known.get(key);
      if (nodes.length >= MAX_STATES) fail('Слишком сложная карта: сократите независимые предметы и развилки');
      var index = nodes.length; known.set(key, index); nodes.push({ sceneId: sceneId, inventory: items, parents: [] }); return index;
    }
    visit(data.startSceneId, []);
    var endings = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i], scene = scenes.get(node.sceneId); reachableScenes.add(scene.id);
      if (!scene.choices.length) endings.push(i);
      scene.choices.forEach(function (choice, index) {
        if (choice.requiredItem && !node.inventory.includes(choice.requiredItem)) return;
        usable.add(scene.id + ':' + index);
        nodes[visit(choice.nextSceneId, node.inventory)].parents.push(i);
      });
    }
    if (reachableScenes.size !== data.scenes.length) fail('Есть недостижимые сцены');
    data.scenes.forEach(function (scene) { scene.choices.forEach(function (_, index) { if (!usable.has(scene.id + ':' + index)) fail('Переход невозможно открыть нужным предметом'); }); });
    var canEnd = new Set(endings);
    for (var k = 0; k < endings.length; k++) nodes[endings[k]].parents.forEach(function (parent) { if (!canEnd.has(parent)) { canEnd.add(parent); endings.push(parent); } });
    if (canEnd.size !== nodes.length) fail('Есть тупик или цикл без достижимого завершения');
  }
  function parseGame(raw) {
    var input;
    if (typeof raw === 'string') {
      if (new TextEncoder().encode(raw).length > MAX_BYTES) fail('Файл превышает 128 КиБ');
      try { input = JSON.parse(raw); } catch (_) { fail('Некорректный JSON'); }
    } else input = raw;
    record(input, ['title', 'description', 'type', 'quizData', 'escapeRoomData']);
    var game = { title: text(input.title, 200), description: text(input.description, 4000), type: input.type };
    if (input.type === 'QUIZ') {
      if (Object.hasOwn(input, 'escapeRoomData')) fail('Лишние данные другого типа игры');
      game.quizData = list(input.quizData, 1, 30).map(function (q) {
        record(q, ['id', 'question', 'options', 'explanation']);
        var options = list(q.options, 2, 6).map(function (o) {
          record(o, ['id', 'text', 'isCorrect']);
          if (typeof o.isCorrect !== 'boolean') fail('isCorrect должен быть логическим');
          return { id: id(o.id), text: text(o.text, 2000), isCorrect: o.isCorrect };
        });
        unique(options.map(function (o) { return o.id; }));
        if (options.filter(function (o) { return o.isCorrect; }).length !== 1) fail('Нужен ровно один правильный ответ');
        return { id: id(q.id), question: text(q.question, 4000), options: options, explanation: text(q.explanation, 4000) };
      });
      unique(game.quizData.map(function (q) { return q.id; }));
    } else if (input.type === 'ESCAPE_ROOM') {
      if (Object.hasOwn(input, 'quizData')) fail('Лишние данные другого типа игры');
      var data = record(input.escapeRoomData, ['startSceneId', 'scenes']);
      game.escapeRoomData = { startSceneId: id(data.startSceneId), scenes: list(data.scenes, 1, 40).map(function (s) {
        record(s, ['id', 'title', 'description', 'choices', 'itemFound']);
        var scene = { id: id(s.id), title: text(s.title, 200), description: text(s.description, 8000), choices: list(s.choices, 0, 8).map(function (c) {
          record(c, ['text', 'nextSceneId', 'requiredItem']);
          var choice = { text: text(c.text, 1000), nextSceneId: id(c.nextSceneId) };
          if (Object.hasOwn(c, 'requiredItem')) choice.requiredItem = text(c.requiredItem, 120);
          return choice;
        }) };
        if (Object.hasOwn(s, 'itemFound')) scene.itemFound = text(s.itemFound, 120);
        return scene;
      }) };
      unique(game.escapeRoomData.scenes.map(function (s) { return s.id; }));
    } else fail('Поддерживаются только QUIZ и ESCAPE_ROOM');
    if (new TextEncoder().encode(JSON.stringify(game)).length > MAX_BYTES) fail('Игра превышает 128 КиБ');
    if (game.type === 'ESCAPE_ROOM') validateRoutes(game.escapeRoomData);
    freeze(game); games.add(game); return game;
  }
  function requireGame(game, type) { if (!games.has(game) || game.type !== type) fail('Сначала загрузите игру нужного типа'); }
  function initialQuiz(game) { requireGame(game, 'QUIZ'); return freeze({ index: 0, answers: [], complete: false }); }
  function quizState(game, state) {
    requireGame(game, 'QUIZ'); record(state, ['index', 'answers', 'complete']);
    var count = game.quizData.length;
    if (!Number.isInteger(state.index) || state.index < 0 || state.index >= count || typeof state.complete !== 'boolean') fail('Некорректное состояние викторины');
    list(state.answers, state.index, state.index + 1).forEach(function (answer, index) {
      record(answer, ['questionId', 'optionId']);
      var q = game.quizData[index];
      if (answer.questionId !== q.id || !q.options.some(function (o) { return o.id === answer.optionId; })) fail('Ответ не соответствует вопросу');
    });
    if (state.complete && (state.index !== count - 1 || state.answers.length !== count)) fail('Викторина ещё не завершена');
  }
  function answerQuiz(game, state, optionId) {
    quizState(game, state);
    if (state.complete || state.answers.length > state.index) return state;
    var question = game.quizData[state.index];
    if (!question.options.some(function (o) { return o.id === optionId; })) fail('Выберите доступный ответ');
    return freeze({ index: state.index, answers: state.answers.concat({ questionId: question.id, optionId: optionId }), complete: false });
  }
  function nextQuiz(game, state) {
    quizState(game, state);
    if (state.complete) return state;
    if (state.answers.length <= state.index) fail('Сначала ответьте на вопрос');
    return freeze({ index: Math.min(state.index + 1, game.quizData.length - 1), answers: state.answers.slice(), complete: state.index === game.quizData.length - 1 });
  }
  function quizResult(game, state) {
    quizState(game, state);
    return freeze({ correct: state.answers.filter(function (a, i) { return game.quizData[i].options.find(function (o) { return o.id === a.optionId; }).isCorrect; }).length, total: game.quizData.length, answered: state.answers.length, complete: state.complete });
  }
  function sceneFor(game, id) { return game.escapeRoomData.scenes.find(function (s) { return s.id === id; }); }
  function initialEscape(game) {
    requireGame(game, 'ESCAPE_ROOM'); var scene = sceneFor(game, game.escapeRoomData.startSceneId);
    return freeze({ sceneId: scene.id, inventory: pickup(scene, []), history: [], ended: scene.choices.length === 0 });
  }
  function step(game, state, choiceIndex) {
    var choices = sceneFor(game, state.sceneId).choices;
    if (state.ended || !Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex >= choices.length) fail('Переход недоступен');
    var choice = choices[choiceIndex];
    if (choice.requiredItem && !state.inventory.includes(choice.requiredItem)) fail('Нужен предмет: ' + choice.requiredItem);
    var scene = sceneFor(game, choice.nextSceneId);
    return { sceneId: scene.id, inventory: pickup(scene, state.inventory), history: state.history.concat(choiceIndex), ended: scene.choices.length === 0 };
  }
  function moveEscape(game, state, choiceIndex) {
    requireGame(game, 'ESCAPE_ROOM'); record(state, ['sceneId', 'inventory', 'history', 'ended']);
    list(state.history, 0, MAX_HISTORY); list(state.inventory, 0, 40);
    var replay = initialEscape(game);
    state.history.forEach(function (index) { replay = step(game, replay, index); });
    if (state.sceneId !== replay.sceneId || state.ended !== replay.ended || JSON.stringify(state.inventory) !== JSON.stringify(replay.inventory)) fail('Состояние не соответствует истории прохождения');
    if (state.history.length >= MAX_HISTORY) fail('Достигнут предел 512 переходов. Начните игру заново');
    return freeze(step(game, replay, choiceIndex));
  }
  return { MAX_BYTES: MAX_BYTES, MAX_HISTORY: MAX_HISTORY, parseGame: parseGame, initialQuiz: initialQuiz, answerQuiz: answerQuiz, nextQuiz: nextQuiz, quizResult: quizResult, initialEscape: initialEscape, moveEscape: moveEscape };
}));
