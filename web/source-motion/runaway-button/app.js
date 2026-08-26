const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailShell = document.getElementById('emailShell');
const passwordShell = document.getElementById('passwordShell');
const runway = document.getElementById('runway');
const btn = document.getElementById('submitBtn');
const trail = document.getElementById('trail');
const chip = document.getElementById('progressChip');
const leadCopy = document.getElementById('leadCopy');
const line1 = document.getElementById('statusLine1');
const line2 = document.getElementById('statusLine2');
const line3 = document.getElementById('statusLine3');
const toast = document.getElementById('toast');
const togglePassword = document.getElementById('togglePassword');
const createLink = document.getElementById('createLink');
const forgotBtn = document.getElementById('forgotBtn');

let pointerX = 0;
let pointerY = 0;
let btnX = 0;
let targetX = 0;
let lastBtnX = 0;
let lastTime = 0;
let keyboardHold = false;
let completed = false;
let lastInteraction = 'pointer';
const isCoarse = window.matchMedia('(pointer: coarse)').matches;

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove('show'), 2200);
}

function filledCount() {
  const emailFilled = email.value.trim().length > 0;
  const passwordFilled = password.value.trim().length > 0;
  return Number(emailFilled) + Number(passwordFilled);
}

function updateFieldStates() {
  emailShell.classList.toggle('filled', email.value.trim().length > 0);
  passwordShell.classList.toggle('filled', password.value.trim().length > 0);

  if (email.value.trim() && !email.validity.valid) {
    emailShell.classList.add('invalid');
  } else {
    emailShell.classList.remove('invalid');
  }

  if (password.value.trim() && password.value.length < 8) {
    passwordShell.classList.add('invalid');
  } else {
    passwordShell.classList.remove('invalid');
  }
}

function updateCopy() {
  const count = filledCount();
  chip.textContent = `${count}/2 полей заполнено`;

  if (count === 0) {
    leadCopy.textContent = 'Пустая форма? Кнопка уходит от курсора на полной скорости.';
    line1.textContent = 'Пустая форма — кнопка убегает.';
    line2.textContent = 'Подведите мышь ближе, и она резко отскочит.';
    line3.textContent = 'Но Tab всегда добирается до неё, а Enter всегда отправляет.';
    btn.classList.remove('ready', 'locked', 'success');
  } else if (count === 1) {
    leadCopy.textContent = 'Уже лучше. Одно поле заполнено — кнопка замедлилась вдвое.';
    line1.textContent = 'Один шаг сделан.';
    line2.textContent = 'Скорость снижается, интерфейс успокаивается.';
    line3.textContent = 'Заполните второе поле, и кнопка останется с вами.';
    btn.classList.add('ready');
    btn.classList.remove('locked', 'success');
  } else {
    leadCopy.textContent = 'Доступ заслужен. Кнопка зафиксирована до перезагрузки страницы.';
    line1.textContent = 'Два поля заполнены.';
    line2.textContent = 'Кнопка мгновенно фиксируется и больше не убегает.';
    line3.textContent = 'Теперь остаётся только нажать Enter или кликнуть.';
    btn.classList.add('ready', 'locked');
  }
}

function runwayMetrics() {
  const rect = runway.getBoundingClientRect();
  const btnW = btn.offsetWidth;
  const left = 18;
  const right = Math.max(left, rect.width - btnW - 18);
  return { rect, left, right, range: right - left };
}

function proximityPower(rect) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = pointerX - cx;
  const dy = pointerY - cy;
  const dist = Math.hypot(dx, dy);
  const activeRadius = Math.max(rect.width * 0.9, 260);
  return Math.max(0, 1 - dist / activeRadius);
}

function computeTarget() {
  const count = filledCount();
  const { rect, left, right, range } = runwayMetrics();

  if (isCoarse || completed || count >= 2 || keyboardHold) {
    targetX = left;
    return;
  }

  const btnRect = btn.getBoundingClientRect();
  const hoverDanger = (
    pointerX >= btnRect.left - 32 &&
    pointerX <= btnRect.right + 32 &&
    pointerY >= btnRect.top - 36 &&
    pointerY <= btnRect.bottom + 36
  );

  const power = proximityPower(rect);
  const speedFactor = count === 0 ? 1 : 0.5;

  if (power <= 0.02 && !hoverDanger) {
    targetX = left;
    return;
  }

  const relativeX = pointerX - rect.left;
  const normalized = Math.min(1, Math.max(0, relativeX / rect.width));
  const desired = normalized < 0.5 ? right : left;
  const jitter = count === 0 ? Math.sin(performance.now() / 180) * 12 : Math.sin(performance.now() / 240) * 5;
  const offset = range * (0.52 + power * 0.48 * speedFactor);

  if (desired === right) {
    targetX = Math.min(right, left + offset + jitter);
  } else {
    targetX = Math.max(left, right - offset + jitter);
  }

  if (hoverDanger) {
    targetX = desired === right ? right : left;
  }
}

function animate(time) {
  if (!lastTime) lastTime = time;
  const dt = Math.min(32, time - lastTime);
  lastTime = time;

  computeTarget();
  const count = filledCount();
  const baseEase = count === 0 ? 0.2 : count === 1 ? 0.11 : 0.25;
  const ease = isCoarse ? 0.22 : baseEase;
  btnX += (targetX - btnX) * ease * (dt / 16.67 * 1.05);
  if (Math.abs(targetX - btnX) < 0.15) btnX = targetX;

  const y = 0;
  btn.style.transform = `translate3d(${btnX}px, ${y}px, 0)`;

  const delta = btnX - lastBtnX;
  const opacity = Math.min(0.45, Math.abs(delta) / 16);
  trail.style.opacity = opacity.toFixed(3);
  trail.style.left = `${18 + Math.min(btnX, lastBtnX)}px`;
  trail.style.top = `${runway.clientHeight / 2 - 12}px`;
  trail.style.width = `${Math.max(90, Math.abs(delta) * 6)}px`;
  lastBtnX = btnX;

  requestAnimationFrame(animate);
}

function updateAll() {
  updateFieldStates();
  updateCopy();
  computeTarget();
}

function focusButtonForKeyboard() {
  keyboardHold = true;
  targetX = 18;
  btn.focus({ preventScroll: true });
}

['input', 'change', 'blur'].forEach(evt => {
  email.addEventListener(evt, updateAll);
  password.addEventListener(evt, updateAll);
});

window.addEventListener('resize', () => {
  const left = 18;
  btnX = Math.max(left, Math.min(btnX, runwayMetrics().right));
  updateAll();
});

window.addEventListener('pointermove', e => {
  lastInteraction = 'pointer';
  keyboardHold = false;
  pointerX = e.clientX;
  pointerY = e.clientY;
});

window.addEventListener('keydown', e => {
  lastInteraction = 'keyboard';
  if (e.key === 'Tab') {
    keyboardHold = true;
  }
  if (e.key === 'Enter' && document.activeElement !== btn) {
    e.preventDefault();
    if (filledCount() >= 2 && form.reportValidity()) {
      handleSubmit();
    } else {
      focusButtonForKeyboard();
      if (filledCount() < 2) showToast('Enter всегда работает, но сначала заполните оба поля.');
    }
  }
});

btn.addEventListener('focus', () => {
  if (lastInteraction === 'keyboard') {
    keyboardHold = true;
    targetX = 18;
  }
});
btn.addEventListener('blur', () => {
  if (lastInteraction !== 'keyboard') keyboardHold = false;
});

runway.addEventListener('pointerdown', e => {
  pointerX = e.clientX;
  pointerY = e.clientY;
});

function handleSubmit() {
  if (completed) return;
  if (filledCount() < 2) {
    showToast('Сначала заполните оба поля, чтобы заслужить вход.');
    return;
  }
  if (!form.reportValidity()) {
    showToast('Проверьте email и длину пароля.');
    updateAll();
    return;
  }

  completed = true;
  keyboardHold = true;
  targetX = 18;
  btn.classList.add('success', 'locked');
  btn.querySelector('.btn-text').textContent = 'Вход...';
  chip.textContent = 'Доступ разрешён';
  leadCopy.textContent = 'Форма принята. В этой демо данные никуда не отправляются.';
  showToast('Успешный вход. Демо-форма принята.');

  setTimeout(() => {
    btn.querySelector('.btn-text').textContent = 'Готово';
  }, 700);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  handleSubmit();
});

togglePassword.addEventListener('click', () => {
  const open = password.type === 'password';
  password.type = open ? 'text' : 'password';
  togglePassword.setAttribute('aria-label', open ? 'Скрыть пароль' : 'Показать или скрыть пароль');
});

forgotBtn.addEventListener('click', () => showToast('Это демо. Здесь могла быть ссылка на восстановление.'));
createLink.addEventListener('click', e => {
  e.preventDefault();
  showToast('Это демо. Здесь могла быть ссылка на регистрацию.');
});

btnX = 18;
updateAll();
requestAnimationFrame(animate);
