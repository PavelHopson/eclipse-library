(() => {
  const button = document.querySelector('.btn8');
  const status = document.querySelector('#send-status');
  const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let timer = 0;
  let restartFrame = 0;

  function finish() {
    button.classList.remove('is-sending');
    button.classList.add('is-complete');
    button.disabled = false;
    button.removeAttribute('aria-busy');
    status.textContent = 'Сообщение отправлено. Нажмите ещё раз, чтобы повторить.';
  }

  function start() {
    clearTimeout(timer);
    button.classList.remove('is-complete');
    button.classList.add('is-sending');
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    status.textContent = 'Отправляем сообщение…';
    timer = window.setTimeout(finish, reduceQuery.matches ? 120 : 2200);
  }

  button.addEventListener('click', () => {
    cancelAnimationFrame(restartFrame);
    if (!button.classList.contains('is-complete')) {
      start();
      return;
    }
    button.classList.remove('is-complete');
    restartFrame = requestAnimationFrame(() => {
      restartFrame = requestAnimationFrame(start);
    });
  });
})();
