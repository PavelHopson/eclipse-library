import { COUNT, wrap, approach, frameForPoint, coverRect } from './motion.js?v=2';

const $ = id => document.getElementById(id);
const root = $('experience'), canvas = $('frog'), ctx = canvas.getContext('2d', {alpha:false});
const reduced = matchMedia('(prefers-reduced-motion: reduce)'), fine = matchMedia('(pointer: fine)');
const compact = matchMedia('(max-width:700px)'), rightAligned = matchMedia('(max-width:1200px)');
const cursor = $('cursor'), catchButton = $('catch');
const blobs = new Array(COUNT), cache = new Map(), pending = new Map();
const cacheLimit = compact.matches ? 8 : 12;
const decodeWidth = compact.matches ? 960 : 1280;
let controller, ready = false, paused = false, disposed = false, current = 0, target = 0;
let raf = 0, previous = 0, painted = -1, draws = 0, maxCache = 0, bytes = 0, sequenceStart = 0;
let rect = {width:1,height:1}, pointerRect = {width:1,height:1}, dpr = 1, requestIndex = 0;
let decodeFailed = false;
let cursorRaf = 0, cursorX = 0, cursorY = 0, cursorOver = false;
let drawBox = {x:0,y:0,width:1,height:1};
const status = text => { $('object-state').textContent = text; };
function announce(text) { $('announcement').textContent = text; }
function stopSequence() { if(sequenceStart){sequenceStart = 0; catchButton.classList.remove('playing');} }
function touchCache(index, bitmap) {
  cache.delete(index); cache.set(index, bitmap);
  while(cache.size > cacheLimit) {
    const oldest = cache.keys().next().value;
    cache.get(oldest).close?.(); cache.delete(oldest);
  }
  maxCache = Math.max(maxCache, cache.size);
}
async function decode(index) {
  if(cache.has(index)) return cache.get(index);
  if(pending.has(index)) return pending.get(index);
  if(pending.size >= 2 || !blobs[index] || disposed || decodeFailed) return null;
  const task = (async () => {
    let bitmap;
    try {
      if(typeof createImageBitmap === 'function') bitmap = await createImageBitmap(blobs[index], {resizeWidth:decodeWidth,resizeHeight:decodeWidth*9/16,resizeQuality:'low'});
      else {
        const url = URL.createObjectURL(blobs[index]);
        try { bitmap = new Image(); bitmap.src = url; await bitmap.decode(); }
        finally { URL.revokeObjectURL(url); }
      }
      if(disposed) { bitmap.close?.(); return null; }
      touchCache(index, bitmap);
      // Present the awaited frame now. Waiting for the next tick advanced past it and
      // discarded most intermediate images, even when decoding finished in only 4 ms.
      if(ready && !paused && !document.hidden && index === requestIndex) paint(index);
      return bitmap;
    } catch {
      decodeFailed = true; fail('Не удалось прочитать кадры. Исходный портрет остаётся доступен.'); return null;
    } finally { pending.delete(index); if(ready && !disposed && !document.hidden) kick(); }
  })();
  pending.set(index, task); return task;
}
function paint(index) {
  requestIndex = index;
  if(index === painted) return;
  const image = cache.get(index);
  if(!image) { void decode(index); return; }
  touchCache(index, image);
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.drawImage(image,drawBox.x,drawBox.y,drawBox.width,drawBox.height);
  if(painted<0) root.classList.add('has-frame');
  painted=index; draws++;
}
function tick(time) {
  raf = 0;
  if(!ready || paused || document.hidden || disposed) return;
  const dt = previous ? time - previous : 16.67; previous=time;
  if(sequenceStart) {
    const elapsed=time-sequenceStart;
    if(elapsed > 1900) { stopSequence(); target=0; status('СМОТРИТ НА ВАС'); announce('Взгляд пойман. Лягушка смотрит на вас.'); }
    else target=wrap(185 + elapsed / 1000 * 24);
  }
  current = reduced.matches ? target : approach(current,target,dt);
  if(Math.abs(current-target)<.1) current=target;
  paint(wrap(current));
  if(sequenceStart || wrap(current)!==wrap(target)) kick();
  else previous=0;
}
function kick() { if(!raf && ready && !paused && !document.hidden && !disposed) raf=requestAnimationFrame(tick); }
function measure() {
  rect=canvas.getBoundingClientRect(); pointerRect=root.getBoundingClientRect();
  dpr=Math.min(devicePixelRatio || 1,1.25,1280/Math.max(1,rect.width));
  drawBox=coverRect(rect.width,rect.height,rightAligned.matches);
  canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));
  painted=-1;
  if(ready) { paint(wrap(current)); kick(); }
}
function fail(message) {
  ready=false; controller?.abort(); cancelAnimationFrame(raf); raf=0;
  stopSequence(); root.classList.remove('ready'); $('loading').hidden=false;
  $('loading').classList.add('error'); $('load-label').textContent=message;
  $('retry').hidden=false; $('catch').disabled=true; $('pause').disabled=true;
  status('СТАТИЧНЫЙ КАДР'); announce(message);
  document.body.classList.remove('custom-cursor'); $('cursor').classList.remove('visible');
}
async function load() {
  if(!ctx) { fail('Canvas недоступен. Можно посмотреть исходный кадр и гайд.'); $('retry').hidden=true; return; }
  controller?.abort(); controller=new AbortController(); const signal=controller.signal;
  decodeFailed=false; $('retry').hidden=true; $('loading').hidden=false; $('loading').classList.remove('error');
  $('load-label').textContent='Знакомимся с объектом'; status('ЗАГРУЗКА КАДРОВ');
  let next=0, completed=blobs.filter(Boolean).length;
  const update=()=>{ $('progress').value=completed; $('percent').textContent=`${Math.floor(completed/COUNT*100)}%`; };
  update();
  try {
    async function worker() {
      while(next<COUNT) {
        const index=next++; if(blobs[index]) continue;
        const timeout=setTimeout(()=>controller.abort(),15000);
        try {
          const response=await fetch(`frames/${String(index).padStart(3,'0')}.webp`, {signal,credentials:'omit'});
          if(!response.ok) throw new Error('frame response');
          if(Number(response.headers.get('content-length'))>300000 || !response.body) throw new Error('frame bounds');
          const reader=response.body.getReader(), chunks=[]; let received=0;
          try {
            while(true) {
              const {done,value}=await reader.read(); if(done) break;
              received+=value.byteLength;
              if(received>300000) { await reader.cancel(); throw new Error('frame bounds'); }
              chunks.push(value);
            }
          } finally { reader.releaseLock(); }
          const blob=new Blob(chunks,{type:'image/webp'});
          if(blob.size>300000 || blob.size<100) throw new Error('frame bounds');
          const signature=new Uint8Array(await blob.slice(0,12).arrayBuffer());
          const ascii=String.fromCharCode(...signature);
          if(ascii.slice(0,4)!=='RIFF' || ascii.slice(8,12)!=='WEBP') throw new Error('frame format');
          blobs[index]=blob.type==='image/webp'?blob:new Blob([blob],{type:'image/webp'});
          bytes+=blob.size; completed++; update();
        } finally { clearTimeout(timeout); }
      }
    }
    await Promise.all(Array.from({length:4},worker));
    const first=await decode(0); if(!first || signal.aborted || disposed) return;
    ready=true; current=target=0; measure(); paint(0);
    root.classList.add('ready'); $('loading').hidden=true;
    $('catch').disabled=false; $('pause').disabled=false;
    status(reduced.matches ? 'СПОКОЙНЫЙ РЕЖИМ' : 'ОБЪЕКТ АКТИВЕН');
    announce('Лягушка готова. Двигайте указателем или нажмите «Поймать взгляд».');
  } catch { if(!disposed) fail('Кадры не загрузились. Проверьте соединение и попробуйте ещё раз.'); }
}
function point(event) {
  if(!ready || paused) return;
  if(event.target.closest('a,button')) return;
  stopSequence();
  const box=event.pointerType==='touch' ? rect : pointerRect;
  target=frameForPoint((event.clientX-box.left)/box.width,(event.clientY-box.top)/box.height);
  kick();
}
root.addEventListener('pointermove',point,{passive:true});
root.addEventListener('pointerdown',event=>{ if(event.pointerType==='touch') point(event); },{passive:true});
root.addEventListener('pointerleave',event=>{ if(event.pointerType!=='touch' && !sequenceStart){target=0;kick();} });
document.addEventListener('pointermove',event=>{
  if(event.pointerType==='touch' || !fine.matches || reduced.matches || !ready) return;
  cursorX=event.clientX; cursorY=event.clientY;
  if(!cursorRaf) cursorRaf=requestAnimationFrame(()=>{
    cursorRaf=0;
    cursor.style.transform=`translate3d(${cursorX}px,${cursorY}px,0) scale(${cursorOver?1.5:1})`;
    cursor.classList.add('visible');document.body.classList.add('custom-cursor');
  });
},{passive:true});
document.addEventListener('pointerover',event=>{cursorOver=Boolean(event.target.closest('a,button'));});
document.documentElement.addEventListener('pointerleave',()=>{cancelAnimationFrame(cursorRaf);cursorRaf=0;cursor.classList.remove('visible');document.body.classList.remove('custom-cursor');});
$('catch').addEventListener('click',()=>{
  if(!ready) return;
  if(paused) togglePause();
  if(reduced.matches) { stopSequence();current=target=0;paint(0);announce('Лягушка смотрит на вас.'); }
  else { current=185;target=185;sequenceStart=performance.now();$('catch').classList.add('playing');status('ЛОВИМ ВЗГЛЯД');kick(); }
});
function togglePause() {
  paused=!paused; stopSequence(); root.classList.toggle('paused',paused);
  $('pause').setAttribute('aria-pressed',String(paused)); $('pause').textContent=paused?'Продолжить':'Пауза';
  status(paused?'НАБЛЮДЕНИЕ НА ПАУЗЕ':'ОБЪЕКТ АКТИВЕН');
  if(paused) { cancelAnimationFrame(raf);raf=0; } else { previous=0;kick(); }
}
$('pause').addEventListener('click',togglePause); $('retry').addEventListener('click',load);
new ResizeObserver(measure).observe(canvas);
document.addEventListener('visibilitychange',()=>{
  stopSequence(); previous=0;
  if(document.hidden) { cancelAnimationFrame(raf);raf=0;cancelAnimationFrame(cursorRaf);cursorRaf=0; } else kick();
});
reduced.addEventListener('change',()=>{ stopSequence();current=target=0;paint(0);$('cursor').classList.remove('visible');document.body.classList.remove('custom-cursor');status(reduced.matches?'СПОКОЙНЫЙ РЕЖИМ':'ОБЪЕКТ АКТИВЕН');kick(); });
addEventListener('pagehide',()=>{disposed=true;controller?.abort();cancelAnimationFrame(raf);cancelAnimationFrame(cursorRaf);cache.forEach(image=>image.close?.());cache.clear();blobs.fill(null);});
addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
// Read-only diagnostics for bounded resource and interaction regression tests.
Object.defineProperty(window,'ANURA',{value:Object.freeze({snapshot:()=>({ready,paused,reduced:reduced.matches,frame:painted,target:wrap(target),draws,cache:cache.size,maxCache,cacheLimit,pending:pending.size,bytes,raf:Boolean(raf),requestIndex,decodeWidth,canvasWidth:canvas.width})})});
measure(); void load();
