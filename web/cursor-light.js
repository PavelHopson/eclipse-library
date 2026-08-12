(() => {
  'use strict';

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1024px)');
  if (!finePointer.matches || reducedMotion.matches || !desktop.matches) return;

  const layerNames = ['gold', 'blue', 'core'];
  const layers = layerNames.map((name) => {
    const node = document.createElement('div');
    node.className = `forge-cursor-light forge-cursor-light--${name}`;
    node.setAttribute('aria-hidden', 'true');
    document.body.appendChild(node);
    return node;
  });

  const target = { x: -1000, y: -1000 };
  const points = layerNames.map(() => ({ x: -1000, y: -1000 }));
  const speeds = [0.075, 0.16, 0.38];
  let frame = 0;
  let active = false;

  const render = () => {
    points.forEach((point, index) => {
      point.x += (target.x - point.x) * speeds[index];
      point.y += (target.y - point.y) * speeds[index];
      layers[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
    });
    frame = window.requestAnimationFrame(render);
  };

  const show = () => {
    if (active) return;
    active = true;
    layers.forEach((layer) => layer.classList.add('is-visible'));
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const hide = () => {
    active = false;
    layers.forEach((layer) => layer.classList.remove('is-visible'));
    window.cancelAnimationFrame(frame);
    frame = 0;
  };

  const onPointerMove = (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    if (points[0].x < -900) points.forEach((point) => { point.x = target.x; point.y = target.y; });
    show();
  };

  const destroy = () => {
    window.cancelAnimationFrame(frame);
    frame = 0;
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerleave', hide);
    window.removeEventListener('blur', hide);
    layers.forEach((layer) => layer.remove());
  };

  document.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerleave', hide, { passive: true });
  window.addEventListener('blur', hide, { passive: true });
  reducedMotion.addEventListener('change', (event) => { if (event.matches) destroy(); }, { once: true });
  finePointer.addEventListener('change', (event) => { if (!event.matches) destroy(); }, { once: true });
  desktop.addEventListener('change', (event) => { if (!event.matches) destroy(); }, { once: true });
})();
