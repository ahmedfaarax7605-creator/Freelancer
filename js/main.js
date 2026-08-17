/* ============================================================
   TradeCode Academy — shared site-wide interactions
   Loaded on every page.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Toast notifications ---------- */
  let toastEl = document.getElementById('toast');
  let toastTimer;

  window.showToast = function (message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'toast';
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3000);
  };

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
    }));
  }

  /* ---------- Theme toggle (dark default, light optional) ---------- */
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    const saved = localStorage.getItem('tradecode-theme');
    if (saved === 'light') document.body.classList.add('light');
    const syncIcon = () => {
      themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
    };
    syncIcon();
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      localStorage.setItem('tradecode-theme', document.body.classList.contains('light') ? 'light' : 'dark');
      syncIcon();
    });
  }

  /* ---------- Auth modal (demo UI) ---------- */
  const modal = document.getElementById('modal');
  const authForm = document.getElementById('authForm');

  window.openAuthModal = function (mode) {
    if (!modal) return;
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const nameField = document.getElementById('nameField');
    const authSubmit = document.getElementById('authSubmit');
    const login = mode === 'login';
    modalTitle.textContent = login ? 'Welcome back' : 'Create your account';
    modalText.textContent = login
      ? 'Log in to continue your learning journey.'
      : 'Start your learning journey today.';
    nameField.style.display = login ? 'none' : 'block';
    nameField.required = !login;
    authSubmit.textContent = login ? 'Log In' : 'Create Account';
    modal.classList.add('show');
  };

  if (modal) {
    document.querySelectorAll('[data-modal]').forEach(btn => {
      btn.addEventListener('click', () => openAuthModal(btn.dataset.modal));
    });
    modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });
  }
  if (authForm) {
    authForm.addEventListener('submit', e => {
      e.preventDefault();
      modal.classList.remove('show');
      showToast('Demo account submitted successfully!');
      e.target.reset();
    });
  }

  /* ---------- Newsletter forms ---------- */
  document.querySelectorAll('.news-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      showToast("Thanks! You're on the newsletter list.");
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('.js-year').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
})();
