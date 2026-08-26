(() => {
  const printer = document.querySelector('.printer');
  const receipt = document.querySelector('.receipt');
  const status = document.querySelector('.status span');
  const start = document.querySelector('#start');
  const reset = document.querySelector('#reset');
  const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let timer = 0;
  let frame = 0;

  const labels = {
    ready: 'Готов к печати',
    printing: 'Печатаем ваш чек',
    complete: 'Чек напечатан',
  };

  function setStage(stage) {
    printer.dataset.stage = stage;
    printer.setAttribute('aria-busy', String(stage === 'printing'));
    receipt.setAttribute('aria-hidden', String(stage === 'ready'));
    status.textContent = labels[stage];
    start.disabled = stage === 'printing';
    start.textContent = stage === 'complete' ? 'Напечатать ещё раз' : 'Распечатать чек';
    reset.disabled = stage === 'ready';
  }

  function print() {
    clearTimeout(timer);
    setStage('printing');
    timer = window.setTimeout(
      () => setStage('complete'),
      reduceQuery.matches ? 120 : 1850,
    );
  }

  start.addEventListener('click', () => {
    cancelAnimationFrame(frame);
    if (printer.dataset.stage !== 'complete') {
      print();
      return;
    }
    setStage('ready');
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(print);
    });
  });

  reset.addEventListener('click', () => {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    setStage('ready');
  });

  setStage('ready');
})();
