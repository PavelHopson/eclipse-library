const root = document.querySelector('.login-page');
const api = root.dataset.editorApi.replace(/\/$/, '');
const form = document.querySelector('#login-form');
const error = document.querySelector('#login-error');

async function request(path, options = {}) {
  const response = await fetch(`${api}${path}`, { credentials: 'include', headers: { 'content-type': 'application/json' }, ...options });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `HTTP ${response.status}`);
  return payload;
}

request('/api/editor/me').then(() => { location.replace('/editor.html'); }).catch(() => {});
form.addEventListener('submit', async (event) => {
  event.preventDefault(); error.textContent = '';
  const data = Object.fromEntries(new FormData(form));
  const button = form.querySelector('button'); button.disabled = true; button.textContent = 'Проверяем…';
  try { await request('/api/editor/login', { method: 'POST', body: JSON.stringify(data) }); location.replace('/editor.html'); }
  catch (err) { error.textContent = err.message === 'invalid_credentials' ? 'Неверный email или пароль.' : 'Не удалось войти. Попробуйте ещё раз.'; button.disabled = false; button.textContent = 'Войти в админку'; }
});
