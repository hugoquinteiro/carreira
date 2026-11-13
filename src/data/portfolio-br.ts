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
      "React", "Vue.js", "Qlik Sense", "Sankhya ERP",
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
        id: "p0",
        name: "Implantação Loja De departamentos",
        description:
          "WebSac sistema de automação comercail",
        technologies: ["2012","PHP", "Linux", "PostgreSQL", "SQL"],
        story: `Em 2012, após 2 anos do lançamento do WebSac, vale um rápido parêntese: o WebSac é uma evolução do sistema SAC da Control Ware, que fez muito sucesso nos anos 90, tendo iniciado seu desenvolvimento dentro do Pão de Açúcar 🏬.

            O desafio aqui foi aplicar a nova solução web, substituindo o antigo SAC-DOS (ainda em DBASE) em grandes varejistas no estado de Roraima 🌎.

            O sistema estava preparado e os testes já haviam sido realizados, mas o maior problema foi que o servidor em ambiente Windows não suportou a carga de dados 💥. Tivemos que "pivotar" para Linux no meio da implantação 🐧, o que acabou se tornando um case de sucesso e foi replicado nos clientes seguintes 🚀.

            Valeu muito a pena — inclusive pelas noites comendo o típico peixe “Filhote” da região 🐟😄.`,
        metrics: ["Troca de Sistema DOS para ambiente Web", "Treinamento e transformação da cultura dos usuários"],
        learnings: ["Desenvolvimento de Querys complexas", "Implatanção da solução em ambiente Linux Centos"],
    },
    {
      id: "p1",
      name: "Sistema de Pré-vendas para Feiras",
      description:
        "Aplicação interna para registro rápido de pedidos em feiras comerciais, registrando as vendas no checkout",
      technologies: ["2021","Engine EJS", "Node.js", "PostgreSQL"],
      story: `Em 2021, ainda finalizando a implantação do sistema Sankhya, participamos da feira Beauty Fair 🎪. Durante a preparação, percebemos que precisaríamos de um sistema de pré-venda. Com pouco tempo disponível, o desafio foi criar um app rápido e prático para celular 📱.

              Ainda em fase de estudos na plataforma web, me arrisquei a desenvolver um software que registrava a venda e imprimia um cupom com os itens e seus respectivos códigos de barras 🧾. O cliente era direcionado ao caixa com o cupom, que mesmo sem integração via API conseguia capturar os itens via EAN.

              Ansiedade grande, uma noite sem dormir 😅 — mas no final, tudo correu bem ✅`,
      metrics: ["Captura imediata de pedidos durante feiras", "Sincronização automática com ERP em tempo real"],
      learnings: ["Desenvolvimento de apps offline ambientes com conexão instável", "Design de interfaces rápidas","Impressão em etiquetas térmicas"],
  },
  {
  id: "p2",
  name: "Sellout - Monitoramento de Vendas nos PDVs",
  description:
    "Sistema para acompanhamento em tempo real das vendas realizadas por promotores em campo, eliminando controles manuais em planilhas",
  technologies: ["Google Firebase", "Cloud Functions", "Node.js", "PostgreSQL"],
  story: `O projeto nasceu da necessidade de rastrear as vendas realizadas nos pontos de venda em tempo real 📊. Até então, os promotores anotavam as vendas em planilhas, que só eram consolidadas manualmente no final do mês — um processo demorado e sujeito a erros.

          A proposta foi criar uma solução simples e acessível para uso em campo 📱, onde cada promotor pudesse registrar suas vendas no momento em que aconteciam. Os dados eram enviados para a nuvem e já ficavam disponíveis para acompanhamento imediato pela gestão.

          O grande desafio foi integrar sistemas legados com uma aplicação moderna, mantendo o custo da infraestrutura extremamente baixo 💸. Utilizamos o Google Firebase para a aplicação web e as functions, enquanto o banco de dados principal permanecia em PostgreSQL.

          O resultado foi uma virada de chave na visibilidade das operações e na confiança dos dados ✅`,
  metrics: [
    "Redução de 90% no tempo de consolidação dos dados",
    "Visibilidade em tempo real das vendas por promotor"
  ],
  learnings: [
    "Integração complexa entre sistemas legados e aplicações modernas",
    "Importância de UX simples para usuários em campo",
    "Arquitetura de baixo custo com Firebase + PostgreSQL"
  ],
},
  {
  id: "p3",
  name: "Leitor Automático de PDF de Pedidos",
  description:
    "Sistema que realiza a leitura automática de PDFs de pedidos de clientes e converte em registros estruturados no ERP, eliminando a digitação manual",
  technologies: ["Node.js", "JavaScript", "Oracle", "Regex", "n8n"],
  story: `Os clientes enviavam pedidos em diversos formatos de PDF 📄, cada um com seu próprio layout. A equipe interna gastava horas digitando manualmente essas informações no ERP, um processo cansativo, demorado e altamente suscetível a erros.

          Em 2026, implementei uma automação utilizando o n8n ⚙️ que fazia a leitura inteligente desses PDFs. A partir de técnicas avançadas de parsing com Regex, o sistema conseguia identificar os campos relevantes independentemente do layout do documento.

          A importação passou a acontecer de forma transparente e segura diretamente dentro do ERP Sankhya, sem necessidade de intervenção manual 🤖.

          O resultado foi um ganho imediato de produtividade, confiabilidade dos dados e agilidade no atendimento dos pedidos ✅`,
  metrics: [
    "Eliminação de 100% da digitação manual de pedidos",
    "Redução de erros de entrada de dados em 95%"
  ],
  learnings: [
    "Técnicas avançadas de parsing com Regex para diferentes layouts de PDF",
    "Importância de tratamento de exceções robusto",
    "Automação de processos com n8n integrada ao ERP"
  ],
},
{
  id: "p4",
  name: "Uploader de Mídia para Influenciadores",
  description:
    "Sistema para recebimento, organização e controle de mídias enviadas por influenciadores, integrado ao fluxo interno da empresa",
  technologies: ["HTML", "Google Firebase"],
  story: `As mídias produzidas por influenciadores chegavam por WhatsApp e e-mail 📩, tornando o controle completamente caótico. Era difícil saber quem havia entregue o material, quando foi enviado e em qual etapa do processo aquele conteúdo estava.

          A solução foi criar um portal simples e direto 🌐, onde cada influenciador pudesse fazer o upload de suas mídias de forma organizada. Assim que o arquivo era enviado, ele já entrava no fluxo interno da empresa para validação e aprovação.

          O desafio principal foi lidar com uploads de arquivos grandes, garantindo feedback em tempo real para o usuário durante o envio ⏳.

          O resultado foi a centralização total das entregas, rastreabilidade completa do conteúdo e muito mais organização no processo ✅`,
  metrics: [
    "Controle centralizado de 100% das entregas de mídia",
    "Rastreabilidade completa do fluxo de conteúdo"
  ],
  learnings: [
    "Gestão de uploads de arquivos grandes com feedback em tempo real",
    "Criação de fluxos de aprovação simplificados",
    "Organização de fluxo de conteúdo com Firebase"
  ],
},

{
  id: "p5",
  name: "DRE Gerencial Dinâmico – Sankhya + Qlik Sense",
  description:
    "Desenvolvimento de uma solução de DRE gerencial dinâmica, integrada ao Sankhya ERP e Qlik Sense, permitindo que os próprios gestores configurem estruturas de análise e acompanhem os resultados financeiros até o nível do lançamento de origem.",
  technologies: ["Sankhya ERP", "Oracle", "SQL", "Qlik Sense", "ETL"],
  story: `O projeto começou com uma necessidade aparentemente simples: desenvolver um DRE (Demonstrativo do Resultado do Exercício) para facilitar o acompanhamento dos resultados da empresa.

          Mas, na prática, cada empresa possui suas particularidades. A necessidade de analisar resultados por diferentes canais de venda (Centros de Resultado), inclusive consolidando informações de mais de uma empresa, tornou o projeto muito mais amplo.

          Inicialmente, a proposta era consultar os dados do Sankhya e apresentá-los no Qlik Sense. A solução funcionava, mas percebi uma limitação: em uma empresa em constante crescimento e mudança, a estrutura do relatório também precisa evoluir.

          Os gestores precisavam ter autonomia para reorganizar blocos e títulos, incluir ou excluir Naturezas e Centros de Resultado, sem depender da equipe de TI a cada alteração.

          O verdadeiro desafio foi transformar um relatório estático em uma estrutura dinâmica, permitindo que o próprio Controller administrasse as configurações do DRE.

          Após bastante trabalho e evolução, a solução está em funcionamento há pelo menos 5 anos.

          Hoje, permite análises sintéticas e analíticas, com navegação desde um resultado anual ou mensal até o detalhe da operação, identificando uma nota fiscal, um lançamento financeiro ou até mesmo os juros e multas de um lançamento.

          Mais do que desenvolver um relatório gerencial, a ideia foi criar uma ferramenta capaz de acompanhar a evolução do negócio e dar autonomia a quem utiliza a informação no dia a dia.`,
  metrics: [
    "Solução em funcionamento há pelo menos 5 anos",
    "Consolidação de informações de diferentes empresas e canais de venda",
    "Configuração do DRE com autonomia para o Controller",
    "Navegação do resultado consolidado até o lançamento de origem"
  ],
  learnings: [
    "Modelagem de estruturas gerenciais flexíveis e dinâmicas",
    "Integração de dados entre Sankhya ERP, Oracle e Qlik Sense",
    "Construção de análises financeiras sintéticas e analíticas",
    "Transformação de necessidades de negócio em soluções escaláveis e de longa duração"
  ],
},

];

export const coursesData: Course[] = [
  {
    id: "c1",
    name: "Administração PostgreSQL com Alta Performance",
    institution: "4 Linux",
    year: "2016",
    description: "Administração, tuning e desempenho em PostgreSQL - [40 horas]",
  },
  {
    id: "c2",
    name: "Analista Fiscal",
    institution: "Senac",
    year: "2014",
    description: "Impostos, SPED, Sintegra - [40 horas]",
  },
  {
    id: "c3",
    name: "Certificado Sankhya",
    institution: "Universidade Sankhya",
    year: "2019",
    description: "Modulos: Comercial, Financeiro, Estoque, Parametrização, Construtor de Dashboard e Telas",
  },
  {
    id: "c4",
    name: "Qlik Sense",
    institution: "Udemy",
    year: "2020",
    description: "Muito Mais que um DashBoard",
  },
  {
    id: "c5",
    name: "Vue JS 2",
    institution: "Udemy - Leonardo Leitão",
    year: "2021",
    description: "Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)",
  },
  {
    id: "c6",
    name: "Formação Dev",
    institution: "Coder - Leonardo Leitão",
    year: "2024",
    description: "Arquitetura avançada de sistemas, passando por desenvolvimento full-stack e soft skills essenciais - [em desenvolvimento]",
  }

];

export const profile = {
  name: "Hugo Ferreira Quinteiro",
  title:
    "Especialista em ERP & Dados | Sankhya | Oracle PL/SQL | APIs Node.js | BI & Automação de Processos",
  summary: `Especialista em ERP, Banco de Dados e Automação de Processos com mais de 20 anos de experiência em sistemas de gestão empresarial.

Atuo como referência técnica na evolução do ERP Sankhya, conectando ERP, banco Oracle, BI e APIs para eliminar tarefas manuais e gerar eficiência operacional real.

Minha atuação envolve customizações avançadas no Sankhya, desenvolvimento de integrações com Node.js, modelagem e otimização de bancos Oracle/PostgreSQL e estruturação de dados para BI com Qlik Sense e Power BI.

Possuo forte conhecimento em fiscal e financeiro (SPED, Sintegra, conciliações e interfaces bancárias) e grande experiência traduzindo necessidades do negócio em soluções técnicas práticas.`,
  email: "hugofquinteiro@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugofquinteiro/",
  photo: `${import.meta.env.BASE_URL}FotoProfissional2.jpg`,
  whatsapp: "5511985258270",
};
