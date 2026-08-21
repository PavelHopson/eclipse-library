const demos=[
{id:"upload-queue",title:"Upload Queue",label:"Очередь файлов",file:"animation-upload-queue.html",description:"Файлы мягко занимают свои места, а прогресс раскрывает цветное превью без скачков layout.",tags:["upload","progress","drag & drop"]},
{id:"reactive-login",title:"Guardian Login",label:"Реактивный вход",file:"animation-reactive-login.html",description:"Живой guardian реагирует на курсор, фокус пароля и отправку формы, не мешая основному сценарию.",tags:["auth","pointer","feedback"]},
{id:"orbit-upload",title:"Orbit Upload",label:"Круговой прогресс",file:"animation-orbit-upload.html",description:"Минималистичная траектория показывает длительную загрузку, процент, отмену и завершение.",tags:["upload","svg","progress"]},
{id:"otp-input",title:"OTP Terminal",label:"Код подтверждения",file:"animation-otp-input.html",description:"Тёмный OTP-компонент поддерживает ввод, вставку кода, клавиатуру, ошибку и успешное подтверждение.",tags:["otp","keyboard","a11y"]},
{id:"vault-dial",title:"Vault Dial",label:"Защищённое действие",file:"animation-vault-dial.html",description:"Механический dial усиливает ощущение защищённого действия, оставаясь дополнительной метафорой.",tags:["security","dial","feedback"]},
{id:"otp-light",title:"OTP Glass",label:"Светлый OTP",file:"animation-otp-light.html",description:"Светлая glass-версия подтверждения с последовательным вводом и ясным состоянием готовности.",tags:["otp","glass","mobile"]}
];
const list=document.querySelector("#demo-list"),frame=document.querySelector("#stage-frame"),loading=document.querySelector("#stage-loading"),toggle=document.querySelector(".motion-toggle");
const ui={index:document.querySelector("#active-index"),title:document.querySelector("#active-title"),description:document.querySelector("#active-description"),tags:document.querySelector("#active-tags"),file:document.querySelector("#stage-file"),open:document.querySelector('[data-action="open"]'),download:document.querySelector('[data-action="download"]')};
let active=0,reduced=false;
function url(item,replay=false){const q=new URLSearchParams();if(reduced)q.set("reduce","1");if(replay)q.set("replay",Date.now());const s=q.toString();return item.file+(s?"?"+s:"")}
function renderList(){list.replaceChildren(...demos.map((item,i)=>{const b=document.createElement("button");b.type="button";b.className="demo-option";b.dataset.index=i;b.setAttribute("aria-current",String(i===active));b.innerHTML='<span class="demo-num">'+String(i+1).padStart(2,"0")+'</span><span class="demo-copy"><b>'+item.title+'</b><small>'+item.label+'</small></span><i class="demo-live" aria-hidden="true"></i>';return b}))}
function select(index,replay=false){active=index;const item=demos[index];loading.hidden=false;frame.title="Интерактивное демо: "+item.title;frame.src=url(item,replay);ui.index.textContent=String(index+1).padStart(2,"0");ui.title.textContent=item.title;ui.description.textContent=item.description;ui.file.textContent=item.file;ui.tags.replaceChildren(...item.tags.map(tag=>{const li=document.createElement("li");li.textContent=tag;return li}));ui.open.href=url(item);ui.download.href=item.file;renderList()}
list.addEventListener("click",e=>{const b=e.target.closest(".demo-option");if(b)select(Number(b.dataset.index),true)});
frame.addEventListener("load",()=>{loading.hidden=true});
document.querySelector('[data-action="replay"]').addEventListener("click",()=>select(active,true));
toggle.addEventListener("click",()=>{reduced=!reduced;toggle.setAttribute("aria-pressed",String(reduced));toggle.querySelector("span:last-child").textContent=reduced?"Motion: reduced":"Motion: on";document.documentElement.classList.toggle("motion-reduced",reduced);select(active,true)});
renderList();select(0,true);
