(() => {
  const input = document.querySelector('#light-mode');
  const hit = document.querySelector('.toggle-scene__hit-spot');
  let timer;
  function toggle() {
    clearTimeout(timer);
    document.body.classList.add('is-pulling');
    input.checked = !input.checked;
    document.documentElement.style.setProperty('--on', input.checked ? '1' : '0');
    document.body.classList.toggle('is-awake', input.checked);
    timer = setTimeout(() => document.body.classList.remove('is-pulling'), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 190);
  }
  hit.setAttribute('tabindex', '0');
  hit.setAttribute('role', 'button');
  hit.setAttribute('aria-label', 'Потянуть за шнур лампы');
  hit.addEventListener('click', toggle);
  hit.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); } });
})();
