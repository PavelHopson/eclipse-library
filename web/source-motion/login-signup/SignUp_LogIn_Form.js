const container = document.querySelector('.container');
const registerButton = document.querySelector('.register-btn');
const loginButton = document.querySelector('.login-btn');

registerButton.addEventListener('click', () => {
  container.classList.add('active');
  container.querySelector('.form-box.register input')?.focus({ preventScroll: true });
});

loginButton.addEventListener('click', () => {
  container.classList.remove('active');
  container.querySelector('.form-box.login input')?.focus({ preventScroll: true });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => event.preventDefault());
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});
