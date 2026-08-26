document.querySelectorAll('.add-to-cart').forEach((button) => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const set = (name, value) => button.style.setProperty(name, value);
  const wait = (delay) => new Promise((resolve) => setTimeout(resolve, reduced ? 0 : delay));
  button.addEventListener('pointerdown', () => !button.classList.contains('active') && set('--background-scale', '.97'));
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    if (button.classList.contains('active')) return;
    button.classList.add('active');
    set('--text-o', '0'); set('--background-scale', '1'); set('--shirt-scale', '1'); set('--shirt-y', '-42px'); set('--cart-x', '0px'); set('--cart-scale', '1');
    await wait(420); set('--shirt-y', '-40px');
    await wait(280); set('--shirt-y', '16px'); set('--shirt-scale', '.9');
    await wait(230); set('--shirt-scale', '0'); set('--shirt-second-y', '0px'); set('--cart-clip', '12px'); set('--cart-clip-x', '3px');
    await wait(180); set('--cart-tick-offset', '0px');
    await wait(220); set('--cart-x', '52px'); set('--cart-rotate', '-15deg');
    await wait(200); set('--cart-x', '104px'); set('--cart-rotate', '0deg');
    await wait(210); set('--cart-x', '-104px'); set('--cart-scale', '.75');
    await wait(50); set('--text-o', '1'); set('--text-x', '12px'); set('--cart-x', '-48px');
    await wait(300); ['--shirt-y','--shirt-scale','--shirt-second-y','--cart-clip','--cart-clip-x','--cart-tick-offset','--cart-x','--cart-rotate','--cart-scale','--text-o','--text-x','--background-scale'].forEach((name) => button.style.removeProperty(name)); button.classList.remove('active');
  });
});
