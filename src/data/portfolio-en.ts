import type { PortfolioLabels, TimelineEntry, Project, Course } from "./portfolio-br";

export const labels: PortfolioLabels = {
  heroExplore: "Explore",
  timelineTitle: "My Journey",
  timelineSubtitle: "A path built with dedication, continuous learning, and passion for technology",
  filterAll: "All",
  filterStudy: "Education",
  filterWork: "Work",
  timelineActivities: "Main Activities",
  timelineTechnologies: "Technologies",
  timelineAchievements: "Achievements",
  timelineCurrent: "Current",
  projectsTitle: "Featured Projects",
  projectsSubtitle: "Solutions I created or significantly contributed to",
  projectMore: "More details",
  projectStory: "Project Story",
  projectMetrics: "Impact Metrics",
  projectLearnings: "What I Learned",
  coursesTitle: "Courses & Certifications",
  coursesSubtitle: "Additional education and continuous learning",
  coursesButton: "Courses & Certifications",
  contactTitle: "Let's Talk?",
  contactSubtitle: "Interested in technology, data, or processes? Get in touch.",
  contactRights: "All rights reserved.",
};

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    type: "study",
    startYear: "2000",
    endYear: "2003",
    title: "Information Technology - Data Processing",
    institution: "Unicastelo",
    description: "Higher education focused on system development, databases, and programming logic.",
    activities: ["Database modeling", "System development", "Logic and algorithms"],
    technologies: ["SQL", "Delphi", "Relational Databases"],
    achievements: [],
  },
  {
    id: "2",
    type: "study",
    startYear: "2005",
    endYear: "2007",
    title: "Database Administration",
    institution: "IBTA College",
    description: "Specialization in administration and performance of enterprise databases.",
    activities: ["Query optimization", "Database administration", "Performance and tuning"],
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
      "Full lifecycle experience in ERP: implementation, support, analysis, testing, database management, and backlog prioritization as Product Owner.",
    activities: [
      "ERP and POS implementation and support",
      "Product validation and testing",
      "PostgreSQL administration and advanced SQL/PLSQL routines",
      "Requirements gathering and backlog prioritization",
      "Linux (CentOS) cloud infrastructure",
      "Strong involvement in Tax and Financial modules (SPED, Sintegra, billing, DDA)",
    ],
    technologies: ["PostgreSQL", "SQL", "PL/SQL", "Linux", "ERP"],
    achievements: [
      "Direct contribution to ERP product evolution for over 16 years",
      "Technical reference in database and tax domains within the company",
    ],
  },
  {
    id: "4",
    type: "work",
    startYear: "2019",
    endYear: "Present",
    title: "ERP & Data Specialist | Sankhya",
    institution: "MQ Professional Hair Styling",
    description:
      "Responsible for the technical evolution of Sankhya ERP, integrating Oracle databases, BI, APIs, and automation to eliminate manual processes across finance, tax, HR, marketing, and sales.",
    activities: [
      "Customization and evolution of Sankhya using PL/SQL, JavaScript, and Java",
      "Development of procedures, triggers, and views for process automation",
      "Data structuring for BI (Qlik Sense and Power BI)",
      "Development of Node.js APIs for financial and HR integrations",
      "Creation of internal applications for operational automation",
      "Automated PDF order reader",
      "Pre-sales system for trade shows",
      "Media uploader for influencers",
      "Sellout system for field promoters",
    ],
    technologies: [
      "Oracle", "PL/SQL", "SQL", "Node.js", "PostgreSQL",
      "React", "Vue.js", "Qlik Sense", "Sankhya ERP",
    ],
    achievements: [
      "Eliminated multiple manual processes through automation",
      "Full integration between ERP, BI, and internal systems",
      "Technical reference in ERP and data within the company",
    ],
    isCurrent: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "p0",
    name: "Department Store ERP Implementation",
    description: "WebSac retail automation system",
    technologies: ["2012","PHP", "Linux", "PostgreSQL", "SQL"],
    story: `In 2012, two years after the launch of WebSac, it's worth a quick note: WebSac is an evolution of the SAC system from Control Ware, which was very successful in the 90s and originally developed within Pão de Açúcar.

The challenge was to implement the new web-based solution, replacing the legacy SAC-DOS (built in DBASE) in large retail companies in the state of Roraima.

The system was ready and tested, but the main issue was that the Windows server could not handle the data load. We had to pivot to Linux in the middle of the implementation, which turned into a successful case and was replicated in future clients.

It was absolutely worth it — including the nights enjoying the regional “Filhote” fish.`,
    metrics: ["Migration from DOS system to Web environment", "User training and cultural transformation"],
    learnings: ["Complex SQL query development", "Deployment in Linux (CentOS) environments"],
  },
  {
    id: "p1",
    name: "Pre-Sales System for Trade Shows",
    description: "Internal application for fast order entry during trade shows",
    technologies: ["2021","EJS Engine", "Node.js", "PostgreSQL"],
    story: `In 2021, while finalizing the Sankhya ERP implementation, we participated in the Beauty Fair. During preparation, we realized the need for a pre-sales system. With limited time, the challenge was to build a fast and practical mobile app.

Still learning web development at the time, I took the risk of building a system that recorded sales and printed receipts with item barcodes. Customers were directed to checkout with the receipt, which could read items via EAN even without API integration.

A stressful night with no sleep — but everything worked out in the end.`,
    metrics: ["Real-time order capture during trade shows", "Automatic ERP synchronization"],
    learnings: ["Offline-capable app development", "Fast UI design", "Thermal printing integration"],
  },
  {
    id: "p2",
    name: "Sellout - POS Sales Monitoring",
    description: "System for real-time tracking of field sales, eliminating spreadsheets",
    technologies: ["Google Firebase", "Cloud Functions", "Node.js", "PostgreSQL"],
    story: `The project was born from the need to track sales at points of sale in real time. Previously, promoters recorded sales in spreadsheets, consolidated manually at the end of the month — a slow and error-prone process.

The solution was a simple mobile-friendly system where promoters could register sales instantly. Data was sent to the cloud and made available immediately for management.

The main challenge was integrating legacy systems with a modern application while keeping infrastructure costs very low. Firebase was used for the app and functions, while PostgreSQL remained as the core database.

The result was a major improvement in visibility and data reliability.`,
    metrics: [
      "90% reduction in data consolidation time",
      "Real-time sales visibility per promoter"
    ],
    learnings: [
      "Complex integration between legacy and modern systems",
      "Importance of simple UX for field users",
      "Low-cost architecture with Firebase + PostgreSQL"
    ],
  },
  {
    id: "p3",
    name: "Automated PDF Order Reader",
    description: "System that converts PDF orders into structured ERP data",
    technologies: ["Node.js", "JavaScript", "Oracle", "Regex", "n8n"],
    story: `Clients sent orders in various PDF formats, each with its own layout. The team spent hours manually entering this data into the ERP.

In 2026, I implemented an automation using n8n that intelligently reads these PDFs. Using advanced regex parsing techniques, the system extracts relevant data regardless of layout.

The import process became fully automated within the ERP.

The result was a significant gain in productivity and data accuracy.`,
    metrics: [
      "100% elimination of manual data entry",
      "95% reduction in input errors"
    ],
    learnings: [
      "Advanced regex parsing techniques",
      "Importance of robust exception handling",
      "Process automation with n8n"
    ],
  },
  {
    id: "p4",
    name: "Media Uploader for Influencers",
    description: "System for managing media submissions from influencers",
    technologies: ["HTML", "Google Firebase"],
    story: `Media from influencers arrived via WhatsApp and email, creating a chaotic process.

The solution was a simple portal where influencers could upload their content in an organized way. Files would automatically enter the internal workflow for validation.

The main challenge was handling large file uploads with real-time feedback.

The result was full centralization and better process control.`,
    metrics: [
      "100% centralized media management",
      "Full content traceability"
    ],
    learnings: [
      "Large file upload handling",
      "Simplified approval workflows",
      "Content management with Firebase"
    ],
  },
  {
    id: "p5",
    name: "Dynamic Management P&L – Sankhya ERP + Qlik Sense",
    description:
      "Development of a dynamic management P&L solution integrated with Sankhya ERP and Qlik Sense, allowing managers to configure reporting structures and analyze financial results down to the original transaction level.",
    technologies: ["Sankhya ERP", "Oracle", "SQL", "Qlik Sense", "ETL"],
    story: `The project started with a seemingly simple requirement: developing a Profit and Loss Statement (P&L) to help managers monitor the company's financial performance.

            However, each company has its own reporting structure and business requirements. The need to analyze results across different sales channels (Cost Centers), including consolidated information from multiple companies, made the project much more comprehensive.

            Initially, the idea was to retrieve data from Sankhya ERP and display it in Qlik Sense. The solution worked, but I identified an important limitation: in a constantly growing and changing company, reporting structures also need to evolve.

            Managers needed the flexibility to reorganize sections and headings, add or remove financial categories and cost centers, without relying on the IT team for every change.

            The real challenge was turning a static report into a dynamic structure, allowing the Financial Controller to manage the P&L configuration independently.

            After significant development and continuous improvements, the solution has been running for at least 5 years.

            Today, it supports both summarized and detailed analysis, allowing users to navigate from annual or monthly financial results down to individual transactions, such as an invoice, a financial entry, or even interest and penalties associated with a transaction.

            The goal was not simply to build a management report, but to create a tool that could evolve alongside the business while giving users more autonomy in their daily work.`,
    metrics: [
      "Solution running in production for at least 5 years",
      "Consolidated reporting across multiple companies and sales channels",
      "Self-service P&L configuration for the Financial Controller",
      "Drill-down analysis from consolidated results to individual transactions"
    ],
    learnings: [
      "Designing flexible and dynamic management reporting structures",
      "Data integration between Sankhya ERP, Oracle and Qlik Sense",
      "Building summarized and detailed financial analysis",
      "Translating business requirements into scalable, long-term solutions"
    ],
  },
];

export const coursesData: Course[] = [
  {
    id: "c1",
    name: "High-Performance PostgreSQL Administration",
    institution: "4 Linux",
    year: "2016",
    description: "PostgreSQL administration, tuning, and performance - [40 hours]",
  },
  {
    id: "c2",
    name: "Tax Analyst",
    institution: "Senac",
    year: "2014",
    description: "Taxes, SPED, Sintegra - [40 hours]",
  },
  {
    id: "c3",
    name: "Sankhya Certification",
    institution: "Sankhya University",
    year: "2019",
    description: "Modules: Sales, Finance, Inventory, Configuration, Dashboard Builder and Screens",
  },
  {
    id: "c4",
    name: "Qlik Sense",
    institution: "Udemy",
    year: "2020",
    description: "Much More Than a Dashboard",
  },
  {
    id: "c5",
    name: "Vue JS 2",
    institution: "Udemy - Leonardo Leitão",
    year: "2021",
    description: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
  },
  {
    id: "c6",
    name: "Developer Program",
    institution: "Coder - Leonardo Leitão",
    year: "2024",
    description: "Advanced system architecture, full-stack development, and essential soft skills - [in progress]",
  }
];

export const profile = {
  name: "Hugo Ferreira Quinteiro",
  title:
    "ERP & Data Specialist | Sankhya | Oracle PL/SQL | Node.js APIs | BI & Process Automation",
  summary: `ERP, Database, and Process Automation Specialist with over 20 years of experience in enterprise systems.

I act as a technical reference in the evolution of Sankhya ERP, connecting ERP, Oracle databases, BI, and APIs to eliminate manual tasks and generate real operational efficiency.

My work includes advanced customization in Sankhya, Node.js integrations, database modeling and optimization (Oracle/PostgreSQL), and BI structuring with Qlik Sense and Power BI.

Strong expertise in tax and financial processes (SPED, Sintegra, reconciliations, banking integrations) and extensive experience translating business needs into practical technical solutions.`,
  email: "hugofquinteiro@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugofquinteiro/",
  photo: `${import.meta.env.BASE_URL}FotoProfissional2.jpg`,
  whatsapp: "5511985258270",
};