/* ============================================================
   TradeCode Academy — course details page
   Populates the page from the shared dataset (?id=...).
   ============================================================ */
(function () {
  'use strict';

  const id = new URLSearchParams(window.location.search).get('id');
  const course = getCourse(id);

  if (!course) {
    window.location.replace('courses.html');
    return;
  }

  const instructor = getInstructor(course.instructor);

  /* ---------- Header ---------- */
  document.title = course.title + ' | TradeCode Academy';
  document.getElementById('crumbTitle').textContent = course.title;
  document.getElementById('heroCategory').textContent = course.category;
  document.getElementById('heroLevel').textContent = course.level;
  document.getElementById('heroTitle').textContent = course.title;
  document.getElementById('heroTagline').textContent = course.tagline;
  document.getElementById('heroStars').textContent = stars(course.rating);
  document.getElementById('heroRating').textContent = course.rating;
  document.getElementById('heroReviews').textContent = `(${course.reviewCount.toLocaleString()} reviews)`;
  document.getElementById('heroStudents').textContent = course.students.toLocaleString() + ' students';
  document.getElementById('heroAvatar').textContent = instructor.initials;
  document.getElementById('heroAvatar').classList.add('av-' + instructor.gradient);
  document.getElementById('heroInstructor').textContent = instructor.name;

  /* ---------- Enroll card ---------- */
  document.getElementById('enrollCover').classList.add('cover-' + course.gradient);
  document.getElementById('oldPrice').textContent = formatPrice(course.oldPrice);
  document.getElementById('newPrice').textContent = formatPrice(course.price);
  document.getElementById('includesDuration').textContent = course.duration;
  const lessonCount = course.curriculum.reduce((n, s) => n + s.lessons.length, 0);
  document.getElementById('includesLessons').textContent = lessonCount;

  const enrollBtn = document.getElementById('enrollBtn');
  enrollBtn.addEventListener('click', () => showToast(`"${course.title}" added to your learning list.`));
  document.getElementById('wishlistBtn').addEventListener('click', e => {
    const wishlistBtn = e.currentTarget;
    const saved = wishlistBtn.textContent.includes('✓');
    wishlistBtn.textContent = saved ? '♡ Add to Wishlist' : '✓ Saved to Wishlist';
    showToast(saved ? 'Removed from wishlist.' : 'Course saved to your wishlist.');
  });

  /* ---------- Outcomes ---------- */
  document.getElementById('outcomesList').innerHTML = course.outcomes
    .map(o => `<li><span class="check">✓</span>${o}</li>`)
    .join('');

  /* ---------- Curriculum (accordion) ---------- */
  document.getElementById('curriculumMeta').textContent =
    `${course.curriculum.length} sections · ${lessonCount} lessons`;
  const curriculumEl = document.getElementById('curriculumList');
  curriculumEl.innerHTML = course.curriculum
    .map((s, i) => `
      <div class="curriculum-item ${i === 0 ? 'open' : ''}">
        <button class="curriculum-head" aria-expanded="${i === 0}">
          <span class="curriculum-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="curriculum-name">${s.section}</span>
          <span class="curriculum-count">${s.lessons.length} lessons</span>
          <span class="curriculum-arrow">▾</span>
        </button>
        <div class="curriculum-body">
          <ul>
            ${s.lessons.map((l, li) => `<li><span class="lesson-num">${li + 1}</span>${l}</li>`).join('')}
          </ul>
        </div>
      </div>`)
    .join('');

  curriculumEl.addEventListener('click', e => {
    const head = e.target.closest('.curriculum-head');
    if (!head) return;
    const item = head.closest('.curriculum-item');
    const wasOpen = item.classList.contains('open');
    item.classList.toggle('open', !wasOpen);
    head.setAttribute('aria-expanded', String(!wasOpen));
  });

  /* ---------- Requirements ---------- */
  document.getElementById('requirementsList').innerHTML = course.requirements
    .map(r => `<li><span class="check">✓</span>${r}</li>`)
    .join('');

  /* ---------- Description ---------- */
  document.getElementById('courseDesc').innerHTML =
    `<p>${course.desc}</p>` +
    `<p>By the end of this course you will have a portfolio-ready project, a clear understanding of ${course.category.toLowerCase()} fundamentals, and the confidence to keep building on your own.</p>`;

  /* ---------- Instructor ---------- */
  document.getElementById('instructorAvatar').textContent = instructor.initials;
  document.getElementById('instructorAvatar').classList.add('av-' + instructor.gradient);
  document.getElementById('instructorName').textContent = instructor.name;
  document.getElementById('instructorRole').textContent = instructor.role + ' · ' + instructor.specialization;
  document.getElementById('instructorCourses').textContent = instructor.courses;
  document.getElementById('instructorStudents').textContent = (instructor.students / 1000).toFixed(1) + 'K';
  document.getElementById('instructorRating').textContent = instructor.rating;
  document.getElementById('instructorBio').textContent = instructor.bio;

  /* ---------- Reviews ---------- */
  const reviewsList = document.getElementById('reviewsList');
  function renderReviews(list) {
    reviewsList.innerHTML = list.map(r => `
      <article class="review">
        <span class="avatar avatar-md av-security">${r.initials}</span>
        <div class="review-main">
          <div class="review-top">
            <b>${r.name}</b>
            <span class="rating-stars">${stars(r.rating)}</span>
            <span class="review-date">${r.date}</span>
          </div>
          <p>${r.text}</p>
        </div>
      </article>`).join('');
  }
  renderReviews(course.reviews);
  document.getElementById('reviewAvg').textContent = course.rating;

  /* ---------- Review form (demo) ---------- */
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const rating = Number(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value.trim();
    const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'U';
    renderReviews([
      { name, initials, rating, date: 'August 2026', text },
      ...course.reviews
    ]);
    reviewForm.reset();
    showToast('Thanks! Your review has been posted.');
  });

  /* ---------- Related courses ---------- */
  const related = COURSES
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);
  const relatedEl = document.getElementById('relatedList');
  relatedEl.innerHTML = related.length
    ? related.map(c => `
        <a class="related-item" href="course-details.html?id=${c.id}">
          <span class="related-thumb cover-${c.gradient}"></span>
          <div>
            <b>${c.title}</b>
            <small>${c.category} · ${formatPrice(c.price)}</small>
          </div>
        </a>`).join('')
    : COURSES
        .filter(c => c.id !== course.id)
        .slice(0, 3)
        .map(c => `
          <a class="related-item" href="course-details.html?id=${c.id}">
            <span class="related-thumb cover-${c.gradient}"></span>
            <div>
              <b>${c.title}</b>
              <small>${c.category} · ${formatPrice(c.price)}</small>
            </div>
          </a>`).join('');
})();
