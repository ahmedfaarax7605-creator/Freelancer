/* ============================================================
   TradeCode Academy — instructors directory
   ============================================================ */
(function () {
  'use strict';

  const grid = document.getElementById('instructorGrid');
  if (!grid) return;

  /* Map instructor specializations to the filter labels used on the page */
  const FILTER_GROUPS = {
    'Web Development': 'Web Development',
    'Programming': 'Programming',
    'Data Science': 'Data',
    'Database': 'Data',
    'DevOps': 'DevOps',
    'UI/UX': 'Design',
    'Cybersecurity': 'Programming'
  };

  function instructorCourses(instructorId) {
    return COURSES.filter(c => c.instructor === instructorId);
  }

  function renderGrid(filter = 'All') {
    const list = INSTRUCTORS.filter(i => {
      if (filter === 'All') return true;
      return FILTER_GROUPS[i.specialization] === filter;
    });
    grid.innerHTML = list.map(i => `
      <article class="instructor-card card">
        <div class="inst-cover">
          <span class="avatar avatar-lg av-${i.gradient}">${i.initials}</span>
          <span class="tag">${i.specialization}</span>
        </div>
        <div class="inst-body">
          <h3>${i.name}</h3>
          <p class="inst-role">${i.role}</p>
          <p class="inst-bio">${i.bio}</p>
          <div class="inst-meta">
            <div><b>${i.courses}</b><span>courses</span></div>
            <div><b>${formatStudents(i.students)}</b><span>students</span></div>
            <div><b>${i.rating}★</b><span>rating</span></div>
          </div>
          <button class="btn btn-outline btn-block view-profile" data-id="${i.id}">View Profile</button>
        </div>
      </article>`).join('');

    grid.querySelectorAll('.view-profile').forEach(btn => {
      btn.addEventListener('click', () => openProfile(btn.dataset.id));
    });
  }

  function openProfile(id) {
    const instructor = INSTRUCTORS.find(i => i.id === id);
    if (!instructor) return;
    const courses = instructorCourses(id);
    const modalEl = document.getElementById('instructorModal');
    document.getElementById('profileModalContent').innerHTML = `
      <div class="profile-head">
        <span class="avatar avatar-lg av-${instructor.gradient}">${instructor.initials}</span>
        <div>
          <span class="tag">${instructor.specialization}</span>
          <h3>${instructor.name}</h3>
          <p>${instructor.role}</p>
          <div class="profile-stats">
            <span>🎓 <b>${instructor.courses}</b> courses</span>
            <span>👥 <b>${instructor.students.toLocaleString()}</b> students</span>
            <span>⭐ <b>${instructor.rating}</b> rating</span>
          </div>
        </div>
      </div>
      <p class="profile-bio">${instructor.bio}</p>
      ${courses.length ? `
        <h4 class="profile-courses-title">Courses by ${instructor.name.split(' ')[0]}</h4>
        <div class="profile-courses">
          ${courses.map(c => `
            <a class="profile-course" href="course-details.html?id=${c.id}">
              <span class="related-thumb cover-${c.gradient}"></span>
              <div>
                <b>${c.title}</b>
                <small>${c.category} · ${formatPrice(c.price)} · ${c.duration}</small>
              </div>
            </a>`).join('')}
        </div>` : ''}
    `;
    modalEl.classList.add('show');
    modalEl.querySelector('.modal-close').addEventListener('click', () => modalEl.classList.remove('show'));
    modalEl.addEventListener('click', e => { if (e.target === modalEl) modalEl.classList.remove('show'); });
  }

  /* ---------- Filtering ---------- */
  const filterBar = document.getElementById('instFilterBar');
  filterBar.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
      renderGrid(btn.dataset.filter);
    });
  });

  renderGrid();
})();
