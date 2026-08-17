/* ============================================================
   TradeCode Academy — home page interactions
   ============================================================ */
(function () {
  'use strict';

  const CATEGORY_META = {
    'Web Development': { icon: '🌐', desc: 'HTML, CSS, JavaScript & full-stack' },
    'Programming': { icon: '💻', desc: 'Languages, logic & problem solving' },
    'Data Science': { icon: '📊', desc: 'Analysis, ML & visualisation' },
    'Database': { icon: '🗄️', desc: 'SQL, design & data modelling' },
    'DevOps': { icon: '🚀', desc: 'Containers, pipelines & cloud' },
    'UI/UX': { icon: '🎨', desc: 'Research, design & prototyping' },
    'Cybersecurity': { icon: '🛡️', desc: 'Ethical hacking & defence' },
    'AI & Machine Learning': { icon: '🤖', desc: 'Models, LLMs & generative AI' },
    'Mobile Development': { icon: '📱', desc: 'iOS & Android apps' },
    'Cloud Computing': { icon: '☁️', desc: 'AWS, serverless & infrastructure' }
  };

  /* ---------- Categories ---------- */
  const catGrid = document.getElementById('categoryGrid');
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map(cat => {
      const meta = CATEGORY_META[cat];
      const count = COURSES.filter(c => c.category === cat).length;
      return `
        <a href="pages/courses.html?category=${encodeURIComponent(cat)}" class="category-card card">
          <div class="cat-icon">${meta.icon}</div>
          <h3>${cat}</h3>
          <p>${meta.desc}</p>
          <span class="cat-count">${count} courses</span>
          <span class="cat-link">Explore →</span>
        </a>`;
    }).join('');
  }

  /* ---------- Featured courses ---------- */
  const featuredIds = ['full-stack-web-bootcamp', 'javascript-zero-to-advanced', 'uiux-design-research-prototype', 'cybersecurity-ethical-hacking'];
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = featuredIds
      .map(id => getCourse(id))
      .filter(Boolean)
      .map(c => renderCourseCard(c, 'pages/'))
      .join('');
  }

  /* ---------- Popular courses ---------- */
  const popularIds = ['sql-database-design', 'devops-docker-kubernetes', 'python-programming-essentials', 'data-science-machine-learning'];
  const popularGrid = document.getElementById('popularGrid');
  if (popularGrid) {
    popularGrid.innerHTML = popularIds
      .map(id => getCourse(id))
      .filter(Boolean)
      .map(c => renderCourseCard(c, 'pages/'))
      .join('');
  }

  /* ---------- Hero search → courses catalog ---------- */
  const heroSearch = document.getElementById('heroSearch');
  if (heroSearch) {
    heroSearch.addEventListener('submit', e => {
      e.preventDefault();
      const q = heroSearch.querySelector('input').value.trim();
      window.location.href = 'pages/courses.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    });
  }
})();
