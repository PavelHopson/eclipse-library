(() => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const autoRotateButton = document.getElementById('autoRotateToggle');
  const effectButton = document.getElementById('triggerEffectButton');
  const themeButtons = [...document.querySelectorAll('.theme-button')];
  const themes = {
    inferno: ['#ffefbd', '#ff8a2a', '#d32e12'],
    ruby: ['#ffe2ed', '#ff366c', '#6c061f'],
    plasma: ['#f0d5ff', '#ad43ff', '#304cff'],
    void: ['#d9f7ff', '#38d4ff', '#174b9a'],
  };

  document.body.prepend(canvas);
  let palette = themes.inferno;
  let angle = 0;
  let autoRotate = !reducedMotion.matches;
  let echo = 0;
  let dragging = false;
  let lastX = 0;
  let width = 1;
  let height = 1;
  let dpr = 1;
  const stars = Array.from({ length: 180 }, (_, index) => ({
    a: (index * 2.399) % 6.283,
    r: .15 + ((index * 47) % 100) / 100,
    z: ((index * 31) % 100) / 100,
    s: 1 + (index % 3),
  }));

  function syncAutoRotate() {
    autoRotateButton.setAttribute('aria-pressed', String(autoRotate));
    autoRotateButton.textContent = `Автовращение: ${autoRotate ? 'включено' : 'выключено'}`;
  }

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth;
    height = innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame() {
    if (!dragging && autoRotate && !document.hidden) angle += .0272;
    echo *= .965;
    context.fillStyle = '#000003';
    context.fillRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) * .39;
    const halo = context.createRadialGradient(cx, cy, scale * .12, cx, cy, scale * (.76 + echo * .12));
    halo.addColorStop(0, '#000');
    halo.addColorStop(.18, '#000');
    halo.addColorStop(.25, palette[2] + '88');
    halo.addColorStop(.5, palette[1] + '24');
    halo.addColorStop(1, 'transparent');
    context.fillStyle = halo;
    context.fillRect(0, 0, width, height);

    context.save();
    context.translate(cx, cy);
    context.rotate(angle * .12);
    context.scale(1, .29);
    for (let ring = 9; ring > 0; ring -= 1) {
      const radius = scale * (.25 + ring * .055 + echo * .012 * ring);
      context.beginPath();
      context.ellipse(0, 0, radius, radius, 0, 0, Math.PI * 2);
      context.strokeStyle = palette[ring % 3] + Math.round(35 + ring * 16).toString(16).padStart(2, '0');
      context.lineWidth = 1 + ring * .7;
      context.shadowBlur = 12 + ring;
      context.shadowColor = palette[1];
      context.stroke();
    }
    context.restore();

    for (const star of stars) {
      const a = star.a + angle * (.4 + star.z);
      const radius = scale * (.34 + star.r * .9 + echo * .05);
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius * (.24 + star.z * .13);
      context.fillStyle = palette[(star.s - 1) % 3] + Math.round(80 + star.z * 150).toString(16).padStart(2, '0');
      context.beginPath();
      context.arc(x, y, star.s * .55, 0, Math.PI * 2);
      context.fill();
    }

    const core = context.createRadialGradient(cx - scale * .05, cy - scale * .05, 0, cx, cy, scale * .23);
    core.addColorStop(0, '#071018');
    core.addColorStop(.55, '#000');
    core.addColorStop(.82, '#000');
    core.addColorStop(1, palette[2] + '55');
    context.fillStyle = core;
    context.beginPath();
    context.arc(cx, cy, scale * .245, 0, Math.PI * 2);
    context.fill();
    requestAnimationFrame(frame);
  }

  function triggerEcho() {
    echo = 1;
    effectButton.setAttribute('aria-label', 'Импульс запущен');
    setTimeout(() => effectButton.removeAttribute('aria-label'), reducedMotion.matches ? 150 : 900);
  }

  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      themeButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      palette = themes[button.dataset.theme] || themes.inferno;
      triggerEcho();
    });
  });

  autoRotateButton.addEventListener('click', () => {
    autoRotate = !autoRotate;
    syncAutoRotate();
  });
  effectButton.addEventListener('click', triggerEcho);
  canvas.addEventListener('pointerdown', (event) => {
    dragging = true;
    lastX = event.clientX;
    canvas.setPointerCapture(event.pointerId);
    triggerEcho();
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    angle += (event.clientX - lastX) * .008;
    lastX = event.clientX;
  });
  canvas.addEventListener('pointerup', () => { dragging = false; });
  canvas.addEventListener('pointercancel', () => { dragging = false; });
  canvas.addEventListener('click', triggerEcho);
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) autoRotate = false;
    syncAutoRotate();
  });
  addEventListener('resize', resize);
  syncAutoRotate();
  resize();
  requestAnimationFrame(frame);
})();
