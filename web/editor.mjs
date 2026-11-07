const root = document.querySelector('.editor-page');
const api = root.dataset.editorApi.replace(/\/$/, '');
const loginView = document.querySelector('#login-view');
const editorView = document.querySelector('#editor-view');
const loginForm = document.querySelector('#login-form');
const promptForm = document.querySelector('#prompt-form');
const list = document.querySelector('#prompt-list');
const logout = document.querySelector('#logout');
const logoutEclipse = document.querySelector('#logout-eclipse');
const connection = document.querySelector('#connection');
const imageFile = document.querySelector('#image-file');
const dropzone = document.querySelector('#upload-dropzone');
const uploadLabel = document.querySelector('#upload-label');
const uploadHint = document.querySelector('#upload-hint');
let events, previewUrl, pendingId, saving = false, selectedId = null, rows = [];
const dirtyCards = new Set();
const notice = document.createElement('p'); notice.className = 'editor-feedback'; notice.setAttribute('role','status'); connection.after(notice);
const preview = document.createElement('img'); preview.className = 'upload-preview'; preview.alt = 'Предпросмотр выбранного изображения'; preview.hidden = true; dropzone.append(preview);
const statusLabels = { draft: 'Черновик', published: 'Опубликовано', archived: 'В архиве' };
const messages = { identity_unavailable: 'Не удалось проверить вход в Chat. Изменения остались в форме — повторите позже.', chat_session_required: 'Сессия Chat уже завершена. Войдите снова.', edit_conflict: 'Пример изменён в другой вкладке. Скопируйте свои правки и откройте карточку заново.', editor_auth_required: 'Сессия завершена. Войдите снова.', invalid_credentials: 'Неверный email или пароль.', image_too_large: 'Изображение должно быть не больше 6 МБ.', invalid_image: 'Выберите PNG, JPG, WebP или GIF.', invalid_prompt: 'Заполните промпт и обязательные поля карточки.' };
const errorText = error => messages[error?.message] || (error?.name === 'TimeoutError' ? 'Сервер не ответил. Текст сохранён в форме — попробуйте снова.' : 'Не удалось выполнить действие. Проверьте соединение и повторите.');
function validateFile(file) { if (!file || !['image/png','image/jpeg','image/webp','image/gif'].includes(file.type)) throw new Error('invalid_image'); if(file.size > 6 * 1024 * 1024) throw new Error('image_too_large'); }
function clearPreview() { if(previewUrl) URL.revokeObjectURL(previewUrl); previewUrl = null; preview.removeAttribute('src'); preview.hidden = true; }
window.addEventListener('beforeunload', event => { if (dirtyCards.size || imageFile.files.length || promptForm.querySelector('[name="prompt"]').value.trim()) { event.preventDefault(); event.returnValue = ''; } });
function fileAsDataUrl(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }
function setImageFile(file) {
  const error = document.querySelector('#save-error');
  try { validateFile(file); const transfer = new DataTransfer(); transfer.items.add(file); imageFile.files = transfer.files; clearPreview(); previewUrl = URL.createObjectURL(file); preview.src = previewUrl; preview.hidden = false; uploadLabel.textContent = file.name; uploadHint.textContent = Math.round(file.size / 1024) + ' КБ · нажмите, чтобы заменить'; dropzone.classList.add('has-file'); error.textContent = ''; }
  catch(err) { imageFile.value = ''; clearPreview(); uploadLabel.textContent = 'Загрузить изображение'; dropzone.classList.remove('has-file'); error.textContent = errorText(err); }
}

async function request(path, options = {}) {
  const response = await fetch(`${api}${path}`, { credentials: 'include', signal: AbortSignal.timeout(30000), headers: { 'content-type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `HTTP ${response.status}`);
  return payload;
}

function showEditor() { loginView.hidden = true; editorView.hidden = false; logout.hidden = false; document.dispatchEvent(new Event('editor:session')); }
function showLogin() { loginView.hidden = false; editorView.hidden = true; logout.hidden = true; logoutEclipse.hidden = true; }


let styleEntries = [];
fetch('image-prompt-codes.json').then(r=>r.json()).then(data=>{styleEntries=data.entries||[];}).catch(()=>{notice.textContent='Список стилей недоступен. Обновите страницу, чтобы выбрать стиль.';});
const filters = document.createElement('div'); filters.className = 'editor-library-filters';
const search = document.createElement('input'); search.type = 'search'; search.placeholder = 'Найти пример или промпт'; search.setAttribute('aria-label','Поиск примеров');
const status = document.createElement('select'); status.setAttribute('aria-label','Статус примеров');
for (const [value,label] of [['','Все статусы'],['draft','Черновики'],['published','Опубликованные'],['archived','Архив']]) { const option = document.createElement('option'); option.value=value; option.textContent=label; status.append(option); }
const summary = document.createElement('p'); summary.setAttribute('role','status');
filters.append(search,status,summary); list.before(filters);
const panel = document.createElement('dialog'); panel.className = 'editor-detail-dialog'; panel.setAttribute('aria-label','Редактирование примера'); root.append(panel);
const viewer = document.createElement('dialog'); viewer.className = 'editor-preview-dialog'; viewer.setAttribute('aria-label','Предпросмотр карточки'); root.append(viewer);
function button(text,action) { const b=document.createElement('button'); b.type='button'; b.textContent=text; b.addEventListener('click',action); return b; }
function closePanel() { if(dirtyCards.size && !confirm('Отменить несохранённые изменения?')) return; dirtyCards.clear(); selectedId=null; panel.close(); render(rows); }
panel.addEventListener('cancel',e=>{e.preventDefault();closePanel();});
function showPreview(example, values = {}) {
  viewer.replaceChildren(button('Закрыть просмотр',()=>viewer.close()));
  if(example.imageUrl){ const image=document.createElement('img');image.src=example.imageUrl;image.alt=values.title||example.title;viewer.append(image); }
  const title=document.createElement('h2');title.textContent=values.title||example.title;
  const text=document.createElement('p');text.textContent=values.description||example.description;
  const details=document.createElement('details');const label=document.createElement('summary');label.textContent='Полный промпт';const pre=document.createElement('pre');pre.textContent=values.prompt||example.prompt;details.append(label,pre);viewer.append(title,text,details);viewer.showModal();
}
function renderList() {
 const filtered=rows.filter(e=>(!status.value||e.status===status.value)&&[e.title,e.prompt,e.project].join(' ').toLocaleLowerCase().includes(search.value.trim().toLocaleLowerCase()));
 summary.textContent=filtered.length+' из '+rows.length;
 list.replaceChildren();
 if(!filtered.length){const empty=document.createElement('p');empty.textContent=rows.length?'Ничего не найдено. Измените поиск или статус.':'Добавьте первый пример выше.';list.append(empty);}
 for(const example of filtered){const row=button('',()=>{selectedId=example.id;renderPanel(example);panel.showModal();});row.className='editor-list-row';
 if(example.imageUrl){const image=document.createElement('img');image.src=example.imageUrl;image.alt='';image.loading='lazy';row.append(image);}
 const info=document.createElement('span');const title=document.createElement('strong');title.textContent=example.title;const meta=document.createElement('small');meta.textContent=(statusLabels[example.status]||example.status)+' · '+new Date(example.updated_at).toLocaleDateString('ru-RU');const excerpt=document.createElement('span');excerpt.textContent=example.prompt;excerpt.className='editor-list-excerpt';info.append(title,meta,excerpt);row.append(info);list.append(row);}
}
search.addEventListener('input',renderList);status.addEventListener('change',renderList);

function render(examples) { rows=examples;renderList();if(selectedId){const e=rows.find(e=>e.id===selectedId);if(e)renderPanel(e);else closePanel();} }
function renderPanel(example) {
  const examples=[example];
  if (!examples.length) { const empty = document.createElement('p'); empty.className = 'editor-empty'; empty.textContent = 'Здесь появятся ваши примеры. Добавьте изображение и полный промпт выше.'; list.replaceChildren(empty); return; }
  panel.replaceChildren(button('Закрыть редактор',closePanel), ...examples.map((example) => {
    const card = document.createElement('article'); card.className = 'editor-card'; card.dataset.id = example.id;
    const feedback = document.createElement('p'); feedback.className = 'editor-feedback'; feedback.setAttribute('role','status');
    card.addEventListener('input', event => { if (event.target.type === 'file') return; dirtyCards.add(example.id); publish.disabled = true; archive.disabled = true; upload.disabled = true; feedback.textContent = 'Есть несохранённые изменения. Сохраните их перед публикацией.'; });
    const title = document.createElement('h3'); title.textContent = `${example.title} · ${statusLabels[example.status] || example.status}`;
    const meta = document.createElement('p'); meta.textContent = `${example.project} · ${example.format} · обновлено ${new Date(example.updated_at).toLocaleString('ru-RU')}`;
    const description = document.createElement('p'); description.textContent = example.description;
    const metadata = document.createElement('details'); metadata.className = 'editor-card-metadata';
    const metadataSummary = document.createElement('summary'); metadataSummary.textContent = 'Редактировать карточку';
    const metadataGrid = document.createElement('div'); metadataGrid.className = 'editor-card-metadata-grid';
    const titleField = document.createElement('label'); titleField.textContent = 'Название'; const titleInput = document.createElement('input'); titleInput.value = example.title; titleField.append(titleInput);
    const projectField = document.createElement('label'); projectField.textContent = 'Продукт'; const projectInput = document.createElement('input'); projectInput.value = example.project; projectField.append(projectInput);
    const descriptionField = document.createElement('label'); descriptionField.textContent = 'Описание'; const descriptionInput = document.createElement('textarea'); descriptionInput.rows = 3; descriptionInput.value = example.description; descriptionField.append(descriptionInput);
    const sourceField = document.createElement('label'); sourceField.textContent = 'Источник'; const sourceInput = document.createElement('input'); sourceInput.type = 'url'; sourceInput.value = example.source_url || ''; sourceField.append(sourceInput);
    const rightsField = document.createElement('label'); rightsField.textContent = 'Права'; const rightsInput = document.createElement('input'); rightsInput.value = example.rights_note || ''; rightsField.append(rightsInput);
    const styleField=document.createElement('label');styleField.textContent='Стиль из каталога';const styleSelect=document.createElement('select');const choices=[{code:'',title:'Без привязки'},...styleEntries];if(example.style_code&&!choices.some(e=>e.code===example.style_code))choices.push({code:example.style_code,title:example.style_code});for(const e of choices){const o=document.createElement('option');o.value=e.code;o.textContent=e.code?e.code+' — '+e.title:e.title;styleSelect.append(o);}styleSelect.value=example.style_code||'';styleField.append(styleSelect);
    metadataGrid.append(titleField, projectField, descriptionField, sourceField, rightsField,styleField); metadata.append(metadataSummary, metadataGrid);
    if (example.imageUrl) { const image = document.createElement('img'); image.src = example.imageUrl; image.alt = `Пример: ${example.title}`; image.className = 'editor-card-image'; const open=button('Открыть изображение',()=>showPreview(example)); card.append(image,open); }
    const prompt = document.createElement('textarea'); prompt.value = example.prompt; prompt.setAttribute('aria-label', `Промпт ${example.title}`);
    const actions = document.createElement('div'); actions.className = 'editor-card-actions';
    const save = document.createElement('button'); save.type = 'button'; save.textContent = 'Сохранить изменения'; save.addEventListener('click', async () => { save.disabled = true; card.inert = true; feedback.textContent = 'Сохраняем…'; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ title: titleInput.value, project: projectInput.value, description: descriptionInput.value, style_code: styleSelect.value, expectedUpdatedAt: example.updated_at, prompt: prompt.value, source_url: sourceInput.value, rights_note: rightsInput.value }) }); dirtyCards.delete(example.id); feedback.textContent = 'Изменения сохранены'; publish.disabled = false; archive.disabled = false; upload.disabled = false; await load(); } catch (error) { feedback.textContent = errorText(error); } finally { save.disabled = false; card.inert = false; } });
    const upload = document.createElement('input'); upload.type = 'file'; upload.accept = 'image/png,image/jpeg,image/webp,image/gif'; upload.setAttribute('aria-label', `Загрузить изображение ${example.title}`); upload.addEventListener('change', async () => { const file = upload.files?.[0]; if (!file) return; try { validateFile(file); } catch(err) { feedback.textContent = errorText(err); upload.value = ''; return; } const reader = new FileReader(); reader.onload = async () => { upload.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}/image`, { method: 'POST', body: JSON.stringify({ dataUrl: reader.result }) }); await load(); } catch (error) { feedback.textContent = errorText(error); } finally { upload.disabled = false; } }; reader.readAsDataURL(file); });
    const publish = document.createElement('button'); publish.type = 'button'; publish.textContent = example.status === 'published' ? 'Снять с публикации' : 'Опубликовать'; publish.addEventListener('click', async () => { publish.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ status: example.status === 'published' ? 'draft' : 'published' }) }); await load(); } catch (error) { feedback.textContent = errorText(error); } finally { publish.disabled = false; } });
    const archive = document.createElement('button'); archive.type = 'button'; archive.textContent = example.status === 'archived' ? 'Восстановить' : 'В архив'; archive.addEventListener('click', async () => { archive.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ status: example.status === 'archived' ? 'draft' : 'archived' }) }); await load(); } catch (error) { feedback.textContent = errorText(error); } finally { archive.disabled = false; } });
    const cancel=button('Отменить правки',()=>{ if(dirtyCards.has(example.id)&&!confirm('Отменить несохранённые изменения?'))return;dirtyCards.delete(example.id);renderPanel(rows.find(row=>row.id===example.id)); });
    const see=button('Предпросмотр',()=>showPreview(example,{title:titleInput.value,description:descriptionInput.value,prompt:prompt.value}));
    const replaceLabel=document.createElement('label');replaceLabel.className='editor-replace-upload';const replaceText=document.createElement('span');replaceText.textContent='Заменить изображение';replaceLabel.append(replaceText,upload);
    actions.append(save, publish, archive, see, cancel, replaceLabel); card.append(title, meta, description, metadata, prompt, actions, feedback); return card;
  }));
}

async function load() { if (dirtyCards.size) { notice.textContent = 'Есть изменения на сервере. Сначала сохраните свои правки.'; } const payload = await request('/api/editor/prompts'); rows=payload.examples||[]; if (dirtyCards.size) return; render(payload.examples || []); }
function connectEvents() { events?.close(); events = new EventSource(`${api}/api/editor/events`, { withCredentials: true }); events.onopen = () => { connection.textContent = 'Realtime подключён'; }; events.onerror = () => { connection.textContent = 'Переподключение…'; }; events.addEventListener('prompt.changed', () => { if (!saving) load().catch(err => { notice.textContent = errorText(err); }); }); events.addEventListener('prompt.deleted', () => load().catch(err => { notice.textContent = errorText(err); })); }

loginForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#login-error'); error.textContent = ''; try { const form = new FormData(loginForm); await request('/api/editor/login', { method: 'POST', body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) }); showEditor(); await load(); connectEvents(); } catch (err) { error.textContent = errorText(err); } });
promptForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#save-error'); error.textContent = ''; const button = promptForm.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'Сохраняем…'; saving = true; try { const file = imageFile.files?.[0]; const form = new FormData(promptForm); promptForm.inert = true; const prompt = String(form.get('prompt') || '').trim(); validateFile(file); const id = `prompt-${Date.now()}`; const title = String(form.get('title') || '').trim() || file.name.replace(/\.[^.]+$/, '') || 'Новый пример'; const project = String(form.get('project') || '').trim() || 'Eclipse Library'; const description = String(form.get('description') || '').trim() || 'Пример изображения из редакторской панели.'; const format = ({'image/png':'PNG','image/webp':'WebP','image/gif':'GIF','image/jpeg':'JPG'})[file.type]; const data = { id, title, project, description, prompt, sourceUrl: String(form.get('sourceUrl') || '').trim(), rightsNote: String(form.get('rightsNote') || '').trim(), format, status: 'draft' }; if (!pendingId) { const created = await request('/api/editor/prompts', { method: 'POST', body: JSON.stringify(data) }); pendingId = created.example.id; } else { await request(`/api/editor/prompts/${encodeURIComponent(pendingId)}`, { method: 'PATCH', body: JSON.stringify({ title, project, description, prompt, format }) }); } await request(`/api/editor/prompts/${encodeURIComponent(pendingId)}/image`, { method: 'POST', body: JSON.stringify({ dataUrl: await fileAsDataUrl(file) }) }); pendingId = null; promptForm.reset(); clearPreview(); notice.textContent = 'Пример сохранён как черновик. Опубликуйте его, когда будете готовы.'; promptForm.querySelector('[name="project"]').value = 'Eclipse Library'; uploadLabel.textContent = 'Загрузить изображение'; uploadHint.textContent = 'Перетащите файл сюда или выберите его · до 6 МБ'; dropzone.classList.remove('has-file'); await load(); } catch (err) { error.textContent = errorText(err); } finally { button.disabled = false; button.textContent = 'Сохранить пример'; promptForm.inert = false; saving = false; } });
imageFile.addEventListener('change', () => setImageFile(imageFile.files?.[0]));
['dragenter', 'dragover'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.add('is-dragging'); }));
['dragleave', 'drop'].forEach((eventName) => dropzone.addEventListener(eventName, (event) => { event.preventDefault(); dropzone.classList.remove('is-dragging'); }));
dropzone.addEventListener('drop', (event) => setImageFile(event.dataTransfer.files?.[0]));
async function endSession(global = false) {
  const dirty = dirtyCards.size || imageFile.files.length || promptForm.querySelector('[name=prompt]').value.trim();
  if (global && !confirm('Завершить связанную сессию Chat и подключённых проектов? Другие устройства останутся в системе.' + (dirty ? ' Несохранённые изменения будут потеряны.' : ''))) return;
  if (!global && dirty && !confirm('Выйти без сохранения изменений?')) return;
  const button = global ? logoutEclipse : logout; const previous = button.textContent;
  logout.disabled = logoutEclipse.disabled = true; button.textContent = 'Выходим…';
  try {
    await request(global ? '/api/editor/identity/logout' : '/api/editor/logout', { method: 'POST', body: '{}' });
    events?.close(); dirtyCards.clear(); selectedId=null;panel.close();viewer.close();list.replaceChildren();rows=[];promptForm.reset();clearPreview();pendingId=null;showLogin();
  } catch(err) { notice.textContent = errorText(err); }
  finally { logout.disabled = logoutEclipse.disabled = false; button.textContent = previous; }
}
logout.addEventListener('click', () => void endSession());
logoutEclipse.addEventListener('click', () => void endSession(true));

request('/api/editor/me').then(async () => { showEditor(); await load(); connectEvents(); }).catch(() => showLogin());
