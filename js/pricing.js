/* ============================================================
   TradeCode Academy — pricing page
   Monthly / yearly billing toggle.
   ============================================================ */
(function () {
  'use strict';

  const toggle = document.getElementById('billingToggle');
  if (!toggle) return;

  const monthlyLabel = document.getElementById('monthlyLabel');
  const yearlyLabel = document.getElementById('yearlyLabel');
  let yearly = false;

  function update() {
    document.querySelectorAll('.plan-price b').forEach(el => {
      const value = yearly ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = '$' + value;
    });
    document.querySelectorAll('.plan-price span').forEach(el => {
      el.textContent = yearly ? 'per month, billed yearly' : 'per month, billed monthly';
    });
    monthlyLabel.classList.toggle('active', !yearly);
    yearlyLabel.classList.toggle('active', yearly);
    toggle.setAttribute('aria-checked', String(yearly));
  }

  toggle.addEventListener('click', () => {
    yearly = !yearly;
    update();
  });

  update();
})();
