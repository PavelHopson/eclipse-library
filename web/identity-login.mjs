const root = document.querySelector('[data-editor-api]');
const api = root.dataset.editorApi.replace(/\/$/, '');
const messages = {
  identity_access_denied: 'Аккаунт Chat пока не связан с редактором Library. Войдите по паролю Library и откройте «Общий аккаунт Eclipse».',
  identity_link_conflict: 'Этот аккаунт уже связан с другим редактором или привязка отозвана. Обратитесь к владельцу Library.',
  local_login_required: 'Для привязки сначала войдите по паролю Library. Вход через Chat не позволяет менять привязку.',
  identity_failed: 'Не удалось подтвердить вход. Начните его заново.',
  rate_limited: 'Слишком много попыток. Подождите минуту и повторите.',
};
const params = new URLSearchParams(location.search);
const error = params.get('error');
if (error && messages[error]) document.querySelector('#login-error').textContent = messages[error];
let identityEnabled = false;
async function updateIdentityStatus() {
  const panel = document.querySelector('[data-identity-link]');
  if (!panel || !identityEnabled) return;
  const response = await fetch(`${api}/api/editor/identity/status`, { credentials:'include', signal:AbortSignal.timeout(10000) });
  const globalLogout = document.querySelector('#logout-eclipse');
  if (!response.ok) { if(globalLogout)globalLogout.hidden=true; return; }
  const status = await response.json();
  if (globalLogout) globalLogout.hidden = status.authMethod !== 'chat';
  panel.querySelector('button').hidden = status.linked;
  panel.querySelector('[data-identity-error]').textContent = status.linked ? 'Аккаунт Chat подключён. Теперь можно использовать его для входа в Library.' : '';
  panel.querySelector('p').textContent = status.linked ? 'Редакторский доступ остаётся отдельным от других проектов Eclipse.' : 'Свяжите этот редакторский аккаунт с Chat. Понадобится действующий вход по паролю Library и подтверждение в Chat.';
}
fetch(`${api}/api/editor/identity/config`, { credentials:'include', signal:AbortSignal.timeout(10000) })
  .then(response => response.ok ? response.json() : {enabled:false})
  .then(async config => {
    identityEnabled = config.enabled === true;
    if (!identityEnabled) return;
    document.querySelectorAll('[data-identity-login],[data-identity-link]').forEach(el => {el.hidden=false;});
    await updateIdentityStatus();
  }).catch(() => {});
document.addEventListener('editor:session', () => { void updateIdentityStatus().catch(() => {}); });
for (const button of document.querySelectorAll('[data-identity-start]')) {
  button.addEventListener('click', async () => {
    const status = button.parentElement.querySelector('[data-identity-error]');
    const previous = button.textContent; button.disabled=true; button.textContent='Подключение…'; status.textContent='';
    try {
      const response=await fetch(`${api}/api/editor/identity/start`, {method:'POST',credentials:'include',signal:AbortSignal.timeout(15000),headers:{'content-type':'application/json'},body:JSON.stringify({link:button.dataset.link==='true'})});
      const payload=await response.json(); if(!response.ok) throw new Error(payload.error);
      const target=new URL(payload.authorizeUrl);
      if(target.protocol!=='https:') throw new Error('identity_failed');
      location.assign(target.href);
    } catch(error) {status.textContent=messages[error.message] || 'Вход через Chat недоступен. Попробуйте снова или войдите по паролю Library.';button.disabled=false;button.textContent=previous;}
  });
}
