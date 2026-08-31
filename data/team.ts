export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
  technologies?: string[];
};

export type ProfileProject = {
  title: string;
  period?: string;
  role?: string;
  summary: string;
  technologies: string[];
  url?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  photo: string;
  focus: string;
  summary: string;
  email?: string;
  phone?: string;
  location: string;
  linkedin?: string;
  portfolio?: string;
  github?: string;
  cv?: string;
  cvLabel?: string;
  languages: string[];
  softSkills: string[];
  skills: SkillGroup[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProfileProject[];
  additional?: string[];
  profileNote?: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'chhea-chhouy',
    name: 'Chhea Chhouy',
    role: 'Full Stack Developer',
    shortRole: 'Full Stack',
    photo: '/team/chhea-chhouy.png',
    focus: 'Scalable web applications, workflow automation and cloud-ready delivery.',
    summary:
      'A full-stack developer who enjoys building efficient, user-friendly web applications and continuously exploring new tools and technologies. His experience spans CRM, education, internal management systems, workflow automation, reporting dashboards and role-based access control.',
    email: 'chheadeveloper@gmail.com',
    phone: '+855 67 408 241',
    location: 'Phnom Penh, Cambodia',
    linkedin: 'https://www.linkedin.com/in/chhea-chhouy-337667374/',
    github: 'https://github.com/Chhea012',
    cv: '/cv/chhea-chhouy-full-stack-developer.pdf',
    cvLabel: 'Original CV',
    languages: ['Khmer — Mother tongue', 'English — Intermediate'],
    softSkills: ['Respect', 'Adaptability', 'Communication', 'Problem solving', 'Critical thinking', 'Time management', 'Teamwork & collaboration'],
    skills: [
      { label: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'React.js', 'JavaScript', 'Bootstrap 5', 'Tailwind CSS', 'HTML', 'CSS', 'SASS'] },
      { label: 'Backend', items: ['Laravel', 'Node.js', 'Python', 'Flask', 'Django', 'PHP', 'TypeScript OOP'] },
      { label: 'Data & Services', items: ['MySQL', 'SQLite', 'Firebase', 'Power BI'] },
      { label: 'Cloud & Tools', items: ['Git', 'GitHub', 'Jira', 'Postman', 'AWS EC2', 'Linux', 'Cloudflare', 'Figma', 'Netlify', 'Vercel'] },
    ],
    education: [
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Web Programming', period: '2024 — 2026' },
      { institution: 'Pouk High School', degree: 'Bac II', period: '2020 — 2023' },
    ],
    experience: [
      {
        role: 'Full Stack Developer',
        organization: 'KD Global Management',
        period: '1+ year',
        bullets: [
          'Built scalable production web applications across CRM, education and internal management systems.',
          'Delivered workflow automation, reporting dashboards and role-based access control features.',
          'Contributed to Custom CRM System, KD Academy System and KD Vision System.'
        ],
        technologies: ['Vue.js', 'Laravel', 'Vuetify', 'JavaScript', 'PHP', 'MySQL', 'REST API', 'Nginx', 'Linux', 'AWS']
      },
      {
        role: 'IT Intern — Full Stack Developer',
        organization: 'The NGO Forum on Cambodia',
        period: 'Internship',
        bullets: [
          'Developed and deployed an automated Service Agreement management system for consultant workflows.',
          'Focused on reducing manual work while improving workflow efficiency, compliance and data security.',
          'Managed deployment on AWS EC2 Ubuntu with custom domain configuration.'
        ],
        technologies: ['Python', 'Flask', 'Django', 'Bootstrap', 'jQuery', 'Chart.js', 'Git', 'AWS EC2', 'Ubuntu']
      }
    ],
    projects: [
      {
        title: 'Leave Management System',
        period: 'Jul — Aug 2025',
        role: 'Developer',
        summary: 'Laravel-based system for staff attendance, leave and permission tracking with real-time team visibility and AWS EC2 deployment.',
        technologies: ['Laravel', 'MySQL', 'AWS EC2', 'Ubuntu']
      },
      {
        title: 'POS System',
        period: 'Mar — Apr 2025',
        role: 'Scrum Master & Developer',
        summary: 'Full-featured POS system with inventory management, financial tracking, barcode scanning and Telegram chatbot integration.',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js', 'AWS EC2'],
        url: 'https://github.com/Chhea012/VC1_POS_System'
      },
      {
        title: 'Task Management App',
        period: 'Jan 2025',
        role: 'Team Lead',
        summary: 'Task organization application with status tracking and calendar integration.',
        technologies: ['JavaScript', 'Firebase', 'SASS', 'Bootstrap', 'Chart.js'],
        url: 'https://github.com/Chhea012/Task-Management-App-B12'
      },
      {
        title: 'Web Scraping Automation',
        period: 'Nov 2024',
        role: 'Team Lead',
        summary: 'Desktop tool for collecting and organizing website data with a user-friendly interface.',
        technologies: ['Python', 'Requests', 'BeautifulSoup', 'Tkinter', 'JSON'],
        url: 'https://github.com/Chhea012/webdata-scraper-project'
      }
    ],
    additional: ['Project Management workshop', 'Data Analytics workshop', 'Product Ownership workshop', 'UX/UI Design workshop', 'Company visits and technical exposure activities']
  },
  {
    slug: 'kin-doung',
    name: 'Kin Doung',
    role: 'Planning & Web Developer',
    shortRole: 'Planning & Web',
    photo: '/team/kin-doung.png',
    focus: 'Project planning, web development coordination and practical team delivery.',
    summary:
      'A PNC student team member focused on planning and web development. The supplied archive did not include a dedicated Kin Doung CV, so this profile intentionally uses only team-confirmed information and cross-referenced public project/contact details from the supplied team materials.',
    email: 'kindoung7@gmail.com',
    phone: '+855 88 399 6258',
    location: 'Cambodia',
    github: 'https://github.com/Kin-Doung',
    languages: ['Khmer', 'English — information to be confirmed'],
    softSkills: ['Planning', 'Coordination', 'Teamwork', 'Communication', 'Task organization'],
    skills: [
      { label: 'Focus Areas', items: ['Project Planning', 'Web Development', 'Team Coordination', 'Git/GitHub'] },
      { label: 'Team Delivery', items: ['Requirements support', 'Task planning', 'Development collaboration'] }
    ],
    education: [
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'PNC Student Team Member', period: 'Current team affiliation', detail: 'Detailed education history requires Kin Doung’s dedicated CV.' }
    ],
    experience: [],
    projects: [
      {
        title: 'Farm Management System',
        role: 'Related team project',
        summary: 'A PNC team project repository is hosted under the Kin-Doung GitHub account. Detailed individual responsibilities should be confirmed from Kin Doung’s own CV.',
        technologies: ['GitHub', 'Web Development'],
        url: 'https://github.com/Kin-Doung/VC2-Agriculture'
      }
    ],
    profileNote: 'A file named “Kin Doung-CV.pdf” in the supplied archive contains Leader Din’s CV. To avoid publishing incorrect information, no CV download is attached to Kin Doung’s profile.'
  },
  {
    slug: 'sokchea-boy',
    name: 'Sokchea Boy',
    role: 'Web Developer',
    shortRole: 'Web Developer',
    photo: '/team/sokchea-boy.png',
    focus: 'Web applications, REST APIs, databases and practical software quality.',
    summary:
      'A web developer and PNC graduate with hands-on experience in web development, REST APIs, databases and software testing. He has worked with JavaScript, PHP, Laravel, React.js, Java, MySQL and PostgreSQL, and continues strengthening his software engineering and application development skills.',
    email: 'sokchea.boy16003@gmail.com',
    phone: '+855 97 996 4862',
    location: 'Phnom Penh, Cambodia',
    cv: '/cv/sokchea-boy-web-developer.pdf',
    cvLabel: 'Original CV',
    languages: ['Khmer — Mother tongue', 'English — Pre-intermediate'],
    softSkills: ['Creativity', 'Teamwork', 'Leadership', 'Adaptability', 'Research', 'Communication', 'Critical thinking', 'Task management', 'Attention to detail'],
    skills: [
      { label: 'Web', items: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Vue.js', 'React.js', 'Tailwind CSS'] },
      { label: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'Java Spring Boot', 'REST API', 'TypeScript OOP', 'Python'] },
      { label: 'Database', items: ['PostgreSQL', 'MySQL', 'SQL Server'] },
      { label: 'Tools', items: ['Jira', 'Git', 'GitHub', 'Postman', 'AWS EC2', 'Linux', 'Microsoft Fabric', 'Figma', 'Netlify', 'Vercel'] }
    ],
    education: [
      { institution: 'BELTEI International University', degree: 'Bachelor’s Degree — Software Engineering', period: '2026 — Present' },
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Web Development', period: '2024 — 2026' },
      { institution: 'Socang Konter2 High School', degree: 'Bac II Certificate', period: '2020 — 2023' }
    ],
    experience: [
      {
        role: 'Quality Assurance',
        organization: 'Monakom Technology',
        period: 'Feb 2026 — Aug 2026',
        bullets: [
          'Tested POS systems across Windows and Android platforms.',
          'Performed functional and regression testing for CRM and QR Ordering web applications.',
          'Validated mobile-to-POS order flows, payments, invoices and bug fixes during UAT.'
        ],
        technologies: ['POS', 'CRM', 'UAT', 'Regression Testing']
      },
      {
        role: 'Backend & IT Support',
        organization: 'Cambodia Airports',
        period: 'Sep 2025 — Dec 2025',
        bullets: [
          'Configured workstations and joined devices to the company domain.',
          'Wrote SQL queries for reporting and system analysis.',
          'Used MySQL, SQL Server, GLPI, DBeaver and Visual Studio for support and troubleshooting.'
        ],
        technologies: ['MySQL', 'SQL Server', 'GLPI', 'DBeaver', 'Visual Studio']
      }
    ],
    projects: [
      {
        title: 'Farm Management System',
        period: 'Jul — Aug 2025',
        role: 'Developer',
        summary: 'Farm management platform for crop type, planting date, growth stage and notes, built as a five-person team project.',
        technologies: ['MVC', 'Bootstrap 5', 'React.js', 'Laravel', 'Python', 'REST API', 'MySQL'],
        url: 'https://github.com/Kin-Doung/VC2-Agriculture'
      },
      {
        title: 'POS System',
        period: 'Mar — Apr 2025',
        role: 'Developer & Git Manager',
        summary: 'Point-of-sale system for product storage and management with collaborative Git workflow.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'PHP', 'MySQL'],
        url: 'https://github.com/Soda-Morn/VC1-Group06-Cafe-Shop'
      },
      {
        title: 'Inventory App',
        period: 'Jan 2025',
        role: 'Developer & Git Manager',
        summary: 'Inventory management project focused on efficient resource allocation, version control and user interface consistency.',
        technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Figma', 'GitHub']
      },
      {
        title: 'Window Management System Tool',
        period: 'Nov 2024',
        role: 'Developer',
        summary: 'Python algorithm project monitoring RAM/CPU and extracting Wi-Fi data for system analysis.',
        technologies: ['Python', 'Algorithms'],
        url: 'https://github.com/sovan-souern/Project-Python/tree/sokchea'
      }
    ]
  },
  {
    slug: 'bunyoung-hean',
    name: 'Bunyoung Hean',
    role: 'Quality Assurance Specialist',
    shortRole: 'QA Specialist',
    photo: '/team/bunyoung-hean.png',
    focus: 'Functional testing, regression testing, UAT and reliable product workflows.',
    summary:
      'A PNC graduate and full-time QA specialist with experience testing POS, inventory management and KIOSK systems. His work includes designing and executing test cases, identifying defects, validating fixes and collaborating with developers and product teams to improve software quality.',
    email: 'bunyounghean99@gmail.com',
    phone: '+855 977 743 965',
    location: 'Phnom Penh, Cambodia',
    cv: '/cv/bunyoung-hean-qa-tester.pdf',
    cvLabel: 'Original CV',
    languages: ['Khmer — Native', 'English — Pre-intermediate'],
    softSkills: ['Leadership', 'Creativity', 'Critical thinking', 'Communication', 'Problem solving', 'Time management', 'Teamwork', 'Presentation'],
    skills: [
      { label: 'Quality Assurance', items: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'UAT', 'Test Cases', 'Bug Reporting'] },
      { label: 'Web & Data', items: ['HTML', 'CSS', 'SASS', 'JavaScript', 'PHP', 'Node.js', 'MySQL', 'TypeScript OOP'] },
      { label: 'Design & Collaboration', items: ['Figma', 'Canva', 'ClickUp', 'Git', 'Jira', 'Excel'] }
    ],
    education: [
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Web Programming / Information Technology', period: '2024 — 2025' },
      { institution: 'High School', degree: 'High School Diploma', period: '2022 — 2023' }
    ],
    experience: [
      {
        role: 'QA Specialist',
        organization: 'Monakom Technology',
        period: 'Feb 2026 — Present',
        bullets: [
          'Tested POS retail workflows, cashier shifts, cash handling, stock synchronization and barcode search.',
          'Tested inventory stock-in/out, transfers, purchase orders and goods receiving flows.',
          'Tested self-service KIOSK item search, ordering, payment integration and receipt generation.',
          'Created test cases, reported defects and validated fixes during functional, regression and UAT cycles.'
        ],
        technologies: ['POS', 'Inventory', 'KIOSK', 'Manual QA', 'UAT']
      },
      {
        role: 'Intern — System Network, Design & Sales Support',
        organization: 'EPES Solutions',
        period: 'Sep 2025 — Dec 2025',
        bullets: [
          'Supported network setup, maintenance and troubleshooting.',
          'Created digital campaign visuals and supported digital marketing activities.',
          'Provided technical support and product demonstrations to customers.'
        ],
        technologies: ['Networking', 'Graphic Design', 'Digital Marketing', 'Technical Support']
      }
    ],
    projects: [
      {
        title: 'POS System — Virtual Company One',
        period: 'Mar — Apr 2025',
        role: 'QA Tester',
        summary: 'Web development project where Bunyoung contributed UI support and performed functional and regression testing.',
        technologies: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Chart.js', 'Figma', 'Manual Testing']
      },
      {
        title: 'Quiz App',
        period: 'Jan 2025',
        role: 'UI/UX & QA Tester',
        summary: 'Designed UI in Figma and performed manual QA to validate accuracy and functionality.',
        technologies: ['HTML', 'CSS', 'SASS', 'Figma', 'GitHub', 'Manual Testing']
      },
      {
        title: 'Windows System Management Tool',
        period: 'Nov 2024',
        role: 'Backend & QA',
        summary: 'Algorithm project using Python to monitor and analyze system/network data while validating reliability.',
        technologies: ['Python', 'GitHub', 'QA']
      }
    ],
    additional: ['Product Owner workshops', 'UX/UI Design workshops', 'QA Tester workshop', 'Ongoing learning in QA and UI/UX']
  },
  {
    slug: 'darin-hoy',
    name: 'Darin Hoy',
    role: 'Junior Software Developer',
    shortRole: 'Junior Developer',
    photo: '/team/darin-hoy.png',
    focus: 'Web development, software fundamentals and practical data/IT systems.',
    summary:
      'A junior software developer with practical experience across frontend, backend, databases and internship IT support. His project work covers web interfaces, Python automation, JavaScript applications, shop management and leave management systems.',
    email: 'darin.hoy.official@gmail.com',
    phone: '+855 97 701 4644',
    location: 'Phnom Penh, Cambodia',
    // cv: '/cv/darin-hoy-developer.pdf',
    // cvLabel: 'Original CV',
    languages: ['Khmer — Mother tongue', 'English — Intermediate'],
    softSkills: ['Teamwork & Collaboration', 'Time & Task Management', 'Problem Solving & Critical Thinking', 'Responsibility & Ownership', 'Honesty & Integrity', 'Adaptability & Fast Learner', 'Effective Communication', 'Attention to Detail', 'Work Under Pressure & Deadline Driven'],
    skills: [
      { label: 'Web & Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'React.js', 'Tailwind CSS'] },
      { label: 'Backend & Data', items: ['Node.js', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'REST API', 'JasperReports', 'PostgreSQL', 'MySQL', 'Firebase', 'TypeScript OOP', 'Python Algorithms', 'Power BI'] },
      { label: 'Tools & DevOps', items: ['Figma', 'Git', 'GitHub', 'GitLab', 'IntelliJ IDEA', 'VS Code', 'Navicat', 'Jira', 'Swagger', 'AWS', 'Linux', 'Netlify', 'Vercel'] }
    ],
    education: [
      { institution: 'BELTEI International University', degree: 'Bachelor’s Degree — Software Engineering', period: '2026 — Present'},
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Web Programming', period: '2024 — 2025' },
      { institution: 'Sdao Santepheap High School', degree: 'High School Diploma', period: '2020 — 2023' }
    ],
    experience: [
      {
        role: 'IT Intern',
        organization: 'Cambodia Airports',
        period: 'Sep 2025 — Dec 2025',
        bullets: [
          'Worked with MySQL and SQL for data management and analysis.',
          'Contributed to customization of the GLPI IT Service Management System.',
          'Provided troubleshooting and technical support.',
          'Gained practical experience with Microsoft Fabric data pipelines and analytics workflows.'
        ],
        technologies: ['MySQL', 'SQL', 'GLPI', 'Microsoft Fabric']
      },
    ],
    projects: [
      {
        title: 'Clinic Services Website',
        period: 'Oct — Nov 2024',
        role: 'Frontend Developer',
        summary: 'Designed and implemented a clinic services interface.',
        technologies: ['HTML', 'CSS', 'SASS']
      },
      {
        title: 'Email Sending Automation System',
        period: 'Nov 2024',
        role: 'Backend Developer',
        summary: 'Python automation project using custom algorithms for email sending workflows.',
        technologies: ['Python', 'Algorithms']
      },
      {
        title: 'Shop Management System',
        period: 'Mar — Apr 2025',
        role: 'Web Developer',
        summary: 'Full-featured shop management application using PHP/MySQL and common frontend libraries.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap 5']
      },
      {
        title: 'Leave Management System',
        period: 'Jul — Aug 2025',
        role: 'Web Developer',
        summary: 'Leave management application with authentication, file uploads, request status tracking and automated notifications.',
        technologies: ['Vue.js', 'Laravel', 'React Native', 'MySQL']
      }
    ],
    additional: ['Project Management workshop', 'Data Analytics workshop', 'Independent technology research and personal project building']
  },
  {
    slug: 'leader-din',
    name: 'Leader Din',
    role: 'Junior Roaming & Interconnection Administrator',
    shortRole: 'Roaming & Interconnect',
    photo: '/team/leader-din.jpg',
    focus: 'Roaming operations, infrastructure automation, deployment and internal systems.',
    summary:
      'A technology professional focused on infrastructure, roaming and interconnection operations. His experience includes CRM development, CN/DN automation, TAP file processing, operational dashboards, roaming service validation and modern deployment tooling.',
    email: 'dinleader200@gmail.com',
    phone: '+855 98 265 667',
    location: 'Phnom Penh, Cambodia',
    cv: '/cv/leader-din-infrastructure.pdf',
    cvLabel: 'Original CV',
    languages: ['Khmer — Mother tongue', 'English — Intermediate'],
    softSkills: ['Time management', 'Task management', 'Problem solving', 'Communication', 'Teamwork', 'Critical thinking', 'Adaptability', 'Attention to detail'],
    skills: [
      { label: 'Web & Backend', items: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'PHP', 'JavaScript', 'Laravel', 'Vue.js', 'Node.js', 'TypeScript OOP', 'MySQL'] },
      { label: 'Infrastructure', items: ['Linux', 'Docker', 'Kubernetes', 'GitLab CI', 'Argo CD', 'Rancher', 'NiFi'] },
      { label: 'Tools', items: ['Git/GitHub', 'Jira', 'Postman', 'Power BI', 'AWS EC2', 'Draw.io', 'Netlify', 'Vercel'] }
    ],
    education: [
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Web Programming', period: '2023 — 2025' },
      { institution: 'Institution not specified in CV', degree: 'Computer Science studies', period: '2022 — 2023' }
    ],
    experience: [
      {
        role: 'Junior Roaming & Interconnect Administrator',
        organization: 'Professional Experience',
        period: 'Current role in supplied CV',
        bullets: [
          'Developed and maintained a CRM system using Laravel, Vue.js, Tailwind CSS and MariaDB.',
          'Built CN/DN and TAP file automation to streamline operational processing.',
          'Developed an internal dynamic dashboard with real-time analytics and reporting.',
          'Performed roaming service validation and coordinated with international roaming partners.',
          'Managed CI/CD deployments with GitLab CI, Argo CD and Rancher, and supported Linux, Docker and Kubernetes environments.'
        ],
        technologies: ['Laravel', 'Vue.js', 'MariaDB', 'GitLab CI', 'Argo CD', 'Rancher', 'Linux', 'Docker', 'Kubernetes']
      },
      {
        role: 'Intern',
        organization: 'Cambodia Airports (CAMS)',
        period: 'Internship',
        bullets: [
          'Performed data entry and access-control administration in HikCentral Professional System.',
          'Maintained employee and visitor access records and supported admin operations.',
          'Worked with Microsoft Excel for structured data entry.'
        ],
        technologies: ['HikCentral', 'Microsoft Excel']
      }
    ],
    projects: [
      { title: 'CRM System', role: 'Developer', summary: 'Internal CRM platform supporting operational workflows.', technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MariaDB'] },
      { title: 'CN/DN Automation', role: 'Developer', summary: 'Automation designed to streamline operational CN/DN processing.', technologies: ['Automation', 'Backend'] },
      { title: 'TAP File Automation', role: 'Developer', summary: 'System for processing and validating roaming TAP files.', technologies: ['Roaming', 'Automation'] },
      { title: 'Dynamic Dashboard', role: 'Developer', summary: 'Internal dashboard with real-time analytics and reporting for business insights.', technologies: ['Dashboard', 'Analytics', 'Power BI'] }
    ]
  },
  {
    slug: 'seang-meng-chheun',
    name: 'Seang Meng Chheun',
    role: 'Web Developer',
    shortRole: 'Web Developer',
    photo: '/team/seang-meng-chheun.png',
    focus: 'Responsive web applications, APIs, databases and Telegram-integrated experiences.',
    summary:
      'A web developer with full-stack experience in Python, Vue 3 and MySQL. He builds responsive frontend applications, backend APIs and database-driven solutions, with a focus on maintainable code, application performance and reliable user experiences.',
    email: 'mengfreelancer@gmail.com',
    phone: '+855 68 500 744',
    location: 'Phnom Penh, Cambodia',
    portfolio: 'https://mengz.vercel.app',
    cv: '/cv/seang-meng-chheun-web-developer.pdf',
    cvLabel: 'Original CV',
    languages: ['Khmer — Mother tongue', 'English — Intermediate'],
    softSkills: ['Teamwork', 'Critical thinking', 'Problem solving', 'Communication', 'Task management', 'Agile & SDLC development'],
    skills: [
      { label: 'Frontend', items: ['JavaScript', 'Vue.js', 'Flutter (Basic)', 'Bootstrap', 'Tailwind CSS', 'HTML', 'CSS', 'SASS'] },
      { label: 'Backend & Data', items: ['SQL Server', 'MySQL', 'RDBMS', 'Python', 'Laravel', 'Node.js', 'OOP'] },
      { label: 'Tools & Analytics', items: ['SSRS', 'SSMS', 'Power BI', 'GitHub', 'VS Code', 'Postman', 'Linux', 'AWS EC2', 'Figma', 'Netlify', 'Vercel'] }
    ],
    education: [
      { institution: 'AGA Institute', degree: 'Bachelor Degree — Computer Science', period: '2026 — 2027' },
      { institution: 'Passerelles Numériques Cambodia (PNC)', degree: 'Associate Degree — Computer Science', period: '2024 — 2025' },
      { institution: 'TRIEL High School', degree: 'Bac II', period: 'Graduated 2023' }
    ],
    experience: [
      {
        role: 'Web Developer',
        organization: 'Ezze System Cambodia',
        period: 'Feb 2026 — Present',
        bullets: [
          'Built a Telegram Mini App with webview and user authentication.',
          'Developed a Telegram bot for commands and real-time interactions.',
          'Integrated backend APIs for data synchronization and push notifications.',
          'Managed user sessions, secure data storage and cloud deployment.'
        ],
        technologies: ['Telegram Bot', 'Webview', 'APIs', 'Cloud']
      },
      {
        role: 'Data Engineer Intern',
        organization: 'Dai-ichi Life Cambodia',
        period: 'Sep — Dec 2025',
        bullets: [
          'Built SQL queries and reports for business analysis.',
          'Created procedures and maintained views for reporting.',
          'Optimized SQL queries and supported database-related requests.',
          'Worked with relational database tables, keys and relationships.'
        ],
        technologies: ['SQL Server', 'SQL', 'RDBMS', 'Reporting']
      }
    ],
    projects: [
      {
        title: 'Digital Menu App',
        period: 'Jul — Aug 2025',
        role: 'Developer',
        summary: 'QR-code mobile menu allowing customers to browse menus and place orders with staff/POS integration.',
        technologies: ['Laravel', 'Flutter', 'MySQL']
      },
      {
        title: 'POS System',
        period: 'Feb — May 2025',
        role: 'Developer',
        summary: 'POS system for products, sales and inventory with CRUD workflows and structured database tracking.',
        technologies: ['JavaScript', 'PHP', 'MySQL']
      },
      {
        title: 'Expense Tracker App',
        period: 'Jan 2025',
        role: 'Developer',
        summary: 'Client-side income and expense tracker with per-user local storage and real-time balance updates.',
        technologies: ['JavaScript', 'localStorage']
      },
      {
        title: 'Voice Control Music Player',
        period: 'Nov 2024',
        role: 'Developer',
        summary: 'Python Tkinter music player with speech recognition for voice-controlled playback and playlist management.',
        technologies: ['Python', 'Tkinter', 'Speech Recognition']
      }
    ],
    additional: ['Mentored junior students in web application development', 'Project Management workshop', 'Data Analytics workshop', 'Product Owner workshop', 'ASEAN Data Analyst Competition participation']
  }
];

export const memberBySlug = (slug: string) => teamMembers.find((member) => member.slug === slug);
