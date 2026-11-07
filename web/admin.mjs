const $=s=>document.querySelector(s);
const roles={owner:'Владелец',editor:'Редактор',viewer:'Просмотр',disabled:'Отключён'};
const statuses={draft:'Черновики',published:'Опубликовано',archived:'Архив'};
let state,loading=false;
const errors={permission_denied:'Недостаточно прав. Обновите панель.',account_exists:'Аккаунт с таким email уже есть.',invalid_account:'Проверьте email и пароль (от 16 до 128 символов).',protected_account:'Доступ владельца изменить нельзя.',edit_conflict:'Материал изменился. Закройте историю и загрузите её заново.',identity_unavailable:'Chat временно недоступен. Повторите проверку входа позже.'};
function text(tag,value){const e=document.createElement(tag);e.textContent=value;return e;}
function message(e){return errors[e.message]||'Не удалось выполнить действие. Попробуйте ещё раз.';}
async function api(path,options={}){const r=await fetch('/editor-api/api/editor/'+path,{...options,credentials:'include',signal:AbortSignal.timeout(15000),headers:{'content-type':'application/json'}});const b=await r.json();if(!r.ok){if(r.status===401)location.assign('/login.html');throw Error(b.error||'request_failed');}return b;}
function action(label,run){const b=text('button',label);b.type='button';b.addEventListener('click',async()=>{b.disabled=true;try{await run();}catch(e){$('#admin-message').textContent=message(e);}finally{b.disabled=false;}});return b;}
async function accounts(){
 const data=await api('admin/accounts');const container=$('#admin-accounts');container.replaceChildren();
 for(const a of data.accounts){const row=document.createElement('div');row.className='admin-account';row.append(text('span',a.email));
 if(a.role==='owner'){row.append(text('strong',roles.owner));}else{
 const select=document.createElement('select');select.setAttribute('aria-label','Доступ: '+a.email);
 for(const role of ['editor','viewer','disabled']){const o=text('option',roles[role]);o.value=role;select.append(o);}select.value=a.role;
 const save=action('Сохранить доступ',async()=>{if(select.value===a.role)return;if(!confirm('Изменить доступ '+a.email+' на «'+roles[select.value]+'»? Текущие сессии Library этого аккаунта завершатся.'))return;await api('admin/accounts/'+a.id,{method:'PATCH',body:JSON.stringify({role:select.value})});await accounts();$('#admin-message').textContent='Доступ сохранён. Пользователю нужно войти заново.';});row.append(select,save);}
 container.append(row);}
}
async function history(item){
 const dialog=$('#history-dialog');$('#history-title').textContent=item.title;$('#history-message').textContent='Загружаем версии…';$('#history-list').replaceChildren();dialog.showModal();
 try{const data=await api('admin/history/'+encodeURIComponent(item.id));$('#history-message').textContent=data.revisions.length?'Последние '+data.revisions.length+' версий. История начинается после установки обновления.':'История появится после следующего сохранения материала.';
 for(const revision of data.revisions){const d=document.createElement('details');d.append(text('summary',new Date(revision.saved_at).toLocaleString('ru-RU')+' · '+revision.author));d.append(text('h3',revision.snapshot.title),text('p',revision.snapshot.description),text('pre',revision.snapshot.prompt));
 for(const [key,label] of Object.entries({project:'Проект',format:'Формат',style_code:'Стиль',negative_prompt:'Исключения',settings:'Настройки',source_url:'Источник',rights_note:'Права'})){if(revision.snapshot[key])d.append(text('p',label+': '+revision.snapshot[key]));}
 if(state.permissions.edit)d.append(action('Восстановить этот текст',async()=>{if(!confirm('Вернуть текст выбранной версии? Текущий текст останется в истории.'))return;try{await api('admin/history/'+encodeURIComponent(item.id)+'/'+revision.id+'/restore',{method:'POST',body:JSON.stringify({expectedUpdatedAt:item.updated_at})});dialog.close();await load();$('#admin-message').textContent='Текст восстановлен. Изображение и публикация не изменены.';}catch(e){$('#history-message').textContent=message(e);}}));$('#history-list').append(d);}
 }catch(e){$('#history-message').textContent=message(e);}
}
async function load(){if(loading)return;loading=true;$('#admin-message').textContent='Обновляем панель…';$('#admin-retry').hidden=true;
 try{state=await api('admin/overview');$('#account-info').textContent=state.account.email+' · '+roles[state.account.role];$('#admin-content').hidden=false;document.dispatchEvent(new Event('editor:session'));$('#admin-logout').hidden=false;$('#edit-link').hidden=!state.permissions.edit;$('#accounts').hidden=!state.permissions.manageAccounts;$('#accounts-link').hidden=!state.permissions.manageAccounts;
 $('#admin-counts').replaceChildren(...Object.entries(statuses).map(([k,label])=>{const p=document.createElement('p');p.append(text('strong',String(state.counts[k]||0)),text('span',label));return p;}));
 $('#admin-recent').replaceChildren();for(const item of state.recent){const b=action('',()=>history(item));b.append(text('strong',item.title),text('small',(statuses[item.status]||item.status)+' · '+new Date(item.updated_at).toLocaleString('ru-RU')));b.dataset.title=item.title.toLocaleLowerCase();$('#admin-recent').append(b);}if(!state.recent.length)$('#admin-recent').append(text('p','Примеров пока нет. Добавьте изображение и промпт.'));
 $('#admin-projects').replaceChildren();for(const project of state.projects){const a=document.createElement('a');a.href=project.managed?(state.permissions.edit?project.url:'/images.html'):project.url;a.append(text('strong',project.name),text('small',project.managed?(state.permissions.edit?'Открыть редактор':'Открыть библиотеку'):'Открыть отдельный продукт ↗'));$('#admin-projects').append(a);}
 if(state.permissions.manageAccounts)await accounts();$('#admin-message').textContent='';
 }catch(e){$('#admin-message').textContent=message(e);$('#admin-retry').hidden=false;}finally{loading=false;}}
$('#history-close').addEventListener('click',()=>$('#history-dialog').close());
$('#admin-retry').addEventListener('click',load);
$('#admin-logout').addEventListener('click',async()=>{const b=$('#admin-logout');b.disabled=true;try{await api('logout',{method:'POST'});location.assign('/login.html');}catch(e){$('#admin-message').textContent=message(e);}finally{b.disabled=false;}});
$('#account-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,b=form.querySelector('button');b.disabled=true;$('#account-message').textContent='Создаём аккаунт…';try{await api('admin/accounts',{method:'POST',body:JSON.stringify(Object.fromEntries(new FormData(form)))});form.reset();await accounts();$('#account-message').textContent='Аккаунт создан. Пользователь может войти в Library и самостоятельно связать Chat.';}catch(err){$('#account-message').textContent=message(err);}finally{b.disabled=false;}});
$('#material-search').addEventListener('input',()=>{for(const row of $('#admin-recent').children)row.hidden=!!row.dataset.title&&!row.dataset.title.includes($('#material-search').value.trim().toLocaleLowerCase());});
$('#logout-eclipse').addEventListener('click',async()=>{if(!confirm('Завершить связанную сессию Chat и вход в Library? Другие устройства останутся подключены.'))return;const b=$('#logout-eclipse');b.disabled=true;try{await api('identity/logout',{method:'POST'});location.assign('/login.html');}catch(e){$('#admin-message').textContent=message(e);}finally{b.disabled=false;}});
load();
