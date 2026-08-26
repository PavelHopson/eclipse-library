(() => {
  'use strict';

  const params = new URLSearchParams(location.search);
  const reduce = params.get('reduce') === '1' || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const speed = Math.max(0.5, Math.min(2, Number(params.get('speed')) || 1));
  document.documentElement.dataset.reduce = String(reduce);
  document.documentElement.dataset.freeze = String(params.has('t') || params.get('freeze') === '1');
  document.documentElement.style.setProperty('--speed', String(speed));

  const timers = new Set();
  const later = (fn, delay) => {
    const id = setTimeout(() => {
      timers.delete(id);
      fn();
    }, delay / speed);
    timers.add(id);
    return id;
  };
  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers.clear();
  };
  const status = (message) => {
    const node = document.querySelector('[data-status]');
    if (node) node.textContent = message;
  };

  function initLightTabs() {
    const nav = document.querySelector('[data-light-nav]');
    if (!nav) return;
    const buttons = [...nav.querySelectorAll('[role="tab"]')];
    const core = nav.querySelector('.light-core');
    const energy = nav.querySelector('.light-energy');
    const content = document.querySelector('.light-content');
    const title = document.querySelector('[data-tab-title]');
    const copy = document.querySelector('[data-tab-copy]');
    const index = document.querySelector('[data-tab-index]');
    const data = [
      ['Обзор', 'Все важные события, решения и статусы собраны в одном спокойном экране.'],
      ['Проекты', 'Переключайтесь между активными задачами, материалами и готовыми результатами.'],
      ['Команда', 'Люди и агенты видны вместе: кто работает, кому нужна помощь, что уже завершено.'],
      ['Доступ', 'Разрешения, подтверждения и журнал действий остаются понятными и проверяемыми.']
    ];
    let current = Math.max(0, Math.min(buttons.length - 1, Number(params.get('state')) || 0));

    function place(element, selected, animate, fromIndex) {
      const targetX = selected * 100;
      if (!animate || reduce) {
        element.style.transform = `translate3d(${targetX}%,0,0)`;
        return;
      }
      const direction = selected >= fromIndex ? 1 : -1;
      element.getAnimations().forEach(animation => animation.cancel());
      element.animate([
        { transform: `translate3d(${fromIndex * 100}%,0,0) scaleX(1)`, offset: 0 },
        { transform: `translate3d(${(fromIndex + (selected - fromIndex) * .58) * 100}%,0,0) scaleX(${1 + Math.min(2.2, Math.abs(selected - fromIndex) * .42)})`, offset: .55 },
        { transform: `translate3d(${targetX + direction * 4}%,0,0) scaleX(.86)`, offset: .84 },
        { transform: `translate3d(${targetX}%,0,0) scaleX(1)`, offset: 1 }
      ], { duration: 620 / speed, easing: 'cubic-bezier(.16,.78,.16,1)', fill: 'forwards' });
    }

    function spark(selected, fromIndex) {
      if (reduce || selected === fromIndex) return;
      energy.getAnimations().forEach(animation => animation.cancel());
      const distance = selected - fromIndex;
      energy.animate([
        { transform: `translate3d(${fromIndex * 100}%,0,0) scaleX(.25)`, opacity: 0 },
        { transform: `translate3d(${(fromIndex + distance * .38) * 100}%,0,0) scaleX(${1 + Math.abs(distance)})`, opacity: 1, offset: .42 },
        { transform: `translate3d(${selected * 100}%,0,0) scaleX(.55)`, opacity: .9, offset: .78 },
        { transform: `translate3d(${selected * 100}%,0,0) scaleX(.2)`, opacity: 0 }
      ], { duration: 560 / speed, easing: 'cubic-bezier(.18,.8,.2,1)' });
    }

    function select(next, animate = true, focus = false) {
      next = (next + buttons.length) % buttons.length;
      const previous = current;
      current = next;
      buttons.forEach((button, buttonIndex) => {
        const active = buttonIndex === current;
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
      });
      place(core, current, animate, previous);
      spark(current, previous);
      content.classList.remove('is-changing');
      void content.offsetWidth;
      content.classList.add('is-changing');
      title.textContent = data[current][0];
      copy.textContent = data[current][1];
      index.textContent = String(current + 1).padStart(2, '0');
      status(`Выбрана вкладка «${data[current][0]}».`);
      if (focus) buttons[current].focus();
    }

    buttons.forEach((button, buttonIndex) => button.addEventListener('click', () => select(buttonIndex)));
    nav.addEventListener('keydown', event => {
      const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      if (!direction) return;
      event.preventDefault();
      select(current + direction, true, true);
    });
    select(current, false);
    if (params.has('t')) select(Math.floor(Number(params.get('t')) || 0) % buttons.length, false);
  }

  function initOrder() {
    const road = document.querySelector('[data-road]');
    const action = document.querySelector('[data-order-action]');
    if (!road || !action) return;
    const label = action.querySelector('span');

    function setState(state) {
      road.dataset.state = state;
      action.dataset.complete = String(state === 'complete');
      label.textContent = state === 'idle' ? 'Подтвердить заказ' : state === 'loading' ? 'Загружаем посылку' : state === 'driving' ? 'Машина в пути' : 'Заказ отправлен';
      action.disabled = state === 'loading' || state === 'driving';
      status({ idle: 'Готово к подтверждению.', loading: 'Ворота открыты. Посылка загружается.', driving: 'Машина выехала со склада.', complete: 'Заказ подтверждён и отправлен.' }[state]);
    }

    function play() {
      clearTimers();
      setState('idle');
      if (reduce) {
        later(() => setState('complete'), 140);
        return;
      }
      later(() => setState('loading'), 80);
      later(() => setState('driving'), 720);
      later(() => setState('complete'), 2150);
    }
    action.addEventListener('click', () => road.dataset.state === 'complete' ? (setState('idle'), status('Демонстрация сброшена.')) : play());
    const requested = params.get('state');
    if (['idle', 'loading', 'driving', 'complete'].includes(requested)) setState(requested);
    else if (params.has('t')) {
      const time = Number(params.get('t')) || 0;
      setState(time >= 2.15 ? 'complete' : time >= .72 ? 'driving' : time >= .08 ? 'loading' : 'idle');
    } else setState('idle');
  }

  function initAuth() {
    const card = document.querySelector('[data-auth-card]');
    if (!card) return;
    const panes = {
      signin: card.querySelector('[data-pane="signin"]'),
      signup: card.querySelector('[data-pane="signup"]')
    };
    const feedback = card.querySelector('[data-auth-feedback]');

    function setMode(mode, focus = false) {
      card.dataset.mode = mode;
      Object.entries(panes).forEach(([name, pane]) => {
        const hidden = name !== mode;
        pane.setAttribute('aria-hidden', String(hidden));
        pane.toggleAttribute('inert', hidden);
      });
      feedback.textContent = '';
      status(mode === 'signin' ? 'Открыта форма входа.' : 'Открыта форма регистрации.');
      if (focus) panes[mode].querySelector('input')?.focus({ preventScroll: true });
    }
    card.querySelectorAll('[data-auth-switch]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.authSwitch, true)));
    card.querySelectorAll('[data-auth-submit]').forEach(button => button.addEventListener('click', () => {
      const pane = panes[card.dataset.mode];
      const inputs = [...pane.querySelectorAll('input')];
      const invalid = inputs.find(input => !input.checkValidity());
      if (invalid) {
        feedback.textContent = 'Проверьте выделенное поле.';
        invalid.focus();
        status('Форма содержит ошибку.');
        return;
      }
      feedback.style.color = '#146f50';
      feedback.textContent = card.dataset.mode === 'signin' ? 'Демонстрационный вход выполнен.' : 'Демонстрационный аккаунт создан.';
      status('Поля проверены локально. Данные никуда не отправлялись.');
    }));
    setMode(params.get('state') === 'signup' ? 'signup' : 'signin');
  }

  function initPreview() {
    const frame = document.querySelector('[data-preview-frame]');
    if (!frame) return;
    const tabs = [...document.querySelectorAll('[data-preview-tab]')];
    const title = document.querySelector('[data-preview-title]');
    const open = document.querySelector('[data-preview-open]');
    const progress = document.querySelector('.preview-progress');
    let reducePreview = false;
    let active = 0;

    const scenes = [
      ['Световая навигация', 'animation-v8-light-tabs.html'],
      ['Подтверждение заказа', 'animation-v8-order-confirm.html'],
      ['Вход → Регистрация', 'animation-v8-auth-blade.html']
    ];
    function url(extra = '') {
      const query = new URLSearchParams({ preview: '8' });
      if (reducePreview) query.set('reduce', '1');
      if (extra) query.set('state', extra);
      return `${scenes[active][1]}?${query}`;
    }
    function load(index) {
      active = index;
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === active;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      title.textContent = scenes[active][0];
      open.href = url();
      progress.classList.remove('is-loading');
      void progress.offsetWidth;
      progress.classList.add('is-loading');
      frame.src = url();
    }
    tabs.forEach((tab, index) => tab.addEventListener('click', () => load(index)));
    document.querySelector('[data-preview-replay]').addEventListener('click', () => { frame.src = url(); });
    document.querySelector('[data-preview-reduce]').addEventListener('click', event => {
      reducePreview = !reducePreview;
      event.currentTarget.setAttribute('aria-pressed', String(reducePreview));
      event.currentTarget.textContent = reducePreview ? 'Обычное движение' : 'Меньше движения';
      load(active);
    });
    frame.addEventListener('load', () => progress.classList.remove('is-loading'));
    load(0);
  }

  initLightTabs();
  initOrder();
  initAuth();
  initPreview();
  window.__ready = true;
})();
