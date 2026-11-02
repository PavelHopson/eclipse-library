import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const runtime = require('../web/learning-course-runtime.js');
const source = readFileSync(new URL('../web/learning-course-view.js', import.meta.url), 'utf8');
const fixture = readFileSync(new URL('../web/learning-examples/course.json', import.meta.url), 'utf8');
function setup(store = new Map(), quota = false, saveHook = null, clipboard = null) {
  const downloads=[], blobs=new Map(), copied=[];
  class Node {
    constructor(tag) { this.tagName=tag;this.children=[];this.events={};this.attrs={};this.textContent='';this.classList={add(){},remove(){},toggle(){}}; }
    append(...nodes){this.children.push(...nodes);} replaceChildren(...nodes){this.children=nodes;} addEventListener(name,fn){this.events[name]=fn;} setAttribute(name,value){this.attrs[name]=value;} focus(){} click(){if(this.download)downloads.push({name:this.download,blob:blobs.get(this.href)});} remove(){}
    contains(node){return this===node||this.querySelectorAll('*').includes(node);}
    querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
    querySelectorAll(selector){const nodes=this.children.flatMap(n=>[n,...n.querySelectorAll('*')]);return nodes.filter(n=>selector==='*'||(selector[0]==='.'?n.className===selector.slice(1):n.tagName===selector));}
  }
  const host=new Node('section'),events={},location={hash:'#learn/courses'};let confirm=true;const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>{if(quota)throw new DOMException('full','QuotaExceededError');store.set(k,v);}};
  const window={EclipseLearningCourses:{...runtime,saveCollection:(storage,values,raw)=>saveHook ? saveHook(storage,JSON.parse(JSON.stringify(values)),raw) : runtime.saveCollection(storage,JSON.parse(JSON.stringify(values)),raw)},localStorage:storage,scrollTo(){},addEventListener:(k,f)=>{events[k]=f;},removeEventListener:k=>{delete events[k];},confirm:()=>confirm};
  window.navigator={clipboard:clipboard||{writeText:async raw=>{copied.push(raw);}}};
  const urls={createObjectURL:blob=>{const id='blob:'+blobs.size;blobs.set(id,blob);return id;},revokeObjectURL(){}};
  vm.runInNewContext(source,{window,document:{getElementById:()=>host,createElement:t=>new Node(t),body:new Node('body'),querySelectorAll:()=>[]},location,fetch:async()=>({ok:true,text:async()=>fixture}),AbortController,URL:urls,Blob,setTimeout,clearTimeout});
  return {api:window.EclipseLearningCourseView,host,events,location,store,storage,downloads,copied,confirm:v=>{confirm=v;}};
}
const click=(s,text)=>s.host.querySelectorAll('button').find(n=>n.textContent===text).events.click();
async function add(s){await s.api.open('#learn/courses');await click(s,'Открыть пример курса');await click(s,'Добавить курс');await s.api.open(s.location.hash);}
test('example is previewed before explicit save and lesson completion persists',async()=>{
 const s=setup();await s.api.open('#learn/courses');await click(s,'Открыть пример курса');assert.equal(s.store.size,0);s.confirm(false);await click(s,'Добавить курс');assert.equal(s.store.size,0);s.confirm(true);await click(s,'Добавить курс');await s.api.open(s.location.hash);await click(s,'Отметить как прочитанное');const data=await runtime.loadCollection(s.storage);assert.deepEqual(data.entries[0].progress.completed,['0:0']);assert.equal(s.events.beforeunload,undefined);
});
test('quota failure preserves in-memory course across navigation and permits export',async()=>{
 const s=setup(new Map(),true);await add(s);await click(s,'Отметить как прочитанное');assert.ok(s.events.beforeunload);const route=s.location.hash;s.api.close();await s.api.open('#learn/courses');await s.api.open(route);assert.ok(s.host.querySelectorAll('button').some(n=>n.textContent==='Снять отметку «прочитано»'));assert.ok(s.host.querySelectorAll('button').some(n=>n.textContent==='Скачать курс и прогресс'));assert.equal(s.store.size,0);
});
test('corrupt storage is never replaced when adding local course',async()=>{
 const store=new Map([[runtime.STORAGE_KEY,'broken-json']]);const s=setup(store);await add(s);assert.equal(store.get(runtime.STORAGE_KEY),'broken-json');assert.ok(s.events.beforeunload);
});
test('cancelled deletion retains course, confirmed deletion removes it',async()=>{
 const s=setup();await add(s);s.confirm(false);await click(s,'Удалить курс');assert.equal((await runtime.loadCollection(s.storage)).entries.length,1);s.confirm(true);await click(s,'Удалить курс');assert.equal((await runtime.loadCollection(s.storage)).entries.length,0);
});
test('delayed file cannot populate another route',async()=>{
 const s=setup();await s.api.open('#learn/courses');const input=s.host.querySelector('input');let resolve;input.files=[{size:30,text:()=>new Promise(r=>{resolve=r;})}];const reading=input.events.change();s.api.close();resolve(fixture);await reading;assert.equal(s.host.querySelectorAll('button').filter(n=>n.textContent==='Добавить курс').length,0);assert.equal(s.store.size,0);
});
test('course display has no imported HTML execution or external AI',()=>{assert.ok(!source.includes('innerHTML'));assert.ok(!source.includes('apiKey'));assert.match(source,/learning-examples\/course.json/);});

test('reread cannot discard changes added after discard confirmation while save is pending',async()=>{
 let release, calls=0; const s=setup(new Map(),false,()=>{calls++;return calls===1?new Promise(resolve=>{release=resolve;}):Promise.resolve({ok:false,error:'quota'});});
 await s.api.open('#learn/courses');await click(s,'Открыть пример курса');const first=click(s,'Добавить курс');await new Promise(resolve=>setImmediate(resolve));
 await s.api.open('#learn/courses');const reread=click(s,'Перечитать хранилище');
 const course=JSON.parse(fixture);course.title+=' второй';const input=s.host.querySelector('input');input.files=[{size:100,text:async()=>JSON.stringify(course)}];await input.events.change();const second=click(s,'Добавить курс');
 release({ok:false,error:'quota'});await Promise.all([first,second,reread]);await s.api.open('#learn/courses');
 assert.equal(s.host.querySelector('.learning-courses').querySelectorAll('article').length,2);assert.ok(s.events.beforeunload);
});

test('Markdown copy and download use the full course and leave progress unchanged',async()=>{
 const s=setup();await add(s);await click(s,'Отметить как прочитанное');const original=s.store.get(runtime.STORAGE_KEY);
 await click(s,'Скопировать Markdown');await click(s,'Скачать курс .md');
 assert.equal(s.copied.length,1);assert.equal(s.downloads.length,1);assert.match(s.downloads[0].name,/\.md$/);
 assert.equal(await s.downloads[0].blob.text(),s.copied[0]);
 const parsed=await runtime.parseCourse(fixture);assert.equal(s.copied[0],runtime.courseToMarkdown(parsed));
 assert.equal(s.store.get(runtime.STORAGE_KEY),original);
 assert.ok(s.host.querySelectorAll('p').some(n=>n.textContent==='Markdown скопирован.'));
});

test('clipboard rejection reports a download fallback while quota data stays recoverable',async()=>{
 const s=setup(new Map(),true,null,{writeText:async()=>{throw new Error('Denied');}});await add(s);
 await click(s,'Скопировать Markdown');
 assert.ok(s.host.querySelectorAll('p').some(n=>n.textContent==='Не удалось скопировать. Скачайте курс .md.'));
 assert.match(s.host.querySelector('.learning-status').textContent,/несохранённые|сохранить|места/);
 await click(s,'Скачать курс .md');assert.equal(s.downloads.length,1);assert.ok(s.events.beforeunload);assert.equal(s.store.size,0);
});

test('pending clipboard does not announce success before completion or change the next screen',async()=>{
 for(const reject of [false,true]){
  let resolve,fail;const s=setup(new Map(),false,null,{writeText:()=>new Promise((r,f)=>{resolve=r;fail=f;})});await add(s);
  const btn=s.host.querySelectorAll('button').find(n=>n.textContent==='Скопировать Markdown');const copying=btn.events.click();
  assert.equal(btn.disabled,true);assert.ok(s.host.querySelectorAll('p').some(n=>n.textContent==='Копирую…'));
  s.api.close();await s.api.open('#learn/courses');const status=s.host.querySelector('.learning-status').textContent;
  if(reject)fail(new Error('stale'));else resolve();await copying;
  assert.equal(s.host.querySelector('.learning-status').textContent,status);
  assert.ok(!s.host.querySelectorAll('p').some(n=>/скопирован|Не удалось скопировать/.test(n.textContent)));
 }
});
