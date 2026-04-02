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
}

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    type: "study",
    startYear: "2002",
    endYear: "2005",
    title: "Técnico em Informática",
    institution: "ETEC - Escola Técnica",
    description: "Formação técnica em informática com foco em desenvolvimento de software e administração de redes.",
    activities: ["Desenvolvimento de aplicações desktop", "Administração de redes locais", "Banco de dados relacional"],
    technologies: ["Delphi", "SQL Server", "Windows Server"],
    achievements: ["Melhor projeto de conclusão de curso", "Monitor de laboratório de informática"],
  },
  {
    id: "2",
    type: "work",
    startYear: "2005",
    endYear: "2008",
    title: "Suporte Técnico",
    institution: "TechCorp Solutions",
    description: "Início da carreira profissional atuando com suporte técnico e infraestrutura de TI.",
    activities: ["Suporte a usuários finais", "Manutenção de servidores", "Configuração de rede"],
    technologies: ["Windows Server", "Active Directory", "TCP/IP"],
    achievements: ["Redução de 40% no tempo de atendimento", "Implementação do sistema de tickets"],
  },
  {
    id: "3",
    type: "study",
    startYear: "2006",
    endYear: "2010",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal",
    description: "Graduação em Ciência da Computação com ênfase em engenharia de software e banco de dados.",
    activities: ["Pesquisa em otimização de consultas SQL", "Projetos de engenharia de software", "Iniciação científica"],
    technologies: ["Java", "C++", "Oracle", "PostgreSQL"],
    achievements: ["Bolsista de iniciação científica", "Artigo publicado em congresso nacional"],
  },
  {
    id: "4",
    type: "work",
    startYear: "2008",
    endYear: "2013",
    title: "Desenvolvedor Pleno",
    institution: "DataSys Tecnologia",
    description: "Desenvolvimento de aplicações web e administração de bancos de dados corporativos.",
    activities: ["Desenvolvimento full-stack", "Modelagem de banco de dados", "Otimização de performance"],
    technologies: ["C#", ".NET", "SQL Server", "JavaScript", "jQuery"],
    achievements: ["Liderança técnica de 3 projetos", "Migração de sistema legado para web"],
  },
  {
    id: "5",
    type: "work",
    startYear: "2013",
    endYear: "2019",
    title: "DBA / Desenvolvedor Sênior",
    institution: "Enterprise Solutions LTDA",
    description: "Atuação como DBA e desenvolvedor sênior, liderando projetos de alta complexidade.",
    activities: ["Administração de bancos Oracle e SQL Server", "Arquitetura de soluções", "Mentoria de equipe"],
    technologies: ["Oracle", "PL/SQL", "Python", "React", "Docker"],
    achievements: ["Redução de 60% em custos de infraestrutura", "Implementação de CI/CD"],
  },
  {
    id: "6",
    type: "study",
    startYear: "2018",
    endYear: "2020",
    title: "Pós-graduação em Arquitetura de Software",
    institution: "Instituto de Tecnologia",
    description: "Especialização em arquitetura de software, cloud computing e DevOps.",
    activities: ["Cloud computing e microsserviços", "DevOps e automação", "Arquitetura de soluções"],
    technologies: ["AWS", "Kubernetes", "Terraform", "Node.js"],
    achievements: ["Projeto final nota máxima", "Certificação AWS Solutions Architect"],
  },
  {
    id: "7",
    type: "work",
    startYear: "2019",
    endYear: "Atual",
    title: "Tech Lead / Arquiteto de Software",
    institution: "Innovation Labs",
    description: "Liderança técnica e arquitetura de soluções em cloud para projetos de grande escala.",
    activities: ["Arquitetura de microsserviços", "Liderança de equipe de 8 devs", "Definição de padrões técnicos"],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
    achievements: ["Migração completa para cloud", "99.9% de uptime nos serviços críticos", "Redução de 50% no time-to-market"],
    isCurrent: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    name: "DataFlow Manager",
    description: "Plataforma de gerenciamento e monitoramento de pipelines de dados em tempo real com dashboards interativos.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com",
    link: "https://demo.example.com",
  },
  {
    id: "p2",
    name: "CloudOps Dashboard",
    description: "Dashboard para monitoramento de infraestrutura cloud com alertas inteligentes e métricas customizáveis.",
    technologies: ["React", "Python", "AWS", "Grafana", "Terraform"],
    github: "https://github.com",
  },
  {
    id: "p3",
    name: "SQL Optimizer Pro",
    description: "Ferramenta de análise e otimização de consultas SQL com sugestões automáticas de índices e reescrita de queries.",
    technologies: ["Python", "PostgreSQL", "Oracle", "Machine Learning"],
    github: "https://github.com",
    link: "https://demo.example.com",
  },
];

export const profile = {
  name: "João Silva",
  title: "Tech Lead | Arquiteto de Software | DBA",
  summary:
    "Profissional com mais de 15 anos de experiência em tecnologia, especializado em arquitetura de software, administração de bancos de dados e liderança técnica. Apaixonado por resolver problemas complexos e construir soluções escaláveis.",
  email: "joao.silva@email.com",
  linkedin: "https://linkedin.com/in/joaosilva",
  whatsapp: "5511999999999",
};
