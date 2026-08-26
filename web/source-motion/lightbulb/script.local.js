(() => {
  const input = document.querySelector('#light-mode');
  const hit = document.querySelector('.toggle-scene__hit-spot');
  const action = document.querySelector('#light-action');
  const actionLabel = document.querySelector('.light-action__label');
  const title = document.querySelector('#light-title');
  const status = document.querySelector('#light-status');
  const roomState = document.querySelector('#room-state');
  const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let pullTimer = 0;
  let transitionTimer = 0;
  let prepareFrame = 0;
  let commitFrame = 0;

  function applyState() {
    const isOn = input.checked;
    document.documentElement.style.setProperty('--on', isOn ? '1' : '0');
    document.body.classList.toggle('is-awake', isOn);
    action.setAttribute('aria-pressed', String(isOn));
    hit.setAttribute('aria-pressed', String(isOn));
    actionLabel.textContent = isOn ? 'Выключить свет' : 'Включить свет';
    title.textContent = isOn ? 'Комната проснулась.' : 'Потяните за шнур.';
    roomState.textContent = isOn ? 'Свет включён' : 'Свет выключен';
    status.textContent = isOn ? 'Медведь уже проснулся' : 'Сейчас темно';
  }

  function toggle() {
    clearTimeout(pullTimer);
    clearTimeout(transitionTimer);
    cancelAnimationFrame(prepareFrame);
    cancelAnimationFrame(commitFrame);
    const nextState = !input.checked;

    document.body.classList.add('is-pulling', 'is-transitioning');

    prepareFrame = requestAnimationFrame(() => {
      commitFrame = requestAnimationFrame(() => {
        input.checked = nextState;
        applyState();

        pullTimer = window.setTimeout(
          () => document.body.classList.remove('is-pulling'),
          reduceQuery.matches ? 10 : 190,
        );

        transitionTimer = window.setTimeout(
          () => document.body.classList.remove('is-transitioning'),
          reduceQuery.matches ? 170 : 620,
        );
      });
    });
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
