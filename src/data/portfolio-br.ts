export type TimelineItemType = "study" | "work";

export interface TimelineEntry {
  id: string;
  type: TimelineItemType;
  startYear: string;
  endYear: string;
  title: string;
  institution: string;
  description: string;
  activities: string[];
  technologies: string[];
  achievements: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  story?: string;
  metrics?: string[];
  learnings?: string[];
}

export interface Course {
  id: string;
  name: string;
  institution: string;
  year: string;
  description?: string;
}

export interface PortfolioLabels {
  heroExplore: string;
  timelineTitle: string;
  timelineSubtitle: string;
  filterAll: string;
  filterStudy: string;
  filterWork: string;
  timelineActivities: string;
  timelineTechnologies: string;
  timelineAchievements: string;
  timelineCurrent: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectMore: string;
  projectStory: string;
  projectMetrics: string;
  projectLearnings: string;
  coursesTitle: string;
  coursesSubtitle: string;
  coursesButton: string;
  contactTitle: string;
  contactSubtitle: string;
  contactRights: string;
}

export const labels: PortfolioLabels = {
  heroExplore: "Explorar",
  timelineTitle: "Minha Jornada",
  timelineSubtitle: "Uma trajetória construída com dedicação, aprendizado constante e paixão por tecnologia",
  filterAll: "Todos",
  filterStudy: "Estudos",
  filterWork: "Trabalhos",
  timelineActivities: "Principais Atividades",
  timelineTechnologies: "Tecnologias",
  timelineAchievements: "Conquistas",
  timelineCurrent: "Atual",
  projectsTitle: "Projetos em Destaque",
  projectsSubtitle: "Soluções que criei ou contribuí significativamente",
  projectMore: "Mais detalhes",
  projectStory: "História do Projeto",
  projectMetrics: "Métricas de Impacto",
  projectLearnings: "O que aprendi",
  coursesTitle: "Cursos & Certificações",
  coursesSubtitle: "Formação complementar e aprendizado contínuo",
  coursesButton: "Cursos & Certificações",
  contactTitle: "Vamos Conversar?",
  contactSubtitle: "Gosta de falar sobre tecnologia, dados, processos, entre em contato.",
  contactRights: "Todos os direitos reservados.",
};

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    type: "study",
    startYear: "2000",
    endYear: "2003",
    title: "Tecnologia em Processamento de Dados",
    institution: "Unicastelo",
    description: "Formação superior focada em desenvolvimento de sistemas, banco de dados e lógica de programação.",
    activities: ["Modelagem de banco de dados", "Desenvolvimento de sistemas", "Lógica e algoritmos"],
    technologies: ["SQL", "Delphi", "Banco Relacional"],
    achievements: [],
  },
  {
    id: "2",
    type: "study",
    startYear: "2005",
    endYear: "2007",
    title: "Administração de Banco de Dados",
    institution: "Faculdade IBTA",
    description: "Especialização em administração e performance de bancos de dados corporativos.",
    activities: ["Otimização de queries", "Administração de bancos", "Performance e tuning"],
    technologies: ["Oracle", "PostgreSQL", "SQL"],
    achievements: [],
  },
  {
    id: "3",
    type: "work",
    startYear: "2002",
    endYear: "2019",
    title: "Analista de Sistemas | DBA | Product Owner",
    institution: "Control Ware Sistemas",
    description:
      "Atuação completa no ciclo de vida de ERP: implantação, suporte, análise, testes, banco de dados e priorização de demandas como Product Owner.",
    activities: [
      "Implantação e suporte de ERP e PDV",
      "Homologação e testes do produto",
      "Administração PostgreSQL e rotinas avançadas SQL/PLSQL",
      "Levantamento de requisitos e priorização de backlog",
      "Infraestrutura Linux CentOS em cloud",
      "Atuação forte em módulos Fiscal e Financeiro (SPED, Sintegra, boletos, DDA)",
    ],
    technologies: ["PostgreSQL", "SQL", "PL/SQL", "Linux", "ERP"],
    achievements: [
      "Participação direta na evolução do produto ERP por mais de 16 anos",
      "Referência técnica em banco e fiscal dentro da empresa",
    ],
  },
  {
    id: "4",
    type: "work",
    startYear: "2019",
    endYear: "Atual",
    title: "Especialista em ERP & Dados | Sankhya",
    institution: "MQ Professional Hair Styling",
    description:
      "Responsável pela evolução técnica do ERP Sankhya, integrando banco Oracle, BI, APIs e automações que eliminam processos manuais nas áreas financeira, fiscal, RH, marketing e vendas.",
    activities: [
      "Customização e evolução do Sankhya com PL/SQL, JavaScript e Java",
      "Criação de procedures, triggers e views para automação de processos",
      "Estruturação de dados para BI (Qlik Sense e Power BI)",
      "Desenvolvimento de APIs Node.js para integrações financeiras e RH",
      "Criação de aplicações internas para automação operacional",
      "Leitor automático de PDFs de pedidos",
      "Sistema de pré-vendas para feiras",
      "Uploader de mídia para influenciadores",
      "Sistema de Sellout para promotores em campo",
    ],
    technologies: [
      "Oracle", "PL/SQL", "SQL", "Node.js", "PostgreSQL",
      "React", "Vue.js", "Qlik Sense", "Power BI", "Sankhya ERP",
    ],
    achievements: [
      "Eliminação de diversos processos manuais através de automações",
      "Integração completa entre ERP, BI e sistemas internos",
      "Referência técnica em dados e ERP dentro da empresa",
    ],
    isCurrent: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    name: "Sellout Promotores PDV",
    description:
      "Aplicação web para registro de vendas de promotores diretamente do ponto de venda, integrada ao ERP Sankhya e banco Oracle.",
    technologies: ["Node.js", "PostgreSQL", "React", "API REST"],
    story: "Nasceu da necessidade de rastrear vendas em tempo real nos pontos de venda. Antes, os promotores registravam vendas em planilhas que eram consolidadas manualmente no final do mês.",
    metrics: ["Redução de 90% no tempo de consolidação de dados", "Visibilidade em tempo real das vendas por promotor"],
    learnings: ["Integração complexa entre sistemas legados e aplicações modernas", "Importância de UX simples para usuários em campo"],
  },
  {
    id: "p2",
    name: "Leitor Automático de PDF de Pedidos",
    description:
      "Sistema que realiza leitura automática de PDFs de pedidos de clientes e converte em registros estruturados no ERP, eliminando digitação manual.",
    technologies: ["Node.js", "JavaScript", "Oracle", "Regex"],
    story: "Clientes enviavam pedidos em formatos variados de PDF. A equipe gastava horas digitando esses pedidos manualmente no ERP, gerando erros e atrasos.",
    metrics: ["Eliminação de 100% da digitação manual de pedidos", "Redução de erros de entrada de dados em 95%"],
    learnings: ["Técnicas avançadas de parsing com Regex para diferentes layouts de PDF", "Importância de tratamento de exceções robusto"],
  },
  {
    id: "p3",
    name: "Sistema de Pré-vendas para Feiras",
    description:
      "Aplicação interna para registro rápido de pedidos em feiras comerciais, sincronizando posteriormente com o ERP.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    story: "Em feiras comerciais, a equipe de vendas precisava anotar pedidos em papel e depois digitar tudo no sistema, causando perda de vendas e dados.",
    metrics: ["Captura imediata de pedidos durante feiras", "Sincronização automática com ERP em tempo real"],
    learnings: ["Desenvolvimento de apps offline-first para ambientes com conexão instável", "Design de interfaces rápidas para uso em pé"],
  },
  {
    id: "p4",
    name: "Uploader de Mídia para Influenciadores",
    description:
      "Sistema para recebimento, organização e controle de mídias enviadas por influenciadores, integrado ao fluxo interno da empresa.",
    technologies: ["Node.js", "React", "PostgreSQL"],
    story: "Influenciadores enviavam mídias por WhatsApp e email, tornando o controle caótico. Era impossível rastrear quem entregou o quê e quando.",
    metrics: ["Controle centralizado de 100% das entregas de mídia", "Rastreabilidade completa do fluxo de conteúdo"],
    learnings: ["Gestão de uploads de arquivos grandes com feedback em tempo real", "Criação de fluxos de aprovação simplificados"],
  },
];

export const coursesData: Course[] = [
  {
    id: "c1",
    name: "Oracle Database Administration",
    institution: "Oracle University",
    year: "2010",
    description: "Administração avançada de banco de dados Oracle",
  },
  {
    id: "c2",
    name: "Scrum Foundation",
    institution: "CertiProf",
    year: "2018",
    description: "Fundamentos de metodologias ágeis e framework Scrum",
  },
  {
    id: "c3",
    name: "JavaScript & Node.js",
    institution: "Udemy",
    year: "2020",
    description: "Desenvolvimento backend com Node.js e APIs REST",
  },
  {
    id: "c4",
    name: "React - Do Zero ao Avançado",
    institution: "Udemy",
    year: "2021",
    description: "Desenvolvimento frontend com React, hooks e context API",
  },
  {
    id: "c5",
    name: "Power BI & Análise de Dados",
    institution: "Alura",
    year: "2022",
    description: "Business Intelligence e visualização de dados com Power BI",
  },
];

export const profile = {
  name: "Hugo Ferreira Quinteiro",
  title:
    "Especialista em ERP & Dados | Sankhya | Oracle PL/SQL | APIs Node.js | BI & Automação de Processos",
  summary: `Especialista em ERP, Banco de Dados e Automação de Processos com mais de 20 anos de experiência em sistemas de gestão empresarial.

Atuo como referência técnica na evolução do ERP Sankhya, conectando ERP, banco Oracle, BI e APIs para eliminar tarefas manuais e gerar eficiência operacional real.

Minha atuação envolve customizações avançadas no Sankhya, desenvolvimento de integrações com Node.js, modelagem e otimização de bancos Oracle/PostgreSQL e estruturação de dados para BI com Qlik Sense e Power BI.

Possuo forte conhecimento em fiscal e financeiro (SPED, Sintegra, conciliações e interfaces bancárias) e grande experiência traduzindo necessidades do negócio em soluções técnicas práticas.`,
  email: "hugo@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugofquinteiro/",
  photo: "/fotoHero.png",
  whatsapp: "5511985258270",
};
