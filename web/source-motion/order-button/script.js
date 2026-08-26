const demo = document.querySelector('.demo');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let processing = false;

function startOrder() {
  if (processing) return;
  processing = true;
  demo.setAttribute('aria-busy', 'true');
  demo.setAttribute('aria-label', 'Заказ обрабатывается');

  let reverting = false;
  const endListener = document.createElement('div');
  endListener.className = 'demo-transitionend-listener';
  demo.appendChild(endListener);
  void demo.offsetTop;
  demo.classList.add('s--processing');

  endListener.addEventListener('transitionend', () => {
    if (reverting) return;
    reverting = true;
    demo.classList.add('s--reverting');
    demo.setAttribute('aria-label', 'Заказ доставлен');
  }, { once: true });

  const duration = reducedMotion.matches ? 1200 : 10000;
  setTimeout(() => {
    endListener.remove();
    demo.classList.remove('s--processing', 's--reverting');
    demo.removeAttribute('aria-busy');
    demo.setAttribute('aria-label', 'Оформить заказ');
    processing = false;
  }, duration);
}

demo.addEventListener('click', startOrder);
demo.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  startOrder();
});
