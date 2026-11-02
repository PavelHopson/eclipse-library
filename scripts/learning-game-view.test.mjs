import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const runtime = require('../web/learning-games.js');
const progress = require('../web/learning-game-progress.js');
const source = readFileSync(new URL('../web/learning-game-view.js', import.meta.url), 'utf8');
const quiz = readFileSync(new URL('../web/learning-examples/quiz.json', import.meta.url), 'utf8');
const escape = readFileSync(new URL('../web/learning-examples/escape-room.json', import.meta.url), 'utf8');
function setup(store = new Map(), quota = false, saveHook = null) {
  class Node {
    constructor(tag) { this.tagName = tag; this.children = []; this.events = {}; this.attrs = {}; this.textContent = ''; this.classList = { add() {}, remove() {}, toggle() {} }; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children = nodes; }
    addEventListener(name, fn) { this.events[name] = fn; }
    setAttribute(name, value) { this.attrs[name] = value; }
    focus() {} click() {} remove() {}
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
    querySelectorAll(selector) { const nodes = this.children.flatMap(n => [n, ...n.querySelectorAll('*')]); if (selector === '.game-content h2') return nodes.filter(n => n.tagName === 'h2'); return nodes.filter(n => selector === '*' || (selector[0] === '.' ? n.className === selector.slice(1) : n.tagName === selector)); }
  }
  const host = new Node('section'), events = {}; let confirm = true, replaced = '';
  const storage = {getItem:k=>store.get(k)||null,setItem:(k,v)=>{if(quota)throw new DOMException('full','QuotaExceededError');store.set(k,v);}};
  const window = { localStorage:storage, EclipseLearningGameProgress:{...progress,saveCollection:(storage,values,raw)=>saveHook ? saveHook(storage,Array.from(values),raw) : progress.saveCollection(storage,Array.from(values),raw)}, EclipseLearningGames: runtime, addEventListener: (type, fn) => { events[type] = fn; }, removeEventListener: type => { delete events[type]; }, confirm: () => confirm };
  const document = { createElement: tag => new Node(tag), getElementById: () => host, body: new Node('body'), querySelectorAll: () => [] };
  vm.runInNewContext(source, { window, document, history: { replaceState: (a,b,url) => { replaced = url; } }, AbortController, URL, Blob, setTimeout, clearTimeout, fetch: async url => ({ok:true,headers:{get:()=>null},text:async()=>url.includes('escape')?escape:quiz}) });
  return { api: window.EclipseLearningGameView, host, events, store, storage, confirm: value => { confirm = value; }, replaced: () => replaced };
}
const select = (s,index) => { const n=s.host.querySelectorAll('input')[index];n.checked=true;n.events.change(); };
const click = (host, text) => host.querySelectorAll('button').find(n => n.textContent === text).events.click();
test('quiz persists checked answers and final result then removes unload guard', async () => {
  const s=setup(); await s.api.open('#learn/games/quiz');
  for(let i=0;i<3;i++){const check=s.host.querySelectorAll('button').find(n=>n.textContent==='Проверить ответ');assert.equal(check.disabled,true);select(s,0);check.events.click();assert.ok(s.host.querySelector('.learning-review'));click(s.host,i===2?'Показать результат':'Следующий вопрос');}
  await click(s.host,'Повторить сохранение');assert.equal(s.host.querySelector('.game-content h2').textContent,'Викторина завершена');assert.equal(s.events.beforeunload,undefined);
  const saved=await progress.loadCollection(s.storage);const next=setup(s.store);await next.api.open('#learn/games/saved/'+saved.entries[0].id);assert.equal(next.host.querySelector('.game-content h2').textContent,'Викторина завершена');
});
test('escape persists inventory and ending, locked move remains unavailable', async () => {
  const s=setup();await s.api.open('#learn/games/escape-room');const choices=()=>s.host.querySelector('.game-choices').querySelectorAll('button');assert.equal(choices()[1].disabled,true);choices()[0].events.click();assert.ok(s.host.querySelector('.game-inventory').querySelector('li'));choices()[0].events.click();assert.equal(choices()[1].disabled,false);choices()[1].events.click();choices()[0].events.click();await click(s.host,'Повторить сохранение');const saved=await progress.loadCollection(s.storage);assert.equal(saved.entries[0].state.ended,true);assert.equal(saved.entries[0].state.inventory.length,1);
});
test('saved navigation needs no confirmation and same-content example resumes selected radio', async () => {
  const s=setup();await s.api.open('#learn/games/quiz');select(s,1);await click(s.host,'Повторить сохранение');s.confirm(false);assert.equal(s.api.leave('#learn'),true);assert.equal(s.events.beforeunload,undefined);await s.api.open('#learn/games/quiz');assert.equal(s.host.querySelectorAll('input')[1].checked,true);
});
test('quota keeps pending state across route changes and retains unload guard', async () => {
  const s=setup(new Map(),true);await s.api.open('#learn/games/quiz');select(s,1);await click(s.host,'Повторить сохранение');const id=s.replaced().split('/').pop();s.api.leave('#learn');await s.api.open('#learn/games');await s.api.open('#learn/games/saved/'+id);assert.equal(s.host.querySelectorAll('input')[1].checked,true);assert.ok(s.events.beforeunload);assert.ok(s.host.querySelectorAll('button').some(n=>n.textContent==='Скачать игру и прогресс'));assert.equal(s.store.size,0);
});
test('corrupt storage is not overwritten by a fresh attempt',async()=>{
 const store=new Map([[progress.STORAGE_KEY,'broken']]);const s=setup(store);await s.api.open('#learn/games/quiz');await click(s.host,'Повторить сохранение');assert.equal(store.get(progress.STORAGE_KEY),'broken');assert.ok(s.events.beforeunload);
});
test('restart requires confirmation and deletion only removes on successful write',async()=>{
 const s=setup();await s.api.open('#learn/games/quiz');select(s,1);await click(s.host,'Повторить сохранение');s.confirm(false);click(s.host,'Начать заново');assert.equal(s.host.querySelectorAll('input')[1].checked,true);s.confirm(true);click(s.host,'Начать заново');await click(s.host,'Повторить сохранение');assert.ok(s.host.querySelectorAll('input').every(n=>!n.checked));await click(s.host,'Все учебные игры');s.confirm(false);await click(s.host,'Удалить попытку');assert.equal((await progress.loadCollection(s.storage)).entries.length,1);s.confirm(true);await click(s.host,'Удалить попытку');assert.equal((await progress.loadCollection(s.storage)).entries.length,0);
});
test('delayed import cannot start a game after navigation', async () => {
  const s=setup();await s.api.open('#learn/games');const input=s.host.querySelector('input');let resolve;input.files=[{size:50,text:()=>new Promise(r=>{resolve=r;})}];const reading=input.events.change();s.api.leave('#learn');resolve(quiz);await reading;assert.equal(s.host.querySelector('.game-content'),null);assert.equal(s.events.beforeunload,undefined);
});
test('game UI uses text nodes, bounded import and local fixtures only', () => { assert.ok(!source.includes('innerHTML'));assert.match(source,/MAX_BUNDLE_BYTES/);assert.match(source,/learning-examples\/quiz.json/); });
test('cannot resume an attempt while its deletion is pending, successful delete returns to list',async()=>{
 let release;const s=setup(new Map(),false,(storage,values,raw)=>values.length?progress.saveCollection(storage,values,raw):new Promise(resolve=>{release=async()=>resolve(await progress.saveCollection(storage,values,raw));}));
 await s.api.open('#learn/games/quiz');await click(s.host,'Повторить сохранение');const saved=await progress.loadCollection(s.storage);const id=saved.entries[0].id;await click(s.host,'Все учебные игры');const deleting=click(s.host,'Удалить попытку');await new Promise(resolve=>setImmediate(resolve));
 await s.api.open('#learn/games/saved/'+id);assert.equal(s.host.querySelector('h1').textContent,'Попытка удаляется');assert.equal(s.host.querySelector('.game-content'),null);await release();await deleting;await new Promise(resolve=>setImmediate(resolve));assert.equal(s.host.querySelector('h1').textContent,'Учебные игры');assert.equal(s.host.querySelector('.game-content'),null);assert.equal((await progress.loadCollection(s.storage)).entries.length,0);
});
