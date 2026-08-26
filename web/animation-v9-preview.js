(() => {
  'use strict';

  const sceneOrder = [
    'light-tabs', 'order-confirm', 'auth-blade', 'payment-authorize',
    'panda-light', 'kinetic-delete', 'creative-orbit', 'card-payment',
    'lamp-auth', 'login-v5', 'card-receipt', 'mascot-otp',
    'payment-v3', 'cloud-auth', 'animated-cart', 'svg-hover',
    'file-upload', 'fly-cart'
  ];

  const sceneMeta = {
    'light-tabs': ['Motion 01 · Navigation', 'Световые вкладки', 'Выберите вкладку: световой импульс физически проходит к новому пункту.'],
    'order-confirm': ['Motion 02 · Commerce', 'Подтверждение заказа', 'Посылка загружается, ворота открываются, машина уезжает, а статус подтверждает доставку.'],
    'auth-blade': ['Motion 03 · Auth', 'Вход → Регистрация', 'Одно лезвие движется только по X и полностью закрывает момент смены двух настоящих форм.'],
    'payment-authorize': ['Motion 04 · Payment', 'Авторизация платежа', 'Карта передаётся банку, интерфейс показывает проверку и только затем подтверждает оплату.'],
    'panda-light': ['Motion 05 · Auth', 'Панда и свет', 'Пока свет выключен, форма действительно недоступна. Потяните за шнур и проверьте пароль.'],
    'kinetic-delete': ['Motion 06 · Files', 'Кинетическое удаление', 'Файл летит к корзине, список сжимается, а действие остаётся обратимым.'],
    'creative-orbit': ['Motion 07 · Creative', 'Орбитальная система', 'Управляемая сцена: движение запускается и останавливается одной очевидной кнопкой.'],
    'card-payment': ['Motion 08 · Payment', 'Интерактивная оплата', 'Карта входит в терминал, проходит проверку и возвращает однозначный результат.'],
    'lamp-auth': ['Motion 09 · Auth', 'Лампа входа', 'Свет является функциональным переключателем: без него форма не участвует в фокусе и чтении.'],
    'login-v5': ['Motion 10 · Auth', 'Вход v5', 'Живая проверка формы показывает ошибку рядом с действием и ясное успешное состояние.'],
    'card-receipt': ['Motion 11 · Payment', 'Карта → чек', 'После оплаты карта уходит в слот, а из того же объекта разворачивается цифровой чек.'],
    'mascot-otp': ['Motion 12 · Auth', 'OTP с талисманом', 'Глаза следят за текущей цифрой, код вставляется целиком, успех подтверждается реакцией талисмана.'],
    'payment-v3': ['Motion 13 · Payment', 'Оплата v3', 'Данные синхронно появляются на карте; фокус CVC действительно переворачивает её.'],
    'cloud-auth': ['Motion 14 · Auth', 'Облачный переход', 'Фигура закрывает половину карточки во время смены двух доступных состояний.'],
    'animated-cart': ['Motion 15 · Commerce', 'Живая корзина', 'Добавление, количество и итог меняются как единая связанная операция.'],
    'svg-hover': ['Motion 16 · Components', 'SVG-набор', 'Четыре иконки реагируют по-разному, сохраняя один визуальный язык и клавиатурный фокус.'],
    'file-upload': ['Motion 17 · Files', 'Загрузка файлов', 'Очередь, прогресс, завершение и выбор локальных файлов без внешней отправки.'],
    'fly-cart': ['Motion 18 · Commerce', 'Полёт в корзину', 'Товар визуально связывает кнопку с корзиной и только после прилёта увеличивает счётчик.']
  };

  const params = new URLSearchParams(location.search);
  const mediaReduce = matchMedia('(prefers-reduced-motion: reduce)');
  let reduce = params.get('reduce') === '1' || mediaReduce.matches;
  let currentId = sceneOrder.includes(params.get('scene')) ? params.get('scene') : sceneOrder[0];
  const freezeTime = params.has('t') && Number.isFinite(Number(params.get('t'))) ? Math.max(0, Number(params.get('t'))) : null;
  let activeCleanup = () => {};
  let activeRun = () => {};

  const stage = document.querySelector('[data-stage]');
  const progress = document.querySelector('[data-stage-progress]');
  const status = document.querySelector('[data-status]');
  const stateLabel = document.querySelector('[data-state-label]');
  const reduceButton = document.querySelector('[data-reduce]');
  const search = document.querySelector('[data-search]');
  const navButtons = [...document.querySelectorAll('[data-scene]')];
  const timers = new Set();

  function later(fn, delay) {
    const id = window.setTimeout(() => { timers.delete(id); fn(); }, delay);
    timers.add(id);
    return id;
  }

  function clearTimers() {
    timers.forEach((id) => clearTimeout(id));
    timers.clear();
  }

  function announce(message, state = 'Готово') {
    status.textContent = message;
    stateLabel.textContent = state;
  }

  function setInert(element, value) {
    if (!element) return;
    element.inert = value;
    element.setAttribute('aria-hidden', String(value));
  }

  function safeAnimate(element, keyframes, options = {}) {
    if (!element || reduce || freezeTime !== null || typeof element.animate !== 'function') return null;
    const animation = element.animate(keyframes, {
      duration: 520,
      easing: 'cubic-bezier(.16,.78,.16,1)',
      fill: 'both',
      ...options
    });
    animation.finished.catch(() => {});
    return animation;
  }

  function setPhase(root, phase, message) {
    root.dataset.phase = phase;
    if (message) announce(message, phase === 'idle' || phase === 'off' ? 'Готово' : 'Выполняется');
  }

  function freezePhase(root, phases) {
    if (freezeTime === null) return false;
    const index = freezeTime >= 3 ? phases.length - 1 : freezeTime >= 1 ? Math.min(1, phases.length - 1) : 0;
    setPhase(root, phases[index]);
    document.documentElement.dataset.freeze = 'true';
    announce(`Зафиксирован кадр ${freezeTime}`, 'Проверка кадра');
    return true;
  }

  function updateReduce() {
    document.documentElement.dataset.reduce = String(reduce);
    reduceButton.setAttribute('aria-pressed', String(reduce));
    reduceButton.textContent = reduce ? 'Обычное движение' : 'Меньше движения';
  }

  function setupLightTabs(root) {
    const tabs = [...root.querySelectorAll('[role=tab]')];
    const core = root.querySelector('.energy-core');
    const tail = root.querySelector('.energy-tail');
    const result = root.querySelector('.tab-result');
    const number = root.querySelector('[data-tab-number]');
    const heading = root.querySelector('[data-tab-heading]');
    const copy = root.querySelector('[data-tab-text]');
    const content = [
      ['01', 'Обзор', 'Ключевые события и решения собраны в одном спокойном экране.'],
      ['02', 'Проекты', 'Свет отмечает выбранный маршрут без лишней рамки или прыжка интерфейса.'],
      ['03', 'Команда', 'Участники, роли и текущая загрузка остаются в одном предсказуемом месте.'],
      ['04', 'Доступ', 'Права и подтверждения видны до того, как пользователь совершит действие.']
    ];
    let index = 0;
    const select = (next, focus = false) => {
      index = (next + tabs.length) % tabs.length;
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
      });
      const x = index * 100;
      if (!reduce && freezeTime === null) {
        safeAnimate(core, [{ transform: core.style.transform || 'translate3d(0,0,0)' }, { transform: `translate3d(${x}%,0,0)` }], { duration: 760 });
        safeAnimate(tail, [{ transform: core.style.transform || 'translate3d(0,0,0)', opacity: 0 }, { opacity: 1, offset: .18 }, { transform: `translate3d(${x}%,0,0)`, opacity: 0 }], { duration: 820 });
      }
      core.style.transform = `translate3d(${x}%,0,0)`;
      tail.style.transform = `translate3d(${x}%,0,0)`;
      result.classList.remove('is-changing');
      void result.offsetWidth;
      result.classList.add('is-changing');
      [number.textContent, heading.textContent, copy.textContent] = content[index];
      if (focus) tabs[index].focus();
      announce(`Выбрана вкладка «${content[index][1]}»`);
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          select(index + (event.key === 'ArrowRight' ? 1 : -1), true);
        }
      });
    });
    if (freezeTime !== null) select(freezeTime >= 3 ? 3 : freezeTime >= 1 ? 1 : 0);
    else later(() => select(1), 500);
    return () => select((index + 1) % tabs.length);
  }

  function setupOrder(root) {
    const button = root.querySelector('[data-action]');
    const run = () => {
      clearTimers();
      setPhase(root, 'loading', 'Посылка загружается');
      button.disabled = true;
      later(() => setPhase(root, 'driving', 'Курьер выехал'), reduce ? 160 : 1050);
      later(() => {
        setPhase(root, 'complete', 'Заказ подтверждён и передан курьеру');
        button.disabled = false;
        button.textContent = 'Отправить ещё раз →';
      }, reduce ? 340 : 2800);
    };
    button.addEventListener('click', run);
    if (!freezePhase(root, ['idle', 'loading', 'complete'])) later(run, 450);
    return run;
  }

  function setupAuthBlade(root) {
    const forms = [...root.querySelectorAll('[data-form]')];
    const copies = [...root.querySelectorAll('[data-copy]')];
    let mode = 'signin';
    const setMode = (next) => {
      mode = next;
      root.dataset.mode = mode;
      forms.forEach((form) => setInert(form, form.dataset.form !== mode));
      copies.forEach((copy) => { copy.hidden = copy.dataset.copy !== mode; });
      announce(mode === 'signin' ? 'Открыта форма входа' : 'Открыта регистрация');
    };
    root.querySelectorAll('[data-switch]').forEach((button) => button.addEventListener('click', () => setMode(button.dataset.switch)));
    root.querySelectorAll('[data-auth-submit]').forEach((button) => button.addEventListener('click', () => announce('Демонстрация: данные никуда не отправляются')));
    setMode(freezeTime !== null && freezeTime >= 1 ? 'signup' : 'signin');
    if (freezeTime === null) later(() => setMode('signup'), 500);
    return () => setMode(mode === 'signin' ? 'signup' : 'signin');
  }

  function setupPaymentAuthorize(root) {
    const button = root.querySelector('[data-action]');
    const input = root.querySelector('[data-card-input]');
    const display = root.querySelector('[data-card-number]');
    input.addEventListener('input', () => { display.textContent = input.value.replace(/[^\d ]/g, '').slice(0, 19) || '•••• •••• •••• ••••'; });
    const run = () => {
      clearTimers();
      setPhase(root, 'authorizing', 'Банк проверяет операцию');
      button.disabled = true;
      later(() => { setPhase(root, 'success', 'Платёж подтверждён'); button.disabled = false; button.textContent = 'Повторить оплату →'; }, reduce ? 300 : 1900);
    };
    button.addEventListener('click', run);
    if (!freezePhase(root, ['idle', 'authorizing', 'success'])) later(run, 500);
    return run;
  }

  function setupPanda(root) {
    const button = root.querySelector('[data-action]');
    const form = root.querySelector('[data-gated]');
    const eyes = [...root.querySelectorAll('.p-eye')];
    const password = root.querySelector('[data-private]');
    let on = false;
    const setLight = (value) => {
      on = value;
      setPhase(root, on ? 'on' : 'off', on ? 'Свет включён — форма доступна' : 'Свет выключен — форма недоступна');
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', on ? 'Выключить свет' : 'Включить свет');
      setInert(form, !on);
    };
    button.addEventListener('click', () => setLight(!on));
    password.addEventListener('focus', () => eyes.forEach((eye) => { eye.style.transform = 'scaleY(.12)'; }));
    password.addEventListener('blur', () => eyes.forEach((eye) => { eye.style.transform = ''; }));
    setLight(freezeTime !== null && freezeTime >= 1);
    if (freezeTime === null) later(() => setLight(true), 500);
    return () => setLight(!on);
  }

  function setupDelete(root) {
    const list = root.querySelector('ul');
    const undo = root.querySelector('[data-undo]');
    const particle = root.querySelector('.delete-particle');
    const bin = root.querySelector('.bin-v9');
    let removed = null;
    const remove = (button) => {
      if (!button || removed) return;
      const row = button.closest('li');
      const from = row.getBoundingClientRect();
      const to = bin.getBoundingClientRect();
      removed = { row, next: row.nextSibling };
      setPhase(root, 'catch', 'Файл перемещается в корзину');
      particle.style.left = `${from.left + from.width - 42}px`;
      particle.style.top = `${from.top + 14}px`;
      particle.style.opacity = '1';
      const dx = to.left + to.width / 2 - (from.left + from.width - 24);
      const dy = to.top + to.height / 2 - (from.top + 32);
      const flight = safeAnimate(particle, [{ transform: 'translate3d(0,0,0) scale(1)', opacity: 1 }, { transform: `translate3d(${dx * .55}px,${dy * .12 - 70}px,0) scale(.88)`, opacity: 1, offset: .48 }, { transform: `translate3d(${dx}px,${dy}px,0) scale(.18)`, opacity: 0 }], { duration: 850 });
      safeAnimate(row, [{ transform: 'translate3d(0,0,0)', opacity: 1 }, { transform: 'translate3d(30px,0,0)', opacity: 0 }], { duration: 420 });
      const finish = () => {
        row.hidden = true;
        particle.style.opacity = '0';
        undo.hidden = false;
        announce('Файл удалён. Действие можно отменить', 'Удалено');
      };
      if (flight) flight.finished.then(finish).catch(finish); else later(finish, reduce ? 80 : 450);
    };
    list.addEventListener('click', (event) => remove(event.target.closest('[data-delete]')));
    undo.addEventListener('click', () => {
      if (!removed) return;
      removed.row.hidden = false;
      safeAnimate(removed.row, [{ transform: 'translate3d(0,12px,0)', opacity: 0 }, { transform: 'translate3d(0,0,0)', opacity: 1 }], { duration: 380 });
      removed = null;
      undo.hidden = true;
      setPhase(root, 'idle', 'Файл восстановлен');
    });
    if (freezeTime !== null && freezeTime >= 3) { const row = root.querySelector('li'); row.hidden = true; undo.hidden = false; }
    else if (freezeTime === null) later(() => remove(root.querySelector('[data-delete]')), 650);
    return () => removed ? undo.click() : remove(root.querySelector('[data-delete]'));
  }

  function setupOrbit(root) {
    const button = root.querySelector('[data-action]');
    const label = root.querySelector('[data-orbit-state]');
    let playing = false;
    const setPlaying = (value) => {
      playing = value;
      setPhase(root, playing ? 'playing' : 'idle', playing ? 'Орбиты запущены' : 'Орбиты на паузе');
      button.setAttribute('aria-pressed', String(playing));
      button.textContent = playing ? 'Остановить' : 'Запустить';
      label.textContent = playing ? 'Движение' : 'Пауза';
    };
    button.addEventListener('click', () => setPlaying(!playing));
    setPlaying(freezeTime !== null ? freezeTime >= 1 : false);
    if (freezeTime === null) { later(() => setPlaying(true), 450); later(() => setPlaying(false), 4200); }
    return () => setPlaying(!playing);
  }

  function setupCardPayment(root) {
    const button = root.querySelector('[data-action]');
    const heading = root.querySelector('[data-payment-heading]');
    const copy = root.querySelector('[data-payment-copy]');
    const run = () => {
      clearTimers();
      setPhase(root, 'processing', 'Терминал считывает карту');
      heading.textContent = 'Проверяем карту'; copy.textContent = 'Защищённая демонстрация без реального списания.'; button.disabled = true;
      later(() => { setPhase(root, 'success', 'Оплата завершена'); heading.textContent = 'Оплата прошла'; copy.textContent = '4 290 ₽ · демо-операция'; button.disabled = false; button.textContent = 'Повторить →'; }, reduce ? 280 : 1900);
    };
    button.addEventListener('click', run);
    if (!freezePhase(root, ['idle', 'processing', 'success'])) later(run, 500);
    return run;
  }

  function setupLampAuth(root) {
    const button = root.querySelector('[data-action]');
    const form = root.querySelector('.night-login-v9');
    let on = false;
    const setLight = (value) => {
      on = value;
      setPhase(root, on ? 'on' : 'off', on ? 'Лампа включена — можно войти' : 'Лампа выключена');
      setInert(form, !on);
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', on ? 'Выключить лампу' : 'Включить лампу');
    };
    button.addEventListener('click', () => setLight(!on));
    setLight(freezeTime !== null && freezeTime >= 1);
    if (freezeTime === null) later(() => setLight(true), 550);
    return () => setLight(!on);
  }

  function setupLoginV5(root) {
    const email = root.querySelector('[data-email]');
    const password = root.querySelector('[data-password]');
    const validation = root.querySelector('[data-validation]');
    const action = root.querySelector('[data-action]');
    const modeButton = root.querySelector('[data-login-mode]');
    const title = root.querySelector('[data-login-title]');
    let signup = false;
    const validate = () => {
      const valid = email.validity.valid && password.value.length >= 8;
      if (!valid) {
        setPhase(root, 'error', 'Проверьте email и пароль');
        validation.textContent = 'Нужны корректный email и пароль не короче 8 символов.';
        safeAnimate(root.querySelector('form'), [{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(-9px,0,0)' }, { transform: 'translate3d(8px,0,0)' }, { transform: 'translate3d(0,0,0)' }], { duration: 360 });
        return;
      }
      setPhase(root, 'success', signup ? 'Аккаунт готов' : 'Вход выполнен');
      validation.textContent = 'Данные проверены локально.';
    };
    action.addEventListener('click', validate);
    modeButton.addEventListener('click', () => { signup = !signup; title.textContent = signup ? 'Регистрация' : 'Вход'; modeButton.textContent = signup ? 'У меня уже есть аккаунт →' : 'Создать аккаунт →'; setPhase(root, 'idle'); });
    if (freezeTime !== null && freezeTime >= 3) { email.value = 'demo@eclipse.ru'; password.value = 'eclipse-demo'; validate(); }
    else if (freezeTime !== null && freezeTime >= 1) { email.value = 'wrong'; action.click(); }
    else if (freezeTime === null) later(() => { email.value = 'demo@eclipse.ru'; password.value = 'eclipse-demo'; validate(); }, 700);
    return () => { setPhase(root, 'idle'); email.value = 'demo@eclipse.ru'; password.value = 'eclipse-demo'; later(validate, 100); };
  }

  function setupReceipt(root) {
    const button = root.querySelector('[data-action]');
    const run = () => {
      clearTimers();
      setPhase(root, 'printing', 'Платёж принят — печатаем чек');
      button.disabled = true;
      later(() => { setPhase(root, 'receipt', 'Чек готов'); button.disabled = false; button.textContent = 'Повторить →'; }, reduce ? 250 : 1500);
    };
    button.addEventListener('click', run);
    if (!freezePhase(root, ['card', 'printing', 'receipt'])) later(run, 500);
    return run;
  }

  function setupOtp(root) {
    const inputs = [...root.querySelectorAll('[data-otp]')];
    const button = root.querySelector('[data-action]');
    const hint = root.querySelector('[data-otp-hint]');
    const updateEyes = (index) => {
      root.style.setProperty('--eye-x', `${Math.max(-10, Math.min(10, (index - 2.5) * 4))}px`);
      setPhase(root, 'typing');
    };
    inputs.forEach((input, index) => {
      input.addEventListener('focus', () => updateEyes(index));
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '').slice(-1);
        updateEyes(index);
        if (input.value && inputs[index + 1]) inputs[index + 1].focus();
      });
      input.addEventListener('keydown', (event) => { if (event.key === 'Backspace' && !input.value && inputs[index - 1]) inputs[index - 1].focus(); });
      input.addEventListener('paste', (event) => {
        event.preventDefault();
        [...event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)].forEach((value, i) => { inputs[i].value = value; });
        inputs[Math.min(5, event.clipboardData.getData('text').length - 1)]?.focus();
      });
    });
    const verify = () => {
      const code = inputs.map((input) => input.value).join('');
      setPhase(root, code === '204826' ? 'success' : 'error', code === '204826' ? 'Код подтверждён' : 'Код не совпал');
      hint.textContent = code === '204826' ? 'Готово — доступ подтверждён.' : 'Для демонстрации используйте 204826.';
    };
    button.addEventListener('click', verify);
    const run = () => {
      inputs.forEach((input) => { input.value = ''; });
      setPhase(root, 'typing');
      '204826'.split('').forEach((value, index) => later(() => { inputs[index].value = value; updateEyes(index); if (index === 5) verify(); }, reduce ? 20 * index : 170 * index));
    };
    if (freezeTime !== null) { const values = freezeTime >= 3 ? '204826' : freezeTime >= 1 ? '204' : ''; [...values].forEach((value, i) => { inputs[i].value = value; }); if (freezeTime >= 3) verify(); else updateEyes(values.length); }
    else later(run, 450);
    return run;
  }

  function setupPaymentV3(root) {
    const numberInput = root.querySelector('[data-card3-input]');
    const number = root.querySelector('[data-number]');
    const holderInput = root.querySelector('[data-holder-input]');
    const holder = root.querySelector('[data-holder]');
    const cvc = root.querySelector('[data-cvc]');
    const cvcDisplay = root.querySelector('[data-cvc-display]');
    const action = root.querySelector('[data-action]');
    const sync = () => {
      number.textContent = numberInput.value.replace(/[^\d ]/g, '').slice(0, 19) || '•••• •••• •••• ••••';
      holder.textContent = holderInput.value.toUpperCase().slice(0, 24) || 'ВАШЕ ИМЯ';
      cvcDisplay.textContent = cvc.value.replace(/\D/g, '').slice(0, 4) || '•••';
    };
    [numberInput, holderInput, cvc].forEach((input) => input.addEventListener('input', sync));
    cvc.addEventListener('focus', () => setPhase(root, 'back', 'Показана обратная сторона карты'));
    cvc.addEventListener('blur', () => setPhase(root, 'front', 'Показана лицевая сторона карты'));
    action.addEventListener('click', () => { setPhase(root, 'success', 'Демо-платёж подтверждён'); later(() => setPhase(root, 'front'), reduce ? 180 : 900); });
    sync();
    if (freezeTime !== null && freezeTime >= 3) setPhase(root, 'success'); else if (freezeTime !== null && freezeTime >= 1) setPhase(root, 'back');
    else later(() => { setPhase(root, 'back', 'Проверьте CVC на обратной стороне'); later(() => setPhase(root, 'front'), 1300); }, 500);
    return () => { setPhase(root, root.dataset.phase === 'back' ? 'front' : 'back'); };
  }

  function setupCloud(root) {
    const forms = [...root.querySelectorAll('[data-cloud-form]')];
    const copy = root.querySelector('[data-cloud-copy]');
    let mode = 'signin';
    const setMode = (next) => {
      mode = next;
      root.dataset.mode = mode;
      forms.forEach((form) => setInert(form, form.dataset.cloudForm !== mode));
      copy.textContent = mode === 'signin' ? 'С возвращением!' : 'Создадим пространство';
      announce(mode === 'signin' ? 'Открыт вход' : 'Открыта регистрация');
    };
    root.querySelectorAll('[data-switch]').forEach((button) => button.addEventListener('click', () => setMode(button.dataset.switch)));
    setMode(freezeTime !== null && freezeTime >= 1 ? 'signup' : 'signin');
    if (freezeTime === null) later(() => setMode('signup'), 550);
    return () => setMode(mode === 'signin' ? 'signup' : 'signin');
  }

  function setupAnimatedCart(root) {
    const add = root.querySelector('[data-add]');
    const token = root.querySelector('.cart-fly-token');
    const item = root.querySelector('[data-cart-item]');
    const empty = root.querySelector('[data-empty]');
    const count = root.querySelector('[data-cart-count]');
    const qty = root.querySelector('[data-qty-value]');
    const total = root.querySelector('[data-total]');
    const checkout = root.querySelector('[data-checkout]');
    let amount = 0;
    const render = () => {
      item.hidden = amount === 0; empty.hidden = amount !== 0; checkout.disabled = amount === 0;
      qty.textContent = String(Math.max(1, amount)); count.textContent = `${amount} ${amount === 1 ? 'товар' : 'товара'}`; total.textContent = `${(amount * 1490).toLocaleString('ru-RU')} ₽`;
    };
    const addItem = () => {
      const from = root.querySelector('.pass-art-v9').getBoundingClientRect();
      const to = root.querySelector('.cart-v9').getBoundingClientRect();
      token.style.left = `${from.left + from.width / 2 - 26}px`; token.style.top = `${from.top + from.height / 2 - 26}px`; token.style.opacity = '1';
      const animation = safeAnimate(token, [{ transform: 'translate3d(0,0,0) scale(1)', opacity: 1 }, { transform: `translate3d(${(to.left - from.left) * .55}px,-80px,0) scale(.75)`, opacity: 1, offset: .48 }, { transform: `translate3d(${to.left + to.width / 2 - from.left - from.width / 2}px,${to.top + 70 - from.top - from.height / 2}px,0) scale(.2)`, opacity: 0 }], { duration: 760 });
      const finish = () => { token.style.opacity = '0'; amount += 1; root.dataset.phase = 'filled'; render(); safeAnimate(item, [{ transform: 'translate3d(0,12px,0)', opacity: 0 }, { transform: 'translate3d(0,0,0)', opacity: 1 }], { duration: 320 }); announce('Товар добавлен в корзину'); };
      if (animation) animation.finished.then(finish).catch(finish); else finish();
    };
    add.addEventListener('click', addItem);
    root.querySelectorAll('[data-qty]').forEach((button) => button.addEventListener('click', () => { amount = Math.max(0, amount + Number(button.dataset.qty)); render(); }));
    if (freezeTime !== null && freezeTime >= 1) { amount = freezeTime >= 3 ? 2 : 1; root.dataset.phase = 'filled'; render(); }
    else if (freezeTime === null) later(addItem, 600);
    return addItem;
  }

  function setupIcons(root) {
    const buttons = [...root.querySelectorAll('[data-icon]')];
    let index = -1;
    const activate = (next) => {
      index = (next + buttons.length) % buttons.length;
      buttons.forEach((button, i) => { if (i === index) button.dataset.active = ''; else delete button.dataset.active; });
      announce(`Активна иконка «${buttons[index].textContent.trim()}»`);
    };
    buttons.forEach((button, i) => button.addEventListener('click', () => activate(i)));
    if (freezeTime !== null) activate(freezeTime >= 3 ? 3 : freezeTime >= 1 ? 1 : 0);
    else buttons.forEach((_, i) => later(() => activate(i), 500 + i * 620));
    return () => activate(index + 1);
  }

  function setupUpload(root) {
    const input = root.querySelector('[data-file]');
    const list = root.querySelector('[data-files]');
    const state = root.querySelector('[data-upload-state]');
    const simulate = root.querySelector('[data-simulate]');
    const renderFiles = (names) => {
      list.replaceChildren(...names.slice(0, 3).map((name) => {
        const li = document.createElement('li'); const text = document.createElement('span'); const mark = document.createElement('b');
        text.textContent = name; mark.textContent = 'в очереди'; li.append(text, mark); return li;
      }));
    };
    const run = (names = ['brand-guide.pdf', 'hero-video.mp4']) => {
      clearTimers(); renderFiles(names); setPhase(root, 'uploading', 'Файлы загружаются локально'); state.textContent = 'Загрузка · 74%'; simulate.disabled = true;
      later(() => { setPhase(root, 'complete', 'Загрузка завершена'); state.textContent = 'Готово · 100%'; simulate.disabled = false; list.querySelectorAll('b').forEach((mark) => { mark.textContent = 'готово'; }); }, reduce ? 250 : 1800);
    };
    input.addEventListener('change', () => run([...input.files].map((file) => file.name)));
    simulate.addEventListener('click', () => run());
    if (freezeTime !== null) { renderFiles(['brand-guide.pdf', 'hero-video.mp4']); setPhase(root, freezeTime >= 3 ? 'complete' : freezeTime >= 1 ? 'uploading' : 'idle'); state.textContent = freezeTime >= 3 ? 'Готово · 100%' : freezeTime >= 1 ? 'Загрузка · 74%' : 'Ожидание файлов'; }
    else later(() => run(), 500);
    return () => run();
  }

  function setupFlyCart(root) {
    const target = root.querySelector('.fly-target-v9');
    const token = root.querySelector('.flying-product-v9');
    const count = root.querySelector('[data-fly-count]');
    const message = root.querySelector('[data-fly-message]');
    let amount = 0;
    const fly = (button = root.querySelector('[data-fly-add]')) => {
      const product = button.closest('article').querySelector('.can-v9');
      const from = product.getBoundingClientRect(); const to = target.getBoundingClientRect();
      token.style.left = `${from.left + from.width / 2 - 28}px`; token.style.top = `${from.top + from.height / 2 - 38}px`; token.style.background = getComputedStyle(product).backgroundColor; token.style.opacity = '1';
      const dx = to.left + to.width / 2 - (from.left + from.width / 2); const dy = to.top + to.height / 2 - (from.top + from.height / 2);
      const animation = safeAnimate(token, [{ transform: 'translate3d(0,0,0) rotate(0) scale(1)', opacity: 1 }, { transform: `translate3d(${dx * .55}px,${dy * .45 - 90}px,0) rotate(180deg) scale(.7)`, opacity: 1, offset: .5 }, { transform: `translate3d(${dx}px,${dy}px,0) rotate(360deg) scale(.15)`, opacity: 0 }], { duration: 850 });
      const finish = () => { token.style.opacity = '0'; amount += 1; root.dataset.phase = 'added'; count.textContent = String(amount); message.textContent = `${amount} ${amount === 1 ? 'товар добавлен' : 'товара добавлено'}`; safeAnimate(target, [{ transform: 'scale(1)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 360 }); announce('Товар прилетел в корзину'); };
      if (animation) animation.finished.then(finish).catch(finish); else finish();
    };
    root.querySelectorAll('[data-fly-add]').forEach((button) => button.addEventListener('click', () => fly(button)));
    if (freezeTime !== null && freezeTime >= 1) { amount = freezeTime >= 3 ? 2 : 1; root.dataset.phase = 'added'; count.textContent = String(amount); message.textContent = `${amount} товар добавлен`; }
    else if (freezeTime === null) later(() => fly(), 600);
    return () => fly();
  }

  const setupByScene = {
    'light-tabs': setupLightTabs, 'order-confirm': setupOrder, 'auth-blade': setupAuthBlade,
    'payment-authorize': setupPaymentAuthorize, 'panda-light': setupPanda, 'kinetic-delete': setupDelete,
    'creative-orbit': setupOrbit, 'card-payment': setupCardPayment, 'lamp-auth': setupLampAuth,
    'login-v5': setupLoginV5, 'card-receipt': setupReceipt, 'mascot-otp': setupOtp,
    'payment-v3': setupPaymentV3, 'cloud-auth': setupCloud, 'animated-cart': setupAnimatedCart,
    'svg-hover': setupIcons, 'file-upload': setupUpload, 'fly-cart': setupFlyCart
  };

  function updateUrl(scene) {
    const next = new URL(location.href);
    next.searchParams.set('scene', scene);
    if (reduce) next.searchParams.set('reduce', '1'); else next.searchParams.delete('reduce');
    history.replaceState(null, '', next);
  }

  function mount(scene, options = {}) {
    if (!sceneOrder.includes(scene)) return;
    clearTimers(); activeCleanup();
    currentId = scene;
    const template = document.getElementById(`scene-${scene}`);
    if (!template) return;
    progress.classList.remove('is-loading'); void progress.offsetWidth; progress.classList.add('is-loading');
    stage.replaceChildren(template.content.cloneNode(true));
    const [kicker, title, description] = sceneMeta[scene];
    document.querySelector('[data-scene-kicker]').textContent = kicker;
    document.querySelector('[data-scene-title]').textContent = title;
    document.querySelector('[data-scene-description]').textContent = description;
    navButtons.forEach((button) => button.setAttribute('aria-current', String(button.dataset.scene === scene)));
    announce('Сцена готова');
    const root = stage.firstElementChild;
    activeRun = setupByScene[scene](root) || (() => {});
    activeCleanup = () => { clearTimers(); root.getAnimations({ subtree: true }).forEach((animation) => animation.cancel()); };
    if (!options.replay) updateUrl(scene);
    window.__motionScene = scene;
  }

  navButtons.forEach((button) => button.addEventListener('click', () => mount(button.dataset.scene)));
  document.querySelector('[data-replay]').addEventListener('click', () => mount(currentId, { replay: true }));
  reduceButton.addEventListener('click', () => { reduce = !reduce; updateReduce(); mount(currentId, { replay: true }); updateUrl(currentId); });
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase('ru');
    navButtons.forEach((button) => { button.hidden = query && !button.textContent.toLocaleLowerCase('ru').includes(query); });
  });
  document.addEventListener('keydown', (event) => { if (event.key === '/' && document.activeElement !== search) { event.preventDefault(); search.focus(); } });
  mediaReduce.addEventListener('change', (event) => { if (!params.has('reduce')) { reduce = event.matches; updateReduce(); mount(currentId, { replay: true }); } });

  updateReduce();
  mount(currentId);
  window.__ready = true;
  window.__replayMotion = () => activeRun();
})();
