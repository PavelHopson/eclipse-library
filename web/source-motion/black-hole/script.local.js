(() => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  document.body.prepend(canvas);
  const themes = { inferno: ['#ffefbd','#ff8a2a','#d32e12'], ruby: ['#ffe2ed','#ff366c','#6c061f'], plasma: ['#f0d5ff','#ad43ff','#304cff'], void: ['#d9f7ff','#38d4ff','#174b9a'] };
  let palette = themes.inferno, angle = 0, speed = .0017, echo = 0, dragging = false, lastX = 0;
  let width = 1, height = 1, dpr = 1;
  const stars = Array.from({ length: 180 }, (_, index) => ({ a: (index * 2.399) % 6.283, r: .15 + ((index * 47) % 100) / 100, z: ((index * 31) % 100) / 100, s: 1 + (index % 3) }));
  function resize() { dpr = Math.min(devicePixelRatio || 1, 2); width = innerWidth; height = innerHeight; canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr); context.setTransform(dpr,0,0,dpr,0,0); }
  function frame(time) {
    if (!dragging && !matchMedia('(prefers-reduced-motion: reduce)').matches) angle += speed * 16;
    echo *= .965;
    context.fillStyle = '#000003'; context.fillRect(0,0,width,height);
    const cx = width / 2, cy = height / 2, scale = Math.min(width,height) * .39;
    const halo = context.createRadialGradient(cx,cy,scale*.12,cx,cy,scale*(.76 + echo*.12)); halo.addColorStop(0,'#000'); halo.addColorStop(.18,'#000'); halo.addColorStop(.25,palette[2]+'88'); halo.addColorStop(.5,palette[1]+'24'); halo.addColorStop(1,'transparent'); context.fillStyle=halo; context.fillRect(0,0,width,height);
    context.save(); context.translate(cx,cy); context.rotate(angle*.12); context.scale(1,.29);
    for (let ring=9; ring>0; ring--) { const radius=scale*(.25+ring*.055+echo*.012*ring); context.beginPath(); context.ellipse(0,0,radius,radius,0,0,Math.PI*2); context.strokeStyle=palette[ring%3]+Math.round(35+ring*16).toString(16).padStart(2,'0'); context.lineWidth=1+ring*.7; context.shadowBlur=12+ring; context.shadowColor=palette[1]; context.stroke(); }
    context.restore();
    for (const star of stars) { const a=star.a+angle*(.4+star.z); const radius=scale*(.34+star.r*.9+echo*.05); const x=cx+Math.cos(a)*radius; const y=cy+Math.sin(a)*radius*(.24+star.z*.13); context.fillStyle=palette[(star.s-1)%3]+Math.round(80+star.z*150).toString(16).padStart(2,'0'); context.beginPath(); context.arc(x,y,star.s*.55,0,Math.PI*2); context.fill(); }
    const core=context.createRadialGradient(cx-scale*.05,cy-scale*.05,0,cx,cy,scale*.23); core.addColorStop(0,'#071018'); core.addColorStop(.55,'#000'); core.addColorStop(.82,'#000'); core.addColorStop(1,palette[2]+'55'); context.fillStyle=core; context.beginPath(); context.arc(cx,cy,scale*.245,0,Math.PI*2); context.fill();
    requestAnimationFrame(frame);
  }
  document.querySelectorAll('.theme-button').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.theme-button').forEach((item) => item.classList.toggle('active', item === button)); palette = themes[button.dataset.theme] || themes.inferno; echo = 1; }));
  canvas.addEventListener('pointerdown', (event) => { dragging=true; lastX=event.clientX; canvas.setPointerCapture(event.pointerId); echo=1; });
  canvas.addEventListener('pointermove', (event) => { if (dragging) { angle += (event.clientX-lastX)*.008; lastX=event.clientX; } });
  canvas.addEventListener('pointerup', () => dragging=false); canvas.addEventListener('click', () => echo=1);
  addEventListener('resize', resize); resize(); requestAnimationFrame(frame);
})();
