(()=>{
 'use strict';
 const items=window.ORIGINAL_MOTION_ITEMS||[],byId=new Map(items.map(i=>[i.id,i]));
 const $=selector=>document.querySelector(selector),list=$('#items'),search=$('#search'),filters=$('#filters'),frame=$('#demo-frame'),cover=$('#loading'),status=$('#load-message'),start=$('#start-scene'),pause=$('#pause');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let active=byId.get(location.hash.slice(1))||items[0],category='Все',paused=reduced.matches,timer=0,revision=0;
 const labels={auto:'Автоматическая анимация',click:'Нажмите внутри сцены',pointer:'Двигайте курсор внутри сцены',input:'Введите тестовые данные',scroll:'Прокрутите внутри сцены'};
 const buttons=new Map(items.map((item,index)=>{
  const button=document.createElement('button');button.type='button';button.className='item';button.dataset.id=item.id;
  const number=document.createElement('span');number.className='item-index';number.textContent=String(index+1).padStart(2,'0');
  const copy=document.createElement('span');copy.className='item-copy';const title=document.createElement('strong'),cat=document.createElement('small');title.textContent=item.title;cat.textContent=item.category;copy.append(title,cat);
  if(item.missing?.length){cat.textContent=item.category+' · Нужны файлы';button.dataset.incomplete='true'}
  const dot=document.createElement('span');dot.className='item-state';dot.setAttribute('aria-hidden','true');button.append(number,copy,dot);button.addEventListener('click',()=>select(item));return[item.id,button];
 }));list.append(...buttons.values());
 const empty=document.createElement('p');empty.className='empty';empty.hidden=true;empty.textContent='Ничего не найдено. Попробуйте другое слово или категорию «Все».';list.append(empty);
 function filter(){const query=search.value.trim().toLocaleLowerCase('ru');let count=0;for(const item of items){const visible=(category==='Все'||item.category===category)&&`${item.title} ${item.category} ${item.sourceFolder}`.toLocaleLowerCase('ru').includes(query);buttons.get(item.id).hidden=!visible;if(visible)count++}$('#visible-count').textContent=count;empty.hidden=count!==0}
 for(const name of ['Все',...new Set(items.map(i=>i.category))]){const b=document.createElement('button');b.type='button';b.textContent=name;b.setAttribute('aria-pressed',String(name===category));b.addEventListener('click',()=>{category=name;for(const x of filters.children)x.setAttribute('aria-pressed',String(x===b));filter()});filters.append(b)}
 search.addEventListener('input',filter);
 function showCover(message,button=false){cover.classList.remove('is-hidden');status.textContent=message;start.hidden=!button;$('#load-spinner').hidden=button}
 function load(){
  clearTimeout(timer);revision++;if(paused||active.missing?.length)frame.removeAttribute('src');pause.textContent=paused?'Запустить':'Остановить';pause.setAttribute('aria-pressed',String(paused));
  if(paused){showCover(reduced.matches?'Уменьшение движения включено. Запустите оригинал, когда будете готовы.':'Сцена остановлена. Запуск начнёт её заново.',true);return}
  if(active.missing?.length){showCover(active.missingReason||`Не хватает исходных файлов: ${active.missing.length}. Нужен полный экспорт этой сцены.`,false);$('#load-spinner').hidden=true;return}
  showCover('Загрузка оригинала…');const current=revision;frame.src=active.path+'?original=1&v='+encodeURIComponent(window.ORIGINAL_MOTION_VERSION||'1');
  timer=setTimeout(()=>{if(current===revision)showCover('Загрузка занимает больше времени. Можно повторить запуск.',true)},12000);
 }
 function select(item,updateHash=true){
  const scroll={top:list.scrollTop,left:list.scrollLeft,stage:$('#preview').scrollTop,page:scrollY};active=item;
  $('#item-title').textContent=item.title;$('#item-category').textContent=item.category;$('#file-name').textContent=item.path.replace('original-motion/','');$('#interaction-label').textContent=labels[item.action];$('#source-folder').textContent=item.sourceFolder;
  $('#open-demo').href='animation-original.html#'+item.id;for(const [id,button]of buttons)button.setAttribute('aria-current',String(id===item.id));
  if(updateHash)history.replaceState(null,'','#'+item.id);load();list.scrollTop=scroll.top;list.scrollLeft=scroll.left;$('#preview').scrollTop=scroll.stage;
 }
 frame.addEventListener('load',()=>{if(!frame.getAttribute('src'))return;clearTimeout(timer);cover.classList.add('is-hidden')});
 pause.addEventListener('click',()=>{paused=!paused;load()});start.addEventListener('click',()=>{paused=false;load()});$('#replay').addEventListener('click',()=>{paused=false;load()});
 reduced.addEventListener('change',()=>{if(reduced.matches){paused=true;load()}});
 for(const b of document.querySelectorAll('[data-size-choice]'))b.addEventListener('click',()=>{$('.browser-frame').dataset.size=b.dataset.sizeChoice;for(const x of document.querySelectorAll('[data-size-choice]'))x.setAttribute('aria-pressed',String(x===b))});
 addEventListener('hashchange',()=>{const item=byId.get(location.hash.slice(1));if(item&&item!==active)select(item,false)});
 $('#total-count').textContent=items.length;const readyCount=items.filter(item=>!item.missing?.length).length;$('#availability-count').textContent=`Доступно ${readyCount} из ${items.length}`+(readyCount===items.length?' — коллекция полностью доступна.':'; остальные отмечены в списке.');filter();select(active,false);
})();
