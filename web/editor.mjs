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
    const prompt = document.createElement('textarea'); prompt.value = example.prompt; prompt.setAttribute('aria-label', `Промпт ${example.title}`);
    const actions = document.createElement('div'); actions.className = 'editor-card-actions';
    const save = document.createElement('button'); save.type = 'button'; save.textContent = 'Сохранить промпт'; save.addEventListener('click', async () => { save.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ prompt: prompt.value }) }); } catch (error) { alert(errorText(error)); } finally { save.disabled = false; } });
    const publish = document.createElement('button'); publish.type = 'button'; publish.textContent = example.status === 'published' ? 'Снять с публикации' : 'Опубликовать'; publish.addEventListener('click', async () => { publish.disabled = true; try { await request(`/api/editor/prompts/${encodeURIComponent(example.id)}`, { method: 'PATCH', body: JSON.stringify({ status: example.status === 'published' ? 'draft' : 'published' }) }); await load(); } catch (error) { alert(errorText(error)); } finally { publish.disabled = false; } });
    actions.append(save, publish); card.append(title, meta, description, prompt, actions); return card;
  }));
}

async function load() { const payload = await request('/api/editor/prompts'); render(payload.examples || []); }
function connectEvents() { const events = new EventSource(`${api}/api/editor/events`, { withCredentials: true }); events.onopen = () => { connection.textContent = 'Realtime подключён'; }; events.onerror = () => { connection.textContent = 'Переподключение…'; }; events.addEventListener('prompt.changed', load); events.addEventListener('prompt.deleted', load); }

loginForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#login-error'); error.textContent = ''; try { const form = new FormData(loginForm); await request('/api/editor/login', { method: 'POST', body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) }); showEditor(); await load(); connectEvents(); } catch (err) { error.textContent = errorText(err); } });
promptForm.addEventListener('submit', async (event) => { event.preventDefault(); const error = document.querySelector('#save-error'); error.textContent = ''; try { const data = Object.fromEntries(new FormData(promptForm)); await request('/api/editor/prompts', { method: 'POST', body: JSON.stringify(data) }); promptForm.reset(); await load(); } catch (err) { error.textContent = errorText(err); } });
logout.addEventListener('click', async () => { await request('/api/editor/logout', { method: 'POST', body: '{}' }).catch(() => {}); showLogin(); });

request('/api/editor/me').then(async () => { showEditor(); await load(); connectEvents(); }).catch(() => showLogin());
