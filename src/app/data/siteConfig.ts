import { IconType } from 'react-icons';
import { BiLogoTypescript, BiLogoGoLang } from 'react-icons/bi';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaCode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiPostgresql, SiGo, SiFlutter, SiMongodb } from 'react-icons/si';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface UiTranslations {
  navHome: string;
  navProjects: string;
  navAbout: string;
  navResume: string;
  heroContactBtn: string;
  heroDownloadCvBtn: string;
  recentProjectsTitle: string;
  projectsSeeCodeBtn: string;
  allProjectsBtn: string;
  allProjectsTitle: string;
  allProjectsDescription: string;
  gitNoDescription: string;
  gitSomethingWrong: string;
  gitFailedLoad: string;
  gitFailedDetails: string;
  aboutTitle: string;
  aboutSubtitle: string;
  experienceTitle: string;
  footerTitle: string;
  footerDescription: string;
  footerRights: string;
  resumeTools: string;
  resumeTitle: string;
  resumeDescription: string;
  resumeDownloadBtn: string;
}

interface TranslationContent {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  resume: string;
  aboutMe: string[];
  experiences: Experience[];
  ui: UiTranslations
}

interface SiteConfig {
  gitapi: string,
  personalData: {
    name: string;
    email: string;
    phone: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
  };
  technologies: Technology[];
  translations: {
    pt: TranslationContent;
    en: TranslationContent;
  };
}

export const languageStyles: { [key: string]: { icon: IconType; color: string; } } = {
  JavaScript: { icon: IoLogoJavascript, color: "#F7DF1E" },
  TypeScript: { icon: BiLogoTypescript, color: "#3178C6" },
  Go: { icon: BiLogoGoLang, color: "#00ADD8" },
  Python: { icon: FaPython, color: "#3776AB" },
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  default: { icon: FaCode, color: "gray.500" },
};

export const siteConfig: SiteConfig = {
    gitapi: "https://api.github.com/users/Llocus",
    personalData: {
    name: "Victor Hugo Camerro",
    email: "vh.camerro@gmail.com",
    phone: "5517996501023",
  },

  socialLinks: {
    github: "https://github.com/Llocus",
    linkedin: "https://www.linkedin.com/in/victor-hugo-camerro-00b488181/",
    whatsapp: "https://wa.me/5517996501023",
    email: "mailto:vh.camerro@gmail.com",
  },

  technologies: [
    { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Golang', icon: SiGo, color: '#00ADD8' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ],
  translations: {
    pt: {
      metadata: {
        title: "Victor Hugo Camerro - Desenvolvedor FullStack",
        description: "Portfólio de Victor Hugo Camerro",
      },
      title: "Desenvolvedor FullStack | Engenheiro de Software",
      aboutMe: [
        "Engenheiro de software, muito dedicado e apaixonado pela arte da codificação, na busca de soluções aos problemas.",
        "Com base sólida na Ciência da Computação e muita criativa, tenho como desafios transformar problemas em soluções.",
        "Minha trajetória vai de projetos de automação, como freelancer, a desenvolvimento de sistemas robustos em ambientes corporativos; mediante stacks modernas e DevOps.",
        "Ciente dos novos desafios tecnológicos, vivo incessantemente em busca de novos conhecimentos."
      ],
      resume: "/Curriculo_Victor.pdf",
      experiences: [
        {
          role: 'Desenvolvedor FullStack',
          company: 'Atlas',
          period: 'Junho, 2022 - Novembro, 2023',
          description: 'Desenvolvimento com React, NodeJS, MongoDB, Docker, RabbitMQ, Kubernetes e Git.',
        },
        {
          role: 'Desenvolvedor Frontend Júnior',
          company: 'Convertize',
          period: 'Outubro, 2021 - Janeiro, 2022',
          description: 'Desenvolvimento com React, Javascript e Django.',
        },
        {
          role: 'Freelancer',
          company: 'Autônomo',
          period: 'Novembro, 2020 - Outubro, 2021',
          description: 'Desenvolvimento de projetos de automação (Python), configuração de servidores (API) e desenvolvimento de sites e sistemas (React, Javascript).',
        }
      ],
      ui: {
        navHome: "Inicio",
        navProjects: "Projetos",
        navAbout: "Sobre",
        navResume: "Currículo",
        heroContactBtn: "Entrar em Contato",
        heroDownloadCvBtn: "Baixar Currículo",
        recentProjectsTitle: "Projetos Recentes",
        projectsSeeCodeBtn: "Ver Código",
        allProjectsBtn: "Ver Todos os Projetos",
        allProjectsTitle: "Todos os Projetos",
        allProjectsDescription: "Uma coleção completa dos meus repositórios públicos no GitHub.",
        gitNoDescription: "Repositório sem descrição disponível.",
        gitSomethingWrong: "Oops! Algo deu errado.",
        gitFailedLoad: "Não foi possível carregar os dados do GitHub.",
        gitFailedDetails: "Isso pode ser devido ao limite de requisições da API. Por favor, tente novamente mais tarde.",
        aboutTitle: "Sobre Mim & Habilidades",
        aboutSubtitle: "Um Pouco Sobre Minha Jornada",
        experienceTitle: "Experiência Profissional",
        footerTitle: "Vamos nos conectar!",
        footerDescription: "Sinta-se à vontade para entrar em contato.",
        footerRights: "Todos os direitos reservados.",
        resumeTools: "Tecnologias e Ferramentas",
        resumeTitle: "Carreira e Competências",
        resumeDescription: "Minha jornada no desenvolvimento de software e as tecnologias que domino.",
        resumeDownloadBtn: "Baixar Currículo em PDF",
      }
    },
    en: {
       metadata: {
        title: "Victor Hugo Camerro - FullStack Developer",
        description: "Portfolio of Victor Hugo Camerro",
      },
      title: "FullStack Developer | Software Engineer",
      aboutMe: [
        "A software engineer, dedicated and passionate about the art of coding, I strive to find solutions to problems.",
        "With a solid foundation in Computer Science and a strong creative mind, I embrace the challenges of transforming problems into solutions.",
        "My career path ranges from automation projects as a freelancer to developing robust systems in corporate environments using modern stacks and DevOps.",
        "Aware of new technological challenges, I'm constantly seeking new knowledge."
      ],
      resume: "/Resume_Victor.pdf",
      experiences: [
        {
          role: 'FullStack Developer',
          company: 'Atlas',
          period: 'June, 2022 - November, 2023',
          description: 'Development with React, NodeJS, MongoDB, Docker, RabbitMQ, Kubernetes, and Git.',
        },
        {
          role: 'Junior Frontend Developer',
          company: 'Convertize',
          period: 'October, 2021 - January, 2022',
          description: 'Development with React, Javascript, and Django.',
        },
        {
          role: 'Freelancer',
          company: 'Self-employed',
          period: 'November, 2020 - October, 2021',
          description: 'Developed automation projects (Python), configured servers (API), and built websites and systems (React, Javascript).',
        }
      ],
      ui: {
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About",
        navResume: "Resume",
        heroContactBtn: "Get in Touch",
        heroDownloadCvBtn: "Download CV",
        recentProjectsTitle: "Recent Projects",
        projectsSeeCodeBtn: "See Code",
        allProjectsBtn: "View All Projects",
        allProjectsTitle: "All Projects",
        allProjectsDescription: "A complete collection of my public repositories on GitHub.",
        gitNoDescription: "Repository with no description available.",
        gitSomethingWrong: "Oops! Something went wrong.",
        gitFailedLoad: "Unable to load data from GitHub.",
        gitFailedDetails: "This may be due to the API request limit. Please try again later.",
        aboutTitle: "About Me & Skills",
        aboutSubtitle: "A Little About My Journey",
        experienceTitle: "Professional Experience",
        footerTitle: "Let's Connect!",
        footerDescription: "Feel free to get in touch through any of the channels below.",
        footerRights: "All rights reserved.",
        resumeTools: "Tecnologies and Tools",
        resumeTitle: "Career and Skills",
        resumeDescription: "My journey in software development and the technologies I master.",
        resumeDownloadBtn: "Download CV as PDF",
      }
    }
  }
};