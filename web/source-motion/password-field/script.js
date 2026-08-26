const button = document.getElementById('reveal');
const input = document.getElementById('pass');
const mask = document.getElementById('fakepass');

function syncMask() {
  mask.textContent = input.value ? '•'.repeat(input.value.length) : 'Пароль';
  button.disabled = input.value.trim().length === 0;
}

button.addEventListener('click', () => {
  const reveal = input.type === 'password';
  input.type = reveal ? 'text' : 'password';
  mask.classList.toggle('scan', reveal);
  button.classList.toggle('open', reveal);
  input.classList.toggle('active', reveal);
  button.setAttribute('aria-pressed', String(reveal));
  button.setAttribute('aria-label', reveal ? 'Скрыть пароль' : 'Показать пароль');
});

input.addEventListener('input', syncMask);
syncMask();
