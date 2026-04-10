import type { TimelineEntry, Project, Course, PortfolioLabels } from "./portfolio-br";

export type { TimelineItemType, TimelineEntry, Project, Course, PortfolioLabels } from "./portfolio-br";

export const labels: PortfolioLabels = {
  heroExplore: "Explore",
  timelineTitle: "My Journey",
  timelineSubtitle: "A career built with dedication, continuous learning, and passion for technology",
  filterAll: "All",
  filterStudy: "Education",
  filterWork: "Work",
  timelineActivities: "Key Activities",
  timelineTechnologies: "Technologies",
  timelineAchievements: "Achievements",
  timelineCurrent: "Current",
  projectsTitle: "Featured Projects",
  projectsSubtitle: "Solutions I created or contributed significantly to",
  projectMore: "More details",
  projectStory: "Project Story",
  projectMetrics: "Impact Metrics",
  projectLearnings: "What I learned",
  coursesTitle: "Courses & Certifications",
  coursesSubtitle: "Continuing education and lifelong learning",
  coursesButton: "Courses & Certifications",
  contactTitle: "Let's Talk?",
  contactSubtitle: "Like to talk about technology, data, processes? Get in touch.",
  contactRights: "All rights reserved.",
};

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    type: "study",
    startYear: "2000",
    endYear: "2003",
    title: "Data Processing Technology",
    institution: "Unicastelo",
    description: "Undergraduate degree focused on systems development, databases, and programming logic.",
    activities: ["Database modeling", "Systems development", "Logic and algorithms"],
    technologies: ["SQL", "Delphi", "Relational DB"],
    achievements: [],
  },
  {
    id: "2",
    type: "study",
    startYear: "2005",
    endYear: "2007",
    title: "Database Administration",
    institution: "Faculdade IBTA",
    description: "Specialization in corporate database administration and performance tuning.",
    activities: ["Query optimization", "Database administration", "Performance tuning"],
    technologies: ["Oracle", "PostgreSQL", "SQL"],
    achievements: [],
  },
  {
    id: "3",
    type: "work",
    startYear: "2002",
    endYear: "2019",
    title: "Systems Analyst | DBA | Product Owner",
    institution: "Control Ware Sistemas",
    description:
      "Full ERP lifecycle: deployment, support, analysis, testing, database management, and backlog prioritization as Product Owner.",
    activities: [
      "ERP and POS deployment and support",
      "Product testing and validation",
      "PostgreSQL administration and advanced SQL/PLSQL routines",
      "Requirements gathering and backlog prioritization",
      "Linux CentOS cloud infrastructure",
      "Strong focus on Tax and Financial modules (SPED, Sintegra, billing, DDA)",
    ],
    technologies: ["PostgreSQL", "SQL", "PL/SQL", "Linux", "ERP"],
    achievements: [
      "Direct participation in ERP product evolution for over 16 years",
      "Technical reference in database and tax within the company",
    ],
  },
  {
    id: "4",
    type: "work",
    startYear: "2019",
    endYear: "Current",
    title: "ERP & Data Specialist | Sankhya",
    institution: "MQ Professional Hair Styling",
    description:
      "Responsible for the technical evolution of Sankhya ERP, integrating Oracle database, BI, APIs, and automations that eliminate manual processes across finance, tax, HR, marketing, and sales.",
    activities: [
      "Sankhya customization with PL/SQL, JavaScript, and Java",
      "Creating procedures, triggers, and views for process automation",
      "Data structuring for BI (Qlik Sense and Power BI)",
      "Node.js API development for financial and HR integrations",
      "Internal application development for operational automation",
      "Automatic PDF order reader",
      "Pre-sales system for trade shows",
      "Media uploader for influencers",
      "Sellout system for field promoters",
    ],
    technologies: [
      "Oracle", "PL/SQL", "SQL", "Node.js", "PostgreSQL",
      "React", "Vue.js", "Qlik Sense", "Power BI", "Sankhya ERP",
    ],
    achievements: [
      "Elimination of numerous manual processes through automations",
      "Full integration between ERP, BI, and internal systems",
      "Technical reference in data and ERP within the company",
    ],
    isCurrent: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    name: "Sellout Field Promoters",
    description:
      "Web application for recording promoter sales directly at the point of sale, integrated with Sankhya ERP and Oracle database.",
    technologies: ["Node.js", "PostgreSQL", "React", "REST API"],
    story: "Born from the need to track sales in real time at points of sale. Previously, promoters recorded sales on spreadsheets that were manually consolidated at the end of the month.",
    metrics: ["90% reduction in data consolidation time", "Real-time visibility of sales by promoter"],
    learnings: ["Complex integration between legacy systems and modern applications", "Importance of simple UX for field users"],
  },
  {
    id: "p2",
    name: "Automatic PDF Order Reader",
    description:
      "System that automatically reads customer order PDFs and converts them into structured records in the ERP, eliminating manual data entry.",
    technologies: ["Node.js", "JavaScript", "Oracle", "Regex"],
    story: "Customers sent orders in various PDF formats. The team spent hours manually typing these orders into the ERP, generating errors and delays.",
    metrics: ["100% elimination of manual order data entry", "95% reduction in data entry errors"],
    learnings: ["Advanced Regex parsing techniques for different PDF layouts", "Importance of robust exception handling"],
  },
  {
    id: "p3",
    name: "Trade Show Pre-Sales System",
    description:
      "Internal application for quick order registration at trade shows, with subsequent ERP synchronization.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    story: "At trade shows, the sales team had to write orders on paper and then type everything into the system, causing lost sales and data.",
    metrics: ["Immediate order capture during trade shows", "Automatic real-time ERP synchronization"],
    learnings: ["Offline-first app development for unstable connections", "Designing fast interfaces for standing use"],
  },
  {
    id: "p4",
    name: "Influencer Media Uploader",
    description:
      "System for receiving, organizing, and controlling media submitted by influencers, integrated with internal company workflow.",
    technologies: ["Node.js", "React", "PostgreSQL"],
    story: "Influencers sent media via WhatsApp and email, making control chaotic. It was impossible to track who delivered what and when.",
    metrics: ["Centralized control of 100% of media deliveries", "Complete traceability of content workflow"],
    learnings: ["Large file upload management with real-time feedback", "Creating simplified approval workflows"],
  },
];

export const coursesData: Course[] = [
  {
    id: "c1",
    name: "Oracle Database Administration",
    institution: "Oracle University",
    year: "2010",
    description: "Advanced Oracle database administration",
  },
  {
    id: "c2",
    name: "Scrum Foundation",
    institution: "CertiProf",
    year: "2018",
    description: "Agile methodologies and Scrum framework fundamentals",
  },
  {
    id: "c3",
    name: "JavaScript & Node.js",
    institution: "Udemy",
    year: "2020",
    description: "Backend development with Node.js and REST APIs",
  },
  {
    id: "c4",
    name: "React - From Zero to Advanced",
    institution: "Udemy",
    year: "2021",
    description: "Frontend development with React, hooks, and context API",
  },
  {
    id: "c5",
    name: "Power BI & Data Analysis",
    institution: "Alura",
    year: "2022",
    description: "Business Intelligence and data visualization with Power BI",
  },
];

export const profile = {
  name: "Hugo Ferreira Quinteiro",
  title:
    "ERP & Data Specialist | Sankhya | Oracle PL/SQL | Node.js APIs | BI & Process Automation",
  summary: `ERP, Database, and Process Automation Specialist with over 20 years of experience in enterprise management systems.

I serve as a technical reference in the evolution of Sankhya ERP, connecting ERP, Oracle database, BI, and APIs to eliminate manual tasks and generate real operational efficiency.

My work involves advanced Sankhya customizations, Node.js integration development, Oracle/PostgreSQL database modeling and optimization, and data structuring for BI with Qlik Sense and Power BI.

I have strong knowledge in tax and finance (SPED, Sintegra, reconciliations, and banking interfaces) and extensive experience translating business needs into practical technical solutions.`,
  email: "hugo@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugofquinteiro/",
  photo: "/fotoHero.png",
  whatsapp: "5511985258270",
};
