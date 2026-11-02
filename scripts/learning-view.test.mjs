import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const runtime = require('../web/learning-runtime.js');
const content = require('../web/learning-content.js');
const source = readFileSync(new URL('../web/learning-view.js', import.meta.url), 'utf8');
function setup(storageError = false, writeError = false) {
  class Node {
    constructor(tag) { this.tagName = tag; this.children = []; this.events = {}; this.attrs = {}; this.textContent = ''; this.checked = false; this.classList = { add() {}, remove() {}, toggle() {} }; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children = nodes; }
    addEventListener(name, fn) { this.events[name] = fn; }
    setAttribute(name, value) { this.attrs[name] = value; }
    focus() { this.focused = true; }
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
    querySelectorAll(selector) { const nodes = this.children.flatMap(n => [n, ...n.querySelectorAll('*')]); return nodes.filter(n => selector === '*' || (selector[0] === '.' ? n.className === selector.slice(1) : n.tagName === selector)); }
  }
  const host = new Node('section'), body = new Node('body');
  const store = new Map(); let saves = 0;
  const storage = { getItem: key => { if (storageError) throw Error('blocked'); return store.get(key) || null; }, setItem: (key, value) => { saves++; if (writeError) throw Error('quota'); store.set(key, value); } };
  const R = { ...runtime, loadProgress: course => runtime.loadProgress(course, storage), saveProgress: (course, state) => runtime.saveProgress(course, state, storage) };
  const events = {};
  const window = { addEventListener: (type, fn) => { events[type] = fn; }, removeEventListener: type => { delete events[type]; }, EclipseLearningRuntime: R, EclipseLearningContent: content, scrollTo() {}, confirm: () => true };
  const document = { createElement: tag => new Node(tag), getElementById: () => host, body, querySelectorAll: () => [] };
  vm.runInNewContext(source, { window, document, location: { hash: '#learn/practice-form' }, URL, Blob, setTimeout });
  return { api: window.EclipseLearningView, host, store, events, saved: () => saves };
}
test('overview lists every real course and approved deck import', () => {
  const { api, host } = setup(); api.open('#learn');
  const anchors = host.querySelectorAll('a');
  content.courses.forEach(course => assert.ok(anchors.some(a => a.href === '#learn/' + course.id)));
  assert.ok(host.querySelectorAll('summary').some(n => n.textContent.includes('Импорт')));
});
test('answer is saved, debrief opens, self-assessment completes the lesson', () => {
  const { api, host, store } = setup(); api.open('#learn/practice-form');
  const input = host.querySelector('textarea'); input.value = 'Проверены поля формы, ошибки, клавиатура и подписи. Результат записан в отчёт, исправлены обнаруженные проблемы.';
  input.events.input();
  const review = host.querySelector('.learning-review'); assert.equal(review.hidden, true);
  host.querySelector('form').events.submit({ preventDefault() {} }); assert.equal(review.hidden, false);
  review.querySelectorAll('input').forEach(n => { n.checked = true; n.events.change(); });
  review.querySelectorAll('button').find(n => n.textContent === 'Завершить урок').events.click();
  const progress = JSON.parse([...store.values()][0]); assert.equal(progress.lessons['accessible-form'].completed, true);
});
test('unavailable stored progress disables editing and does not overwrite data', () => {
  const { api, host, saved } = setup(true); api.open('#learn/practice-form');
  assert.equal(host.querySelector('textarea').disabled, true); assert.equal(saved(), 0);
  assert.match(host.querySelector('.learning-status').textContent, /Исходная запись не изменена/);
});
test('unknown course has recovery navigation', () => {
  const { api, host } = setup(); api.open('#learn/missing');
  assert.equal(host.querySelector('h1').textContent, 'Курс не найден'); assert.ok(host.querySelectorAll('a').some(a => a.href === '#learn'));
});
test('learning integration scripts precede main app and route stays in library', () => {
  const html = readFileSync(new URL('../web/index.html', import.meta.url), 'utf8');
  assert.ok(html.indexOf('learning-runtime.js') < html.indexOf('learning-view.js'));
  assert.ok(html.indexOf('learning-view.js') < html.indexOf('src="app.js'));
  assert.match(html, /id="learningView"/);
  assert.ok(!source.includes('innerHTML')); assert.ok(!source.includes('fetch('));
});

test('quota failure retains per-course answers across navigation and guards unloading', () => {
  const { api, host, events } = setup(false, true);
  api.open('#learn/practice-form'); const input = host.querySelector('textarea'); input.value = 'Несохранённый ответ остаётся в памяти вкладки.'; input.events.input();
  assert.equal(typeof events.beforeunload, 'function');
  api.close(); api.open('#learn/practice-support'); const other = host.querySelector('textarea'); other.value = 'Другой несохранённый ответ.'; other.events.input();
  api.open('#learn/practice-form'); assert.equal(host.querySelector('textarea').value, input.value);
  api.open('#learn/practice-support'); assert.equal(host.querySelector('textarea').value, other.value);
  let prevented = false; events.beforeunload({ preventDefault() { prevented = true; } }); assert.equal(prevented, true);
});
test('successful saving has no unload warning', () => {
  const { api, host, events } = setup(); api.open('#learn/practice-form'); const input = host.querySelector('textarea'); input.value = 'Сохранено'; input.events.input(); assert.equal(events.beforeunload, undefined);
});
test('delayed import is ignored after navigation, including delayed errors', async () => {
  for (const reject of [false, true]) {
    const { api, host, saved } = setup(); api.open('#learn/practice-form');
    const file = host.querySelectorAll('input').find(n => n.type === 'file'); let resolve, fail;
    file.files = [{ size: 20, text: () => new Promise((r, f) => { resolve = r; fail = f; }) }];
    const reading = file.events.change(); api.close(); api.open('#learn/practice-support');
    if (reject) fail(new Error('stale')); else resolve('{}'); await reading;
    assert.equal(saved(), 0); assert.equal(host.querySelector('.learning-status').textContent, '');
    assert.equal(host.querySelector('h1').textContent, content.courses.find(c => c.id === 'practice-support').title);
  }
});

test('direct learning starts before catalog load and async load does not rerender it', () => {
  const app = readFileSync(new URL('../web/app.js', import.meta.url), 'utf8');
  const boot = app.slice(app.lastIndexOf('  if (/^#learn'), app.lastIndexOf('})();'));
  const calls = [];
  vm.runInNewContext(boot, { location: { hash: '#learn/practice-form' }, route: () => calls.push('route'), load: () => calls.push('load') });
  assert.deepEqual(calls, ['route', 'load']);
  const start = app.indexOf('      requestAnimationFrame(() => {', app.indexOf('      renderGuides(guidesManifest);'));
  const end = app.indexOf('      });', start) + '      });'.length;
  const finish = app.slice(start, end);
  vm.runInNewContext(finish, { location: { hash: '#learn/practice-form' }, document: { body: { classList: { contains: () => true } } }, requestAnimationFrame: fn => fn(), route: () => calls.push('rerender') });
  assert.deepEqual(calls, ['route', 'load']);
});
