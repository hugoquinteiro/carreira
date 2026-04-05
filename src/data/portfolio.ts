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
      "Oracle",
      "PL/SQL",
      "SQL",
      "Node.js",
      "PostgreSQL",
      "React",
      "Vue.js",
      "Qlik Sense",
      "Power BI",
      "Sankhya ERP",
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
  },
  {
    id: "p2",
    name: "Leitor Automático de PDF de Pedidos",
    description:
      "Sistema que realiza leitura automática de PDFs de pedidos de clientes e converte em registros estruturados no ERP, eliminando digitação manual.",
    technologies: ["Node.js", "JavaScript", "Oracle", "Regex"],
  },
  {
    id: "p3",
    name: "Sistema de Pré-vendas para Feiras",
    description:
      "Aplicação interna para registro rápido de pedidos em feiras comerciais, sincronizando posteriormente com o ERP.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "p4",
    name: "Uploader de Mídia para Influenciadores",
    description:
      "Sistema para recebimento, organização e controle de mídias enviadas por influenciadores, integrado ao fluxo interno da empresa.",
    technologies: ["Node.js", "React", "PostgreSQL"],
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
  photo:"/fotoHero.png",
  whatsapp: "5511999999999",
};