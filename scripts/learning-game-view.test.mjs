import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const runtime = require('../web/learning-games.js');
const source = readFileSync(new URL('../web/learning-game-view.js', import.meta.url), 'utf8');
const quiz = readFileSync(new URL('../web/learning-examples/quiz.json', import.meta.url), 'utf8');
const escape = readFileSync(new URL('../web/learning-examples/escape-room.json', import.meta.url), 'utf8');
function setup() {
  class Node {
    constructor(tag) { this.tagName = tag; this.children = []; this.events = {}; this.attrs = {}; this.textContent = ''; this.classList = { add() {}, remove() {}, toggle() {} }; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children = nodes; }
    addEventListener(name, fn) { this.events[name] = fn; }
    setAttribute(name, value) { this.attrs[name] = value; }
    focus() {}
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
    querySelectorAll(selector) { const nodes = this.children.flatMap(n => [n, ...n.querySelectorAll('*')]); if (selector === '.game-content h2') return nodes.filter(n => n.tagName === 'h2'); return nodes.filter(n => selector === '*' || (selector[0] === '.' ? n.className === selector.slice(1) : n.tagName === selector)); }
  }
  const host = new Node('section'), events = {}; let confirm = true, replaced = '';
  const window = { EclipseLearningGames: runtime, addEventListener: (type, fn) => { events[type] = fn; }, removeEventListener: type => { delete events[type]; }, confirm: () => confirm };
  const document = { createElement: tag => new Node(tag), getElementById: () => host, body: new Node('body'), querySelectorAll: () => [] };
  vm.runInNewContext(source, { window, document, history: { replaceState: (a,b,url) => { replaced = url; } }, AbortController, setTimeout, clearTimeout, fetch: async url => ({ok:true,headers:{get:()=>null},text:async()=>url.includes('escape')?escape:quiz}) });
  return { api: window.EclipseLearningGameView, host, events, confirm: value => { confirm = value; }, replaced: () => replaced };
}
const settle = () => new Promise(resolve => setImmediate(resolve));
const click = (host, text) => host.querySelectorAll('button').find(n => n.textContent === text).events.click();
test('quiz follows select/check/explanation/next/result and clears exit guard', async () => {
  const {api,host,events} = setup(); api.open('#learn/games/quiz'); await settle();
  for (let i=0;i<3;i++) { const check = host.querySelectorAll('button').find(n => n.textContent === 'Проверить ответ'); assert.equal(check.disabled,true); host.querySelectorAll('input')[0].events.change(); assert.equal(check.disabled,false); check.events.click(); assert.ok(host.querySelector('.learning-review')); click(host,i===2?'Показать результат':'Следующий вопрос'); }
  assert.equal(host.querySelector('.game-content h2').textContent,'Викторина завершена'); assert.equal(events.beforeunload,undefined);
});
test('escape shows locked requirement and inventory, then reaches ending', async () => {
  const {api,host} = setup(); api.open('#learn/games/escape-room'); await settle();
  const choices=()=>host.querySelector('.game-choices').querySelectorAll('button'); assert.equal(choices()[1].disabled,true); choices()[0].events.click(); assert.ok(host.querySelector('.game-inventory').querySelector('li')); choices()[0].events.click(); assert.equal(choices()[1].disabled,false); choices()[1].events.click(); choices()[0].events.click(); assert.ok(host.querySelector('.game-result'));
});
test('cancel exit keeps same game, accepted exit clears beforeunload', async () => {
  const s=setup(); s.api.open('#learn/games/quiz'); await settle(); s.confirm(false); assert.equal(s.api.leave('#learn'),false); assert.equal(s.replaced(),'#learn/games/quiz'); assert.ok(s.events.beforeunload); s.confirm(true); assert.equal(s.api.leave('#learn'),true); assert.equal(s.events.beforeunload,undefined);
});
test('delayed import cannot start a game after navigation', async () => {
  const s=setup(); s.api.open('#learn/games'); const input=s.host.querySelector('input'); let resolve; input.files=[{size:50,text:()=>new Promise(r=>{resolve=r;})}]; const reading=input.events.change(); s.api.leave('#learn'); resolve(quiz); await reading; assert.equal(s.host.querySelector('.game-content'),null); assert.equal(s.events.beforeunload,undefined);
});
test('game UI uses text nodes and local fixtures only', () => { assert.ok(!source.includes('innerHTML')); assert.ok(!source.includes('localStorage')); assert.match(source,/learning-examples\/quiz.json/); });
