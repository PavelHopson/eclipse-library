(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const sidebar = $('#librarySidebar');
  const sectionsOpen = $('#sectionsOpen');
  const sectionsClose = $('#sectionsClose');
  const sidebarScrim = $('#sidebarScrim');
  const navSearch = $('#navSearch');
  const guideDialog = $('#libraryGuideDialog');
  const guideClose = $('#libraryGuideClose');
  let sidebarTrigger = null;
  let guideTrigger = null;
  let guideFocusFrame = 0;

  function setSidebar(open, restoreFocus = true) {
    if (!sidebar || !sectionsOpen || !sidebarScrim) return;
    document.body.classList.toggle('library-nav-open', open);
    sectionsOpen.setAttribute('aria-expanded', String(open));
    sidebar.setAttribute('aria-hidden', String(!open));
    sidebarScrim.hidden = !open;
    if (open) {
      sidebarTrigger = document.activeElement;
      requestAnimationFrame(() => navSearch?.focus());
    } else if (restoreFocus && sidebarTrigger instanceof HTMLElement) {
      sidebarTrigger.focus();
    }
  }

  sectionsOpen?.addEventListener('click', () => setSidebar(true));
  sectionsClose?.addEventListener('click', () => setSidebar(false));
  sidebarScrim?.addEventListener('click', () => setSidebar(false));
  sidebar?.addEventListener('click', (event) => {
    if (event.target.closest('a[href]')) setSidebar(false, false);
  });

  function openGuide(trigger) {
    if (!guideDialog || typeof guideDialog.showModal !== 'function') return;
    guideTrigger = trigger;
    if (!guideDialog.open) guideDialog.showModal();
    cancelAnimationFrame(guideFocusFrame);
    guideFocusFrame = requestAnimationFrame(() => {
      if (guideDialog.open) guideClose?.focus();
    });
  }

  function closeGuide(restoreFocus = true) {
    if (!guideDialog?.open) return;
    cancelAnimationFrame(guideFocusFrame);
    guideDialog.close();
    if (restoreFocus && guideTrigger instanceof HTMLElement) guideTrigger.focus();
  }

  document.querySelectorAll('[data-library-guide-open]').forEach((button) => {
    button.addEventListener('click', () => openGuide(button));
  });
  guideClose?.addEventListener('click', () => closeGuide());
  guideDialog?.addEventListener('click', (event) => {
    if (event.target === guideDialog) closeGuide();
  });
  guideDialog?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeGuide();
  });

  document.querySelectorAll('[data-guide-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.guideAction;
      closeGuide(false);
      window.setTimeout(() => {
        if (action === 'search') {
          const search = $('#heroSearch') || $('#search');
          search?.scrollIntoView({ block: 'center' });
          search?.focus();
          return;
        }
        $('#quickRoutes')?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'center',
        });
        $('#quickRoutes [data-quick-task]')?.focus();
      }, 0);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('library-nav-open')) {
      event.preventDefault();
      setSidebar(false);
    }
  });
})();
