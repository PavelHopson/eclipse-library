import {ROUTES,recommend,addRow,evaluate,exportDataset,importDataset,validateSource} from './core.mjs';
import {REVIEW_ITEMS,reviewCandidate,groupSplit,mergeRows} from './review.mjs';
import {STORAGE_KEY,loadWorkspace,saveWorkspace} from './storage.mjs';

const $=s=>document.querySelector(s);
const node=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
const message=(id,text)=>{$(id).textContent=text;};
const blankManual=()=>({text:'',group:'',label:'',split:'train',rationale:'',publicApproved:false,hintSeen:false});
let state={version:1,rows:[],selected:REVIEW_ITEMS[0].id,drafts:{},manual:blankManual(),removed:null};
let expectedRaw=null,storageBlocked=false,unsaved=false,report=null,previousRows=null;
const splits={train:'Обучение',calibration:'Калибровка',test:'Тест'};
const pct=v=>v===null?'—':(v*100).toFixed(1)+'%';
function storageControls(show){$('#retry-storage').hidden=!show;$('#reload-storage').hidden=!show;}
function persist(){
 try{
  if(storageBlocked)throw new Error('Сохранение заблокировано после ошибки чтения или изменения в другой вкладке.');
  expectedRaw=saveWorkspace(window.localStorage,state,expectedRaw);unsaved=false;storageControls(false);
  message('#storage-status','Сохранено в этом браузере. Можно продолжить после закрытия вкладки.');
 }catch(error){unsaved=true;storageControls(true);message('#storage-status','Не сохранено: '+error.message+' Не закрывай вкладку: скачай разметку и скопируй черновик.');}
}
function readSaved(){
 try{const saved=loadWorkspace(window.localStorage);expectedRaw=saved.raw;if(saved.state)state=saved.state;storageBlocked=false;unsaved=false;storageControls(false);message('#storage-status',saved.state?'Прогресс восстановлен из этого браузера.':'Автосохранение включено. Серверу ничего не отправляется.');return true;}
 catch(error){storageBlocked=true;storageControls(true);message('#storage-status','Не удалось прочитать сохранение: '+error.message+' Старые данные не перезаписаны. Можно работать в памяти и экспортировать разметку.');return false;}
}
function sourceLink(source){const s=validateSource(source),a=node('a','Открыть источник ↗');a.href=s.ref.startsWith('guides/')?'../../index.html#guide/'+s.ref.slice(7,-3):s.ref;a.target='_blank';a.rel='noopener noreferrer';return a;}
const current=()=>REVIEW_ITEMS.find(c=>c.id===state.selected)||REVIEW_ITEMS[0];
function renderQuick(){
 const c=current(),existing=state.rows.find(r=>r.source?.id===c.id),done=new Set(state.rows.map(r=>r.source?.id));
 $('#candidate').replaceChildren();
 for(const item of REVIEW_ITEMS){const option=node('option',item.title+(done.has(item.id)?' · решение сохранено':''));option.value=item.id;$('#candidate').append(option);}
 $('#candidate').value=c.id;const count=REVIEW_ITEMS.filter(i=>done.has(i.id)).length;
 message('#queue-count','Решений '+count+' из '+REVIEW_ITEMS.length);$('#progress').value=count;$('#complete').hidden=count!==REVIEW_ITEMS.length;
 message('#item-title',c.title);message('#item-text',c.text);message('#item-note',c.note+' Источник просмотрен '+c.checkedAt+'.');$('#item-source').replaceChildren(sourceLink(c));
 message('#proposal-label',ROUTES[c.proposal.label]);message('#proposal-reason',c.proposal.rationale);
 message('#item-status',existing?'Решение сохранено':'Ждёт твоего решения');
 message('#decision-summary',existing?'Сохранён выбор: '+ROUTES[existing.label]+'. '+(existing.review?(existing.review.outcome==='confirmed'?'Предложение подтверждено действием редактора.':'Редактор исправил предложение.'):'Ранее импортированная разметка; история подтверждения неизвестна.'):'Пока это только предложение. Ничего не подтверждено автоматически.');
 $('#confirm').disabled=Boolean(existing);$('#correct').disabled=false;$('#correct').textContent=existing?'Изменить решение':'Исправить';
 const draft=state.drafts[c.id];$('#correction').hidden=!draft;
 if(draft)$('#confirm').disabled=true;
 if(draft){$('#correct-label').value=draft.label;$('#correct-reason').value=draft.rationale;}
}
function renderManual(){for(const key of ['text','group','label','split','rationale'])$('#'+key).value=state.manual[key];$('#public').checked=state.manual.publicApproved;}
function renderRows(){
 $('#rows').replaceChildren();
 if(!state.rows.length)$('#rows').append(node('li','Пока нет подтверждённых решений. Предложения ИИ в разметку не включены.'));
 state.rows.forEach((r,i)=>{const li=node('li');li.append(node('strong',ROUTES[r.label]+' · '+splits[r.split]),node('p',r.text),node('p',r.rationale));
  if(r.review)li.append(node('p','ИИ предлагал: '+ROUTES[r.review.proposedLabel]+'. Решение редактора: '+(r.review.outcome==='confirmed'?'подтверждено':'исправлено')+' · '+new Date(r.review.decidedAt).toLocaleString('ru')+'.'));
  else li.append(node('p','История подтверждения предложения не записана; это не независимая проверка.'));
  if(r.source)li.append(node('p','Описание подготовлено ИИ.'),sourceLink(r.source));
  const del=node('button','Удалить');del.className='secondary';del.setAttribute('aria-label','Удалить запись '+(i+1)+': '+ROUTES[r.label]);del.onclick=()=>{previousRows=state.rows;state.removed={row:r,index:i};state.rows=state.rows.filter((_,j)=>j!==i);changed();message('#data-status','Запись удалена. Последнее изменение можно отменить.');};li.append(del);$('#rows').append(li);
 });
 message('#counts',state.rows.length+' записей · обучение '+state.rows.filter(r=>r.split==='train').length+' · калибровка '+state.rows.filter(r=>r.split==='calibration').length+' · тест '+state.rows.filter(r=>r.split==='test').length);
 $('#export').disabled=!state.rows.length;$('#evaluate').disabled=!state.rows.some(r=>r.split==='test');$('#undo').disabled=!previousRows&&!state.removed;
}
function invalidate(){report=null;$('#report').disabled=true;message('#metrics','Разметка изменилась. Проверку нужно запустить заново.');}
function changed(){invalidate();message('#queue-status','');renderQuick();renderRows();persist();}
function decide(label,rationale){
 const c=current(),existing=state.rows.find(r=>r.source?.id===c.id);
 const row=reviewCandidate(c.id,{label,rationale,split:existing?.split||groupSplit(state.rows,c)});
 const next=addRow(state.rows.filter(r=>r.source?.id!==c.id),row);
 previousRows=state.rows;state.rows=next;state.removed=null;delete state.drafts[c.id];
 const nextItem=REVIEW_ITEMS.find(item=>!state.rows.some(r=>r.source?.id===item.id));if(nextItem)state.selected=nextItem.id;
 changed();message('#queue-status',c.title+': '+ROUTES[row.label]+'. '+(row.review.outcome==='confirmed'?'Предложение подтверждено.':'Категория исправлена.')+(nextItem?' Открыт следующий материал.':''));$('#item-title').focus();
}
$('#confirm').onclick=()=>{try{decide();}catch(error){message('#queue-status',error.message);}};
$('#correct').onclick=()=>{const c=current(),existing=state.rows.find(r=>r.source?.id===c.id);state.drafts[c.id]??={label:existing?.label||c.proposal.label,rationale:existing?.rationale||''};renderQuick();persist();$('#correct-label').focus();};
$('#correction').onsubmit=e=>{e.preventDefault();try{decide($('#correct-label').value,$('#correct-reason').value);}catch(error){message('#queue-status',error.message);}};
$('#correction').oninput=()=>{state.drafts[current().id]={label:$('#correct-label').value,rationale:$('#correct-reason').value};persist();};
$('#cancel-correction').onclick=()=>{delete state.drafts[current().id];renderQuick();persist();$('#correct').focus();};
$('#candidate').onchange=()=>{state.selected=$('#candidate').value;renderQuick();persist();message('#queue-status','');};
$('#form').oninput=()=>{state.manual={text:$('#text').value,group:$('#group').value,label:$('#label').value,split:$('#split').value,rationale:$('#rationale').value,publicApproved:$('#public').checked,hintSeen:state.manual.hintSeen};persist();};
$('#form').addEventListener('reset',()=>{state.manual=blankManual();persist();message('#form-status','Форма очищена, сохранённые решения остались.');});
$('#form').onsubmit=e=>{e.preventDefault();try{
 const m=state.manual;if(m.hintSeen&&m.split==='test')throw new Error('После просмотра подсказки этот пример нельзя добавлять в независимый тест. Выберите обучение или калибровку.');
 const next=addRow(state.rows,m);previousRows=state.rows;state.rows=next;state.removed=null;state.manual=blankManual();renderManual();changed();message('#form-status','Материал добавлен.');
 }catch(error){message('#form-status',error.message);}};
$('#suggest').onclick=()=>{try{if(state.manual.split==='test')throw new Error('Подсказки для теста скрыты. Сначала сохраните независимую разметку.');const r=recommend(state.manual.text);state.manual.hintSeen=true;persist();$('#suggestion').replaceChildren(node('h3',ROUTES[r.route]),node('p',r.reason),node('p','Ответ простых правил, не нейросети.'));}catch(error){message('#form-status',error.message);}};
function download(name,data){const blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json'}),url=URL.createObjectURL(blob),a=node('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('#export').onclick=()=>{try{download('library-decision-dataset.json',exportDataset(state.rows));message('#data-status','Скачивание запрошено. В файл входят только сохранённые решения, без незавершённых черновиков.');}catch(error){message('#data-status',error.message);}};
$('#import').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>3000000)throw new Error('Лимит импорта — 3 МБ.');const incoming=importDataset(await file.text()),next=mergeRows(state.rows,incoming,addRow);previousRows=state.rows;state.rows=next;state.removed=null;changed();message('#data-status','В выборке '+next.length+' записей. Полные совпадения пропущены.');}catch(error){message('#data-status','Импорт отклонён целиком: '+error.message);}finally{e.target.value='';}};
$('#undo').onclick=()=>{try{if(previousRows){state.rows=previousRows;previousRows=null;}else if(state.removed){const next=addRow(state.rows,state.removed.row),r=next.pop();next.splice(Math.min(state.removed.index,next.length),0,r);state.rows=next;}state.removed=null;changed();message('#data-status','Последнее изменение отменено.');}catch(error){message('#data-status',error.message);}};
$('#evaluate').onclick=()=>{try{report=evaluate(state.rows);const root=$('#metrics');root.replaceChildren(node('p','Тест: '+report.total+' · совпадение: '+pct(report.accuracy)+' · конкретные рекомендации: '+pct(report.coverage)),node('p',report.warning));const wrap=node('div');wrap.className='metrics-wrap';const table=node('table'),head=node('tr');for(const s of ['Категория','Примеров','Точность','Полнота'])head.append(node('th',s));table.append(head);for(const r of report.perClass){const tr=node('tr');for(const s of [ROUTES[r.route],String(r.support),pct(r.precision),pct(r.recall)])tr.append(node('td',s));table.append(tr);}wrap.append(table);root.append(wrap);for(const r of report.errors)root.append(node('p',r.text+' — редактор: '+ROUTES[r.expected]+', правила: '+ROUTES[r.predicted]+'.'));$('#report').disabled=false;}catch(error){message('#metrics',error.message);}};
$('#report').onclick=()=>{if(report)download('library-decision-baseline-report.json',report);};
$('#retry-storage').onclick=persist;
$('#reload-storage').onclick=()=>{if(unsaved&&!window.confirm('Заменить несохранённое состояние этой вкладки сохранённой версией? Сначала скачайте разметку и скопируйте черновик, если хотите их оставить.'))return;if(readSaved()){previousRows=null;invalidate();renderManual();renderQuick();renderRows();}};
window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY||e.key===null){storageBlocked=true;storageControls(true);message('#storage-status','Прогресс изменён в другой вкладке. Эта вкладка не перезапишет его. Скачай свою разметку или нажми «Прочитать сохранение».');}});
window.addEventListener('beforeunload',e=>{if(unsaved){e.preventDefault();e.returnValue='';}});
readSaved();renderManual();renderQuick();renderRows();
for(const id of ['#save','#suggest','#import','#candidate'])$(id).disabled=false;
$('#boot').hidden=true;
if(['#workspace','#dataset','#evaluation'].includes(location.hash))$('#advanced').open=true;
