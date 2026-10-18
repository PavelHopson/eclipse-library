import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {freezeBenchmark,validateBenchmark,readiness,workload,runTemplate,validateRun,metrics,compare,restoreSession,parseFile} from '../web/experiments/decision-lab/compare-core.mjs';
const labels=['guide','tool','news','review'];
const rows=(n=52)=>Array.from({length:n},(_,i)=>({text:`Публичное описание учебного материала с уникальным номером ${i}.`,group:`источник-${i}`,label:labels[i%4],rationale:'Тестовая техническая разметка, не оценка модели.',split:'test',publicApproved:true}));
function run(b,mode='single',billing='api') {
 const r=runTemplate(b,mode);Object.assign(r,{allCallsIncluded:true,completedAt:'2026-10-18T12:00:00Z',elapsedMs:1000,humanReviewMinutes:2,humanCorrections:0});
 for(const stage of r.stages)Object.assign(stage,{provider:'test-fixture',model:stage.role,billing,calls:1,inputTokens:100,cachedInputTokens:20,outputTokens:30,costUsd:billing==='api'?.1:null});
 r.predictions=b.items.map(i=>({id:i.id,route:i.label,needsReview:i.label==='review',...(mode==='cascade'?{initialRoute:i.label,initialNeedsReview:i.label==='review',checkedByStrong:true}:{})}));return r;
}
test('freeze is stable, ignores non-test rows but validates split leakage',async()=>{
 const a=await freezeBenchmark(rows(),true),b=await freezeBenchmark(rows().reverse(),true);assert.equal(a.id,b.id);assert.equal(a.id.length,64);assert.ok(readiness(a).ready);
 await assert.rejects(freezeBenchmark(rows(),false));await assert.rejects(freezeBenchmark(rows().map(r=>({...r,split:'train'})),true));
 await assert.rejects(freezeBenchmark([...rows(),{...rows()[0],text:'Другой материал источника с тем же происхождением.',split:'train'}],true));
 await assert.rejects(freezeBenchmark(rows().map(r=>({...r,hintSeen:true})),true));
 const changed=structuredClone(a);changed.items[0].label='review';await assert.rejects(validateBenchmark(changed));
 assert.deepEqual(await validateBenchmark(a),a);
});
test('small and unbalanced samples never pass readiness',async()=>{
 assert.ok(!readiness(await freezeBenchmark(rows(8),true)).ready);
 assert.ok(!readiness(await freezeBenchmark(rows().map(r=>({...r,label:'tool'})),true)).ready);
 assert.ok(!readiness(await freezeBenchmark(rows().map(r=>({...r,group:'один источник'})),true)).ready);
});
test('model packet excludes gold, rationales and source metadata; same items in both modes',async()=>{
 const b=await freezeBenchmark(rows(),true),a=workload(b,'single'),c=workload(b,'cascade');assert.deepEqual(a.items,c.items);
 assert.equal(c.auditIds.length,11);assert.equal(a.auditIds.length,0);
 for(const item of a.items)assert.deepEqual(Object.keys(item),['id','text']);
 assert.doesNotMatch(JSON.stringify(a),/Тестовая техническая разметка/);
 assert.throws(()=>workload(b,'fake'));
 assert.throws(()=>validateRun(runTemplate(b,'single'),b));
 assert.ok(Object.hasOwn(runTemplate(b,'cascade').predictions[0],'initialNeedsReview'));
});
test('reject incomplete, duplicate, foreign, malformed or mismatched runs',async()=>{
 const b=await freezeBenchmark(rows(),true),r=run(b);assert.equal(validateRun(r,b).predictions.length,52);
 for(const mutate of [r=>r.benchmarkId='wrong',r=>r.predictions.pop(),r=>r.predictions[1]=r.predictions[0],r=>r.predictions[0].route='__proto__',r=>r.predictions[0].needsReview='yes',r=>r.elapsedMs=-1,r=>r.elapsedMs=Infinity,r=>r.humanCorrections=53,r=>r.completedAt='bad',r=>r.allCallsIncluded=false,r=>r.stages=[],r=>r.stages[0].calls=0,r=>r.stages[0].cachedInputTokens=101,r=>r.stages[0].costUsd='0.01']){const bad=structuredClone(r);mutate(bad);assert.throws(()=>validateRun(bad,b));}
 const unknown={...r,apiKey:'must-not-export'};assert.ok(!Object.hasOwn(validateRun(unknown,b),'apiKey'));
});
test('cascade audits and ambiguous cases must be checked, changes need a checker',async()=>{
 const b=await freezeBenchmark(rows(),true),r=run(b,'cascade');assert.doesNotThrow(()=>validateRun(r,b));
 const bad=structuredClone(r);bad.predictions[0].checkedByStrong=false;assert.throws(()=>validateRun(bad,b));
 const p=r.predictions.find(p=>p.initialRoute!=='review'&&!workload(b,'cascade').auditIds.includes(p.id));p.checkedByStrong=false;p.route=p.route==='tool'?'news':'tool';assert.throws(()=>validateRun(r,b));
});
test('unknown expense is not zero and subscription is not API money',async()=>{
 const b=await freezeBenchmark(rows(),true),a=run(b),c=run(b,'cascade');c.stages[0].costUsd=null;assert.equal(compare(b,a,c).savingPercent,null);
 c.stages[0].costUsd=0;c.stages[1].costUsd=.01;assert.ok(compare(b,a,c).savingPercent>0);
 const s=run(b,'single','subscription');assert.equal(compare(b,s,c).savingPercent,null);s.stages[0].costUsd=0;assert.throws(()=>validateRun(s,b));
 a.stages[0].inputTokens=null;a.stages[0].cachedInputTokens=null;assert.equal(metrics(a,b).usage.inputTokens,null);
 a.stages[0].costUsd=0;assert.equal(compare(b,a,c).savingPercent,null);
});
test('quality gate includes hidden errors, review workload and per-class recall',async()=>{
 const b=await freezeBenchmark(rows(),true),a=run(b),c=run(b,'cascade');c.stages.forEach(s=>s.costUsd=.01);assert.equal(compare(b,a,c).qualityHeld,true);
 c.predictions[0].route=c.predictions[0].route==='news'?'tool':'news';c.predictions[0].needsReview=false;
 assert.equal(metrics(c,b).missedErrors,1);assert.equal(compare(b,a,c).qualityHeld,false);
 const other=run(b,'cascade');other.humanReviewMinutes=3;assert.equal(compare(b,a,other).qualityHeld,false);
 const tiny=await freezeBenchmark(rows(8),true);assert.match(compare(tiny,run(tiny),run(tiny,'cascade')).conclusion,/Недостаточная/);
});
test('restore validates benchmark and both results, private bundle keeps labels only locally',async()=>{
 const b=await freezeBenchmark(rows(),true),bundle={schemaVersion:1,kind:'library-comparison-private',benchmark:b,runs:{single:run(b)}};
 assert.deepEqual(await restoreSession(bundle),bundle);
 const bad=structuredClone(bundle);bad.runs.cascade=bad.runs.single;await assert.rejects(restoreSession(bad));
 for(const v of ['{','x'.repeat(3000001)])assert.throws(()=>parseFile(v));
 await assert.rejects(restoreSession(parseFile('null')));
});
test('page is offline, safe rendering, bounded import and reachable from pilot',async()=>{
 const base=new URL('../web/experiments/decision-lab/',import.meta.url);
 const html=await readFile(new URL('compare.html',base),'utf8'),app=await readFile(new URL('compare.mjs',base),'utf8'),index=await readFile(new URL('index.html',base),'utf8');
 assert.match(html,/connect-src 'none'/);assert.match(html,/form-action 'none'/);assert.match(index,/href="compare.html"/);
 assert.doesNotMatch(app,/\b(fetch|XMLHttpRequest|WebSocket|eval|localStorage)\b|innerHTML|insertAdjacentHTML/);assert.match(app,/textContent/);assert.match(app,/file.size>3_000_000/);assert.match(app,/beforeunload/);
 const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
});
