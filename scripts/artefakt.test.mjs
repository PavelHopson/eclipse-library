import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const html=await readFile(new URL('web/experiments/artefakt/index.html',root),'utf8');
const source=html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
const guide=await readFile(new URL('web/experiments/artefakt/guide.html',root),'utf8');
const original=await readFile(new URL('web/experiments/artefakt/sources/original-prompt.txt',root));

test('single-file page has syntactically valid inline module and pinned imports',()=>{
 assert.ok(source);
 const check=spawnSync(process.execPath,['--check','--input-type=module'],{input:source,encoding:'utf8'});
 assert.equal(check.status,0,check.stderr);
 const map=JSON.parse(html.match(/<script type="importmap">(.*?)<\/script>/s)[1]);
 assert.deepEqual(Object.keys(map.imports),['three','three/addons/','lenis']);
 assert.match(map.imports.three,/three@0\.185\.0/);assert.match(map.imports.lenis,/lenis@1\.3\.26/);
 assert.equal((html.match(/<style>/g)||[]).length,1);
 assert.equal((html.match(/<script[^>]+src=/g)||[]).length,0);
});

test('original prompt remains byte-identical and full length',()=>{
 assert.equal(createHash('sha256').update(original).digest('hex'),'2c36511895c14829038f43d7980217b0b5a3bd08774e461adc5b6aca8f34b837');
 assert.ok(original.toString('utf8').split('\n').length>1500);
 assert.match(guide,/sources\/original-prompt\.txt/);
});

test('six content blocks, four products, five FAQ rows and stable IDs',()=>{
 const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length);
 assert.equal((html.match(/<section\b/g)||[]).length,5);
 assert.equal((html.match(/<footer\b/g)||[]).length,1);
 assert.equal((html.match(/<article class="product"/g)||[]).length,4);
 assert.equal((html.match(/<div class="faq-row/g)||[]).length,5);
 assert.match(html,/<h1 id="hero-title"/);
 for(const match of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(match[1]),'Missing anchor '+match[1]);
});

test('local entry, guide and download links resolve without an external site',async()=>{
 const animations=await readFile(new URL('web/animations.html',root),'utf8');
 assert.match(animations,/id="artefakt-experiment"/);
 assert.match(animations,/experiments\/artefakt\/guide\.html/);
 for(const text of [html,guide])for(const match of text.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)){
  const href=match[1].split('?')[0];if(/^[a-z]+:/i.test(href))continue;
  await access(new URL(href,new URL('web/experiments/artefakt/',root)));
 }
 const manifest=JSON.parse(await readFile(new URL('web/guides.json',root),'utf8'));
 assert.ok(manifest.guides.some(g=>g.name==='artefakt-interactive-webgl'));
});

test('library markdown renderer preserves the exact ARTEFAKT local destinations',async()=>{
 const app=await readFile(new URL('web/app.js',root),'utf8');
 const functionSource=app.slice(app.indexOf('  function absUrl(u)'),app.indexOf('  function inline(md)'));
 const absUrl=vm.runInNewContext('const REPO_URL="https://github.com/PavelHopson/eclipse-library";'+functionSource+';absUrl');
 for(const url of ['/experiments/artefakt/index.html','/experiments/artefakt/guide.html','/experiments/artefakt/sources/original-prompt.txt','/animations.html#artefakt-experiment'])assert.equal(absUrl(url),url);
 assert.equal(absUrl('unrelated.md'),'https://github.com/PavelHopson/eclipse-library/blob/master/unrelated.md');
});

test('security boundary: no submission or stored personal data; explicit demo',()=>{
 assert.match(html,/form-action 'none'/);assert.match(html,/object-src 'none'/);assert.match(html,/base-uri 'none'/);
 assert.match(html,/worker-src blob:/);assert.match(html,/'wasm-unsafe-eval'/);
 assert.doesNotMatch(source,/localStorage|sessionStorage|document\.cookie|sendBeacon|method:\s*['"]POST/i);
 assert.match(source,/\.newsletter'\)\.addEventListener\('submit',event=>\{event\.preventDefault\(\)/);
 assert.match(source,/Подписка не оформлена/);assert.match(html,/Учебный концепт/);
 assert.doesNotMatch(source,/\.innerHTML\s*=/);
});

test('motion and failure paths do not require the CDN to run',()=>{
 assert.match(source,/import\('three'\)/);assert.doesNotMatch(source,/^import .* from /m);
 assert.match(source,/motionQuery\.addEventListener\('change'/);
 assert.match(source,/visibilitychange/);assert.match(source,/now-started>=8000/);
 assert.match(source,/Math\.min\(ready\?1:\.97/);
 assert.match(html,/<noscript>/);assert.match(html,/aria-pressed="false"/);
 assert.match(source,/await renderer\.compileAsync/);
 assert.match(source,/nearestLoaded\(reelFrames/);
 assert.match(source,/globalCompositeOperation='lighter'/);
 assert.match(source,/Array\.from\(\{length:6\}/);
});

test('Russian interface covers visible copy, accessible labels and runtime messages',()=>{
 assert.match(html,/<html lang="ru">/);
 const markup=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<style>[\s\S]*?<\/style>/g,'');
 const text=[...markup.matchAll(/>([^<>]+)</g)].map(match=>match[1]).join(' ');
 const allowed=new Set(['ARTEFAKT','Eclipse','JavaScript','D']);
 const remaining=[...text.matchAll(/[A-Za-z]+/g)].map(match=>match[0]).filter(word=>!allowed.has(word));
 assert.deepEqual(remaining,[],'Untranslated visible words');
 const labels=[...markup.matchAll(/(?:aria-label|alt|placeholder)="([^"]+)"/g)].map(match=>match[1]);
 assert.ok(labels.every(label=>label==='ARTEFAKT'||/[А-Яа-яЁё]/.test(label)),'Untranslated accessibility label');
 for(const old of ['Loading the','3D unavailable','colour sample only','Demo complete','You have not','Open menu'])assert.ok(!html.includes(old),old);
 assert.match(source,/CHARS='АБВГДЕЁ/);
 assert.match(source,/document\.fonts\.ready/);
 assert.doesNotMatch(source,/document\.fonts\.load/);
 assert.match(html,/Cascadia Mono/);
});

const pure=source.split('\n').filter(line=>/^const (clamp|frameLerp|smootherstep|nearestLoaded|mixWeights) =/.test(line)).join('\n');
const helpers=vm.runInNewContext(pure+'\n({clamp,frameLerp,smootherstep,nearestLoaded,mixWeights})');
test('time-normalized interpolation gives identical response at 30 and 60 Hz',()=>{
 const a=helpers.frameLerp(.12,1000/30),b=helpers.frameLerp(.12,1000/60);
 assert.ok(Math.abs(a-(1-(1-b)**2))<1e-12);assert.equal(helpers.frameLerp(.12,0),0);
});
test('progress is clamped, smootherstep is monotone and mixes have unit weight',()=>{
 assert.equal(helpers.clamp(-3),0);assert.equal(helpers.clamp(9),1);
 assert.equal(helpers.smootherstep(0),0);assert.equal(helpers.smootherstep(1),1);
 let previous=-1;for(let i=0;i<=100;i++){const value=helpers.smootherstep(i/100);assert.ok(value>=previous);previous=value;}
 for(const position of [0,.1,17.7,40,60]){const result=helpers.mixWeights(position);assert.ok(result.a<=position&&result.b>=position);assert.equal((1-result.weight)+result.weight,1);}
});
test('partial reel finds nearest available frame and handles total failure',()=>{
 assert.equal(helpers.nearestLoaded([null,null,null],1),-1);
 assert.equal(helpers.nearestLoaded([{},null,null,{}],1),0);
 assert.equal(helpers.nearestLoaded([{},null,null,{}],2),3);
 assert.equal(helpers.nearestLoaded([{},null,null,{}],3),3);
});

function createTickerHarness(){
 let id=0;const callbacks=new Map(),handlers=new Map(),errors=[];
 const document={hidden:false,addEventListener:(event,fn)=>handlers.set(event,fn)};
 const context={document,requestAnimationFrame(fn){callbacks.set(++id,fn);return id;},cancelAnimationFrame(i){callbacks.delete(i);},console:{error(...args){errors.push(args);}}};
 const code=source.slice(source.indexOf('const ticker ='),source.indexOf('const failed ='));
 const ticker=vm.runInNewContext(code+'\nticker',context);
 return {ticker,callbacks,errors,step(now){const work=[...callbacks.values()];callbacks.clear();work.forEach(fn=>fn(now));},hidden(value){document.hidden=value;handlers.get('visibilitychange')();}};
}
test('ticker uses one scheduled frame, isolates errors and stops when empty',()=>{
 const h=createTickerHarness();let calls=0;
 const remove=h.ticker.add(()=>calls++);h.ticker.add(()=>{throw new Error('test');});
 assert.equal(h.callbacks.size,1);h.step(20);assert.equal(calls,1);assert.equal(h.errors.length,1);assert.equal(h.ticker.size,1);assert.equal(h.callbacks.size,1);
 remove();assert.equal(h.callbacks.size,0);assert.equal(h.ticker.size,0);
});
test('ticker suspends hidden document and minimum gap receives elapsed time',()=>{
 const h=createTickerHarness(),ticks=[];const remove=h.ticker.add((now,dt)=>ticks.push({now,dt}),30);
 h.step(31);h.step(47);h.step(64);assert.equal(ticks.length,2);assert.equal(ticks[1].dt,33);
 h.hidden(true);assert.equal(h.callbacks.size,0);h.hidden(false);assert.equal(h.callbacks.size,1);remove();
});
