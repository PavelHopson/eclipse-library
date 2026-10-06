export const COUNT = 96, IDLE = 40;
export const clamp = (n,a,b) => Math.min(b,Math.max(a,n));
export function frameForPointer(x){return x<.5 ? 28+clamp(x,0,.5)*24 : 40+(clamp(x,.5,1)-.5)*32;}
export function spriteRect(frame,width){const f=clamp(Math.round(frame),0,95);return [(f%12)*width,Math.floor(f/12)*width*9/16,width,width*9/16];}
export function easeFrame(current,target,dt){return current+(target-current)*(1-Math.exp(-Math.min(dt,50)/65));}
if(typeof document!=='undefined'){
 const $=id=>document.getElementById(id),scene=$('scene'),canvas=$('cat'),ctx=canvas.getContext('2d',{alpha:false});
 const mq=matchMedia('(prefers-reduced-motion: reduce)'),params=new URLSearchParams(location.search);
 let reduce=mq.matches||params.get('reduce')==='1',paused=false,ready=false,image,frame=IDLE,target=IDLE,lastDraw=-1,raf=0,lastTime=0,sipStart=null,rect;
 const frozen=params.has('t')&&Number.isFinite(Number(params.get('t')));
 const width=matchMedia('(max-width: 680px)').matches?320:480;
 const stats={draws:0,active:false,maxDrawMs:0,totalDrawMs:0};
 function draw(){const f=Math.round(frame);if(f===lastDraw)return;const start=performance.now();ctx.drawImage(image,...spriteRect(f,width),0,0,canvas.width,canvas.height);lastDraw=f;stats.draws++;const ms=performance.now()-start;stats.maxDrawMs=Math.max(stats.maxDrawMs,ms);stats.totalDrawMs+=ms;canvas.dataset.frame=String(f);canvas.dataset.draws=String(stats.draws);canvas.dataset.maxDrawMs=stats.maxDrawMs.toFixed(2);}
 function stop(){cancelAnimationFrame(raf);raf=0;stats.active=false;canvas.dataset.running='false';}
 function tick(now){raf=0;const dt=lastTime?now-lastTime:16.67;lastTime=now;
  if(sipStart!==null){frame=64+Math.min(31,(now-sipStart)*24/1000);if(frame>=95){sipStart=null;target=IDLE;$('sip').disabled=false;$('status').textContent='Перерыв удался. Кот снова следит за движением.';}}
  else frame=easeFrame(frame,target,dt);
  if(Math.abs(frame-target)<.035&&sipStart===null)frame=target;
  draw();if(sipStart!==null||frame!==target){raf=requestAnimationFrame(tick);}else{stats.active=false;canvas.dataset.running='false';}
 }
 function wake(){if(!ready||paused||reduce||frozen||document.hidden||raf)return;stats.active=true;canvas.dataset.running='true';lastTime=0;raf=requestAnimationFrame(tick);}
 function home(){if(!ready)return;target=IDLE;if(!paused)wake();}
 function state(){stop();sipStart=null;target=IDLE;frame=IDLE;if(ready)draw();$('pause').textContent=paused?'Продолжить':'Остановить';$('pause').setAttribute('aria-pressed',String(paused));$('sip').disabled=!ready||reduce||paused||frozen;$('pause').disabled=!ready||reduce||frozen;$('status').textContent=reduce?'Уменьшение движения включено. Показан спокойный кадр.':paused?'Движение остановлено.':frozen?'Контрольный кадр для проверки.':'Кот заметил вас. Проведите по сцене.';}
 async function load(){ready=false;$('retry').hidden=true;$('status').textContent='Загружаем кадры…';const candidate=new Image();let timeout;
  try{await new Promise((resolve,reject)=>{timeout=setTimeout(()=>reject(new Error('timeout')),15000);candidate.onload=resolve;candidate.onerror=reject;candidate.src=`assets/${width===320?'atlas-mobile':'atlas'}.webp`;});await candidate.decode();if(candidate.naturalWidth!==width*12||candidate.naturalHeight!==width*9/16*8)throw new Error('dimensions');image=candidate;ready=true;lastDraw=-1;state();if(frozen){frame=clamp(Number(params.get('t'))*24,0,95);draw();}scene.classList.add('ready');}
  catch{$('status').textContent='Не удалось загрузить анимацию. Статичный кадр остаётся доступен.';$('retry').hidden=false;}finally{clearTimeout(timeout);}
 }
 const resize=()=>{rect=scene.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(Math.min(rect.width*dpr,1280));canvas.height=Math.round(canvas.width*9/16);lastDraw=-1;if(ready)draw();};
 new ResizeObserver(resize).observe(scene);window.addEventListener('scroll',()=>{rect=scene.getBoundingClientRect();},{passive:true});
 scene.addEventListener('pointerenter',()=>{rect=scene.getBoundingClientRect();});
 scene.addEventListener('pointermove',e=>{if(!ready||reduce||paused||frozen||sipStart!==null)return;target=frameForPointer((e.clientX-rect.left)/rect.width);wake();},{passive:true});
 scene.addEventListener('pointerleave',home);scene.addEventListener('pointercancel',home);scene.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse')home();});scene.addEventListener('blur',home);
 scene.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home'].includes(e.key)||reduce||paused||frozen||sipStart!==null)return;e.preventDefault();target=e.key==='Home'?IDLE:clamp(target+(e.key==='ArrowLeft'?-3:3),28,56);wake();});
 $('sip').addEventListener('click',()=>{if(!ready||reduce||paused||frozen)return;frame=64;sipStart=performance.now();$('sip').disabled=true;$('status').textContent='Кофейный перерыв…';wake();});
 $('pause').addEventListener('click',()=>{paused=!paused;state();});$('retry').addEventListener('click',load);
 mq.addEventListener('change',e=>{reduce=e.matches||params.get('reduce')==='1';state();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();sipStart=null;target=IDLE;}else if(ready)state();});window.addEventListener('pagehide',stop);
 load();
}
