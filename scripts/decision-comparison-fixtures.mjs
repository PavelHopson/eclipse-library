// Synthetic browser QA only. Never use these labels or costs as model evidence.
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {tmpdir} from 'node:os';
import {exportDataset} from '../web/experiments/decision-lab/core.mjs';
import {freezeBenchmark,runTemplate} from '../web/experiments/decision-lab/compare-core.mjs';
const dir=resolve(tmpdir(),'eclipse-decision-comparison-qa');
await mkdir(dir,{recursive:true});
const labels=['guide','tool','news','review'];
const rows=Array.from({length:8},(_,i)=>({text:`СИНТЕТИЧЕСКИЙ ТЕСТ ИНТЕРФЕЙСА, НЕ МАТЕРИАЛ ДЛЯ ОЦЕНКИ МОДЕЛИ. Пример ${i}.`,group:`qa-source-${i}`,label:labels[i%4],rationale:'Синтетическая проверка интерфейса без реального вывода модели.',split:'test',publicApproved:true}));
const benchmark=await freezeBenchmark(rows,true),runs={};
for(const mode of ['single','cascade']){
 const r=runTemplate(benchmark,mode);Object.assign(r,{allCallsIncluded:true,completedAt:'2026-10-18T12:00:00Z',elapsedMs:2000,humanReviewMinutes:1,humanCorrections:0});
 for(const stage of r.stages)Object.assign(stage,{provider:'SYNTHETIC QA ONLY',model:`QA ${stage.role}`,billing:'subscription',calls:1,inputTokens:null,cachedInputTokens:null,outputTokens:null,costUsd:null});
 r.predictions=benchmark.items.map(i=>({id:i.id,route:i.label,needsReview:i.label==='review',...(mode==='cascade'?{initialRoute:i.label,initialNeedsReview:i.label==='review',checkedByStrong:true}:{})}));runs[mode]=r;
 await writeFile(join(dir,`${mode}.json`),JSON.stringify(r,null,2));
}
await writeFile(join(dir,'dataset.json'),JSON.stringify(exportDataset(rows),null,2));
await writeFile(join(dir,'session.json'),JSON.stringify({schemaVersion:1,kind:'library-comparison-private',benchmark,runs},null,2));
await writeFile(join(dir,'invalid.json'),JSON.stringify({...runs.cascade,benchmarkId:'invalid'}));
console.log(dir);
