const root = document.querySelector('.editor-page');
const api = root.dataset.editorApi.replace(/\/$/, '');
const loginView = document.querySelector('#login-view');
const editorView = document.querySelector('#editor-view');
const loginForm = document.querySelector('#login-form');
const promptForm = document.querySelector('#prompt-form');
const list = document.querySelector('#prompt-list');
const logout = document.querySelector('#logout');
const connection = document.querySelector('#connection');
const errorText = (error) => error?.message || 'Не удалось выполнить запрос';
function fileAsDataUrl(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }

async function request(path, options = {}) {
  const response = await fetch(`${api}${path}`, { credentials: 'include', headers: { 'content-type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `HTTP ${response.status}`);
  return payload;
}

function showEditor() { loginView.hidden = true; editorView.hidden = false; logout.hidden = false; }
function showLogin() { loginView.hidden = false; editorView.hidden = true; logout.hidden = true; }

function render(examples) {
  list.replaceChildren(...examples.map((example) => {
    const card = document.createElement('article'); card.className = 'editor-card'; card.dataset.id = example.id;
    const title = document.createElement('h3'); title.textContent = `${example.title} · ${example.status}`;
    const meta = document.createElement('p'); meta.textContent = `${example.project} · ${example.format}`;
    const description = document.createElement('p'); description.textContent = example.description;
    if (example.imageUrl) { const image = document.createElement('img'); image.src = example.imageUrl; image.alt = `Пример: ${example.title}`; image.className = 'editor-card-image'; card.append(image); }
    const prompt = document.createElement('textarea'); prompt.value = example.prompt; prompt.setAttribute('aria-label', `Промпт ${example.title}`);
    const actions = document.createElement('div'); actions.className = 'editor-card-actions';
    const save = document.createElement('button'); save.type = 'button'; save.textContent = 'Сохранить промпт'; save.addEventListener('click', async () => { save.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ prompt: prompt.value }) }); } catch (error) { alert(errorText(error)); } finally { save.disabled = false; } });
    const upload = document.createElement('input'); upload.type = 'file'; upload.accept = 'image/png,image/jpeg,image/webp,image/gif'; upload.setAttribute('aria-label', `Загрузить изображение ${example.title}`); upload.addEventListener('change', async () => { const file = upload.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = async () => { upload.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}/image`, { method: 'POST', body: JSON.stringify({ dataUrl: reader.result }) }); await load(); } catch (error) { alert(errorText(error)); } finally { upload.disabled = false; } }; reader.readAsDataURL(file); });
    const publish = document.createElement('button'); publish.type = 'button'; publish.textContent = example.status === 'published' ? 'Снять с публикации' : 'Опубликовать'; publish.addEventListener('click', async () => { publish.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ status: example.status === 'published' ? 'draft' : 'published' }) }); await load(); } catch (error) { alert(errorText(error)); } finally { publish.disabled = false; } });
    actions.append(save, publish, upload); card.append(title, meta, description, prompt, actions); return card;
  }));
}

async function load() { const payload = await request('/api/editor/prompts'); render(payload.examples || []); }
function connectEvents() { const events = new EventSource(`${api}/api/editor/events`, { withCredentials: true }); events.onopen = () => { connection.textContent = 'Realtime подключён'; }; events.onerror = () => { connection.textContent = 'Переподключение…'; }; events.addEventListener('prompt.changed', load); events.addEventListener('prompt.deleted', load); }

loginForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#login-error'); error.textContent = ''; try { const form = new FormData(loginForm); await request('/api/editor/login', { method: 'POST', body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) }); showEditor(); await load(); connectEvents(); } catch (err) { error.textContent = errorText(err); } });
promptForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#save-error'); error.textContent = ''; const button = promptForm.querySelector('button[type="submit"]'); button.disabled = true; try { const form = new FormData(promptForm); const file = form.get('image'); const prompt = String(form.get('prompt') || '').trim(); const id = `prompt-${Date.now()}`; const title = file instanceof File && file.name ? file.name.replace(/\.[^.]+$/, '') : 'Новый пример'; const format = file instanceof File && file.type === 'image/png' ? 'PNG' : file instanceof File && file.type === 'image/webp' ? 'WebP' : 'JPG'; const data = { id, title, project: 'Eclipse Library', description: 'Пример изображения из редакторской панели.', prompt, format, status: 'draft' }; const created = await request('/api/editor/prompts', { method: 'POST', body: JSON.stringify(data) }); if (file instanceof File && file.size) await request(`/api/editor/prompts/${encodeURIComponent(created.example.id)}/image`, { method: 'POST', body: JSON.stringify({ dataUrl: await fileAsDataUrl(file) }) }); promptForm.reset(); await load(); } catch (err) { error.textContent = errorText(err); } finally { button.disabled = false; } });
logout.addEventListener('click', async () => { await request('/api/editor/logout', { method: 'POST', body: '{}' }).catch(() => {}); showLogin(); });

request('/api/editor/me').then(async () => { showEditor(); await load(); connectEvents(); }).catch(() => showLogin());
