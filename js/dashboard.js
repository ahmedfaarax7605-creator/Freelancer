/* ============================================================
   TradeCode Academy — student dashboard (demo UI)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Time-based greeting ---------- */
  const greeting = document.getElementById('greeting');
  if (greeting) {
    const hour = new Date().getHours();
    const part = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    greeting.textContent = `${part}, Ahmed 👋`;
  }

  /* ---------- Continue learning ---------- */
  document.querySelectorAll('.learning-item .resume').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.closest('.learning-item').querySelector('b').textContent;
      showToast(`Resuming "${course}" — picking up where you left off.`);
    });
  });

  /* ---------- Certificates (demo download) ---------- */
  document.querySelectorAll('.cert-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      showToast(`Certificate for "${item.dataset.cert}" is ready to download (demo).`);
    });
  });

  /* ---------- Animate progress bars & weekly activity on scroll ---------- */
  const progressBars = document.querySelectorAll('.progress span');
  const weekBars = document.querySelectorAll('.wbar span');

  function animateBar(el) {
    const w = el.style.width;
    el.style.transition = 'width 1.2s ease';
    el.style.width = '0%';
    // force reflow, then animate to target
    void el.offsetWidth;
    el.style.width = w;
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('progress')) {
            const span = entry.target.querySelector('span');
            if (span) animateBar(span);
          } else {
            animateBar(entry.target);
          }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    progressBars.forEach(el => io.observe(el.closest('.progress')));
    weekBars.forEach(el => io.observe(el));
  }
})();
