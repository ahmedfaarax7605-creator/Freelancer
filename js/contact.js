/* ============================================================
   TradeCode Academy — contact page
   Form handling (demo) and FAQ accordion.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('cfName');
      const email = document.getElementById('cfEmail');
      const subject = document.getElementById('cfSubject');
      const message = document.getElementById('cfMessage');
      let valid = true;

      [name, email, subject, message].forEach(field => {
        const ok = field.checkValidity();
        field.style.borderColor = ok ? '' : 'var(--danger)';
        if (!ok) valid = false;
      });

      if (!valid) {
        showToast('Please fill in all required fields correctly.');
        return;
      }

      const sender = name.value.trim() || 'there';
      form.reset();
      [name, email, subject, message].forEach(field => { field.style.borderColor = ''; });
      showToast(`Thanks, ${sender}! Your message has been sent (demo).`);
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      item.classList.toggle('open', !open);
      q.setAttribute('aria-expanded', String(!open));
    });
  });
})();
