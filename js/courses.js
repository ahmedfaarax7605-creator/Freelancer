/* ============================================================
   TradeCode Academy — Course & instructor data (shared)
   Used by index.html, courses.html and course-details.html
   ============================================================ */

const CATEGORIES = [
  'Web Development',
  'Programming',
  'Data Science',
  'Database',
  'DevOps',
  'UI/UX',
  'Cybersecurity'
];

const INSTRUCTORS = [
  {
    id: 'amira-hassan',
    name: 'Amira Hassan',
    role: 'Senior Full-Stack Engineer',
    specialization: 'Web Development',
    initials: 'AH',
    gradient: 'web',
    bio: '8+ years building production web applications. Amira has led frontend teams at two startups and loves turning complex concepts into clear, project-based lessons.',
    courses: 3,
    students: 12400,
    rating: 4.9
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Software Engineer & Educator',
    specialization: 'Programming',
    initials: 'DC',
    gradient: 'programming',
    bio: 'David teaches programming the way he wishes he had learned it — with tiny steps, real projects and plenty of practice. He has taught 40,000+ students online.',
    courses: 4,
    students: 21800,
    rating: 4.8
  },
  {
    id: 'karim-abdullah',
    name: 'Karim Abdullah',
    role: 'Backend Developer & Automation Specialist',
    specialization: 'Programming',
    initials: 'KA',
    gradient: 'data',
    bio: 'Karim specialises in Python and backend systems. He built internal automation tools for fintech companies and now shares those workflows with students.',
    courses: 2,
    students: 8600,
    rating: 4.9
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Data Scientist',
    specialization: 'Data Science',
    initials: 'SM',
    gradient: 'data',
    bio: 'Sarah works with data every day: cleaning it, analysing it and turning it into decisions. Her courses focus on practical, hands-on machine learning.',
    courses: 3,
    students: 15300,
    rating: 4.8
  },
  {
    id: 'james-carter',
    name: 'James Carter',
    role: 'Database Architect',
    specialization: 'Database',
    initials: 'JC',
    gradient: 'database',
    bio: 'James has designed databases for applications serving millions of users. He believes good data design is the quiet superpower behind every great product.',
    courses: 3,
    students: 9900,
    rating: 4.8
  },
  {
    id: 'lena-novak',
    name: 'Lena Novak',
    role: 'DevOps Engineer',
    specialization: 'DevOps',
    initials: 'LN',
    gradient: 'devops',
    bio: 'Lena automates everything: deployments, infrastructure, pipelines. She teaches DevOps with a focus on tools you will actually use on the job.',
    courses: 2,
    students: 7400,
    rating: 4.8
  },
  {
    id: 'sofia-reyes',
    name: 'Sofia Reyes',
    role: 'Product Designer',
    specialization: 'UI/UX',
    initials: 'SR',
    gradient: 'uiux',
    bio: 'Sofia designs products used by millions. Her courses take students from first user research all the way to polished, developer-ready prototypes.',
    courses: 3,
    students: 11200,
    rating: 4.9
  },
  {
    id: 'omar-farah',
    name: 'Omar Farah',
    role: 'Security Analyst & Penetration Tester',
    specialization: 'Cybersecurity',
    initials: 'OF',
    gradient: 'security',
    bio: 'Omar has tested the security of banks, startups and governments. He teaches ethical hacking with a strict focus on responsible, legal practice.',
    courses: 2,
    students: 8300,
    rating: 4.9
  }
];

const COURSES = [
  {
    id: 'full-stack-web-bootcamp',
    title: 'Full-Stack Web Development Bootcamp',
    category: 'Web Development',
    tagline: 'Build responsive websites and modern full-stack applications from scratch.',
    desc: 'A complete journey from your first HTML tag to deployed full-stack applications. You will build a portfolio of real projects — an interactive landing page, a REST API, a database-backed app and a final full-stack product — while mastering HTML, CSS, JavaScript, Node.js and SQL.',
    instructor: 'amira-hassan',
    rating: 4.9,
    reviewCount: 1240,
    students: 2140,
    duration: '32 hours',
    level: 'Beginner',
    price: 59,
    oldPrice: 89,
    icon: '</>',
    gradient: 'web',
    outcomes: [
      'Build complete, responsive web pages with modern HTML and CSS',
      'Write clean JavaScript and manage application state',
      'Create REST APIs with Node.js and Express',
      'Design and query a relational database with SQL',
      'Connect frontend, backend and database into one product',
      'Deploy a full-stack application to the cloud'
    ],
    requirements: [
      'A computer with internet access — no software to install',
      'Basic computer literacy and curiosity',
      'No prior coding experience needed'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['How the web works', 'Setting up your environment', 'Your first web page', 'How to learn like a developer'] },
      { section: 'Fundamentals', lessons: ['HTML structure and semantics', 'CSS layout with Flexbox and Grid', 'Responsive design principles', 'CSS animations and transitions'] },
      { section: 'Practical Development', lessons: ['JavaScript basics and the DOM', 'Events and interactivity', 'Working with JSON and APIs', 'Local storage and state'] },
      { section: 'Building Projects', lessons: ['Project 1: interactive landing page', 'Project 2: quiz application', 'Project 3: REST API with Express', 'Project 4: database-backed app'] },
      { section: 'Advanced Concepts', lessons: ['Authentication and security basics', 'Frontend frameworks overview', 'Performance and accessibility', 'Testing your application'] },
      { section: 'Final Project', lessons: ['Planning the final project', 'Building the full-stack product', 'Code review and refactoring', 'Deployment and showcase'] }
    ],
    reviews: [
      { name: 'Lina M.', initials: 'LM', rating: 5, date: 'July 2026', text: 'I went from zero coding experience to deploying my own full-stack app. The projects are the best part — you learn by building.' },
      { name: 'Ryan T.', initials: 'RT', rating: 5, date: 'June 2026', text: 'Clear, well-paced and practical. Amira explains everything without jargon. Worth every minute.' },
      { name: 'Grace K.', initials: 'GK', rating: 4, date: 'May 2026', text: 'Great course. The final project is challenging but incredibly rewarding. Highly recommended for beginners.' }
    ]
  },
  {
    id: 'javascript-zero-to-advanced',
    title: 'JavaScript: From Zero to Advanced',
    category: 'Programming',
    tagline: 'Build a strong JavaScript foundation with projects, DOM, APIs and modern syntax.',
    desc: 'JavaScript powers the modern web. This course takes you from the absolute basics — variables and functions — through DOM manipulation, asynchronous code, modern ES2022+ syntax and API integration, all cemented with hands-on projects.',
    instructor: 'david-chen',
    rating: 4.8,
    reviewCount: 980,
    students: 1870,
    duration: '24 hours',
    level: 'Beginner',
    price: 39,
    oldPrice: 59,
    icon: 'JS',
    gradient: 'programming',
    outcomes: [
      'Master variables, data types, functions and control flow',
      'Manipulate the DOM to build interactive pages',
      'Understand arrays, objects and modern ES syntax',
      'Work with asynchronous code, promises and async/await',
      'Fetch and display data from real APIs',
      'Debug JavaScript like a professional'
    ],
    requirements: [
      'A browser and a code editor (free options covered)',
      'Basic HTML knowledge is helpful but not required',
      'No prior JavaScript experience needed'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why JavaScript matters', 'Tools of the trade', 'Your first script', 'Developer console'] },
      { section: 'Fundamentals', lessons: ['Variables and data types', 'Operators and conditionals', 'Loops and iteration', 'Functions deep dive'] },
      { section: 'Practical Development', lessons: ['Arrays and objects', 'The DOM and events', 'Manipulating the page', 'Forms and validation'] },
      { section: 'Building Projects', lessons: ['Project: interactive to-do app', 'Project: shopping cart', 'Project: quiz game', 'Project: weather app'] },
      { section: 'Advanced Concepts', lessons: ['Modern ES syntax', 'Closures and scope', 'Asynchronous JavaScript', 'Fetching data from APIs'] },
      { section: 'Final Project', lessons: ['Planning your app', 'Building with async data', 'Polishing and testing', 'Shipping your project'] }
    ],
    reviews: [
      { name: 'Mohamed A.', initials: 'MA', rating: 5, date: 'July 2026', text: 'The best JavaScript course I have tried. David explains everything clearly and the projects make it stick.' },
      { name: 'Priya S.', initials: 'PS', rating: 5, date: 'June 2026', text: 'Finally understand async code and APIs. The weather app project is a great confidence builder.' },
      { name: 'Tom W.', initials: 'TW', rating: 4, date: 'April 2026', text: 'Solid course. Some lessons move fast, but the exercises and quizzes keep you on track.' }
    ]
  },
  {
    id: 'python-programming-essentials',
    title: 'Python Programming Essentials',
    category: 'Programming',
    tagline: 'Learn Python fundamentals, functions, data structures and practical automation.',
    desc: 'Python is the language of automation, data and AI. Start from scratch and finish able to write clean scripts, manipulate data and automate everyday tasks — with hands-on exercises after every topic.',
    instructor: 'karim-abdullah',
    rating: 4.9,
    reviewCount: 760,
    students: 1240,
    duration: '18 hours',
    level: 'Beginner',
    price: 35,
    oldPrice: 49,
    icon: 'Py',
    gradient: 'programming',
    outcomes: [
      'Write and run your first Python programs',
      'Master variables, conditionals, loops and functions',
      'Work with lists, dictionaries, sets and tuples',
      'Read and write files and handle errors',
      'Automate repetitive tasks with Python',
      'Use libraries to solve real problems'
    ],
    requirements: [
      'A computer (Windows, macOS or Linux)',
      'No programming experience required',
      'Willingness to practice daily'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why Python', 'Installing and running Python', 'Your first script', 'Working in the REPL'] },
      { section: 'Fundamentals', lessons: ['Variables and types', 'Strings and numbers', 'Conditionals', 'Loops'] },
      { section: 'Practical Development', lessons: ['Functions', 'Lists and dictionaries', 'Tuples and sets', 'Error handling'] },
      { section: 'Building Projects', lessons: ['Project: budget tracker', 'Project: file organizer', 'Project: password generator', 'Project: web scraper'] },
      { section: 'Advanced Concepts', lessons: ['Modules and packages', 'Working with files', 'Libraries: requests and pandas', 'Writing clean code'] },
      { section: 'Final Project', lessons: ['Planning an automation script', 'Building it step by step', 'Testing and debugging', 'Sharing your project'] }
    ],
    reviews: [
      { name: 'Hassan Y.', initials: 'HY', rating: 5, date: 'July 2026', text: 'Perfect for true beginners. Karim makes Python feel approachable and fun.' },
      { name: 'Emily R.', initials: 'ER', rating: 5, date: 'May 2026', text: 'The automation projects are gold. I now automate my weekly reports at work.' },
      { name: 'Ahmed K.', initials: 'AK', rating: 4, date: 'April 2026', text: 'Clear, practical and well structured. A great first programming course.' }
    ]
  },
  {
    id: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning Fundamentals',
    category: 'Data Science',
    tagline: 'Understand machine learning concepts and build your first intelligent models.',
    desc: 'Go from raw data to trained models. You will learn how to explore and clean data, build predictive models with scikit-learn, evaluate their performance and present your findings — the complete data science workflow.',
    instructor: 'sarah-mitchell',
    rating: 4.8,
    reviewCount: 690,
    students: 960,
    duration: '30 hours',
    level: 'Intermediate',
    price: 65,
    oldPrice: 99,
    icon: 'Σ',
    gradient: 'data',
    outcomes: [
      'Explore and visualise datasets with pandas and matplotlib',
      'Clean and prepare data for analysis',
      'Understand core machine learning concepts',
      'Train classification and regression models',
      'Evaluate models and avoid overfitting',
      'Communicate insights with clear visualisations'
    ],
    requirements: [
      'Basic Python knowledge (our Python course covers it)',
      'Comfort with high-school level maths',
      'A computer capable of running Jupyter notebooks'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is data science?', 'The data science workflow', 'Setting up Jupyter', 'Meet your first dataset'] },
      { section: 'Fundamentals', lessons: ['NumPy essentials', 'pandas dataframes', 'Data visualisation with matplotlib', 'Exploratory data analysis'] },
      { section: 'Practical Development', lessons: ['Cleaning missing data', 'Feature engineering basics', 'Train/test splits', 'The scikit-learn workflow'] },
      { section: 'Building Projects', lessons: ['Project: sales forecasting', 'Project: customer churn prediction', 'Project: housing price model', 'Project: sentiment analysis'] },
      { section: 'Advanced Concepts', lessons: ['Regression models', 'Classification models', 'Evaluating performance', 'Overfitting and regularisation'] },
      { section: 'Final Project', lessons: ['Choosing a dataset', 'Building a complete pipeline', 'Presenting results', 'Model deployment overview'] }
    ],
    reviews: [
      { name: 'Noor A.', initials: 'NA', rating: 5, date: 'June 2026', text: 'Sarah explains machine learning without the maths intimidation. The projects feel like real work.' },
      { name: 'Kevin L.', initials: 'KL', rating: 4, date: 'May 2026', text: 'Comprehensive and practical. You need basic Python first, but then everything clicks.' },
      { name: 'Fatima Z.', initials: 'FZ', rating: 5, date: 'March 2026', text: 'The churn prediction project taught me more than a semester of theory. Highly recommended.' }
    ]
  },
  {
    id: 'sql-database-design',
    title: 'SQL & Database Design Masterclass',
    category: 'Database',
    tagline: 'Master SQL queries, relational design and data modelling from the ground up.',
    desc: 'Databases are everywhere, and SQL is the language that talks to them. Learn to design clean relational schemas, write powerful queries, optimise performance and integrate databases into your applications.',
    instructor: 'james-carter',
    rating: 4.9,
    reviewCount: 820,
    students: 1510,
    duration: '20 hours',
    level: 'Beginner',
    price: 45,
    oldPrice: 69,
    icon: 'DB',
    gradient: 'database',
    outcomes: [
      'Design normalised relational database schemas',
      'Write SELECT, JOIN, GROUP BY and subquery statements',
      'Insert, update and delete data safely',
      'Model one-to-many and many-to-many relationships',
      'Optimise queries with indexes and explain plans',
      'Connect SQL to real applications'
    ],
    requirements: [
      'Basic computer skills',
      'No prior database experience needed',
      'SQLite and PostgreSQL are free and covered in the course'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why databases matter', 'Relational model overview', 'Installing SQLite and PostgreSQL', 'Your first query'] },
      { section: 'Fundamentals', lessons: ['SELECT and filtering', 'Sorting and limiting', 'Aggregations with GROUP BY', 'String and date functions'] },
      { section: 'Practical Development', lessons: ['JOINs explained', 'Subqueries and CTEs', 'Views', 'Transactions'] },
      { section: 'Building Projects', lessons: ['Project: e-commerce schema', 'Project: library management system', 'Project: analytics dashboard queries', 'Project: blog platform'] },
      { section: 'Advanced Concepts', lessons: ['Database normalisation', 'Indexes and performance', 'Query optimisation', 'Database design patterns'] },
      { section: 'Final Project', lessons: ['Designing from a brief', 'Building the schema', 'Populating and querying', 'Reviewing the design'] }
    ],
    reviews: [
      { name: 'Sara B.', initials: 'SB', rating: 5, date: 'July 2026', text: 'James makes database design click. I finally understand JOINs and normalisation.' },
      { name: 'Peter G.', initials: 'PG', rating: 5, date: 'June 2026', text: 'The projects are realistic and the performance section is genuinely useful at work.' },
      { name: 'Yusuf H.', initials: 'YH', rating: 4, date: 'May 2026', text: 'Excellent pace. The e-commerce schema project is the highlight.' }
    ]
  },
  {
    id: 'postgresql-for-developers',
    title: 'PostgreSQL for Developers',
    category: 'Database',
    tagline: 'Go deeper: advanced queries, JSON, full-text search and production-ready databases.',
    desc: 'PostgreSQL powers some of the world’s biggest applications. This advanced course covers complex queries, JSON documents, full-text search, performance tuning and the patterns developers need to run PostgreSQL in production.',
    instructor: 'james-carter',
    rating: 4.7,
    reviewCount: 410,
    students: 640,
    duration: '16 hours',
    level: 'Intermediate',
    price: 49,
    oldPrice: 75,
    icon: 'PG',
    gradient: 'database',
    outcomes: [
      'Use advanced SQL features like window functions',
      'Work with JSON and JSONB documents',
      'Implement full-text search',
      'Tune queries with indexes and EXPLAIN ANALYZE',
      'Design schemas for concurrent, production workloads',
      'Back up, restore and secure a PostgreSQL database'
    ],
    requirements: [
      'Comfort with basic SQL (our SQL course covers it)',
      'A computer running Linux, macOS or Windows',
      'PostgreSQL 14+ installed (setup guide included)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why PostgreSQL', 'Installing and configuring', 'psql and GUI tools', 'Your first database'] },
      { section: 'Fundamentals', lessons: ['Advanced SELECT', 'Window functions', 'Common table expressions', 'Recursive queries'] },
      { section: 'Practical Development', lessons: ['JSON and JSONB', 'Full-text search', 'Extensions and functions', 'Stored procedures'] },
      { section: 'Building Projects', lessons: ['Project: event analytics', 'Project: search-enabled blog', 'Project: multi-tenant SaaS schema', 'Project: geospatial store locator'] },
      { section: 'Advanced Concepts', lessons: ['EXPLAIN ANALYZE', 'Indexing strategies', 'Concurrency and transactions', 'Partitioning large tables'] },
      { section: 'Final Project', lessons: ['Designing for production', 'Optimising performance', 'Backup and recovery plan', 'Deploying to the cloud'] }
    ],
    reviews: [
      { name: 'Daniel O.', initials: 'DO', rating: 5, date: 'June 2026', text: 'The window functions and performance sections alone are worth the price.' },
      { name: 'Mariam S.', initials: 'MS', rating: 4, date: 'May 2026', text: 'Advanced but very well explained. James is a great teacher.' },
      { name: 'Chris D.', initials: 'CD', rating: 5, date: 'March 2026', text: 'The multi-tenant schema project is exactly what I needed for work.' }
    ]
  },
  {
    id: 'devops-docker-kubernetes',
    title: 'DevOps with Docker & Kubernetes',
    category: 'DevOps',
    tagline: 'Containerise your apps and orchestrate them with Kubernetes in production.',
    desc: 'Learn the two tools that define modern DevOps. Containerise applications with Docker, then take them to production with Kubernetes — deployments, services, scaling, monitoring and the mental models behind it all.',
    instructor: 'lena-novak',
    rating: 4.8,
    reviewCount: 640,
    students: 1020,
    duration: '22 hours',
    level: 'Intermediate',
    price: 55,
    oldPrice: 85,
    icon: '⚙',
    gradient: 'devops',
    outcomes: [
      'Build and optimise Docker images',
      'Run multi-container apps with Docker Compose',
      'Understand Kubernetes architecture and objects',
      'Deploy, scale and update applications on Kubernetes',
      'Manage configuration and secrets safely',
      'Monitor applications in production'
    ],
    requirements: [
      'Comfort with the command line',
      'Basic understanding of web applications',
      'A machine with 8GB RAM (or a cloud sandbox)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is DevOps?', 'The container revolution', 'Installing Docker', 'Your first container'] },
      { section: 'Fundamentals', lessons: ['Docker images and layers', 'Dockerfiles best practices', 'Volumes and networks', 'Docker Compose'] },
      { section: 'Practical Development', lessons: ['Kubernetes architecture', 'Pods and deployments', 'Services and ingress', 'ConfigMaps and secrets'] },
      { section: 'Building Projects', lessons: ['Project: containerised web app', 'Project: multi-service stack', 'Project: Kubernetes cluster', 'Project: rolling deployments'] },
      { section: 'Advanced Concepts', lessons: ['Horizontal scaling', 'Health checks and probes', 'Monitoring with Prometheus', 'CI/CD with containers'] },
      { section: 'Final Project', lessons: ['Designing the architecture', 'Building the stack', 'Hardening for production', 'Documenting the setup'] }
    ],
    reviews: [
      { name: 'Ibrahim N.', initials: 'IN', rating: 5, date: 'July 2026', text: 'Lena demystifies Kubernetes. The hands-on projects build real confidence.' },
      { name: 'Alice P.', initials: 'AP', rating: 4, date: 'June 2026', text: 'Excellent for developers moving into DevOps. Docker section alone is superb.' },
      { name: 'Sam R.', initials: 'SR', rating: 5, date: 'April 2026', text: 'I deployed my first cluster with zero stress. The course structure is perfect.' }
    ]
  },
  {
    id: 'cicd-pipelines-cloud',
    title: 'CI/CD Pipelines & Cloud Deployment',
    category: 'DevOps',
    tagline: 'Automate testing, building and deploying your applications to the cloud.',
    desc: 'Stop deploying manually. Learn to design continuous integration and delivery pipelines that test, build and ship your code automatically — on GitHub Actions and cloud platforms — with every single commit.',
    instructor: 'lena-novak',
    rating: 4.8,
    reviewCount: 390,
    students: 710,
    duration: '14 hours',
    level: 'Intermediate',
    price: 42,
    oldPrice: 62,
    icon: 'CI',
    gradient: 'devops',
    outcomes: [
      'Design effective CI/CD pipelines',
      'Automate tests and builds on every commit',
      'Deploy to the cloud with confidence',
      'Manage environments: dev, staging and production',
      'Use GitHub Actions workflows',
      'Add rollbacks and release strategies'
    ],
    requirements: [
      'Basic Git knowledge',
      'Experience building at least one web application',
      'A GitHub account (free)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why CI/CD', 'The delivery pipeline', 'Git basics refresher', 'Setting up GitHub Actions'] },
      { section: 'Fundamentals', lessons: ['Workflow files', 'Jobs, steps and runners', 'Caching dependencies', 'Environment variables and secrets'] },
      { section: 'Practical Development', lessons: ['Automated testing', 'Building and linting', 'Artifact management', 'Deploying preview environments'] },
      { section: 'Building Projects', lessons: ['Project: CI for a Node.js app', 'Project: Python app pipeline', 'Project: static site deployment', 'Project: container deployment'] },
      { section: 'Advanced Concepts', lessons: ['Environments and approvals', 'Rollbacks and blue-green', 'Pipeline security', 'Monitoring deployments'] },
      { section: 'Final Project', lessons: ['Planning the pipeline', 'Building it end to end', 'Hardening and documentation', 'Going live'] }
    ],
    reviews: [
      { name: 'Omar E.', initials: 'OE', rating: 5, date: 'May 2026', text: 'I automated my entire deployment process in a weekend. Life-changing for side projects.' },
      { name: 'Jenna F.', initials: 'JF', rating: 4, date: 'April 2026', text: 'Clear and practical. The GitHub Actions focus is exactly what I needed.' },
      { name: 'Victor D.', initials: 'VD', rating: 5, date: 'March 2026', text: 'Great balance of theory and hands-on. Rollback strategies were eye-opening.' }
    ]
  },
  {
    id: 'uiux-design-research-prototype',
    title: 'UI/UX Design: From Research to Prototype',
    category: 'UI/UX',
    tagline: 'Learn the full design process — user research, wireframes, UI design and prototypes.',
    desc: 'Great products start with great design thinking. Follow the complete UX process: understand users through research, map their journeys, design interfaces that feel effortless and turn your ideas into interactive prototypes developers can build from.',
    instructor: 'sofia-reyes',
    rating: 4.9,
    reviewCount: 870,
    students: 1380,
    duration: '21 hours',
    level: 'Beginner',
    price: 47,
    oldPrice: 72,
    icon: '◆',
    gradient: 'uiux',
    outcomes: [
      'Apply user research and interview techniques',
      'Build user personas and journey maps',
      'Create wireframes and information architecture',
      'Design clean, accessible UI interfaces',
      'Turn designs into interactive prototypes',
      'Present and defend your design decisions'
    ],
    requirements: [
      'No design experience required',
      'Curiosity about why products feel good',
      'Free design tools are used throughout'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is UX design?', 'The double diamond process', 'Design thinking mindset', 'Tools of the trade'] },
      { section: 'Fundamentals', lessons: ['User research basics', 'Interviews and surveys', 'Personas', 'User journey mapping'] },
      { section: 'Practical Development', lessons: ['Information architecture', 'Wireframing', 'Visual design principles', 'Typography and colour'] },
      { section: 'Building Projects', lessons: ['Project: mobile app UX', 'Project: e-commerce checkout', 'Project: dashboard design', 'Project: design system'] },
      { section: 'Advanced Concepts', lessons: ['Accessibility and inclusive design', 'Usability testing', 'Interaction patterns', 'Design handoff to developers'] },
      { section: 'Final Project', lessons: ['Choosing a brief', 'Research to prototype', 'Usability testing round', 'Portfolio-ready presentation'] }
    ],
    reviews: [
      { name: 'Zainab R.', initials: 'ZR', rating: 5, date: 'June 2026', text: 'Sofia taught me to think like a designer, not just make things look pretty. Amazing course.' },
      { name: 'Luke M.', initials: 'LM', rating: 5, date: 'May 2026', text: 'The research phase changed how I approach every product. The projects are portfolio gold.' },
      { name: 'Hana B.', initials: 'HB', rating: 4, date: 'April 2026', text: 'Thorough and inspiring. I landed a junior design role after finishing this course.' }
    ]
  },
  {
    id: 'figma-product-design',
    title: 'Figma for Product Design',
    category: 'UI/UX',
    tagline: 'Master Figma — components, auto layout, prototypes and design systems.',
    desc: 'Figma is the industry-standard design tool. Learn it the right way: frames, components, auto layout, variants, prototyping and reusable design systems that make you fast and your designs consistent.',
    instructor: 'sofia-reyes',
    rating: 4.7,
    reviewCount: 520,
    students: 890,
    duration: '12 hours',
    level: 'Beginner',
    price: 33,
    oldPrice: 49,
    icon: 'Fg',
    gradient: 'uiux',
    outcomes: [
      'Navigate Figma with confidence',
      'Use frames, constraints and auto layout',
      'Build reusable components and variants',
      'Create interactive prototypes',
      'Organise files with styles and design systems',
      'Collaborate and hand off to developers'
    ],
    requirements: [
      'A free Figma account',
      'Basic computer skills',
      'No prior design experience needed'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Getting started with Figma', 'The interface tour', 'Frames vs shapes', 'Your first design file'] },
      { section: 'Fundamentals', lessons: ['Colour, text and styles', 'Constraints and layout', 'Auto layout basics', 'Components and instances'] },
      { section: 'Practical Development', lessons: ['Variants and properties', 'Boolean operations', 'Icons and vector editing', 'Prototyping interactions'] },
      { section: 'Building Projects', lessons: ['Project: mobile login screen', 'Project: app navigation flow', 'Project: pricing page', 'Project: mini design system'] },
      { section: 'Advanced Concepts', lessons: ['Design systems at scale', 'Team libraries', 'Commenting and collaboration', 'Developer handoff'] },
      { section: 'Final Project', lessons: ['Building a full product UI', 'Systemising your components', 'Prototyping the flow', 'Presenting the work'] }
    ],
    reviews: [
      { name: 'Rania F.', initials: 'RF', rating: 5, date: 'June 2026', text: 'Figma finally makes sense. Auto layout changed my workflow completely.' },
      { name: 'George P.', initials: 'GP', rating: 4, date: 'April 2026', text: 'Short, sharp and practical. Great for developers who need to design too.' },
      { name: 'Aisha M.', initials: 'AM', rating: 5, date: 'March 2026', text: 'The design system project is fantastic. I use those patterns every day now.' }
    ]
  },
  {
    id: 'cybersecurity-ethical-hacking',
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Cybersecurity',
    tagline: 'Learn to think like an attacker — legally — and defend systems like a professional.',
    desc: 'Understand how systems get hacked so you can protect them. Learn reconnaissance, vulnerability scanning, web application attacks, password security and network defence — all in a legal, lab-based environment built for responsible practice.',
    instructor: 'omar-farah',
    rating: 4.9,
    reviewCount: 730,
    students: 1170,
    duration: '28 hours',
    level: 'Intermediate',
    price: 69,
    oldPrice: 99,
    icon: '🛡',
    gradient: 'security',
    outcomes: [
      'Understand the ethical hacking methodology',
      'Perform reconnaissance and OSINT gathering',
      'Scan and enumerate networks and services',
      'Exploit common web vulnerabilities in a lab',
      'Harden systems against real attacks',
      'Write clear security reports'
    ],
    requirements: [
      'Basic networking and Linux familiarity',
      'A machine with 8GB RAM for the practice lab',
      'A commitment to ethical, legal practice only'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Ethics and legality', 'The penetration testing methodology', 'Setting up your lab', 'Linux basics for security'] },
      { section: 'Fundamentals', lessons: ['Networking essentials', 'Reconnaissance and OSINT', 'Scanning with Nmap', 'Enumeration techniques'] },
      { section: 'Practical Development', lessons: ['Web application attacks', 'SQL injection and XSS', 'Password attacks', 'Metasploit essentials'] },
      { section: 'Building Projects', lessons: ['Project: network penetration test', 'Project: web app assessment', 'Project: password audit', 'Project: defence hardening'] },
      { section: 'Advanced Concepts', lessons: ['Privilege escalation', 'Wireless security', 'Security monitoring', 'Incident response'] },
      { section: 'Final Project', lessons: ['Full lab assessment', 'Writing the report', 'Remediation plan', 'Presenting findings'] }
    ],
    reviews: [
      { name: 'Khalid A.', initials: 'KA', rating: 5, date: 'July 2026', text: 'The lab-based approach is superb. Omar is meticulous about ethics, which I really respect.' },
      { name: 'Nadia T.', initials: 'NT', rating: 5, date: 'June 2026', text: 'I went from curious beginner to understanding real attack chains. Worth every penny.' },
      { name: 'Felix W.', initials: 'FW', rating: 4, date: 'May 2026', text: 'Intense but rewarding. The report-writing section prepared me for real assessments.' }
    ]
  },
  {
    id: 'network-security-fundamentals',
    title: 'Network Security Fundamentals',
    category: 'Cybersecurity',
    tagline: 'Understand firewalls, encryption, VPNs and how to secure any network.',
    desc: 'Every security career starts with networks. Learn how data moves across networks, where the weak points are, and how firewalls, encryption, VPNs and monitoring tools protect modern organisations.',
    instructor: 'omar-farah',
    rating: 4.8,
    reviewCount: 460,
    students: 820,
    duration: '17 hours',
    level: 'Beginner',
    price: 44,
    oldPrice: 65,
    icon: '⌁',
    gradient: 'security',
    outcomes: [
      'Explain how networks and protocols work',
      'Identify common network attack vectors',
      'Configure firewall rules and segmentation',
      'Understand encryption, TLS and VPNs',
      'Use network monitoring tools',
      'Apply security baselines to any network'
    ],
    requirements: [
      'Basic computer literacy',
      'No prior security or networking experience',
      'Interest in how the internet works'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why network security', 'How the internet works', 'The OSI model', 'IP, DNS and routing'] },
      { section: 'Fundamentals', lessons: ['TCP and UDP', 'Common protocols', 'Network devices', 'Attack surfaces'] },
      { section: 'Practical Development', lessons: ['Firewall fundamentals', 'Network segmentation', 'Encryption and TLS', 'VPNs explained'] },
      { section: 'Building Projects', lessons: ['Project: home network audit', 'Project: firewall lab', 'Project: traffic analysis', 'Project: secure remote access'] },
      { section: 'Advanced Concepts', lessons: ['Monitoring and logging', 'Intrusion detection', 'Zero trust basics', 'Security policies'] },
      { section: 'Final Project', lessons: ['Designing a secure network', 'Implementing controls', 'Testing the design', 'Documenting policies'] }
    ],
    reviews: [
      { name: 'Yara S.', initials: 'YS', rating: 5, date: 'June 2026', text: 'Clear, beginner-friendly and genuinely interesting. The firewall lab was a highlight.' },
      { name: 'Mark J.', initials: 'MJ', rating: 4, date: 'April 2026', text: 'Great foundation for anyone starting in security. Omar explains protocols without the jargon.' },
      { name: 'Huda Q.', initials: 'HQ', rating: 5, date: 'March 2026', text: 'I finally understand VPNs and TLS. The course is very well structured.' }
    ]
  }
];

/* ---------- Helpers ---------- */

function getCourse(id) {
  return COURSES.find(c => c.id === id);
}

function getInstructor(id) {
  return INSTRUCTORS.find(i => i.id === id);
}

function formatPrice(price) {
  return '$' + price;
}

function formatStudents(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : String(n);
}

function stars(rating) {
  let out = '';
  for (let i = 1; i <= 5; i++) {
    out += i <= Math.round(rating) ? '★' : '☆';
  }
  return out;
}

function coursesByCategory(cat) {
  return cat === 'All' ? COURSES : COURSES.filter(c => c.category === cat);
}

/* Renders a course card — shared by home and courses pages.
   `base` is the path prefix to course-details.html:
     - root pages (index.html): pass 'pages/'
     - pages inside /pages: pass '' (default) */
function renderCourseCard(course, base = '') {
  const instructor = getInstructor(course.instructor);
  const details = base + 'course-details.html?id=' + course.id;
  return `
    <article class="course-card card">
      <a href="${details}" class="course-cover cover-${course.gradient}" aria-label="${course.title}">
        <span class="tag course-cat">${course.category}</span>
        <span class="course-level">${course.level}</span>
      </a>
      <div class="course-body">
        <h3 class="course-title"><a href="${details}">${course.title}</a></h3>
        <p class="course-desc">${course.tagline}</p>
        <div class="course-instructor">
          <span class="avatar avatar-sm av-${instructor.gradient}">${instructor.initials}</span>
          <span>${instructor.name}</span>
        </div>
        <div class="course-meta">
          <div class="course-rating"><span class="rating-stars">${stars(course.rating)}</span><span>${course.rating} <em>(${formatStudents(course.reviewCount)})</em></span></div>
          <div class="course-students">👥 ${formatStudents(course.students)}</div>
        </div>
        <div class="course-foot">
          <div class="course-price"><span class="price-old">${formatPrice(course.oldPrice)}</span> ${formatPrice(course.price)}</div>
          <a class="btn btn-primary btn-sm" href="${details}">View Course</a>
        </div>
      </div>
    </article>`;
}
