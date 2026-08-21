const demos=[
  {id:'upload-queue',title:'Upload Queue',kind:'upload',label:'Загрузка',file:'animation-upload-queue.html',description:'Файл занимает своё место в очереди, а прогресс раскрывает превью без скачков layout.'},
  {id:'orbit-upload',title:'Orbit Upload',kind:'upload feedback',label:'Загрузка · feedback',file:'animation-orbit-upload.html',description:'Компактный индикатор долгой операции с понятным процентом, отменой и состоянием завершения.'},
  {id:'reactive-login',title:'Reactive Login',kind:'auth',label:'Вход',file:'animation-reactive-login.html',description:'Спокойная реакция интерфейса на фокус поля и отправку формы — без отвлечения от входа.'},
  {id:'otp-input',title:'Accessible OTP',kind:'auth feedback',label:'Вход · feedback',file:'animation-otp-input.html',description:'Ввод, вставка полного кода, стрелки, удаление и ясная ошибка — с одним логическим полем для screen reader.'},
  {id:'vault-dial',title:'Vault Dial',kind:'auth feedback',label:'Security concept',file:'animation-vault-dial.html',description:'Тактильный dial как дополнительная визуальная метафора защищённого действия, не замена основной аутентификации.'}
];

const grid=document.querySelector('#demo-grid');
const empty=document.querySelector('#empty-state');
const reduceButton=document.querySelector('.motion-toggle');
let filter='all';
let forcedReduced=false;

function demoUrl(item,replay=false){
  const params=new URLSearchParams();
  if(forcedReduced) params.set('reduce','1');
  if(replay) params.set('replay',String(Date.now()));
  const query=params.toString();
  return `${item.file}${query?`?${query}`:''}`;
}

function render(){
  const visible=demos.filter(item=>filter==='all'||item.kind.split(' ').includes(filter));
  empty.hidden=visible.length>0;
  grid.replaceChildren(...visible.map(item=>{
    const card=document.createElement('article');
    card.className='demo-card';
    card.dataset.kind=item.kind;
    card.innerHTML=`
      <div class="demo-preview">
        <iframe src="${demoUrl(item)}" title="Демо: ${item.title}" loading="lazy" sandbox="allow-scripts"></iframe>
        <span class="preview-status">LIVE · SANDBOXED</span>
      </div>
      <div class="demo-content">
        <div class="demo-meta"><span>${item.label}</span><span>Standalone HTML</span></div>
        <h3>${item.title}</h3><p>${item.description}</p>
        <div class="demo-actions">
          <button type="button" data-replay="${item.id}">Повторить</button>
          <a href="${demoUrl(item)}" target="_blank" rel="noopener">Открыть</a>
          <a href="${item.file}" download>Скачать HTML</a>
        </div>
      </div>`;
    return card;
  }));
}

document.querySelector('.filters').addEventListener('click',event=>{
  const button=event.target.closest('button[data-filter]');
  if(!button)return;
  filter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(candidate=>candidate.setAttribute('aria-pressed',String(candidate===button)));
  render();
});

grid.addEventListener('click',event=>{
  const button=event.target.closest('[data-replay]');
  if(!button)return;
  const item=demos.find(candidate=>candidate.id===button.dataset.replay);
  const frame=button.closest('.demo-card').querySelector('iframe');
  frame.src=demoUrl(item,true);
  button.textContent='Запущено';
  window.setTimeout(()=>button.textContent='Повторить',900);
});

reduceButton.addEventListener('click',()=>{
  forcedReduced=!forcedReduced;
  document.documentElement.classList.toggle('motion-reduced',forcedReduced);
  reduceButton.setAttribute('aria-pressed',String(forcedReduced));
  reduceButton.textContent=forcedReduced?'Движение уменьшено':'Уменьшить движение';
  render();
});

render();
