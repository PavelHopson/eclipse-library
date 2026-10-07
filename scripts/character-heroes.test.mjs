import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {scenes} from '../web/experiments/character-heroes/scenes.mjs';
import {targetFrame,frameIndex,ease,spriteRect} from '../web/experiments/character-heroes/motion.mjs';
const root=new URL('../web/experiments/character-heroes/',import.meta.url),read=p=>readFileSync(new URL(p,root),'utf8');
// Read standard image headers directly: CI does not need FFmpeg to verify prebuilt assets.
function dimensions(file){
 const b=readFileSync(new URL(file,root));
 if(file.endsWith('.png')){assert.equal(b.subarray(1,4).toString(),'PNG');return{width:b.readUInt32BE(16),height:b.readUInt32BE(20)};}
 assert.equal(b.subarray(0,4).toString(),'RIFF');assert.equal(b.subarray(8,12).toString(),'WEBP');
 for(let offset=12;offset+8<b.length;){const tag=b.subarray(offset,offset+4).toString(),size=b.readUInt32LE(offset+4),data=offset+8;
  if(tag==='VP8X')return{width:1+b.readUIntLE(data+4,3),height:1+b.readUIntLE(data+7,3)};
  if(tag==='VP8 ')return{width:b.readUInt16LE(data+6)&0x3fff,height:b.readUInt16LE(data+8)&0x3fff};
  if(tag==='VP8L'){const bits=b.readUInt32LE(data+1);return{width:(bits&0x3fff)+1,height:((bits>>>14)&0x3fff)+1};}
  offset=data+size+(size%2);
 }
 throw new Error('No image dimension header: '+file);
}
for(const s of scenes){
 test(`${s.id}: pointer anchors, bounds and idle convergence`,()=>{
  assert.equal(targetFrame(s,0),s.left);assert.equal(targetFrame(s,.5),s.idle);assert.equal(targetFrame(s,1),s.right);
  for(let x=-1;x<=2;x+=.005){const f=frameIndex(s,targetFrame(s,x));assert.ok(f>=0&&f<s.frames);const r=spriteRect(s,targetFrame(s,x),480);assert.ok(r[0]+r[2]<=5760);assert.ok(r[1]+r[3]<=Math.ceil(s.frames/12)*270);}
  for(const start of [s.left,s.right]){let f=start;for(let i=0;i<90;i++)f=ease(f,s.idle,16.67);assert.equal(f,s.idle);}
 });
 test(`${s.id}: every derivative matches manifest and all source frames survive`,()=>{
  const manifest=JSON.parse(read(`assets/${s.id}/manifest.json`));assert.equal(manifest.frames,s.frames);assert.equal(manifest.fps,24);
  for(const {file,bytes,sha256} of manifest.files){const data=readFileSync(new URL(file,root));assert.equal(data.length,bytes);assert.equal(createHash('sha256').update(data).digest('hex'),sha256);}
  for(const [name,w,h] of [[`sources/${s.id}/horizontal-sprite.png`,s.frames*320,180],[`assets/${s.id}/atlas.webp`,5760,Math.ceil(s.frames/12)*270],[`assets/${s.id}/atlas-mobile.webp`,3840,Math.ceil(s.frames/12)*180]]){
   const image=dimensions(name);assert.equal(image.width,w);assert.equal(image.height,h);
  }
 });
}
test('smoothing is time-normalized and never overshoots',()=>{const one=ease(0,100,32),two=ease(ease(0,100,16),100,16);assert.ok(Math.abs(one-two)<1e-10);for(let t=0;t<1000;t+=5)assert.ok(ease(20,-10,t)>=-10);});
test('all page references exist, navigation includes the new gallery',()=>{
 for(const page of ['index.html','guide.html'])for(const match of read(page).matchAll(/(?:href|src)="([^"]+)"/g)){
  const value=match[1].split(/[?#]/)[0];if(value)assert.ok(existsSync(new URL(value,root)),`${page}: ${value}`);
 }
 const nav=readFileSync(new URL('../web/animations.html',import.meta.url),'utf8');assert.match(nav,/id="character-heroes-experiment"/);assert.match(nav,/experiments\/character-heroes\/index.html/);
 assert.match(read('index.html'),/Content-Security-Policy/);assert.match(read('style.css'),/prefers-reduced-motion/);assert.doesNotMatch(read('index.html'),/https?:\/\//);
});

// Focused runtime harness, not a substitute for a real browser or visual QA.
test('runtime: loading, pointer, idle, keyboard, pause, playback, reduced motion, retry and stale loads',async()=>{
 class Element{
  constructor(){this.listeners={};this.dataset={};this.value='50';this.disabled=false;this.hidden=false;this.textContent='';this.attributes={};const set=new Set();this.classList={add:x=>set.add(x),remove:x=>set.delete(x),contains:x=>set.has(x)};}
  addEventListener(name,fn){(this.listeners[name]??=[]).push(fn);}
  emit(name,event={}){for(const fn of this.listeners[name]||[])fn({target:this,preventDefault(){},...event});}
  setAttribute(name,value){this.attributes[name]=value;}
  getBoundingClientRect(){return{left:0,top:0,width:960,height:540};}
 }
 const ids=['stage','character','scene-title','subtitle','scene-label','poster','direction','retry','frame-counter','status','play','pause','home','stage-mode'];
 const elements=Object.fromEntries(ids.map(id=>[id,new Element()])),buttons=scenes.map(s=>{const b=new Element();b.dataset.character=s.id;return b;});
 let paint=0;elements.character.getContext=()=>({drawImage(){paint++;}});
 const doc=new Element();doc.getElementById=id=>elements[id];doc.querySelectorAll=()=>buttons;doc.body=new Element();doc.documentElement=new Element();doc.hidden=false;
 const win=new Element(),mq=new Element();mq.matches=false;let mobile=false,fail=false,deferred=null,fetches=[],clock=1000,nextId=0;const queue=new Map();
 const previous={};const overrides={document:doc,window:win,location:new URL('http://localhost/experiments/character-heroes/index.html'),history:{replaceState(){}},devicePixelRatio:1,matchMedia:q=>q.includes('prefers')?mq:{matches:mobile},ResizeObserver:class{observe(){}},requestAnimationFrame:fn=>{const id=++nextId;queue.set(id,fn);return id;},cancelAnimationFrame:id=>queue.delete(id),Image:class{get naturalWidth(){return mobile?3840:5760;}get naturalHeight(){return Math.ceil(scenes.find(s=>s.id===doc.body.dataset.scene).frames/12)*(mobile?180:270);}async decode(){}},fetch:async(url,{signal})=>{fetches.push(url);if(deferred){const d=deferred;deferred=null;await d;}if(signal.aborted)throw new DOMException('Aborted','AbortError');if(fail)throw new Error('network');return{ok:true,blob:async()=>new Blob(['test'])};}};
 for(const [key,value] of Object.entries(overrides)){previous[key]=Object.getOwnPropertyDescriptor(globalThis,key);Object.defineProperty(globalThis,key,{value,writable:true,configurable:true});}
 const flush=async()=>{for(let i=0;i<5;i++)await new Promise(resolve=>setImmediate(resolve));};
 const advance=(n=120,dt=16.67)=>{for(let i=0;i<n&&queue.size;i++){clock+=dt;const calls=[...queue.values()];queue.clear();for(const fn of calls)fn(clock);}};
 try{
  await import(`../web/experiments/character-heroes/script.mjs?test=${Date.now()}`);await flush();
  assert.equal(fetches.length,1);assert.ok(elements.stage.classList.contains('ready'));assert.equal(elements.character.dataset.frame,'0');assert.equal(queue.size,0);
  elements.stage.emit('pointermove',{clientX:960});advance();assert.equal(elements.character.dataset.frame,'88');assert.equal(queue.size,0);
  elements.stage.emit('pointerleave');advance();assert.equal(elements.character.dataset.frame,'0');
  elements.stage.emit('keydown',{key:'ArrowLeft'});advance();assert.notEqual(elements.character.dataset.frame,'0');elements.stage.emit('keydown',{key:'Home'});advance();assert.equal(elements.character.dataset.frame,'0');
  elements.pause.emit('click');const frozen=paint;elements.stage.emit('pointermove',{clientX:0});advance();assert.equal(paint,frozen);assert.equal(elements.pause.attributes['aria-pressed'],'true');elements.pause.emit('click');advance();
  elements.play.emit('click');advance(400);assert.equal(elements.character.dataset.frame,'0');assert.equal(queue.size,0);
  mq.matches=true;mq.emit('change');assert.equal(elements.play.disabled,true);elements.stage.emit('pointermove',{clientX:0});assert.equal(queue.size,0);mq.matches=false;mq.emit('change');assert.equal(elements.play.disabled,false);
  buttons[1].emit('click');await flush();assert.equal(elements.character.dataset.frame,'48');elements.stage.emit('pointermove',{clientX:0});advance();assert.equal(elements.character.dataset.frame,'28');elements.stage.emit('pointerup',{pointerType:'touch'});advance();assert.equal(elements.character.dataset.frame,'48');
  elements.stage.emit('pointermove',{clientX:960});doc.hidden=true;doc.emit('visibilitychange');assert.equal(queue.size,0);doc.hidden=false;doc.emit('visibilitychange');advance();assert.equal(elements.character.dataset.frame,'48');
  fail=true;buttons[2].emit('click');await flush();assert.equal(elements.retry.hidden,false);assert.equal(elements.play.disabled,true);assert.ok(!elements.stage.classList.contains('ready'));fail=false;elements.retry.emit('click');await flush();assert.equal(elements.retry.hidden,true);assert.equal(elements.character.dataset.frame,'40');
  let release;deferred=new Promise(resolve=>release=resolve);buttons[0].emit('click');buttons[1].emit('click');await flush();release();await flush();assert.equal(doc.body.dataset.scene,'fox');assert.equal(elements.character.dataset.frame,'48');assert.equal(queue.size,0);
  win.emit('pagehide');
 }finally{for(const key of Object.keys(overrides)){if(previous[key])Object.defineProperty(globalThis,key,previous[key]);else delete globalThis[key];}}
});
