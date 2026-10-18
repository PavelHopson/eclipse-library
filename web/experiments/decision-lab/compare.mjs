import {importDataset,ROUTES} from './core.mjs';
import {parseFile,freezeBenchmark,readiness,workload,runTemplate,validateRun,compare,restoreSession} from './compare-core.mjs';
const $=id=>document.getElementById(id);
let rows=null,session=null,report=null,dirty=false,busy=false;
function status(message,error=false){$('status').textContent=message;$('status').dataset.error=String(error);}
function download(name,data){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function read(input){const file=input.files?.[0];if(!file)throw new Error('Выбери JSON-файл.');if(file.size>3_000_000)throw new Error('Лимит файла — 3 МБ.');return file.text();}
function lock(){ $('freeze').disabled=busy||!rows||!$('attested').checked||!!session;for(const id of ['dataset-file','attested','restore','new-session','run-single','run-cascade'])$(id).disabled=busy||(!!session&&['dataset-file','attested','restore'].includes(id));}
async function action(fn){if(busy)return;busy=true;lock();try{await fn();}catch(e){status(e.message,true);}finally{busy=false;lock();}}
function add(parent,tag,value){const el=document.createElement(tag);el.textContent=value;parent.append(el);return el;}
const fmt=v=>v===null?'Нет измерения':new Intl.NumberFormat('ru',{maximumFractionDigits:4}).format(v);
function render(){
 $('setup').hidden=!!session;$('frozen').hidden=!session;report=null;$('result').hidden=true;
 if(!session)return;
 const {benchmark,runs}=session,ready=readiness(benchmark);
 $('benchmark-info').textContent=`${benchmark.items.length} материалов · ${ready.groups} групп · SHA-256: ${benchmark.id}`;
 $('readiness').textContent=ready.ready?'Минимальные пороги набора выполнены. Независимость разметки заявлена редактором, не проверена сайтом.':ready.warnings.join(' ');
 for(const mode of ['single','cascade'])$('state-'+mode).textContent=runs[mode]?`Принят полный результат: ${runs[mode].predictions.length} материалов. Модели: ${runs[mode].stages.map(s=>s.model).join(', ')}.`:'Прогон ещё не выполнен.';
 if(!runs.single||!runs.cascade)return;
 report=compare(benchmark,runs.single,runs.cascade);$('result').hidden=false;$('conclusion').textContent=report.conclusion;
 const body=$('metrics-body');body.replaceChildren();
 const fields=[['Совпадение с эталоном',m=>fmt(m.accuracy*100)+'%'],['Ошибки без флага проверки',m=>fmt(m.missedErrors)],['Направлено на ручную проверку',m=>fmt(m.manualReview)],['Ручные исправления',m=>fmt(m.humanCorrections)],['Ручная проверка, минут',m=>fmt(m.humanReviewMinutes)],['Полное время, секунд',m=>fmt(m.elapsedMs/1000)],['Входные токены (включая кэш)',m=>fmt(m.usage.inputTokens)],['Из них кэшированные',m=>fmt(m.usage.cachedInputTokens)],['Выходные токены',m=>fmt(m.usage.outputTokens)],['Дополнительные API-расходы, USD',m=>fmt(m.usage.apiCostUsd)]];
 for(const [label,format] of fields){const tr=document.createElement('tr');const th=add(tr,'th',label);th.scope='row';add(tr,'td',format(report.single));add(tr,'td',format(report.cascade));body.append(tr);}
 $('cost-note').textContent=report.savingPercent===null?'Процент денежной экономии не вычислен: есть подписка, локальный запуск, отсутствующие измерения или нулевая база. Нулевой дополнительный API-расход не означает бесплатную подписку.':`Изменение API-расхода: ${fmt(report.savingPercent)}% экономии (отрицательное значение — рост). Стоимость труда редактора сюда не включена.`;
 const details=$('error-details');details.replaceChildren();
 for(const mode of ['single','cascade']){const m=report[mode];add(details,'h3',mode==='single'?'А · Одна модель':'Б · Каскад');for(const c of m.perClass)add(details,'p',`${ROUTES[c.route]}: ${c.support} эталонных примеров; полнота ${c.recall===null?'не определена':fmt(c.recall*100)+'%'}.`);const list=document.createElement('ul');for(const e of m.errors)add(list,'li',`${e.id}: ожидалось «${ROUTES[e.expected]}», получено «${ROUTES[e.predicted]}»; ${e.flagged?'отправлено на проверку':'ошибка без флага'}.`);details.append(list);}
}
$('dataset-file').addEventListener('change',()=>action(async()=>{if(session)throw new Error('Сначала сохрани текущий пакет.');rows=null;$('attested').checked=false;$('dataset-info').textContent='Читаем выбранный файл…';const next=importDataset(await read($('dataset-file')));rows=next;$('dataset-info').textContent=`Прочитано ${rows.length} записей, из них тестовых: ${rows.filter(r=>r.split==='test').length}.`;status('Проверь условия независимости разметки, затем зафиксируй выборку.');}));
$('attested').addEventListener('change',lock);
$('freeze').addEventListener('click',()=>action(async()=>{const benchmark=await freezeBenchmark(rows,$('attested').checked);session={schemaVersion:1,kind:'library-comparison-private',benchmark,runs:{}};dirty=true;render();status('Выборка зафиксирована. Скачай задания и пакет с эталоном. Модели ещё не запускались.');}));
for(const mode of ['single','cascade']){
 $('task-'+mode).addEventListener('click',()=>{if(session)download(`library-task-${mode}.json`,workload(session.benchmark,mode));});
 $('template-'+mode).addEventListener('click',()=>{if(session)download(`library-result-${mode}-template.json`,runTemplate(session.benchmark,mode));});
 $('run-'+mode).addEventListener('change',()=>action(async()=>{if(!session)throw new Error('Сначала зафиксируй выборку.');if(session.runs[mode])throw new Error('Результат уже принят. Для повторного эксперимента создай отдельный пакет; не подгоняй тест.');const next=validateRun(parseFile(await read($('run-'+mode))),session.benchmark);if(next.mode!==mode)throw new Error('Выбран результат другого режима.');session.runs[mode]=next;dirty=true;render();status(report?'Оба результата приняты. Сравнение рассчитано; сохрани обновлённый пакет.':'Результат принят. Нужен второй режим для сравнения.');}));
}
$('save-session').addEventListener('click',()=>{if(session){download('library-comparison-private.json',session);dirty=false;status('Скачивание пакета запрошено. Убедись, что файл сохранился. Эталон не передавай моделям.');}});
$('new-session').addEventListener('click',()=>{if(dirty){status('Сначала скачай пакет с эталоном, чтобы не потерять работу.',true);return;}session=null;rows=null;report=null;for(const id of ['dataset-file','restore','run-single','run-cascade'])$(id).value='';$('attested').checked=false;$('dataset-info').textContent='Файл пока не выбран.';render();lock();status('Можно загрузить новую выборку или сохранённый пакет.');});
$('restore').addEventListener('change',()=>action(async()=>{if(session)throw new Error('Сначала сохрани текущую работу и выбери «Новая выборка».');const next=await restoreSession(parseFile(await read($('restore'))));session=next;dirty=false;render();status('Пакет восстановлен, контрольная сумма и результаты проверены.');}));
$('download-report').addEventListener('click',()=>{if(report)download('library-comparison-report.json',report);});
window.addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue='';}});
status('Начни с JSON независимой тестовой разметки. Существующие решения в Decision Lab не изменяются.');lock();
