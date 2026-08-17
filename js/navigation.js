/* ============================================================
   TradeCode Academy — navigation highlighting
   Marks the current page's link as active in the shared navbar.
   Each page declares its own page id via <body data-page="...">.
   ============================================================ */

(function () {
  'use strict';

  const current = document.body.dataset.page;
  if (!current) return;

  document.querySelectorAll('.nav-links a[data-nav]').forEach(link => {
    if (link.dataset.nav === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  /* Keep the scroll position on browser back/forward navigation */
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
  }
})();
