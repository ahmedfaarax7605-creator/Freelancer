/* ============================================================
   TradeCode Academy — courses catalog page
   Filtering, search and sorting.
   ============================================================ */
(function () {
  'use strict';

  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const filters = Array.from(document.querySelectorAll('.filter'));
  const searchInput = document.getElementById('courseSearch');
  const sortSelect = document.getElementById('sortSelect');
  const countEl = document.getElementById('catalogCount');
  const emptyEl = document.getElementById('emptyState');
  const clearAllBtn = document.getElementById('clearAll');

  let activeCategory = 'All';
  let query = '';
  let sort = 'popular';

  function applyFilters() {
    const q = query.toLowerCase();
    const list = coursesByCategory(activeCategory)
      .filter(c => {
        if (!q) return true;
        const haystack = (c.title + ' ' + c.category + ' ' + c.tagline + ' ' + getInstructor(c.instructor).name).toLowerCase();
        return haystack.includes(q);
      })
      .sort((a, b) => {
        if (sort === 'rating') return b.rating - a.rating;
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        return b.students - a.students; // popular
      });

    grid.innerHTML = list.map(c => renderCourseCard(c)).join('');
    countEl.textContent = list.length
      ? `Showing ${list.length} course${list.length > 1 ? 's' : ''}${activeCategory !== 'All' ? ' in ' + activeCategory : ''}`
      : '';

    emptyEl.hidden = list.length > 0;
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      filters.forEach(b => b.classList.toggle('active', b === btn));
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      query = searchInput.value.trim();
      applyFilters();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sort = sortSelect.value;
      applyFilters();
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      activeCategory = 'All';
      query = '';
      sort = 'popular';
      filters.forEach(b => b.classList.toggle('active', b.dataset.filter === 'All'));
      searchInput.value = '';
      sortSelect.value = 'popular';
      applyFilters();
    });
  }

  /* ---------- Read URL params (?category= & ?q=) ---------- */
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('category');
  const qParam = params.get('q');
  if (catParam && CATEGORIES.includes(catParam)) {
    activeCategory = catParam;
    filters.forEach(b => b.classList.toggle('active', b.dataset.filter === catParam));
  }
  if (qParam) {
    query = qParam;
    if (searchInput) searchInput.value = qParam;
  }

  applyFilters();
})();
