(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const hero = $('hero'), slime = $('slime'), status = $('load-status');
  const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const params = new URLSearchParams(location.search);
  const frameK = (base, dt) => 1 - Math.pow(1 - base, dt / (1000 / 60));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const make = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D is unavailable');
    return { canvas, ctx };
  };
  const clear = (b) => { b.ctx.globalCompositeOperation = 'source-over'; b.ctx.globalAlpha = 1; b.ctx.filter = 'none'; b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height); };
  let buffers, hc, sc, images, rect, width = 0, height = 0, scale = .55;
  let ready = false, raf = 0, last = 0, started = 0, clock = 0, uiAt = 0, dripAt = 0;
  let pointerSeen = false, pointerInside = false, pressed = false, faceOpen = false;
  let paused = params.get('reduce') === '1', demoUntil = 0, integrity = 100, radius = 38;
  let cursor = { x: 0, y: 0 }, nodes = [], drips = [], lastInput = 0;
  let tagX = 0, tagY = 0, filterMode = 'blur-fallback';
  const perf = { frames: 0, renderTotal: 0, recent: [], dt: [], quality: .55 };
  const limited = () => paused || reduceQuery.matches;
  const announce = (text) => { $('announcement').textContent = text; };

  function readImage(path) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timer = setTimeout(() => reject(new Error('Image timeout')), 12000);
      img.onload = () => { clearTimeout(timer); resolve(img); };
      img.onerror = () => { clearTimeout(timer); reject(new Error('Image unavailable')); };
      img.src = path;
    });
  }
  function testFilter() {
    // A faint circle must disappear after thresholding: an ignored URL filter
    // would otherwise pass the centre/outside check with an ordinary circle.
    try {
      const input = make(), result = make();
      input.canvas.width = result.canvas.width = 96;
      input.canvas.height = result.canvas.height = 96;
      input.ctx.fillStyle = 'white'; input.ctx.beginPath(); input.ctx.arc(48, 48, 22, 0, Math.PI * 2); input.ctx.fill();
      result.ctx.filter = 'url(#goo-filter)'; result.ctx.drawImage(input.canvas, 0, 0);
      const center = result.ctx.getImageData(48, 48, 1, 1).data[3];
      const outside = result.ctx.getImageData(3, 3, 1, 1).data[3];
      clear(input); clear(result);
      input.ctx.globalAlpha = .25; input.ctx.fillStyle = 'white'; input.ctx.fillRect(10, 10, 76, 76);
      result.ctx.filter = 'url(#goo-filter)'; result.ctx.drawImage(input.canvas, 0, 0);
      const faint = result.ctx.getImageData(48, 48, 1, 1).data[3];
      return center > 200 && outside < 40 && faint < 20;
    } catch { return false; }
  }
  function resize() {
    if (!ready) return;
    width = innerWidth; height = innerHeight;
    rect = hero.getBoundingClientRect(); // Read once per resize, never in the frame loop.
    const renderWidth = Math.round(clamp(rect.width * Math.min(devicePixelRatio || 1, 2), 600, 1600));
    hero.width = renderWidth; hero.height = Math.round(renderWidth * images.suit.height / images.suit.width);
    slime.width = Math.ceil(width * scale); slime.height = Math.ceil(height * scale);
    for (const name of ['trail', 'goo', 'ring', 'gloss', 'wall']) {
      const b = buffers[name]; b.canvas.width = slime.width; b.canvas.height = slime.height;
    }
    for (const name of ['base', 'costume', 'edge']) {
      const b = buffers[name]; b.canvas.width = hero.width; b.canvas.height = hero.height;
    }
    const base = buffers.base;
    base.ctx.drawImage(images.face, 0, 0, hero.width, hero.height);
    base.ctx.globalCompositeOperation = 'destination-in';
    base.ctx.drawImage(images.suit, 0, 0, hero.width, hero.height);
    base.ctx.globalCompositeOperation = 'source-over';
    cursor = { x: rect.left + rect.width * .5, y: rect.top + rect.height * .32 };
    nodes = Array.from({ length: 9 }, () => ({ ...cursor })); drips = [];
    radius = clamp(Math.min(width, height) * .062, 26, 62);
    render(16.67, false); wake();
  }
  function stamp(x, y, r, seed) {
    const c = buffers.trail.ctx;
    c.beginPath(); c.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2);
    if (!limited()) for (let j = 0; j < 3; j++) {
      const a = seed + j * Math.PI * 2 / 3 + Math.sin(clock * .001 + seed) * .4;
      const sr = r * .5;
      c.moveTo((x + Math.cos(a) * r * .66 + sr) * scale, (y + Math.sin(a) * r * .66) * scale);
      c.arc((x + Math.cos(a) * r * .66) * scale, (y + Math.sin(a) * r * .66) * scale, sr * scale, 0, Math.PI * 2);
    }
    c.fill();
  }
  function simulate(dt, active) {
    const trail = buffers.trail;
    trail.ctx.globalCompositeOperation = 'destination-out';
    trail.ctx.globalAlpha = frameK(.032, dt); trail.ctx.fillRect(0, 0, trail.canvas.width, trail.canvas.height);
    trail.ctx.globalCompositeOperation = 'source-over'; trail.ctx.globalAlpha = 1; trail.ctx.fillStyle = 'white';
    radius += ((clamp(Math.min(width, height) * .062, 26, 62) * (pressed ? 1.45 : 1)) - radius) * frameK(.14, dt);
    if (active && !faceOpen) {
      if (limited()) {
        clear(trail); trail.ctx.fillStyle = 'white'; stamp(cursor.x, cursor.y, radius, 0);
      } else {
        nodes.forEach((node, i) => {
          const prev = i === 0 ? cursor : nodes[i - 1], oldX = node.x, oldY = node.y;
          const k = frameK(i === 0 ? .42 : .34, dt);
          node.x += (prev.x - node.x) * k; node.y += (prev.y - node.y) * k;
          const r = radius * (1 - .62 * i / 8);
          const count = Math.max(1, Math.ceil(Math.hypot(node.x - oldX, node.y - oldY) / (r / 3)));
          for (let s = 1; s <= count; s++) stamp(oldX + (node.x - oldX) * s / count, oldY + (node.y - oldY) * s / count, r, i * 1.7);
        });
        if (clock > dripAt && drips.length < 14) {
          const tail = nodes[8]; drips.push({ x: tail.x, y: tail.y, r: radius * .28, vy: .2 });
          dripAt = clock + 240 + Math.random() * 620;
        }
      }
    }
    if (!limited()) drips = drips.filter((d) => {
      const frames = dt / (1000 / 60);
      d.vy += .075 * frames; d.y += d.vy * frames; d.r *= Math.pow(.986, frames);
      if (d.r < 2.5 || d.y > height + d.r) return false;
      stamp(d.x, d.y, d.r, .5); return true;
    });
    const inside = active && cursor.x > rect.left + rect.width / 3 && cursor.x < rect.left + rect.width * 2 / 3 && cursor.y > rect.top && cursor.y < rect.bottom;
    if (!limited() && !faceOpen) integrity = clamp(integrity + (inside ? -.35 : .6) * dt / (1000 / 60), 8, 100);
  }
  function buildGoo() {
    const { trail, goo, ring, gloss } = buffers;
    clear(goo);
    goo.ctx.filter = filterMode === 'svg-threshold' ? 'url(#goo-filter)' : 'blur(6px)';
    goo.ctx.drawImage(trail.canvas, 0, 0); goo.ctx.filter = 'none';
    clear(ring); ring.ctx.filter = 'blur(5px)'; ring.ctx.drawImage(goo.canvas, 0, 0); ring.ctx.filter = 'none';
    ring.ctx.globalCompositeOperation = 'destination-out'; ring.ctx.drawImage(goo.canvas, 0, 0);
    ring.ctx.globalCompositeOperation = 'source-in';
    const rim = ring.ctx.createLinearGradient(0, 0, ring.canvas.width, ring.canvas.height);
    rim.addColorStop(0, '#f6f2ff'); rim.addColorStop(.5, '#d9d2ec'); rim.addColorStop(1, '#f6f2ff');
    ring.ctx.fillStyle = rim; ring.ctx.fillRect(0, 0, ring.canvas.width, ring.canvas.height);
    clear(gloss); gloss.ctx.drawImage(goo.canvas, 0, 0);
    gloss.ctx.globalCompositeOperation = 'destination-out'; gloss.ctx.drawImage(goo.canvas, -3, -4);
    gloss.ctx.globalCompositeOperation = 'source-in'; gloss.ctx.fillStyle = 'rgba(226,210,255,.9)'; gloss.ctx.fillRect(0, 0, gloss.canvas.width, gloss.canvas.height);
  }
  function toHero(ctx, canvas) {
    const factor = hero.width / rect.width;
    ctx.drawImage(canvas, -rect.left * factor, -rect.top * factor, width * factor, height * factor);
  }
  function paint() {
    const { base, costume, edge, goo, ring, gloss, wall } = buffers;
    hc.clearRect(0, 0, hero.width, hero.height);
    hc.drawImage(base.canvas, 0, 0);
    if (!faceOpen) {
      clear(costume); costume.ctx.drawImage(images.suit, 0, 0, hero.width, hero.height);
      costume.ctx.globalCompositeOperation = 'destination-out'; toHero(costume.ctx, goo.canvas);
      hc.drawImage(costume.canvas, 0, 0);
      clear(edge); toHero(edge.ctx, ring.canvas);
      edge.ctx.globalCompositeOperation = 'destination-in'; edge.ctx.drawImage(images.suit, 0, 0, hero.width, hero.height);
      hc.save(); hc.globalAlpha = .5; hc.shadowBlur = 6; hc.shadowColor = '#17131f'; hc.drawImage(edge.canvas, 0, 0); hc.restore();
      hc.globalAlpha = .9; hc.drawImage(edge.canvas, 0, 0); hc.globalAlpha = 1;
    }
    clear(wall);
    wall.ctx.globalAlpha = .75; wall.ctx.drawImage(ring.canvas, 0, 0); wall.ctx.globalAlpha = 1;
    wall.ctx.drawImage(goo.canvas, 0, 0);
    wall.ctx.globalCompositeOperation = 'source-atop'; wall.ctx.fillStyle = 'rgba(239,235,248,.9)'; wall.ctx.fillRect(0, 0, wall.canvas.width, wall.canvas.height);
    const tint = wall.ctx.createLinearGradient(0, 0, wall.canvas.width, wall.canvas.height);
    tint.addColorStop(0, '#fff'); tint.addColorStop(.5, '#ad9aca'); tint.addColorStop(1, '#f6f2ff');
    wall.ctx.globalAlpha = .18; wall.ctx.fillStyle = tint; wall.ctx.fillRect(0, 0, wall.canvas.width, wall.canvas.height);
    wall.ctx.globalCompositeOperation = 'source-over'; wall.ctx.globalAlpha = .62; wall.ctx.filter = 'blur(2px)'; wall.ctx.drawImage(gloss.canvas, 0, 0);
    wall.ctx.filter = 'none'; wall.ctx.globalAlpha = 1;
    wall.ctx.globalCompositeOperation = 'destination-out';
    wall.ctx.drawImage(images.matte, rect.left * scale, rect.top * scale, rect.width * scale, rect.height * scale);
    sc.clearRect(0, 0, slime.width, slime.height); sc.drawImage(wall.canvas, 0, 0);
  }
  function updateUI(force = false) {
    if (!force && clock - uiAt < 90) return;
    uiAt = clock;
    $('integrity-value').textContent = `${Math.round(integrity)}%`;
    $('integrity-ring').style.strokeDashoffset = String(91.106 * (1 - integrity / 100));
    $('integrity-ring').style.stroke = integrity < 40 ? '#22e0ff' : '#ff2d87';
  }
  function render(dt, active) {
    const before = performance.now();
    simulate(dt, active); buildGoo(); paint(); updateUI();
    const elapsed = performance.now() - before;
    perf.frames++; perf.renderTotal += elapsed; perf.recent.push(elapsed); if (perf.recent.length > 120) perf.recent.shift();
  }
  function step(now) {
    raf = 0;
    if (!ready || document.hidden || $('details').open) return;
    const rawDt = last ? now - last : 1000 / 60;
    const dt = clamp(rawDt, 1, 64); last = now; clock += dt;
    perf.dt.push(rawDt); if (perf.dt.length > 120) perf.dt.shift();
    const automatic = !limited() && ((!pointerSeen && now - started < 4000) || now < demoUntil);
    if (automatic) {
      cursor.x = rect.left + rect.width * (.5 + Math.sin(now * .0018) * .09);
      cursor.y = rect.top + rect.height * (.32 + Math.cos(now * .0024) * .085);
      lastInput = now;
    }
    if (demoUntil && now >= demoUntil) { demoUntil = 0; $('demo').querySelector('span').textContent = 'Смотреть эффект'; announce('Демонстрация завершена. Теперь проведите курсором по маске.'); }
    const active = automatic || (pointerInside && now - lastInput < 2500);
    render(dt, active);
    if (!limited()) {
      tagX += ((.5 - cursor.x / width) * 26 - tagX) * frameK(.06, dt);
      tagY += ((.5 - cursor.y / height) * 14 - tagY) * frameK(.06, dt);
      const tag = document.querySelector('.tag'); tag.style.setProperty('--tag-x', `${tagX.toFixed(2)}px`); tag.style.setProperty('--tag-y', `${tagY.toFixed(2)}px`);
      // Bound dormant work. No background loop after the trail has faded.
      if (active || now - lastInput < 7000 || (!faceOpen && integrity < 100)) wake();
      else last = 0;
    }
  }
  function wake() { if (!raf && ready && !document.hidden && !$('details').open) raf = requestAnimationFrame(step); }
  function stop() { cancelAnimationFrame(raf); raf = 0; last = 0; }
  function repair() {
    if (!ready) return;
    faceOpen = false; integrity = 100; drips = []; pointerInside = false; demoUntil = 0; pointerSeen = true;
    clear(buffers.trail); clear(buffers.goo); $('reveal').textContent = 'Снять маску ↗'; $('demo').querySelector('span').textContent = 'Смотреть эффект';
    buildGoo(); paint(); updateUI(true); announce('Маска восстановлена. Целостность 100%.'); wake();
  }
  function syncMotion() {
    stop(); demoUntil = 0; drips = [];
    document.body.classList.toggle('motion-off', limited());
    $('motion').textContent = reduceQuery.matches ? 'Системное уменьшение движения' : paused ? 'Включить анимацию' : 'Пауза анимации';
    $('motion').setAttribute('aria-pressed', String(limited()));
    $('motion').disabled = reduceQuery.matches;
    $('demo').disabled = limited() || !ready;
    const tag = document.querySelector('.tag'); tag.style.removeProperty('--tag-x'); tag.style.removeProperty('--tag-y');
    if (ready) { clear(buffers.trail); render(16.67, false); wake(); }
  }
  const panels = {
    story: ['Две стороны Гвен', 'Гвен Стейси и Ghost-Spider здесь существуют в одном кадре. Движение курсора стирает внешний слой и на мгновение открывает человека под маской. Это визуальный фан-концепт, а не официальный сайт или анонс фильма.'],
    suit: ['Маска, которую можно восстановить', 'Проведите курсором по героине. Зажмите кнопку мыши, чтобы увеличить каплю. Кнопка «Восстановить» убирает все следы. «Снять маску» открывает портрет целиком и работает с клавиатуры.'],
    band: ['В ритме Earth-65', 'Раздел группы оставлен как сюжетная заметка концепта. Аудиотрек не подключён: в исходниках нет музыки и разрешения на её использование. Звук не запускается автоматически.'],
    gallery: ['Два кадра. Один силуэт.', 'Оба изображения предоставлены для этого эксперимента. Они обработаны одним общим боксом без генеративного изменения лица.'],
    press: ['Canvas-эксперимент Eclipse', 'HTML, CSS и vanilla JavaScript. Девять узлов, затухающий след и маска силуэта. Сцена не отправляет данные, не использует API и не сохраняет действия. Права на публичное распространение исходных изображений отдельно не подтверждены.']
  };
  document.querySelectorAll('[data-panel]').forEach((button) => button.addEventListener('click', () => {
    const name = button.dataset.panel;
    if (name === 'home') { $('details').close(); return; }
    const panel = panels[name]; if (!panel) return;
    $('panel-title').textContent = panel[0]; $('panel-body').replaceChildren();
    const p = document.createElement('p'); p.textContent = panel[1]; $('panel-body').append(p);
    if (name === 'gallery') {
      const pair = document.createElement('div'); pair.className = 'gallery-pair';
      for (const [file, label] of [['suit', 'Костюм'], ['face', 'Портрет без маски']]) {
        const figure = document.createElement('figure'), img = document.createElement('img'), caption = document.createElement('figcaption');
        img.src = `assets/${file}.webp`; img.alt = label; caption.textContent = label; figure.append(img, caption); pair.append(figure);
      }
      $('panel-body').append(pair);
    }
    if (name === 'press') { const link = document.createElement('a'); link.href = 'guide.html'; link.textContent = 'Открыть полный гайд'; $('panel-body').append(link); }
    stop(); $('details').showModal();
  }));
  $('close-panel').addEventListener('click', () => $('details').close());
  $('details').addEventListener('click', (event) => { if (event.target === $('details')) { const b = $('details').getBoundingClientRect(); if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) $('details').close(); } });
  $('details').addEventListener('close', () => { last = 0; wake(); });
  $('repair').addEventListener('click', repair);
  $('reveal').addEventListener('click', () => {
    faceOpen = !faceOpen; pointerSeen = true; demoUntil = 0; pointerInside = false; clear(buffers.trail); clear(buffers.goo);
    $('reveal').textContent = faceOpen ? 'Вернуть маску ↗' : 'Снять маску ↗'; integrity = faceOpen ? 8 : 100;
    buildGoo(); paint(); updateUI(true); announce(faceOpen ? 'Портрет открыт.' : 'Маска возвращена.'); wake();
  });
  $('motion').addEventListener('click', () => { paused = !paused; syncMotion(); });
  $('demo').addEventListener('click', () => {
    if (limited() || !ready) return;
    repair(); demoUntil = performance.now() + 4000; pointerSeen = true; faceOpen = false;
    $('demo').querySelector('span').textContent = 'Демонстрация…'; wake();
  });
  addEventListener('pointermove', (event) => {
    if (!ready) return;
    pointerSeen = true; demoUntil = 0; $('hint').classList.add('is-hidden');
    $('demo').querySelector('span').textContent = 'Смотреть эффект';
    pointerInside = !event.target.closest('button,a,dialog,.ui');
    cursor.x = event.clientX; cursor.y = event.clientY; lastInput = performance.now();
    if (limited()) { nodes.forEach(n => { n.x = cursor.x; n.y = cursor.y; }); }
    wake();
  }, { passive: true });
  addEventListener('pointerdown', (event) => { if (!event.target.closest('button,a,dialog,.ui')) { pressed = true; wake(); } });
  addEventListener('pointerup', () => { pressed = false; wake(); });
  addEventListener('pointercancel', () => { pressed = false; pointerInside = false; });
  document.documentElement.addEventListener('pointerleave', () => { pointerInside = false; pressed = false; if (limited() && ready) { clear(buffers.trail); render(16.67, false); } });
  addEventListener('blur', () => { pressed = false; pointerInside = false; });
  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else { last = 0; wake(); } });
  reduceQuery.addEventListener('change', syncMotion);
  Object.defineProperty(window, 'gwenDiagnostics', { value: () => ({ ready, filterMode, reduced: limited(), integrity: Math.round(integrity), faceOpen, bufferScale: scale, frames: perf.frames, meanRenderMs: +(perf.renderTotal / Math.max(1, perf.frames)).toFixed(2), recentRenderMs: +(perf.recent.reduce((a,b) => a+b, 0) / Math.max(1, perf.recent.length)).toFixed(2), recentFps: +(1000 / (perf.dt.reduce((a,b) => a+b, 0) / Math.max(1, perf.dt.length))).toFixed(1), canvas: [hero.width, hero.height], viewport: [width, height] }) });
  syncMotion();
  Promise.all(['suit', 'face', 'matte'].map(name => readImage(`assets/${name}.${name === 'matte' ? 'png' : 'webp'}`)))
    .then(([suit, face, matte]) => {
      images = { suit, face, matte }; hc = hero.getContext('2d'); sc = slime.getContext('2d');
      if (!hc || !sc) throw new Error('Canvas 2D is unavailable');
      buffers = Object.fromEntries(['trail', 'goo', 'ring', 'gloss', 'wall', 'base', 'costume', 'edge'].map(name => [name, make()]));
      filterMode = testFilter() ? 'svg-threshold' : 'blur-fallback';
      ready = true; started = performance.now(); lastInput = started;
      resize(); document.body.classList.add('ready'); status.hidden = true;
      ['repair', 'reveal'].forEach(id => { $(id).disabled = false; });
      syncMotion(); announce('Сцена готова. Проведите по маске или нажмите «Снять маску».');
    }).catch(() => {
      stop(); ready = false; document.body.classList.remove('ready');
      status.hidden = false; status.textContent = 'Не удалось загрузить сцену. Обновите страницу, чтобы попробовать снова.';
      $('motion').disabled = true;
    });
})();
