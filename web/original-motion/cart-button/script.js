var acpRoot = document.querySelector('.acp-wrap');
if (acpRoot) {
  var acpBtn = acpRoot.querySelector('.acp-btn');
  var acpLive = acpRoot.querySelector('.acp-live');
  var acpRunning = false;
  var acpTimers = [];
  var acpReduce = null;
  try {
    acpReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  } catch (err) {
    acpReduce = null;
  }

  var acpLater = function (fn, ms) {
    acpTimers.push(window.setTimeout(fn, ms));
  };

  var acpClearTimers = function () {
    for (var i = 0; i < acpTimers.length; i++) {
      window.clearTimeout(acpTimers[i]);
    }
    acpTimers = [];
  };

  var acpResetAll = function () {
    acpBtn.classList.remove(
      'is-playing', 's-enter', 's-scan', 's-fold',
      's-ship', 's-done', 's-reset', 'is-rm-done', 'belt-run'
    );
    acpRunning = false;
  };

  if (acpBtn && acpLive) {
    acpBtn.addEventListener('click', function () {
      if (acpRunning) return;
      acpRunning = true;
      acpClearTimers();
      acpLive.textContent = '';

      if (acpReduce && acpReduce.matches) {
        acpBtn.classList.add('is-rm-done');
        acpLive.textContent = 'Добавлено в корзину';
        acpLater(function () { acpResetAll(); }, 1600);
        return;
      }

      /* Beat 1: belt + scanner in, carton rides to the scan point */
      acpBtn.classList.add('is-playing', 's-enter', 'belt-run');
      acpLater(function () { acpBtn.classList.remove('belt-run'); }, 1250);

      /* Beat 2: laser sweep, scan flash, green blip */
      acpLater(function () { acpBtn.classList.add('s-scan'); }, 1280);

      /* Beat 3: flaps fold, tape seals, label pops, cart rolls in */
      acpLater(function () { acpBtn.classList.add('s-fold'); }, 2000);

      /* Beat 4: belt resumes, parcel drops into the cart, bump + badge */
      acpLater(function () { acpBtn.classList.add('s-ship', 'belt-run'); }, 3080);
      acpLater(function () { acpBtn.classList.remove('belt-run'); }, 3530);

      /* Beat 5: confirmation */
      acpLater(function () {
        acpBtn.classList.add('s-done');
        acpLive.textContent = 'Добавлено в корзину';
      }, 4300);

      /* Graceful return to idle, then unlock for replay */
      acpLater(function () { acpBtn.classList.add('s-reset'); }, 5450);
      acpLater(function () { acpResetAll(); }, 5900);
    });
  }
}