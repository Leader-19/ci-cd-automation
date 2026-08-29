export type Project = {
  slug: string;
  title: string;
  category: 'Web' | 'QA' | 'Software' | 'Data' | 'Infrastructure' | 'Telecom';
  status: string;
  period: string;
  owner: string;
  memberSlugs: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  outcomes: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: 'crm-and-internal-systems',
    title: 'CRM & Internal Management Systems',
    category: 'Software',
    status: 'Professional Experience',
    period: '2025 — 2026',
    owner: 'Chhea Chhouy',
    memberSlugs: ['chhea-chhouy'],
    summary: 'A collection of production-grade CRM, education and internal management systems with workflow automation, dashboards and role-based access control.',
    problem: 'Internal teams need structured workflows, reliable reporting and secure role-based access instead of fragmented manual processes.',
    solution: 'Developed full-stack web applications with modular frontend/backend architecture, REST APIs, database workflows and cloud deployment.',
    features: ['Workflow automation', 'Reporting dashboards', 'Role-based access control', 'REST API integration', 'Cloud deployment'],
    technologies: ['Vue.js', 'Laravel', 'JavaScript', 'PHP', 'MySQL', 'REST API', 'AWS', 'Linux'],
    outcomes: ['Improved workflow visibility', 'Reduced repetitive manual operations', 'Created reusable internal system patterns']
  },
  {
    slug: 'pos-inventory-kiosk-qa',
    title: 'POS, Inventory & KIOSK Quality Assurance',
    category: 'QA',
    status: 'Professional Experience',
    period: '2026',
    owner: 'Bunyoung Hean',
    memberSlugs: ['bunyoung-hean'],
    summary: 'End-to-end manual QA across retail POS, stock-control and self-service KIOSK workflows.',
    problem: 'Sales, stock and payment systems require reliable behavior across devices, integrations and operational edge cases.',
    solution: 'Designed and executed test cases, functional tests, regression cycles and UAT while validating stock, cashier, payment and receipt flows.',
    features: ['Test case design', 'Functional testing', 'Regression testing', 'UAT', 'Bug reporting', 'Payment workflow validation'],
    technologies: ['Manual Testing', 'POS', 'Inventory', 'KIOSK', 'Figma', 'Git'],
    outcomes: ['Improved defect visibility', 'Validated business-critical retail flows', 'Supported safer release verification']
  },
  {
    slug: 'farm-management-system',
    title: 'Farm Management System',
    category: 'Web',
    status: 'Academic Project',
    period: 'Jul — Aug 2025',
    owner: 'Sokchea Boy / PNC Project Team',
    memberSlugs: ['sokchea-boy', 'kin-doung'],
    summary: 'A farm management platform designed to record crop types, planting dates, growth stages and operational notes.',
    problem: 'Farm activities are difficult to track consistently when records are fragmented or manual.',
    solution: 'Built a collaborative web application with structured farm records, REST APIs and a shared Git workflow.',
    features: ['Crop records', 'Planting dates', 'Growth stages', 'Notes', 'Team Git workflow'],
    technologies: ['React.js', 'Laravel', 'Python', 'REST API', 'MySQL', 'Bootstrap 5'],
    outcomes: ['Practical team delivery experience', 'Combined frontend/backend collaboration', 'Version-controlled project workflow'],
    repo: 'https://github.com/Kin-Doung/VC2-Agriculture'
  },
  {
    slug: 'leave-management-system',
    title: 'Leave Management Systems',
    category: 'Web',
    status: 'Academic Projects',
    period: '2025',
    owner: 'Chhea Chhouy & Darin Hoy',
    memberSlugs: ['chhea-chhouy', 'darin-hoy'],
    summary: 'Student projects focused on staff/student leave requests, status tracking, permissions and operational visibility.',
    problem: 'Leave requests need a clear digital workflow with status visibility and structured records.',
    solution: 'Built web applications for leave submission, authentication, file uploads, permission tracking and notifications.',
    features: ['Authentication', 'Leave requests', 'File uploads', 'Status tracking', 'Notifications', 'Deployment'],
    technologies: ['Laravel', 'Vue.js', 'React Native', 'MySQL', 'AWS EC2'],
    outcomes: ['Applied real workflow requirements', 'Practiced multi-stack integration', 'Improved understanding of deployment and team coordination']
  },
  {
    slug: 'telegram-mini-app',
    title: 'Telegram Mini App & Bot',
    category: 'Web',
    status: 'Professional Experience',
    period: '2026',
    owner: 'Seang Meng Chheun',
    memberSlugs: ['seang-meng-chheun'],
    summary: 'Telegram-integrated web experience with authentication, bot commands, APIs, sessions and cloud deployment.',
    problem: 'Users need a lightweight in-app experience that connects messaging interactions with web application data.',
    solution: 'Developed a Telegram Mini App and bot with real-time interactions, backend API synchronization and secure session handling.',
    features: ['Telegram webview', 'User authentication', 'Bot commands', 'API sync', 'Push notifications', 'Cloud deployment'],
    technologies: ['JavaScript', 'Vue.js', 'Node.js', 'REST API', 'Cloud'],
    outcomes: ['Integrated chat and web workflows', 'Built real-time user interactions', 'Managed secure session and deployment concerns']
  },
  {
    slug: 'roaming-automation-platform',
    title: 'Roaming Automation & Operations Dashboard',
    category: 'Telecom',
    status: 'Professional Experience',
    period: 'Current role',
    owner: 'Leader Din',
    memberSlugs: ['leader-din'],
    summary: 'Operational automation and dashboards supporting roaming/interconnection workflows, TAP processing and deployment infrastructure.',
    problem: 'Roaming operations require reliable file processing, partner validation, workflow visibility and dependable internal deployments.',
    solution: 'Built CRM/automation tools, TAP file processing, dynamic dashboards and CI/CD-backed deployments on modern infrastructure.',
    features: ['CRM workflows', 'CN/DN automation', 'TAP file processing', 'Roaming validation', 'Dynamic dashboards', 'CI/CD'],
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'GitLab CI', 'Argo CD', 'Rancher', 'Docker', 'Kubernetes', 'Linux'],
    outcomes: ['Streamlined repetitive operations', 'Improved visibility with real-time dashboards', 'Supported reliable automated deployment workflows']
  },
  {
    slug: 'cambodia-airports-it-and-data',
    title: 'Cambodia Airports — IT & Data Experience',
    category: 'Data',
    status: 'Internship Experience',
    period: '2025',
    owner: 'Multiple PNC members',
    memberSlugs: ['sokchea-boy', 'darin-hoy', 'leader-din'],
    summary: 'Practical internship exposure across IT support, databases, GLPI, access control, data entry and analytics tooling.',
    problem: 'Operational IT environments depend on accurate data, reliable device/system support and well-maintained internal tools.',
    solution: 'Supported databases, workstations, IT service management, access-control records and analytics/data workflows.',
    features: ['SQL reporting', 'Workstation setup', 'GLPI customization', 'Access control administration', 'Microsoft Fabric', 'Technical support'],
    technologies: ['MySQL', 'SQL Server', 'GLPI', 'Microsoft Fabric', 'HikCentral', 'Excel'],
    outcomes: ['Gained enterprise IT exposure', 'Practiced support and database workflows', 'Applied classroom skills in operational environments']
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
