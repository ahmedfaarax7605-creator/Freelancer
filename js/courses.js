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
  'Cybersecurity',
  'AI & Machine Learning',
  'Mobile Development',
  'Cloud Computing'
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
    courses: 2,
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
    courses: 2,
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
    courses: 5,
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
    courses: 3,
    students: 8300,
    rating: 4.9
  },
  {
    id: 'nadia-ali',
    name: 'Nadia Ali',
    role: 'Machine Learning Engineer',
    specialization: 'AI & Machine Learning',
    initials: 'NA',
    gradient: 'ai',
    bio: 'Nadia has shipped machine learning models used by millions of people. She teaches AI with intuition first, maths second — so concepts actually stick.',
    courses: 2,
    students: 6700,
    rating: 4.9
  },
  {
    id: 'marcus-lee',
    name: 'Marcus Lee',
    role: 'Senior Mobile Engineer',
    specialization: 'Mobile Development',
    initials: 'ML',
    gradient: 'mobile',
    bio: 'Marcus has built and shipped mobile apps with millions of downloads on iOS and Android. He teaches cross-platform development with production workflows.',
    courses: 2,
    students: 5800,
    rating: 4.8
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
  },
  {
    id: 'react-modern-frontend',
    title: 'React & Modern Frontend',
    category: 'Web Development',
    tagline: 'Create component-based interfaces with React, state, routing and APIs.',
    desc: 'React is the most in-demand frontend skill on the market. Learn components, hooks, state management and routing by building real, interactive interfaces — then connect them to live APIs and ship a polished product.',
    instructor: 'amira-hassan',
    rating: 4.9,
    reviewCount: 610,
    students: 1430,
    duration: '21 hours',
    level: 'Beginner',
    price: 45,
    oldPrice: 69,
    icon: '⚛',
    gradient: 'web',
    outcomes: [
      'Build reusable components and compose UIs',
      'Master hooks: state, effects and context',
      'Manage application state with confidence',
      'Set up routing for multi-view apps',
      'Fetch and display data from REST APIs',
      'Ship a production-ready React application'
    ],
    requirements: [
      'Solid HTML, CSS and JavaScript basics',
      'Comfort with ES6 syntax (our JS course covers it)',
      'A code editor and a modern browser'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why React', 'Setting up with Vite', 'Your first component', 'JSX in depth'] },
      { section: 'Fundamentals', lessons: ['Props and state', 'Conditional rendering', 'Lists and keys', 'Events in React'] },
      { section: 'Practical Development', lessons: ['useState and useEffect', 'Custom hooks', 'Context API', 'Forms and validation'] },
      { section: 'Building Projects', lessons: ['Project: todo app', 'Project: e-commerce catalog', 'Project: movie explorer', 'Project: dashboard UI'] },
      { section: 'Advanced Concepts', lessons: ['React Router', 'Fetching data with async patterns', 'Performance and memoisation', 'Testing components'] },
      { section: 'Final Project', lessons: ['Planning the product', 'Building with APIs', 'Polishing and testing', 'Deploying to production'] }
    ],
    reviews: [
      { name: 'Hiba N.', initials: 'HN', rating: 5, date: 'July 2026', text: 'React finally makes sense. Amira explains hooks better than anyone I have seen.' },
      { name: 'Omar D.', initials: 'OD', rating: 5, date: 'June 2026', text: 'The movie explorer project is fantastic — you finish with a real portfolio piece.' },
      { name: 'Clara V.', initials: 'CV', rating: 4, date: 'May 2026', text: 'Great pace and very practical. Highly recommended for JS developers.' }
    ]
  },
  {
    id: 'html-css-responsive',
    title: 'HTML, CSS & Responsive Design',
    category: 'Web Development',
    tagline: 'Master the building blocks of the web and craft layouts that work everywhere.',
    desc: 'Every web developer starts here. Learn semantic HTML, modern CSS with Flexbox and Grid, and the responsive techniques that make sites look great on any screen — with real layouts built from scratch.',
    instructor: 'amira-hassan',
    rating: 4.8,
    reviewCount: 540,
    students: 1190,
    duration: '14 hours',
    level: 'Beginner',
    price: 29,
    oldPrice: 45,
    icon: 'CSS',
    gradient: 'web',
    outcomes: [
      'Write semantic, accessible HTML',
      'Style with modern CSS: custom properties, Flexbox, Grid',
      'Build responsive layouts with media queries',
      'Craft landing pages and UI components',
      'Use CSS animations and transitions tastefully',
      'Ship accessible, performant pages'
    ],
    requirements: [
      'A computer with a browser',
      'No prior web experience needed',
      'Curiosity about how websites are built'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['How the web works', 'HTML document structure', 'Your first page', 'Browser developer tools'] },
      { section: 'Fundamentals', lessons: ['Semantic HTML elements', 'Text, links and images', 'Forms and inputs', 'CSS selectors and specificity'] },
      { section: 'Practical Development', lessons: ['The box model', 'Flexbox layouts', 'CSS Grid layouts', 'Custom properties and themes'] },
      { section: 'Building Projects', lessons: ['Project: portfolio page', 'Project: landing page', 'Project: product card grid', 'Project: responsive navbar'] },
      { section: 'Advanced Concepts', lessons: ['Responsive images', 'Media queries', 'Animations and transitions', 'Accessibility basics'] },
      { section: 'Final Project', lessons: ['Designing the page', 'Building responsively', 'Testing across devices', 'Publishing your site'] }
    ],
    reviews: [
      { name: 'Sami K.', initials: 'SK', rating: 5, date: 'June 2026', text: 'Perfect introduction. I built my first real website in a weekend.' },
      { name: 'Leila R.', initials: 'LR', rating: 4, date: 'May 2026', text: 'Clear and hands-on. The responsive sections are especially good.' },
      { name: 'Jack P.', initials: 'JP', rating: 5, date: 'April 2026', text: 'Flexbox and Grid finally clicked. Amazing value for beginners.' }
    ]
  },
  {
    id: 'algorithms-data-structures',
    title: 'Algorithms & Data Structures',
    category: 'Programming',
    tagline: 'Think like an engineer — master the fundamentals behind every interview and system.',
    desc: 'Algorithms are the language of great engineers. Learn arrays, linked lists, trees, graphs, sorting, searching and dynamic programming with visual explanations and hands-on challenges in JavaScript and Python.',
    instructor: 'david-chen',
    rating: 4.8,
    reviewCount: 520,
    students: 980,
    duration: '25 hours',
    level: 'Intermediate',
    price: 49,
    oldPrice: 75,
    icon: 'λ',
    gradient: 'programming',
    outcomes: [
      'Analyse time and space complexity with Big O',
      'Implement core data structures from scratch',
      'Design algorithms for sorting and searching',
      'Solve problems with recursion and dynamic programming',
      'Traverse trees and graphs confidently',
      'Tackle coding-interview problems systematically'
    ],
    requirements: [
      'Working knowledge of any programming language',
      'Comfort with loops, functions and arrays',
      'A willingness to practice regularly'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why algorithms matter', 'Complexity and Big O', 'How to practice', 'Setting up your environment'] },
      { section: 'Fundamentals', lessons: ['Arrays and strings', 'Linked lists', 'Stacks and queues', 'Hash tables'] },
      { section: 'Practical Development', lessons: ['Recursion deep dive', 'Sorting algorithms', 'Binary search', 'Two-pointer patterns'] },
      { section: 'Building Projects', lessons: ['Project: search engine index', 'Project: autocomplete system', 'Project: task scheduler', 'Project: pathfinder'] },
      { section: 'Advanced Concepts', lessons: ['Trees and heaps', 'Graphs and BFS/DFS', 'Dynamic programming', 'Greedy algorithms'] },
      { section: 'Final Project', lessons: ['Mock interview practice', 'Solving problems under time pressure', 'Reviewing trade-offs', 'Building an algorithm cheat sheet'] }
    ],
    reviews: [
      { name: 'Youssef B.', initials: 'YB', rating: 5, date: 'July 2026', text: 'The visual explanations are superb. I finally understand dynamic programming.' },
      { name: 'Mia T.', initials: 'MT', rating: 4, date: 'June 2026', text: 'Intense but incredibly rewarding. Great prep for technical interviews.' },
      { name: 'Ahmed S.', initials: 'AS', rating: 5, date: 'May 2026', text: 'David makes hard topics approachable. Worth every hour.' }
    ]
  },
  {
    id: 'java-programming-essentials',
    title: 'Java Programming Essentials',
    category: 'Programming',
    tagline: 'Learn one of the world’s most widely used languages, from syntax to OOP.',
    desc: 'Java powers enterprise systems, Android apps and backend services worldwide. Start from zero and build a strong foundation in syntax, object-oriented programming, collections and error handling.',
    instructor: 'karim-abdullah',
    rating: 4.7,
    reviewCount: 380,
    students: 760,
    duration: '19 hours',
    level: 'Beginner',
    price: 42,
    oldPrice: 65,
    icon: 'Jv',
    gradient: 'programming',
    outcomes: [
      'Write and run Java programs with confidence',
      'Understand classes, objects and inheritance',
      'Use collections: lists, sets and maps',
      'Handle exceptions and write robust code',
      'Work with files and streams',
      'Build a complete console application'
    ],
    requirements: [
      'Basic computer skills',
      'No programming experience required',
      'A machine with Java 17+ (setup covered)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why Java', 'Installing the JDK', 'Your first program', 'IDEs explained'] },
      { section: 'Fundamentals', lessons: ['Variables and types', 'Operators and conditionals', 'Loops', 'Methods'] },
      { section: 'Practical Development', lessons: ['Classes and objects', 'Inheritance and polymorphism', 'Interfaces', 'Packages'] },
      { section: 'Building Projects', lessons: ['Project: banking system', 'Project: inventory manager', 'Project: contact book', 'Project: quiz engine'] },
      { section: 'Advanced Concepts', lessons: ['Collections framework', 'Exception handling', 'Files and streams', 'Generics'] },
      { section: 'Final Project', lessons: ['Designing the application', 'Building with OOP principles', 'Testing and debugging', 'Polishing and documentation'] }
    ],
    reviews: [
      { name: 'Iman F.', initials: 'IF', rating: 5, date: 'June 2026', text: 'Clear, structured and practical. Java finally feels approachable.' },
      { name: 'Tariq M.', initials: 'TM', rating: 4, date: 'May 2026', text: 'Great for beginners. The banking project teaches real OOP thinking.' },
      { name: 'Elena P.', initials: 'EP', rating: 4, date: 'April 2026', text: 'Solid course with excellent exercises. A bit fast in the collections section.' }
    ]
  },
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis',
    category: 'Data Science',
    tagline: 'Clean, explore and visualise real datasets with pandas and matplotlib.',
    desc: 'Data analysis is the most practical data skill there is. Learn to load messy data, clean it, explore it and tell its story with charts — using the same pandas and matplotlib workflow professionals use daily.',
    instructor: 'sarah-mitchell',
    rating: 4.8,
    reviewCount: 460,
    students: 890,
    duration: '16 hours',
    level: 'Beginner',
    price: 45,
    oldPrice: 69,
    icon: 'Pd',
    gradient: 'data',
    outcomes: [
      'Load data from CSV, Excel and JSON',
      'Clean and transform data with pandas',
      'Filter, group and aggregate datasets',
      'Create publication-ready charts with matplotlib',
      'Answer business questions with data',
      'Export and present your findings'
    ],
    requirements: [
      'Basic Python knowledge (our Python course covers it)',
      'A computer with Python 3.9+ installed',
      'Interest in working with real data'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['The data analysis workflow', 'Jupyter notebooks', 'Installing pandas and matplotlib', 'Meet your first dataset'] },
      { section: 'Fundamentals', lessons: ['pandas Series and DataFrames', 'Reading data files', 'Selecting and filtering', 'Handling missing values'] },
      { section: 'Practical Development', lessons: ['Grouping and aggregation', 'Merging datasets', 'Pivot tables', 'Working with dates'] },
      { section: 'Building Projects', lessons: ['Project: sales analysis', 'Project: customer survey', 'Project: web traffic report', 'Project: movie ratings deep dive'] },
      { section: 'Advanced Concepts', lessons: ['Data visualisation best practices', 'Charts with matplotlib', 'Statistical summaries', 'Storytelling with data'] },
      { section: 'Final Project', lessons: ['Choosing a real dataset', 'Analysis pipeline', 'Building the report', 'Presenting insights'] }
    ],
    reviews: [
      { name: 'Nour H.', initials: 'NH', rating: 5, date: 'June 2026', text: 'I went from raw CSV to a beautiful report in two weeks. Sarah is an excellent teacher.' },
      { name: 'Ben W.', initials: 'BW', rating: 4, date: 'May 2026', text: 'Practical and well-paced. The sales analysis project is great practice.' },
      { name: 'Rasha A.', initials: 'RA', rating: 5, date: 'April 2026', text: 'Exactly the workflow I needed for my job. Highly recommended.' }
    ]
  },
  {
    id: 'mongodb-nosql',
    title: 'MongoDB & NoSQL Databases',
    category: 'Database',
    tagline: 'Design document databases and query them like a pro.',
    desc: 'Not every problem fits a relational table. Learn when NoSQL makes sense, how to model data in MongoDB, write powerful aggregation queries and run MongoDB confidently in production.',
    instructor: 'james-carter',
    rating: 4.8,
    reviewCount: 390,
    students: 720,
    duration: '15 hours',
    level: 'Intermediate',
    price: 44,
    oldPrice: 68,
    icon: 'No',
    gradient: 'database',
    outcomes: [
      'Understand when to choose NoSQL vs SQL',
      'Model document data effectively',
      'Write CRUD operations and complex queries',
      'Use the aggregation pipeline for analytics',
      'Design indexes for performance',
      'Secure and operate a MongoDB deployment'
    ],
    requirements: [
      'Basic database concepts (our SQL course is a great start)',
      'Comfort with the command line',
      'A computer with 4GB RAM or more'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['SQL vs NoSQL', 'Installing MongoDB', 'The document model', 'MongoDB Shell basics'] },
      { section: 'Fundamentals', lessons: ['Inserting documents', 'Querying with filters', 'Updating and deleting', 'Sorting and limiting'] },
      { section: 'Practical Development', lessons: ['Schema design patterns', 'Embedding vs referencing', 'Indexes and performance', 'Transactions in MongoDB'] },
      { section: 'Building Projects', lessons: ['Project: e-commerce catalog', 'Project: social feed', 'Project: analytics pipeline', 'Project: geospatial store locator'] },
      { section: 'Advanced Concepts', lessons: ['Aggregation framework', 'Text search', 'Replication and sharding', 'Backup and security'] },
      { section: 'Final Project', lessons: ['Designing the data model', 'Building queries end to end', 'Optimising performance', 'Documenting the design'] }
    ],
    reviews: [
      { name: 'Adam G.', initials: 'AG', rating: 5, date: 'June 2026', text: 'The aggregation pipeline section alone is worth the course. Superb explanations.' },
      { name: 'Farah Z.', initials: 'FZ', rating: 4, date: 'May 2026', text: 'Great bridge between relational and document thinking. Very practical.' },
      { name: 'Kenji T.', initials: 'KT', rating: 5, date: 'March 2026', text: 'I shipped a MongoDB-backed app right after finishing. Excellent course.' }
    ]
  },
  {
    id: 'linux-bash-devops',
    title: 'Linux & Bash for DevOps',
    category: 'DevOps',
    tagline: 'Command the terminal — the foundation of every modern infrastructure role.',
    desc: 'Linux powers the cloud. Master the command line, file system, permissions, processes, shell scripting and automation — the essential toolkit for DevOps, cloud and backend work.',
    instructor: 'lena-novak',
    rating: 4.8,
    reviewCount: 430,
    students: 840,
    duration: '16 hours',
    level: 'Beginner',
    price: 38,
    oldPrice: 58,
    icon: '⌘',
    gradient: 'devops',
    outcomes: [
      'Navigate the Linux file system with confidence',
      'Manage files, users and permissions',
      'Monitor processes and system resources',
      'Write reusable Bash scripts',
      'Automate tasks with cron and shell tools',
      'Administer a remote Linux server securely'
    ],
    requirements: [
      'Basic computer skills',
      'No Linux experience required',
      'A machine or VM with Linux (guide included)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why Linux matters', 'Setting up your environment', 'The terminal and shell', 'First commands'] },
      { section: 'Fundamentals', lessons: ['File system navigation', 'Working with files', 'Text processing tools', 'Permissions and users'] },
      { section: 'Practical Development', lessons: ['Processes and jobs', 'Environment variables', 'Package management', 'Networking basics'] },
      { section: 'Building Projects', lessons: ['Project: server setup', 'Project: log analysis script', 'Project: backup automation', 'Project: monitoring dashboard'] },
      { section: 'Advanced Concepts', lessons: ['Bash scripting deep dive', 'Cron and scheduling', 'SSH and remote access', 'Security hardening'] },
      { section: 'Final Project', lessons: ['Planning the automation', 'Building the script suite', 'Testing and error handling', 'Documenting your setup'] }
    ],
    reviews: [
      { name: 'Pavel S.', initials: 'PS', rating: 5, date: 'June 2026', text: 'I was afraid of the terminal. Now I automate my whole workflow with scripts.' },
      { name: 'Dina K.', initials: 'DK', rating: 4, date: 'May 2026', text: 'Clear, practical and full of real commands you actually use. Great foundation.' },
      { name: 'Max R.', initials: 'MR', rating: 5, date: 'April 2026', text: 'The backup automation project is exactly the kind of skill employers want.' }
    ]
  },
  {
    id: 'design-systems-advanced-ui',
    title: 'Design Systems & Advanced UI',
    category: 'UI/UX',
    tagline: 'Scale your design work with tokens, components and documentation.',
    desc: 'Great products are built on systems. Learn to create design tokens, reusable component libraries and living documentation that keep design consistent across teams and products — the advanced skills senior designers use daily.',
    instructor: 'sofia-reyes',
    rating: 4.8,
    reviewCount: 410,
    students: 760,
    duration: '17 hours',
    level: 'Intermediate',
    price: 41,
    oldPrice: 62,
    icon: '▣',
    gradient: 'uiux',
    outcomes: [
      'Create and maintain design tokens',
      'Architect reusable component libraries',
      'Define typography, colour and spacing scales',
      'Document components for teams and developers',
      'Govern design consistency across products',
      'Audit and evolve an existing design system'
    ],
    requirements: [
      'Experience with a design tool (Figma or similar)',
      'Basic UI/UX knowledge (our UI/UX course covers it)',
      'Interest in working on product teams'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is a design system?', 'Systems vs style guides', 'The anatomy of a design system', 'Team and tooling setup'] },
      { section: 'Fundamentals', lessons: ['Design tokens', 'Colour systems', 'Typography scales', 'Spacing and layout'] },
      { section: 'Practical Development', lessons: ['Component architecture', 'Variants and states', 'Accessibility baked in', 'Documentation patterns'] },
      { section: 'Building Projects', lessons: ['Project: button library', 'Project: form system', 'Project: data table kit', 'Project: full component library'] },
      { section: 'Advanced Concepts', lessons: ['Versioning and releases', 'Governance and contribution', 'Design tokens in code', 'Auditing existing products'] },
      { section: 'Final Project', lessons: ['Designing the system', 'Building and documenting', 'Testing with developers', 'Presenting the system'] }
    ],
    reviews: [
      { name: 'Vera L.', initials: 'VL', rating: 5, date: 'June 2026', text: 'This changed how I design. Everything is faster and far more consistent now.' },
      { name: 'Omar J.', initials: 'OJ', rating: 4, date: 'May 2026', text: 'Comprehensive and practical. The developer collaboration sections are gold.' },
      { name: 'Sara M.', initials: 'SM', rating: 5, date: 'April 2026', text: 'I built a design system for my company using this course. Worth every minute.' }
    ]
  },
  {
    id: 'web-application-security',
    title: 'Web Application Security',
    category: 'Cybersecurity',
    tagline: 'Find and fix the vulnerabilities that matter in real web apps.',
    desc: 'OWASP Top 10, but hands-on. Learn how web applications get attacked — injection, broken auth, XSS, SSRF and more — and how to defend them, with a legal practice lab at every step.',
    instructor: 'omar-farah',
    rating: 4.9,
    reviewCount: 450,
    students: 870,
    duration: '20 hours',
    level: 'Intermediate',
    price: 52,
    oldPrice: 79,
    icon: 'WEB',
    gradient: 'security',
    outcomes: [
      'Understand the OWASP Top 10 vulnerabilities',
      'Exploit common web flaws in a safe lab',
      'Fix vulnerabilities with secure coding practices',
      'Harden authentication and session management',
      'Use security testing tools effectively',
      'Write a professional security assessment report'
    ],
    requirements: [
      'Basic web development knowledge',
      'Some Linux and terminal familiarity',
      'Commitment to ethical, legal practice only'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['How web apps get hacked', 'Setting up the lab', 'HTTP and the attack surface', 'The OWASP Top 10'] },
      { section: 'Fundamentals', lessons: ['SQL injection', 'Cross-site scripting (XSS)', 'Broken authentication', 'CSRF attacks'] },
      { section: 'Practical Development', lessons: ['SSRF and IDOR', 'File upload attacks', 'Security headers', 'Secure coding practices'] },
      { section: 'Building Projects', lessons: ['Project: vulnerable app assessment', 'Project: auth bypass chain', 'Project: API security test', 'Project: fix and re-test'] },
      { section: 'Advanced Concepts', lessons: ['Session and cookie security', 'Rate limiting and abuse', 'Web application firewalls', 'Security automation'] },
      { section: 'Final Project', lessons: ['Full application assessment', 'Writing the report', 'Remediation plan', 'Presenting findings'] }
    ],
    reviews: [
      { name: 'Jana H.', initials: 'JH', rating: 5, date: 'June 2026', text: 'Hands-on from the first lesson. I found and fixed real bugs in our app immediately.' },
      { name: 'Rami E.', initials: 'RE', rating: 5, date: 'May 2026', text: 'Omar keeps everything ethical and legal, which I really appreciate. Superb course.' },
      { name: 'Tom B.', initials: 'TB', rating: 4, date: 'April 2026', text: 'Intense but practical. The assessment report template is a career asset.' }
    ]
  },
  {
    id: 'ai-machine-learning-basics',
    title: 'AI & Machine Learning Basics',
    category: 'AI & Machine Learning',
    tagline: 'Understand machine learning concepts and build your first intelligent models.',
    desc: 'AI is reshaping every industry. Learn what machine learning really is, how models learn from data, and build your first classifiers and predictors with scikit-learn — intuition first, maths when you need it.',
    instructor: 'nadia-ali',
    rating: 4.9,
    reviewCount: 520,
    students: 1050,
    duration: '22 hours',
    level: 'Beginner',
    price: 55,
    oldPrice: 85,
    icon: '🤖',
    gradient: 'ai',
    outcomes: [
      'Explain core ML concepts in plain language',
      'Prepare data for machine learning',
      'Train classification and regression models',
      'Evaluate models and avoid overfitting',
      'Understand the AI landscape: ML, DL and generative AI',
      'Build a complete ML pipeline from data to model'
    ],
    requirements: [
      'Basic Python knowledge (our Python course covers it)',
      'Comfort with high-school level maths',
      'A computer capable of running notebooks'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is machine learning?', 'AI vs ML vs deep learning', 'How models learn', 'Setting up your environment'] },
      { section: 'Fundamentals', lessons: ['Data and features', 'Training and test splits', 'Bias and variance', 'Evaluation metrics'] },
      { section: 'Practical Development', lessons: ['Linear models', 'Decision trees', 'Random forests', 'K-nearest neighbours'] },
      { section: 'Building Projects', lessons: ['Project: spam detector', 'Project: house price predictor', 'Project: customer classifier', 'Project: image recogniser'] },
      { section: 'Advanced Concepts', lessons: ['Overfitting and regularisation', 'Feature engineering', 'Model tuning', 'The AI landscape today'] },
      { section: 'Final Project', lessons: ['Choosing a problem', 'Building the pipeline', 'Evaluating results', 'Presenting your model'] }
    ],
    reviews: [
      { name: 'Lina W.', initials: 'LW', rating: 5, date: 'July 2026', text: 'The clearest ML introduction I have found. Nadia explains intuition before maths.' },
      { name: 'Omar A.', initials: 'OA', rating: 5, date: 'June 2026', text: 'I built my first working model in week one. Fantastic hands-on course.' },
      { name: 'Sofia G.', initials: 'SG', rating: 4, date: 'May 2026', text: 'Excellent for beginners. The projects make everything concrete.' }
    ]
  },
  {
    id: 'generative-ai-developers',
    title: 'Generative AI for Developers',
    category: 'AI & Machine Learning',
    tagline: 'Build real products with LLMs — prompts, embeddings, agents and guardrails.',
    desc: 'Generative AI is a developer superpower. Learn how large language models work, master prompt engineering, build retrieval-augmented apps with embeddings, and design AI agents that actually help users.',
    instructor: 'nadia-ali',
    rating: 4.9,
    reviewCount: 610,
    students: 1240,
    duration: '18 hours',
    level: 'Intermediate',
    price: 49,
    oldPrice: 75,
    icon: '✦',
    gradient: 'ai',
    outcomes: [
      'Understand how LLMs work under the hood',
      'Engineer prompts for reliable outputs',
      'Build retrieval-augmented generation (RAG) apps',
      'Use embeddings and vector search',
      'Design AI agents with tools and memory',
      'Apply guardrails for safety and cost'
    ],
    requirements: [
      'Solid programming skills (Python preferred)',
      'Basic understanding of APIs',
      'An API key for an LLM provider (free tiers available)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['The generative AI landscape', 'How LLMs work', 'Tokens, context and temperature', 'Setting up API access'] },
      { section: 'Fundamentals', lessons: ['Prompt design patterns', 'Structured outputs', 'Handling long contexts', 'Evaluating model output'] },
      { section: 'Practical Development', lessons: ['Embeddings explained', 'Vector databases', 'Building a RAG pipeline', 'Chunking strategies'] },
      { section: 'Building Projects', lessons: ['Project: chat assistant', 'Project: document QA bot', 'Project: code review copilot', 'Project: AI search engine'] },
      { section: 'Advanced Concepts', lessons: ['AI agents and tools', 'Memory and state', 'Guardrails and safety', 'Cost and latency optimisation'] },
      { section: 'Final Project', lessons: ['Designing the product', 'Building with RAG and agents', 'Testing and hardening', 'Shipping and monitoring'] }
    ],
    reviews: [
      { name: 'Chris M.', initials: 'CM', rating: 5, date: 'July 2026', text: 'RAG finally made sense. I shipped an internal document bot for my team.' },
      { name: 'Hana Y.', initials: 'HY', rating: 5, date: 'June 2026', text: 'Practical, current and deeply useful. The agents section is ahead of most courses.' },
      { name: 'Diego R.', initials: 'DR', rating: 4, date: 'May 2026', text: 'Excellent course. Would love a deeper section on fine-tuning.' }
    ]
  },
  {
    id: 'react-native-mobile-apps',
    title: 'React Native: Build Mobile Apps',
    category: 'Mobile Development',
    tagline: 'Ship real iOS and Android apps with one JavaScript codebase.',
    desc: 'One codebase, two platforms. Learn React Native from setup to store — components, navigation, state, native modules and device features — and build polished apps that feel native on both iOS and Android.',
    instructor: 'marcus-lee',
    rating: 4.8,
    reviewCount: 470,
    students: 920,
    duration: '24 hours',
    level: 'Intermediate',
    price: 54,
    oldPrice: 82,
    icon: '📱',
    gradient: 'mobile',
    outcomes: [
      'Set up a React Native project for both platforms',
      'Build mobile UIs with React components',
      'Manage navigation between screens',
      'Handle state, storage and network data',
      'Use device features: camera, location, push',
      'Test and ship to app stores'
    ],
    requirements: [
      'Solid React and JavaScript knowledge',
      'Comfort with modern ES6+ syntax',
      'A machine with 8GB RAM (Android emulator optional)'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why React Native', 'Setting up the environment', 'Your first screen', 'Running on devices'] },
      { section: 'Fundamentals', lessons: ['Core components', 'Styles and layout', 'Handling input', 'Lists and FlatList'] },
      { section: 'Practical Development', lessons: ['React Navigation', 'State management', 'Async storage', 'Fetching from APIs'] },
      { section: 'Building Projects', lessons: ['Project: weather app', 'Project: habit tracker', 'Project: chat interface', 'Project: shopping app'] },
      { section: 'Advanced Concepts', lessons: ['Device features', 'Push notifications', 'Performance optimisation', 'Testing with Jest'] },
      { section: 'Final Project', lessons: ['Designing the app', 'Building end to end', 'Polishing and testing', 'Preparing for release'] }
    ],
    reviews: [
      { name: 'Aya N.', initials: 'AN', rating: 5, date: 'June 2026', text: 'I shipped my first app to both stores. Marcus covers everything you actually need.' },
      { name: 'Julian F.', initials: 'JF', rating: 4, date: 'May 2026', text: 'Excellent structure. The navigation section is worth the price alone.' },
      { name: 'Khalid M.', initials: 'KM', rating: 5, date: 'April 2026', text: 'Practical and current. Building a real app made everything click.' }
    ]
  },
  {
    id: 'flutter-for-beginners',
    title: 'Flutter for Beginners',
    category: 'Mobile Development',
    tagline: 'Build beautiful cross-platform apps with Dart and Flutter.',
    desc: 'Flutter builds stunning native apps from a single codebase. Start from zero — install Flutter, learn Dart, compose widgets and ship your first app for iOS, Android and the web.',
    instructor: 'marcus-lee',
    rating: 4.7,
    reviewCount: 360,
    students: 700,
    duration: '20 hours',
    level: 'Beginner',
    price: 44,
    oldPrice: 66,
    icon: 'Fl',
    gradient: 'mobile',
    outcomes: [
      'Install Flutter and set up your toolchain',
      'Learn Dart: types, functions and classes',
      'Compose UIs with Flutter widgets',
      'Manage state and navigation',
      'Work with data and APIs',
      'Build and test a complete mobile app'
    ],
    requirements: [
      'Basic programming knowledge',
      'No mobile experience required',
      'A computer with 8GB RAM recommended'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['Why Flutter', 'Installing Flutter', 'Dart basics', 'Your first widget'] },
      { section: 'Fundamentals', lessons: ['Dart types and functions', 'Classes and objects', 'Widgets and layout', 'Handling input'] },
      { section: 'Practical Development', lessons: ['Stateful widgets', 'Navigation and routes', 'Lists and grids', 'Theming and styling'] },
      { section: 'Building Projects', lessons: ['Project: calculator app', 'Project: notes app', 'Project: weather app', 'Project: quiz app'] },
      { section: 'Advanced Concepts', lessons: ['State management', 'Fetching data', 'Local storage', 'Testing widgets'] },
      { section: 'Final Project', lessons: ['Designing the app', 'Building and polishing', 'Testing on devices', 'Publishing basics'] }
    ],
    reviews: [
      { name: 'Mariam K.', initials: 'MK', rating: 5, date: 'May 2026', text: 'Perfect for beginners. I built a beautiful app in three weeks.' },
      { name: 'Leo D.', initials: 'LD', rating: 4, date: 'April 2026', text: 'Clear and fun. Flutter is amazing and this course proves it.' },
      { name: 'Rania T.', initials: 'RT', rating: 4, date: 'March 2026', text: 'Great pace with solid projects. The quiz app was a highlight.' }
    ]
  },
  {
    id: 'aws-cloud-fundamentals',
    title: 'AWS Cloud Fundamentals',
    category: 'Cloud Computing',
    tagline: 'Master the core AWS services and deploy your first cloud infrastructure.',
    desc: 'The cloud runs the world, and AWS runs most of the cloud. Learn core services — compute, storage, networking and databases — and deploy real infrastructure with the console and the CLI.',
    instructor: 'lena-novak',
    rating: 4.8,
    reviewCount: 520,
    students: 1010,
    duration: '18 hours',
    level: 'Beginner',
    price: 48,
    oldPrice: 72,
    icon: '☁',
    gradient: 'cloud',
    outcomes: [
      'Understand core AWS services and concepts',
      'Provision EC2 instances and manage them',
      'Store and serve data with S3',
      'Configure networking with VPC',
      'Work with databases and IAM security',
      'Deploy a full application on AWS'
    ],
    requirements: [
      'Basic IT and Linux familiarity',
      'An AWS account (free tier is enough)',
      'Comfort with the command line'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['The cloud computing model', 'AWS global infrastructure', 'Creating your account', 'The management console'] },
      { section: 'Fundamentals', lessons: ['EC2 and virtual machines', 'S3 storage', 'VPC networking', 'IAM security'] },
      { section: 'Practical Development', lessons: ['Security groups', 'Elastic IPs and DNS', 'RDS databases', 'The AWS CLI'] },
      { section: 'Building Projects', lessons: ['Project: web server deployment', 'Project: static site hosting', 'Project: multi-tier architecture', 'Project: backup strategy'] },
      { section: 'Advanced Concepts', lessons: ['Auto scaling', 'Load balancing', 'Cost management', 'CloudWatch monitoring'] },
      { section: 'Final Project', lessons: ['Designing the architecture', 'Deploying end to end', 'Hardening and monitoring', 'Documenting the setup'] }
    ],
    reviews: [
      { name: 'Zara B.', initials: 'ZB', rating: 5, date: 'June 2026', text: 'I went from zero cloud knowledge to deploying a real web server. Brilliant.' },
      { name: 'Nick P.', initials: 'NP', rating: 4, date: 'May 2026', text: 'Comprehensive and easy to follow. Great foundation for the AWS exams.' },
      { name: 'Huda S.', initials: 'HS', rating: 5, date: 'April 2026', text: 'Lena makes cloud concepts tangible. The projects are genuinely useful.' }
    ]
  },
  {
    id: 'serverless-applications',
    title: 'Serverless Applications with AWS',
    category: 'Cloud Computing',
    tagline: 'Build scalable apps with Lambda, API Gateway and DynamoDB — no servers to manage.',
    desc: 'Serverless lets you focus on code, not infrastructure. Learn to build event-driven applications with AWS Lambda, expose them through API Gateway and store data in DynamoDB — the modern way to ship backend services.',
    instructor: 'lena-novak',
    rating: 4.8,
    reviewCount: 390,
    students: 760,
    duration: '16 hours',
    level: 'Intermediate',
    price: 52,
    oldPrice: 78,
    icon: 'λ',
    gradient: 'cloud',
    outcomes: [
      'Design event-driven serverless architectures',
      'Write and deploy AWS Lambda functions',
      'Expose APIs with API Gateway',
      'Model data with DynamoDB',
      'Orchestrate workflows with Step Functions',
      'Monitor, secure and cost-optimise serverless apps'
    ],
    requirements: [
      'Comfort with a programming language (Node or Python)',
      'Basic AWS knowledge (our AWS course covers it)',
      'An AWS account and the CLI installed'
    ],
    curriculum: [
      { section: 'Introduction', lessons: ['What is serverless?', 'The Lambda execution model', 'Setting up the AWS CLI', 'Your first function'] },
      { section: 'Fundamentals', lessons: ['Lambda triggers', 'API Gateway basics', 'DynamoDB tables', 'IAM for serverless'] },
      { section: 'Practical Development', lessons: ['Building REST APIs', 'Handling events', 'Error handling and retries', 'Environment variables and secrets'] },
      { section: 'Building Projects', lessons: ['Project: URL shortener', 'Project: image processing pipeline', 'Project: serverless todo API', 'Project: analytics collector'] },
      { section: 'Advanced Concepts', lessons: ['Step Functions', 'Cold starts and performance', 'Monitoring with CloudWatch', 'Cost optimisation'] },
      { section: 'Final Project', lessons: ['Designing the architecture', 'Building the services', 'Testing end to end', 'Deploying and documenting'] }
    ],
    reviews: [
      { name: 'Sara E.', initials: 'SE', rating: 5, date: 'June 2026', text: 'Serverless finally clicked. I rebuilt a backend API for a fraction of the cost.' },
      { name: 'Victor H.', initials: 'VH', rating: 4, date: 'May 2026', text: 'Practical and well structured. The image processing pipeline is great.' },
      { name: 'Amina C.', initials: 'AC', rating: 5, date: 'April 2026', text: 'Exactly the modern stack employers ask about. Highly recommended.' }
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
