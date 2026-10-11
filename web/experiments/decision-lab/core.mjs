export const VERSION='library-rules-v1';
export const ROUTES=Object.freeze({guide:'Гайд',tool:'Инструмент',news:'Новость',review:'Ручная проверка'});
export const CRITERIA=Object.freeze({guide:'Пошаговая задача и воспроизводимый результат.',tool:'Программа, сервис или библиотека для выполнения задачи.',news:'Сообщение о конкретном новом событии, выпуске или изменении.',review:'Недостаточно данных или несколько равноправных форматов.'});
const keys=Object.keys(ROUTES);
export function validateSource(source){
 if(!source||typeof source!=='object'||Array.isArray(source))throw new Error('Некорректный источник.');
 const {id,title,ref,checkedAt,descriptionOrigin}=source;
 if(typeof id!=='string'||!/^[a-z0-9-]{2,100}$/.test(id)||typeof title!=='string'||!title.trim()||title.length>200)throw new Error('Некорректное название или ID источника.');
 if(typeof ref!=='string'||ref.length>1000)throw new Error('Некорректная ссылка источника.');
 if(!/^guides\/[a-z0-9-]+\.md$/.test(ref)){
  let u;try{u=new URL(ref);}catch{throw new Error('Некорректная ссылка источника.');}
  if(u.protocol!=='https:'||u.username||u.password)throw new Error('Разрешены только HTTPS-ссылки без учётных данных.');
 }
 if(typeof checkedAt!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(checkedAt)||!Number.isFinite(Date.parse(checkedAt))||new Date(checkedAt).toISOString().slice(0,10)!==checkedAt)throw new Error('Некорректная дата источника.');
 if(descriptionOrigin!=='assistant-paraphrase')throw new Error('Неизвестное происхождение описания.');
 return {id,title,ref,checkedAt,descriptionOrigin};
}
export const normalize=v=>String(v).normalize('NFKC').toLocaleLowerCase('ru').replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
function bounded(v,name,min,max){if(typeof v!=='string'||v.trim().length<min||v.length>max)throw new Error(`${name}: от ${min} до ${max} символов.`);if(!normalize(v))throw new Error(`${name}: нужны буквы или цифры, не только знаки.`);return v.trim();}
const signals={
 guide:[/пошаг\p{L}*/u,/инструкц\p{L}*/u,/практическ\p{L}* руководств\p{L}*/u,/учебн\p{L}* пример\p{L}*/u,/tutorial/u,/how to/u],
 tool:[/утилит\p{L}*/u,/библиотек\p{L}* (?:для|позволя)/u,/приложени\p{L}* (?:для|позволя)/u,/сервис\p{L}* (?:для|позволя)/u,/программ\p{L}* (?:для|позволя)/u,/исходн\p{L}* код/u],
 news:[/вышл\p{L}*/u,/выпуст\p{L}*/u,/анонс\p{L}*/u,/релиз\p{L}*/u,/представил\p{L}*/u,/обновлени\p{L}*/u],
};
export function recommend(text){
 bounded(text,'Описание',20,4000);
 const input=normalize(text),matches=Object.fromEntries(Object.entries(signals).map(([k,rs])=>[k,rs.flatMap(r=>input.match(r)?.[0]||[])]));
 const candidates=Object.keys(matches).filter(k=>matches[k].length),route=candidates.length===1?candidates[0]:'review';
 return {route,engine:VERSION,probabilities:null,executeAllowed:false,publishAllowed:false,rightsStatus:'not_assessed',truthStatus:'not_assessed',reason:route==='review'?(candidates.length?'Есть признаки нескольких форматов. Нужен выбор редактора.':'Нет однозначного формата. Нужны детали.'):`Найдены признаки: ${matches[route].join(', ')}.`,matches};
}
export function validateRow(row){
 if(!row||typeof row!=='object'||Array.isArray(row))throw new Error('Некорректная запись.');
 const text=bounded(row.text,'Описание',20,4000),group=bounded(row.group,'Группа источника',2,100),rationale=bounded(row.rationale,'Обоснование',8,1000);
 if(!Object.hasOwn(ROUTES,row.label))throw new Error('Выберите категорию редактора.');
 if(!['train','calibration','test'].includes(row.split))throw new Error('Неизвестная выборка.');
 if(row.publicApproved!==true)throw new Error('Подтвердите отсутствие приватных данных и право использовать текст.');
 const source=row.source===undefined?undefined:validateSource(row.source);
 if(source&&row.split==='test')throw new Error('Подготовленные ИИ описания — только обучение или калибровка, не независимый тест.');
 if(row.hintSeen===true&&row.split==='test')throw new Error('Пример после подсказки нельзя включать в независимый тест.');
 let review;
 if(row.review!==undefined){
  const r=row.review;
  if(!r||r.proposalOrigin!=='assistant-prepared-v1'||!Object.hasOwn(ROUTES,r.proposedLabel)||!['confirmed','corrected'].includes(r.outcome)||typeof r.decidedAt!=='string'||!/^\d{4}-\d{2}-\d{2}T/.test(r.decidedAt)||!Number.isFinite(Date.parse(r.decidedAt)))throw new Error('Некорректная история решения.');
  if(!source||row.split==='test'||(r.outcome==='confirmed')!==(row.label===r.proposedLabel))throw new Error('Решение не соответствует предложению или выборке.');
  review={proposalOrigin:r.proposalOrigin,proposedLabel:r.proposedLabel,proposedRationale:bounded(r.proposedRationale,'Объяснение предложения',8,1000),outcome:r.outcome,decidedAt:r.decidedAt};
 }
 return {text,group,rationale,label:row.label,split:row.split,publicApproved:true,...(source?{source}:{}),...(review?{review}:{}),...(row.hintSeen===true?{hintSeen:true}:{})};
}
export function addRow(rows,row){
 if(rows.length>=500)throw new Error('Лимит сессии — 500 записей. Сохраните экспорт.');
 const clean=validateRow(row);
 if(clean.source&&rows.some(r=>r.source?.id===clean.source.id))throw new Error('Этот материал уже размечен.');
 if(clean.source&&rows.some(r=>r.source?.ref===clean.source.ref&&r.split!==clean.split))throw new Error('Один источник должен оставаться в одной выборке.');
 if(rows.some(r=>normalize(r.text)===normalize(clean.text)))throw new Error('Текст уже размечен. Дубликаты нельзя разносить по выборкам.');
 if(rows.some(r=>normalize(r.group)===normalize(clean.group)&&r.split!==clean.split))throw new Error('Один источник и его варианты должны оставаться в одной выборке.');
 return [...rows,clean];
}
export function validateDataset(rows){if(!Array.isArray(rows)||rows.length>500)throw new Error('Ожидается массив до 500 записей.');return rows.reduce((result,row)=>addRow(result,row),[]);}
export function evaluate(rows){
 const checked=validateDataset(rows).filter(r=>r.split==='test');
 const confusion=Object.fromEntries(keys.map(k=>[k,Object.fromEntries(keys.map(j=>[j,0]))]));
 let correct=0,suggested=0;const errors=[];
 for(const row of checked){const result=recommend(row.text);confusion[row.label][result.route]++;correct+=Number(row.label===result.route);suggested+=Number(result.route!=='review');if(row.label!==result.route)errors.push({text:row.text,expected:row.label,predicted:result.route});}
 return {engine:VERSION,scope:'editor-labeled test only; not independent validation',total:checked.length,accuracy:checked.length?correct/checked.length:null,coverage:checked.length?suggested/checked.length:null,confusion,errors,perClass:keys.map(k=>{const support=keys.reduce((s,j)=>s+confusion[k][j],0),predicted=keys.reduce((s,j)=>s+confusion[j][k],0);return {route:k,support,precision:predicted?confusion[k][k]/predicted:null,recall:support?confusion[k][k]/support:null};}),calibration:'not_applicable_rules_have_no_probabilities',warning:checked.length<30?'Малая выборка: результат диагностический, не допуск модели.':'Проверка на разметке этой сессии, не независимая приёмка.'};
}
export function exportDataset(rows){const clean=validateDataset(rows);if(!clean.length)throw new Error('Сначала добавьте разметку.');return {schemaVersion:3,task:'library-format-routing',labelOrigin:'human-editor',engineBaseline:VERSION,modelTrained:false,containsPrivateDataDeclared:false,criteria:CRITERIA,rows:clean,counts:Object.fromEntries(['train','calibration','test'].map(s=>[s,clean.filter(r=>r.split===s).length])),limitations:['Exact normalized duplicates rejected; paraphrases need manual review.','Source groups cannot cross splits.','Assistant paraphrases cannot enter test. Labels and rights approval are editor declarations, not independently verified.','Rows without source metadata have unspecified provenance.','No publish, rights assessment or action authorization.']};}
export function importDataset(text){if(typeof text!=='string'||text.length>3000000)throw new Error('JSON слишком большой (лимит 3 МБ).');let value;try{value=JSON.parse(text);}catch{throw new Error('Не удалось прочитать JSON.');}if(!value||![1,2,3].includes(value.schemaVersion)||value.task!=='library-format-routing'||value.labelOrigin!=='human-editor')throw new Error('Нужен экспорт этого пилота версии 1, 2 или 3.');return validateDataset(value.rows);}
