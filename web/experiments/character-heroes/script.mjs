import {scenes} from './scenes.mjs';
import {clamp,targetFrame,frameIndex,ease,spriteRect} from './motion.mjs';
const $=id=>document.getElementById(id),stage=$('stage'),canvas=$('character'),ctx=canvas.getContext('2d',{alpha:false});
const params=new URLSearchParams(location.search),mq=matchMedia('(prefers-reduced-motion: reduce)');
const freeze=params.has('t')&&Number.isFinite(Number(params.get('t')));
let reduced=mq.matches||params.get('reduce')==='1',scene,atlas=null,ready=false,paused=false,frame=0,target=0,lastDraw=-1,raf=0,last=0,playStart=null,request=0,controller,rect;
const tileWidth=matchMedia('(max-width:700px)').matches?320:480;
const alts=['Пушистый чёрный кот на фиолетовом фоне','Лисёнок в оранжевой толстовке на оранжевом фоне','Чёрный кот с белой кружкой на тёмно-синем фоне'];
function message(text){$('status').textContent=text;}
function stop(){cancelAnimationFrame(raf);raf=0;canvas.dataset.running='false';}
function controls(){const off=!ready||reduced||freeze;for(const id of ['play','pause','home','direction'])$(id).disabled=off||(paused&&id!=='pause');$('pause').textContent=paused?'Продолжить':'Пауза';$('pause').setAttribute('aria-pressed',String(paused));$('play').textContent=playStart===null?'Посмотреть движение':'Остановить просмотр';$('stage-mode').textContent=!ready?'КАДРЫ ЗАГРУЖАЮТСЯ':reduced||paused?'СПОКОЙНЫЙ КАДР':'СЛЕДУЕТ ЗА ВАМИ';document.documentElement.dataset.reduced=String(reduced);}
function draw(){if(!ready||!atlas||!ctx)return;const f=frameIndex(scene,frame);if(f===lastDraw)return;const started=performance.now();ctx.drawImage(atlas,...spriteRect(scene,frame,tileWidth),0,0,canvas.width,canvas.height);lastDraw=f;canvas.dataset.frame=String(f);canvas.dataset.draws=String(+(canvas.dataset.draws||0)+1);canvas.dataset.maxDrawMs=String(Math.max(+(canvas.dataset.maxDrawMs||0),performance.now()-started));$('frame-counter').textContent=`${String(f+1).padStart(3,'0')} / ${scene.frames}`;}
function tick(now){raf=0;const dt=last?now-last:16.67;last=now;
 if(playStart!==null){frame=Math.min(scene.frames-1,(now-playStart)*24/1000);if(frame>=scene.frames-1){playStart=null;if(scene.loop)frame-=scene.frames;target=scene.idle;controls();message('Движение завершено. Снова реагирует на курсор.');}}
 else frame=ease(frame,target,dt);
 draw();if(playStart!==null||frame!==target)raf=requestAnimationFrame(tick);else canvas.dataset.running='false';
}
function wake(){if(!ready||paused||reduced||freeze||document.hidden||raf)return;last=0;canvas.dataset.running='true';raf=requestAnimationFrame(tick);}
function cancelPlayback(){if(playStart!==null){playStart=null;if(scene.loop&&frame>scene.frames/2)frame-=scene.frames;controls();}}
function home(){if(!ready||paused||reduced||freeze)return;cancelPlayback();target=scene.idle;$('direction').value='50';wake();}
function direct(x){if(!ready||paused||reduced||freeze)return;cancelPlayback();target=targetFrame(scene,x);$('direction').value=String(Math.round(clamp(x,0,1)*100));wake();}
function resize(){rect=stage.getBoundingClientRect();canvas.width=Math.max(1,Math.round(Math.min(1280,rect.width*Math.min(devicePixelRatio||1,1.5))));canvas.height=Math.round(canvas.width*9/16);lastDraw=-1;draw();}
async function select(id){
 const chosen=scenes.find(s=>s.id===id)||scenes[0],serial=++request;controller?.abort();controller=new AbortController();const signal=controller.signal;
 stop();atlas=null;ready=false;paused=false;playStart=null;scene=chosen;frame=target=scene.idle;lastDraw=-1;stage.classList.remove('ready');canvas.dataset.draws='0';canvas.dataset.maxDrawMs='0';
 document.body.dataset.scene=scene.id;$('scene-title').textContent=scene.name;$('subtitle').textContent=scene.subtitle;$('scene-label').textContent=scene.label;$('poster').src=`assets/${scene.id}/poster.webp`;$('poster').alt=alts[scenes.indexOf(scene)];stage.setAttribute('aria-label',`${scene.name}. Стрелки влево и вправо меняют направление, Home возвращает исходную позу.`);
 $('direction').value='50';$('retry').hidden=true;$('frame-counter').textContent=`${String(scene.idle+1).padStart(3,'0')} / ${scene.frames}`;
 document.querySelectorAll('[data-character]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.character===scene.id)));
 const url=new URL(location.href);url.searchParams.set('scene',scene.id);history.replaceState(null,'',url);controls();message('Загружаем кадры…');resize();
 if(!ctx){message('Canvas недоступен. Показан исходный кадр.');return;}
 let objectUrl;const timer=setTimeout(()=>controller.signal===signal&&controller.abort(),20000);
 try{
  const response=await fetch(`assets/${scene.id}/${tileWidth===320?'atlas-mobile':'atlas'}.webp`,{signal});if(!response.ok)throw new Error(`HTTP ${response.status}`);
  const blob=await response.blob();if(serial!==request)return;objectUrl=URL.createObjectURL(blob);const image=new Image();image.src=objectUrl;await image.decode();if(serial!==request)return;
  if(image.naturalWidth!==tileWidth*12||image.naturalHeight!==Math.ceil(scene.frames/12)*tileWidth*9/16)throw new Error('Неверный размер атласа');
  atlas=image;ready=true;frame=target=freeze?clamp(Number(params.get('t'))*24,0,scene.frames-1):scene.idle;draw();stage.classList.add('ready');controls();message(reduced?'Уменьшение движения включено. Показан спокойный кадр.':freeze?'Контрольный кадр. Интерактивность отключена.':'Готово. Проведите по сцене или используйте ползунок.');
 }catch(error){if(serial!==request)return;message(`Анимация не загрузилась${error.name==='AbortError'?' за 20 секунд':''}. Статичный кадр доступен.`);$('retry').hidden=false;controls();}
 finally{clearTimeout(timer);if(objectUrl)URL.revokeObjectURL(objectUrl);}
}
new ResizeObserver(resize).observe(stage);window.addEventListener('scroll',()=>{rect=stage.getBoundingClientRect();},{passive:true});
stage.addEventListener('pointerenter',()=>{rect=stage.getBoundingClientRect();});stage.addEventListener('pointerdown',e=>{rect=stage.getBoundingClientRect();direct((e.clientX-rect.left)/rect.width);});stage.addEventListener('pointermove',e=>direct((e.clientX-rect.left)/rect.width),{passive:true});stage.addEventListener('pointerleave',home);stage.addEventListener('pointercancel',home);stage.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse')home();});stage.addEventListener('blur',home);
stage.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home')home();else direct((+$('direction').value+(e.key==='ArrowLeft'?-8:8))/100);});
$('direction').addEventListener('input',e=>direct(+e.target.value/100));$('home').addEventListener('click',home);
$('pause').addEventListener('click',()=>{paused=!paused;stop();cancelPlayback();controls();message(paused?'Движение остановлено.':'Движение продолжено.');if(!paused)home();});
$('play').addEventListener('click',()=>{if(!ready||paused||reduced||freeze)return;if(playStart!==null){home();return;}frame=0;playStart=performance.now();controls();message('Просмотр исходного движения…');wake();});
$('retry').addEventListener('click',()=>select(scene.id));document.querySelectorAll('[data-character]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.character)));
mq.addEventListener('change',()=>{reduced=mq.matches||params.get('reduce')==='1';stop();playStart=null;frame=target=scene.idle;draw();controls();message(reduced?'Уменьшение движения включено.':'Движение снова доступно.');});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();cancelPlayback();target=scene.idle;}else home();});window.addEventListener('pagehide',()=>{stop();controller?.abort();});
select(params.get('scene'));
