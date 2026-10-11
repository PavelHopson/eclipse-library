import {validateDataset,validateRow,ROUTES} from './core.mjs';
import {CANDIDATES} from './candidates.mjs';
export const STORAGE_KEY='eclipse-library.decision-lab.workspace.v1';
const ids=new Set(CANDIDATES.map(c=>c.id));
const limited=(value,max)=>{if(typeof value!=='string'||value.length>max)throw new Error('Повреждённый черновик.');return value;};
export function validateWorkspace(value){
 if(!value||value.version!==1)throw new Error('Неизвестная версия сохранения.');
 const rows=validateDataset(value.rows),selected=limited(value.selected,100);
 if(!ids.has(selected))throw new Error('Неизвестный материал в сохранении.');
 const drafts={};
 if(!value.drafts||typeof value.drafts!=='object'||Array.isArray(value.drafts)||Object.keys(value.drafts).length>7)throw new Error('Повреждённые черновики.');
 for(const [id,d] of Object.entries(value.drafts)){
  if(!ids.has(id)||!d||!Object.hasOwn(ROUTES,d.label))throw new Error('Некорректный черновик исправления.');
  drafts[id]={label:d.label,rationale:limited(d.rationale,1000)};
 }
 const a=value.manual;
 if(!a||!['train','calibration','test'].includes(a.split)||!['',...Object.keys(ROUTES)].includes(a.label)||typeof a.publicApproved!=='boolean')throw new Error('Повреждённая форма.');
 const manual={text:limited(a.text,4000),group:limited(a.group,100),label:a.label,split:a.split,rationale:limited(a.rationale,1000),publicApproved:a.publicApproved,hintSeen:a.hintSeen===true};
 let removed=null;
 if(value.removed){if(!Number.isInteger(value.removed.index)||value.removed.index<0||value.removed.index>500)throw new Error('Повреждённая отмена удаления.');removed={index:value.removed.index,row:validateRow(value.removed.row)};}
 return {version:1,rows,selected,drafts,manual,removed};
}
export function parseWorkspace(raw){if(typeof raw!=='string'||raw.length>3000000)throw new Error('Сохранение превышает лимит.');return validateWorkspace(JSON.parse(raw));}
export function loadWorkspace(storage){const raw=storage.getItem(STORAGE_KEY);return {raw,state:raw===null?null:parseWorkspace(raw)};}
export function saveWorkspace(storage,state,expectedRaw){
 const next=JSON.stringify(validateWorkspace(state));
 if(next.length>3000000)throw new Error('Лимит сохранения — 3 МБ. Скачайте разметку.');
 if(storage.getItem(STORAGE_KEY)!==expectedRaw)throw new Error('Данные изменены в другой вкладке. Скачайте свою разметку и загрузите сохранённую версию.');
 storage.setItem(STORAGE_KEY,next);return next;
}
