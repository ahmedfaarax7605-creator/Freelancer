# TradeCode Academy — Online Courses / E-Learning Platform

A modern, premium **black/dark multi-page e-learning website** built with plain HTML, CSS and JavaScript. TradeCode Academy offers **27 project-based courses across 10 categories** — web development, programming, data science, databases, DevOps, UI/UX, cybersecurity, AI & machine learning, mobile development and cloud computing.

This project was rebuilt from the original single-page TradeCode Academy site into a full multi-page platform, and it continues the Git & GitHub Capstone workflow (feature branches, pull requests, issues, code review and CI).

## Live demo

🚀 **View the deployed site:** https://ahmedfaarax7605-creator.github.io/Freelancer/

> Sample/demo content only — all courses, instructors, reviews and statistics are realistic placeholder data. No backend is required.

## Features

- 🖤 Premium dark theme with subtle gradients, glow effects and smooth hover animations
- 📄 **8 distinct pages**, each with its own purpose and layout
- 🔍 Course catalog with **live category filtering, search and sorting**
- 📚 Course details pages with expandable curriculum accordion, outcomes, requirements, instructor bio and student reviews
- 👩‍🏫 Instructor directory with specialization filters and profile modals
- 💳 Pricing page with a **monthly/yearly billing toggle** and feature comparison table
- 📊 Student dashboard with progress bars, weekly activity, certificates and recent activity
- ✉️ Contact page with a validated form and FAQ accordion
- 🧭 Consistent navigation with the current page highlighted
- 📱 Fully responsive — desktop, laptop, tablet and mobile (hamburger menu included)
- ☀️ Optional light theme toggle (dark is the default)

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Platform overview — hero, categories, featured & popular courses, benefits, CTA |
| Courses | `pages/courses.html` | Full course catalog with filter, search and sort |
| Course Details | `pages/course-details.html` | In-depth course info, curriculum, instructor and reviews |
| Instructors | `pages/instructors.html` | Instructor directory with profiles |
| About | `pages/about.html` | Mission, vision, story, methodology and statistics |
| Pricing | `pages/pricing.html` | Free / Pro / Premium plans with billing toggle |
| Dashboard | `pages/dashboard.html` | Student learning progress and activity (frontend demo) |
| Contact | `pages/contact.html` | Contact form, support info and FAQ |

## Technologies

- **HTML5** — semantic, accessible multi-page markup
- **CSS3** — custom properties (design tokens), CSS Grid, Flexbox, responsive media queries, animations
- **JavaScript (ES6+)** — data-driven rendering, DOM interactions, no frameworks or build tools
- **SVG** — custom course cover art and favicon
- **Git & GitHub** — feature branching, pull requests, issues, code review, GitHub Actions

## Project structure

```text
PROJECT/
├── index.html                  # Home page
├── pages/                      # Inner pages
│   ├── courses.html
│   ├── course-details.html
│   ├── instructors.html
│   ├── about.html
│   ├── pricing.html
│   ├── dashboard.html
│   └── contact.html
├── css/
│   ├── style.css               # Shared design system (tokens, nav, cards, buttons, footer)
│   ├── home.css
│   ├── courses.css
│   ├── course-details.css
│   ├── instructors.css
│   ├── about.css
│   ├── pricing.css
│   ├── dashboard.css
│   └── contact.css
├── js/
│   ├── courses.js              # Shared course & instructor data + render helpers
│   ├── main.js                 # Shared: menu, theme, toast, auth modal
│   ├── navigation.js           # Active nav highlighting
│   ├── home.js
│   ├── catalog.js              # Courses page: filter/search/sort
│   ├── course-details.js
│   ├── instructors.js
│   ├── about.js
│   ├── pricing.js
│   ├── dashboard.js
│   └── contact.js
├── assets/
│   └── images/                 # SVG course covers + favicon
├── scripts/
│   └── check_links.py          # CI link checker
├── .github/workflows/check.yml # GitHub Actions CI
├── README.md
└── .gitignore
```

## How to run locally

No build step or server is required. Prefer to just browse? Use the [live demo](https://ahmedfaarax7605-creator.github.io/Freelancer/).

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmedfaarax7605-creator/Freelancer.git
   cd Freelancer
   ```

2. Open `index.html` in any modern browser (double-click, or drag it into a browser window).

   For the best experience you can also serve it locally:

   ```bash
   # with Python
   python -m http.server 8000
   # or with Node
   npx serve .
   ```

   Then visit `http://localhost:8000`.

## JavaScript features

- Mobile hamburger menu (shared `main.js`)
- Current page highlighted in the navigation (`navigation.js`)
- Course catalog: category filtering, live search and sorting (`catalog.js`)
- Course details: dynamic content from shared data, curriculum accordion, review posting demo, related courses (`course-details.js`)
- Instructor directory filtering + profile modal (`instructors.js`)
- Pricing monthly/yearly billing toggle (`pricing.js`)
- Dashboard: time-based greeting, animated progress bars and weekly activity (`dashboard.js`)
- Contact form validation + FAQ accordion (`contact.js`)
- About page animated statistics (`about.js`)
- Toast notifications, auth modal and optional light theme (`main.js`)

## Responsive design

- Fluid grids: course grids collapse 4 → 2 → 1 columns
- Sticky navbar becomes a hamburger menu on tablet/mobile
- Pricing plans stack on smaller screens
- Dashboard layout collapses to a single column
- Forms and tables remain usable on small screens
- `prefers-reduced-motion` support for accessibility

## CI / Capstone workflow

The repository follows the Git & GitHub Capstone workflow:

- Feature branches merged via pull requests (`main` is protected from direct feature pushes)
- Issues tracked on GitHub, with PRs referencing `Fixes #<issue>`
- Code review before merge
- GitHub Actions (`check.yml`) verifies required files and that every internal link resolves — the run must stay green

Run the checks locally:

```bash
python3 scripts/check_links.py   # verifies all internal links & assets
```

## Future improvements

- Connect the auth modal, contact form and newsletter to a real backend/email service
- Add a real lesson player with video streaming and subtitles
- Persist dashboard progress with localStorage or a database
- Add a search index and pagination for the catalog
- Add quizzes with scoring and certificate generation
- Add user accounts, payment processing and order history
- Migrate to a framework (e.g. React/Vue) with a component-based design system
