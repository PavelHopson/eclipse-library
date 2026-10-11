import {CANDIDATES} from './candidates.mjs';
import {validateRow,validateSource,normalize} from './core.mjs';

const proposals=[
 ['tool','Это приложение для создания других приложений, а не сообщение о конкретном выпуске.'],
 ['tool','Программа помогает редактировать подписи и теги изображений.'],
 ['tool','Это редактор видео с операциями обработки файлов.'],
 ['tool','Это набор готовых компонентов интерфейса для повторного использования.'],
 ['tool','Это платформа для работы с графом связей и источниками.'],
 ['guide','Материал ведёт читателя по шагам от требований вакансии к собственному проверяемому кейсу.'],
 ['guide','Материал описывает последовательность аудита своих аккаунтов и действий после проверки.'],
];
// These editorial suggestions were prepared by the assistant, not computed by the rules engine.
export const REVIEW_ITEMS=CANDIDATES.map((c,i)=>Object.freeze({...c,proposal:Object.freeze({label:proposals[i][0],rationale:proposals[i][1],origin:'assistant-prepared-v1'})}));
export function reviewCandidate(id,{label,rationale,split='train',now=new Date().toISOString()}={}){
 const c=REVIEW_ITEMS.find(c=>c.id===id);if(!c)throw new Error('Материал не найден.');
 const chosen=label||c.proposal.label;
 return validateRow({text:c.text,group:c.group,label:chosen,rationale:rationale??c.proposal.rationale,split,publicApproved:true,source:validateSource(c),review:{proposalOrigin:c.proposal.origin,proposedLabel:c.proposal.label,proposedRationale:c.proposal.rationale,outcome:chosen===c.proposal.label?'confirmed':'corrected',decidedAt:now}});
}
export function mergeRows(current,incoming,addRow){
 let result=current;
 for(const row of incoming){
  const identical=result.find(r=>JSON.stringify(r)===JSON.stringify(row));if(identical)continue;
  result=addRow(result,row);
 }
 return result;
}
export function groupSplit(rows,candidate){return rows.find(r=>normalize(r.group)===normalize(candidate.group))?.split||'train';}
