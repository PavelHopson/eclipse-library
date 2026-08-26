(() => {
  const input = document.querySelector('#light-mode');
  const hit = document.querySelector('.toggle-scene__hit-spot');
  const action = document.querySelector('#light-action');
  const status = document.querySelector('#light-status');
  const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let timer = 0;

  function applyState() {
    const isOn = input.checked;
    document.documentElement.style.setProperty('--on', isOn ? '1' : '0');
    document.body.classList.toggle('is-awake', isOn);
    action.setAttribute('aria-pressed', String(isOn));
    hit.setAttribute('aria-pressed', String(isOn));
    action.textContent = isOn ? 'Выключить свет' : 'Потянуть за шнур';
    status.textContent = isOn
      ? 'Свет включён. Медведь проснулся и вышел из комнаты.'
      : 'Свет выключен. Потяните за шнур или нажмите кнопку.';
  }

  function toggle() {
    clearTimeout(timer);
    document.body.classList.add('is-pulling');
    input.checked = !input.checked;
    applyState();
    timer = window.setTimeout(
      () => document.body.classList.remove('is-pulling'),
      reduceQuery.matches ? 10 : 190,
    );
  }

  hit.setAttribute('tabindex', '0');
  hit.setAttribute('role', 'button');
  hit.setAttribute('aria-label', 'Потянуть за шнур лампы');
  hit.addEventListener('click', toggle);
  hit.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
  action.addEventListener('click', toggle);
  applyState();
})();
