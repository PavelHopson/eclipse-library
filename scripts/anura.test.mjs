import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {COUNT,wrap,frameForPoint,approach,coverRect} from '../web/experiments/anura/motion.js';
const root=resolve(import.meta.dirname,'..'),scene=resolve(root,'web/experiments/anura');
const read=p=>readFileSync(resolve(scene,p),'utf8');
test('reviewed direction anchors and neutral deadzone',()=>{
 assert.equal(COUNT,240);assert.equal(frameForPoint(.5,.5),0);
 assert.equal(frameForPoint(0,.5),30);assert.equal(frameForPoint(1,.5),138);
 assert.equal(frameForPoint(.5,0),84);assert.equal(frameForPoint(.5,1),181);
 assert.equal(frameForPoint(-1,.5),30);assert.equal(frameForPoint(2,.5),138);
});
test('frame ring and time-normalized motion are bounded',()=>{
 assert.equal(wrap(-1),239);assert.equal(wrap(240),0);
 assert.equal(approach(239,0,16.67),0);assert.equal(approach(0,239,16.67),239);
 let a=0,b=0;for(let i=0;i<10;i++)a=approach(a,80,16.67);for(let i=0;i<20;i++)b=approach(b,80,8.335);
 assert.ok(Math.abs(a-b)<.001);
 for(let x=0;x<=1;x+=.025)for(let y=0;y<=1;y+=.025){const n=frameForPoint(x,y);assert.ok(n>=0&&n<COUNT);}
});
test('cover preserves aspect ratio',()=>{
 for(const [w,h] of [[1440,900],[390,480],[1920,1080]]){const r=coverRect(w,h,true);assert.ok(r.width>=w&&r.height>=h);assert.ok(Math.abs(r.width/r.height-16/9)<.0001);}
});
test('long direction changes settle in at most 220 ms without overshoot',()=>{
 for(const target of [30,84,138,181,239]){
  let current=0;
  for(let time=0;time<220;time+=1000/60)current=approach(current,target,1000/60);
  assert.equal(wrap(current),target);
 }
 assert.equal(approach(10,80,0),10);
});
test('decoded frame is presented before advancing the next request',()=>{
 const js=read('script.js');
 assert.match(js,/index === requestIndex\) paint\(index\)/);
 assert.match(js,/1280\/Math.max\(1,rect.width\)/);
 assert.doesNotMatch(js,/ctx.fillRect/);
 assert.doesNotMatch(read('styles.css'),/filter:saturate|transition:width/);
});
test('240 exact bounded frames match provenance hashes',()=>{
 const manifest=JSON.parse(read('assets/sequence.json'));
 assert.equal(manifest.frames,COUNT);assert.equal(manifest.fps,24);assert.equal(manifest.files.length,COUNT);
 assert.equal(readdirSync(resolve(scene,'frames')).length,COUNT);
 let total=0;
 for(let i=0;i<COUNT;i++){
  const item=manifest.files[i];assert.equal(item.name,String(i).padStart(3,'0')+'.webp');
  const data=readFileSync(resolve(scene,'frames',item.name));assert.equal(data.length,item.bytes);assert.ok(data.length<300000);
  assert.equal(data.toString('ascii',0,4),'RIFF');assert.equal(data.toString('ascii',8,12),'WEBP');
  assert.equal(createHash('sha256').update(data).digest('hex'),item.sha256);total+=data.length;
 }
 assert.equal(total,manifest.bytes);assert.ok(total<6_000_000);
});
test('fixed public surface, no source video or Office embeddings',()=>{
 assert.deepEqual(readdirSync(scene).sort(),['assets','frames','guide.css','guide.html','index.html','motion.js','script.js','styles.css']);
 const expected=['ANURA-Guide.docx','look-directions.webp','original-brief.txt','poster.webp','sequence.json','source.webp'];
 assert.deepEqual(readdirSync(resolve(scene,'assets')).sort(),expected.sort());
 assert.ok(statSync(resolve(scene,'assets/ANURA-Guide.docx')).size<1_000_000);
 for(const name of ['index.html','script.js','motion.js','guide.html'])assert.doesNotMatch(read(name),/C:\\Users\\|E:\\ADMIN|BEGIN .+PRIVATE KEY|gh[pousr]_[A-Za-z0-9]{30}|sk-[A-Za-z0-9]{30}/);
});
test('same-origin CSP, resource bounds and accessibility contracts',()=>{
 const html=read('index.html'),js=read('script.js'),css=read('styles.css');
 assert.match(html,/default-src 'none'/);assert.match(html,/connect-src 'self'/);assert.doesNotMatch(html,/unsafe-inline|https?:\/\//);
 assert.match(html,/aria-live="polite"/);assert.match(html,/id="retry"/);assert.match(html,/noscript/);
 assert.match(js,/cacheLimit/);assert.match(js,/pending.size >= 2/);assert.match(js,/length:4/);assert.match(js,/visibilitychange/);assert.match(js,/pagehide/);assert.match(js,/ascii.slice\(8,12\)!=='WEBP'/);
 assert.match(css,/prefers-reduced-motion:reduce/);assert.match(css,/:focus-visible/);
});
test('discoverable library entry, explicit return and complete guide',()=>{
 const lab=readFileSync(resolve(root,'web/animations.html'),'utf8');
 assert.match(lab,/id="anura-experiment"/);assert.match(lab,/href="experiments\/anura\/index.html"/);
 assert.match(read('index.html'),/href="\.\.\/\.\.\/animations.html#anura-experiment"/);
 const manifest=JSON.parse(readFileSync(resolve(root,'web/guides.json'),'utf8'));
 const guides=manifest.guides.filter(g=>g.name==='anura-interactive-frog');assert.equal(guides.length,1);assert.equal(guides[0].modules,6);assert.equal(guides[0].lessons,12);
 assert.equal(read('assets/original-brief.txt').split(/\n/).filter(x=>x.trim()).length,98);
 assert.match(read('guide.html'),/ANURA-Guide.docx/);assert.match(read('guide.html'),/Полный исходный промпт/);
});
