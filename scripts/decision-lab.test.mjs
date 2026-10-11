import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {CANDIDATES} from '../web/experiments/decision-lab/candidates.mjs';
import {validateSource} from '../web/experiments/decision-lab/core.mjs';
import {recommend,addRow,evaluate,exportDataset,importDataset,validateRow} from '../web/experiments/decision-lab/core.mjs';
const row=(extra={})=>({text:'Пошаговая инструкция по созданию проверяемого результата.',group:'источник-а',rationale:'Есть шаги и проверяемый результат.',label:'guide',split:'train',publicApproved:true,...extra});
test('release includes local source guides and guide directory entry',async()=>{
 for(const c of CANDIDATES.filter(c=>c.ref.startsWith('guides/'))){
  assert.ok((await readFile(new URL('../'+c.ref,import.meta.url),'utf8')).startsWith('# '));
 }
 const manifest=JSON.parse(await readFile(new URL('../web/guides.json',import.meta.url),'utf8'));
 assert.ok(manifest.guides.some(g=>g.name==='decision-model-library-pilot'));
 for(const name of ['decision-model-library-pilot','first-career-case-without-invented-experience','own-digital-footprint-audit']){
  const guide=await readFile(new URL('../guides/'+name+'.md',import.meta.url),'utf8');
  assert.ok(guide.includes('](https://library.eclipse-forge.ru/experiments/decision-lab/index.html#queue)'));
  assert.ok(!guide.includes('](/experiments/'),'Guide renderer rewrites relative links to GitHub');
 }
 for(const file of ['styles.css','library-v2.css','assets/brand/eclipse-library-mark.svg','assets/brand/eclipse-library-favicon.svg']){
  assert.ok((await readFile(new URL('../web/'+file,import.meta.url))).length>0);
 }
});
test('four routes and ambiguity',()=>{
 assert.equal(recommend(row().text).route,'guide');
 assert.equal(recommend('Утилита для локального сравнения изображений.').route,'tool');
 assert.equal(recommend('Команда выпустила новую версию своего редактора.').route,'news');
 assert.equal(recommend('Материал с описанием интересного, но непонятного подхода.').route,'review');
 assert.equal(recommend('Вышла утилита для локального сравнения изображений.').route,'review');
});
test('no authority or invented probability',()=>{
 const r=recommend(row().text);
 assert.equal(r.probabilities,null);assert.equal(r.executeAllowed,false);assert.equal(r.publishAllowed,false);
 assert.equal(r.rightsStatus,'not_assessed');assert.equal(r.truthStatus,'not_assessed');
});
test('validation rejects malformed rows, unknown classes and private data',()=>{
 for(const bad of [null,[],row({label:'__proto__'}),row({split:'production'}),row({publicApproved:false}),row({text:'коротко'}),row({text:'!'.repeat(22)}),row({group:'--'}),row({rationale:'мало'}),row({text:'x'.repeat(4001)})])assert.throws(()=>validateRow(bad));
 assert.equal(Object.hasOwn(validateRow(row({secret:'never-export'})),'secret'),false);
});
test('duplicates and source leakage rejected without mutation',()=>{
 const rows=addRow([],row());
 assert.throws(()=>addRow(rows,row({text:row().text.toUpperCase().replaceAll(' ','  '),split:'test'})),/Дубликаты/);
 assert.throws(()=>addRow(rows,row({text:'Инструкция по другой задаче того же источника.',group:'ИСТОЧНИК А',split:'test'})),/одной выборке/);
 assert.equal(rows.length,1);
 assert.equal(addRow(rows,row({text:'Инструкция по другой задаче того же источника.'})).length,2);
});
test('export/import roundtrip and invalid payloads',()=>{
 const rows=[row()];const data=exportDataset(rows);
 assert.deepEqual(importDataset(JSON.stringify(data)),rows);
 assert.equal(data.modelTrained,false);assert.equal(data.counts.train,1);
 for(const bad of ['{','null','{}','x'.repeat(3000001),JSON.stringify({...data,rows:[row(),row()]}),JSON.stringify({...data,rows:[row({publicApproved:false})]})])assert.throws(()=>importDataset(bad));
 assert.throws(()=>exportDataset([]));
 assert.throws(()=>addRow(Array(500).fill(row()),row()),/500/);
});
test('test-only metrics, errors, abstention and undefined denominators',()=>{
 const rows=[row(),row({text:'Утилита для локального анализа выбранного документа.',label:'tool',split:'test',group:'бб'}),row({text:'Неоднозначное описание материала без конкретных подробностей.',label:'guide',split:'test',group:'вв'})];
 const r=evaluate(rows);assert.equal(r.total,2);assert.equal(r.accuracy,.5);assert.equal(r.coverage,.5);
 assert.equal(r.confusion.guide.review,1);assert.equal(r.errors.length,1);
 assert.equal(r.perClass.find(c=>c.route==='guide').precision,null);
 assert.equal(r.perClass.find(c=>c.route==='guide').recall,0);
 assert.equal(r.perClass.find(c=>c.route==='tool').precision,1);
 assert.equal(evaluate([row()]).accuracy,null);assert.equal(evaluate([]).coverage,null);
});
test('static safety: no network or HTML injection sink; persistence is scoped',async()=>{
 const base=new URL('../web/experiments/decision-lab/',import.meta.url);
 const app=await readFile(new URL('app.mjs',base),'utf8');
 const html=await readFile(new URL('index.html',base),'utf8');
 assert.doesNotMatch(app,/\b(fetch|XMLHttpRequest|WebSocket|eval|sessionStorage)\b|innerHTML|insertAdjacentHTML/);
 const storage=await readFile(new URL('storage.mjs',base),'utf8');
 assert.doesNotMatch(storage,/\.clear\(|removeItem\(/);
 assert.match(storage,/eclipse-library\.decision-lab\.workspace\.v1/);
 assert.match(html,/connect-src 'none'/);assert.match(html,/form-action 'none'/);
 assert.match(app,/textContent/);assert.match(app,/beforeunload/);
});
test('starter queue has sources, no gold labels and cannot be evaluated as test',()=>{
 assert.equal(CANDIDATES.length,7);assert.equal(new Set(CANDIDATES.map(c=>c.id)).size,7);
 for(const c of CANDIDATES){
  assert.equal(Object.hasOwn(c,'label'),false);assert.equal(Object.hasOwn(c,'rationale'),false);
  const source=validateSource(c),r=row({text:c.text,group:c.group,source});
  assert.equal(validateRow(r).source.descriptionOrigin,'assistant-paraphrase');
  assert.throws(()=>validateRow({...r,split:'test'}),/не независимый тест/);
  const data=exportDataset([r]);assert.equal(data.schemaVersion,3);
  assert.deepEqual(importDataset(JSON.stringify(data)),[r]);
 }
});
test('source metadata rejects active schemes, credentials, traversal and invalid dates',()=>{
 const c=CANDIDATES[0];
 for(const ref of ['javascript:alert(1)','data:text/html,test','file:///secret','http://example.com','https://user:pass@example.com','guides/../../secret.md'])assert.throws(()=>validateSource({...c,ref}));
 assert.throws(()=>validateSource({...c,checkedAt:'2026-02-31'}));
 assert.throws(()=>validateSource({...c,descriptionOrigin:'human'}));
});
test('candidate duplicates and relabeled source across splits are blocked',()=>{
 const source=validateSource(CANDIDATES[0]),r=row({source});
 assert.throws(()=>addRow([r],row({source,text:'Другой пересказ того же самого материала.'})),/уже размечен/);
 assert.throws(()=>addRow([r],row({source:{...source,id:'another-id'},group:'другая группа',text:'Другой пересказ того же самого материала.',split:'calibration'})),/одной выборке/);
});
test('legacy v1 import remains supported without invented source metadata',()=>{
 const data={...exportDataset([row()]),schemaVersion:1};
 const restored=importDataset(JSON.stringify(data));assert.deepEqual(restored,[row()]);assert.equal(Object.hasOwn(restored[0],'source'),false);
});

import {REVIEW_ITEMS,reviewCandidate,mergeRows} from '../web/experiments/decision-lab/review.mjs';
import {STORAGE_KEY,validateWorkspace,loadWorkspace,saveWorkspace,parseWorkspace} from '../web/experiments/decision-lab/storage.mjs';
const workspace=()=>({version:1,rows:[],selected:REVIEW_ITEMS[0].id,drafts:{},manual:{text:'',group:'',label:'',split:'train',rationale:'',publicApproved:false,hintSeen:false},removed:null});
const memoryStorage=()=>{const map=new Map();return {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)};};
test('proposals are not confirmed rows; confirmation records origin and correction separately',()=>{
 assert.equal(workspace().rows.length,0);
 const confirmed=reviewCandidate(REVIEW_ITEMS[0].id);assert.equal(confirmed.review.outcome,'confirmed');assert.equal(confirmed.label,'tool');
 const corrected=reviewCandidate(REVIEW_ITEMS[0].id,{label:'review',rationale:'Нужно уточнить назначение выбранной страницы.'});
 assert.equal(corrected.review.outcome,'corrected');assert.equal(corrected.review.proposedLabel,'tool');assert.equal(corrected.label,'review');
 assert.deepEqual(importDataset(JSON.stringify(exportDataset([corrected]))),[corrected]);
 assert.throws(()=>reviewCandidate(REVIEW_ITEMS[0].id,{split:'test'}));
 assert.throws(()=>validateRow({...corrected,review:{...corrected.review,outcome:'confirmed'}}));
 assert.throws(()=>validateRow({...corrected,review:{...corrected.review,decidedAt:'invalid'}}));
});
test('stored rows and both kinds of drafts survive reload without auto confirmation',()=>{
 const store=memoryStorage(),s=workspace();
 s.rows=[reviewCandidate(REVIEW_ITEMS[0].id)];s.drafts[REVIEW_ITEMS[1].id]={label:'review',rationale:'Незаконченный разбор'};
 s.manual.text='Черновик своего материала без подтверждённой категории';s.manual.hintSeen=true;
 const raw=saveWorkspace(store,s,null),loaded=loadWorkspace(store);
 assert.equal(loaded.raw,raw);assert.deepEqual(loaded.state,s);assert.equal(loaded.state.rows.length,1);
});
test('corrupt and untrusted storage is rejected, never overwritten on load',()=>{
 const store=memoryStorage();store.setItem(STORAGE_KEY,'{');assert.throws(()=>loadWorkspace(store));assert.equal(store.getItem(STORAGE_KEY),'{');
 for(const v of [{...workspace(),version:9},{...workspace(),selected:'unknown'},{...workspace(),drafts:{'__bad':{label:'tool',rationale:''}}},{...workspace(),rows:[row({publicApproved:false})]}])assert.throws(()=>validateWorkspace(v));
 assert.throws(()=>parseWorkspace('x'.repeat(3000001)));
});
test('stale tab cannot overwrite newer progress; storage failure propagates',()=>{
 const store=memoryStorage(),first=saveWorkspace(store,workspace(),null),second={...workspace(),rows:[reviewCandidate(REVIEW_ITEMS[0].id)]};
 const latest=saveWorkspace(store,second,first);
 assert.throws(()=>saveWorkspace(store,workspace(),first),/другой вкладке/);assert.equal(store.getItem(STORAGE_KEY),latest);
 assert.throws(()=>saveWorkspace({getItem:()=>null,setItem:()=>{throw Error('QuotaExceeded');}},workspace(),null),/QuotaExceeded/);
 assert.throws(()=>loadWorkspace({getItem:()=>{throw Error('SecurityError');}}),/SecurityError/);
});
test('repeat import skips exact duplicates; conflict rejects whole merge',()=>{
 const a=reviewCandidate(REVIEW_ITEMS[0].id),b=reviewCandidate(REVIEW_ITEMS[1].id);
 assert.equal(mergeRows([a],[a,b],addRow).length,2);
 const original=[a];assert.throws(()=>mergeRows(original,[b,{...a,label:'review'}],addRow));assert.deepEqual(original,[a]);
});
test('viewing a hint disqualifies a manual record from test including after roundtrip',()=>{
 const r=row({hintSeen:true});assert.equal(importDataset(JSON.stringify(exportDataset([r])))[0].hintSeen,true);
 assert.throws(()=>validateRow({...r,split:'test'}),/подсказки/);
});
