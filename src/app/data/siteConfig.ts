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
  ageModalTitle: string;
  ageModalSubtitle: string;
  ageModalPrivacy: string;
  ageModalLoading: string;
  ageModalStartBtn: string;
  ageModalCancelBtn: string;
  ageModalExitBtn: string;
  ageModalSuccessTitle: string;
  ageModalSuccessDesc: string;
  ageModalStatusReady: string;
  ageModalStatusSearching: string;
  ageModalStatusApproach: string;
  ageModalStatusUnderage: string;
  ageModalErrorCamera: string;
  ageModalErrorIA: string;
  ageModalTextScan: string;
  ageModalTextValidating: string;
  ageModalTextAge: string;
  ageModalTextYears: string;
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
    es: TranslationContent;
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
        "Com base sólida na Ciência da Computação e muita criatividade, tenho como desafios transformar problemas em soluções.",
        "Minha trajetória vai de projetos de automação, como freelancer, a desenvolvimento de sistemas robustos em ambientes corporativos; mediante stacks modernas e DevOps.",
        "Ciente dos novos desafios tecnológicos, vivo incessantemente em busca de novos conhecimentos."
      ],
      resume: "/Curriculo_Victor.pdf",
      experiences: [
        {
          role: 'Engenheiro de Software Independente',
          company: 'Freelancer / Autônomo',
          period: 'Novembro, 2023 - Presente',
          description: 'Liderança no desenvolvimento de aplicações full-stack utilizando Golang e React. Criação da plataforma Bitsolo, implementando conteinerização com Docker, e integração de APIs RESTful personalizadas.',
        },
        {
          role: 'Desenvolvedor Full-Stack',
          company: 'Atlas',
          period: 'Junho, 2022 - Novembro, 2023',
          description: 'Desenvolvimento de plataforma de gestão de riscos e logística com interfaces complexas em React. Orquestração de microsserviços de backend com Node.js, MongoDB, RabbitMQ, Docker e Kubernetes.',
        },
        {
          role: 'Desenvolvedor Frontend',
          company: 'Convertize',
          period: 'Outubro, 2021 - Janeiro, 2022',
          description: 'Desenvolvimento de interfaces de e-commerce responsivas e integração otimizada entre componentes visuais React e APIs em Django.',
        },
        {
          role: 'Desenvolvedor de Software',
          company: 'Freelancer',
          period: 'Novembro, 2020 - Outubro, 2021',
          description: 'Desenvolvimento de scripts em Python para automação web e criação de aplicações web completas conectando interfaces React com servidores de automação.',
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

        ageModalTitle: "Verificação de Idade",
        ageModalSubtitle: "Por favor, posicione seu rosto na câmera.",
        ageModalPrivacy: "Nenhuma imagem é salva.",
        ageModalLoading: "Carregando Módulos...",
        ageModalStartBtn: "Verificar com Câmera",
        ageModalCancelBtn: "Cancelar",
        ageModalExitBtn: "Sair do Site",
        ageModalSuccessTitle: "Acesso Liberado",
        ageModalSuccessDesc: "Entrando...",
        ageModalStatusReady: "IA Pronta. Inicie a verificação.",
        ageModalStatusSearching: "Buscando rosto...",
        ageModalStatusApproach: "Aproxime-se",
        ageModalStatusUnderage: "Idade detectada inferior a 18 anos.",
        ageModalErrorCamera: "Acesso à câmera negado.",
        ageModalErrorIA: "Falha no carregamento da IA.",
        ageModalTextScan: "Escaneando...",
        ageModalTextValidating: "Validando",
        ageModalTextAge: "Idade",
        ageModalTextYears: "anos"
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
          role: 'Independent Software Engineer',
          company: 'Freelance / Self-Employed',
          period: 'November, 2023 - Present',
          description: 'Spearheaded full-stack application development leveraging Golang and React. Engineered the Bitsolo platform utilizing Docker containerization and integrated custom RESTful APIs.',
        },
        {
          role: 'Full-Stack Developer',
          company: 'Atlas',
          period: 'June, 2022 - November, 2023',
          description: 'Architected a risk management and logistics platform with complex interactive interfaces using React. Orchestrated backend microservices utilizing Node.js, MongoDB, RabbitMQ, Docker, and Kubernetes.',
        },
        {
          role: 'Frontend Developer',
          company: 'Convertize',
          period: 'October, 2021 - January, 2022',
          description: 'Delivered responsive e-commerce interfaces and executed seamless integration between React visual components and Django APIs.',
        },
        {
          role: 'Software Developer',
          company: 'Freelance',
          period: 'November, 2020 - October, 2021',
          description: 'Built custom Python scripts for web automation and constructed end-to-end web applications connecting robust React interfaces with automation servers.',
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

        ageModalTitle: "Age Verification",
        ageModalSubtitle: "Please position your face in the camera.",
        ageModalPrivacy: "No images are saved.",
        ageModalLoading: "Loading Modules...",
        ageModalStartBtn: "Verify with Camera",
        ageModalCancelBtn: "Cancel",
        ageModalExitBtn: "Leave Site",
        ageModalSuccessTitle: "Access Granted",
        ageModalSuccessDesc: "Entering...",
        ageModalStatusReady: "AI Ready. Start verification.",
        ageModalStatusSearching: "Searching for face...",
        ageModalStatusApproach: "Move closer",
        ageModalStatusUnderage: "Detected age is under 18.",
        ageModalErrorCamera: "Camera access denied.",
        ageModalErrorIA: "Failed to load AI models.",
        ageModalTextScan: "Scanning...",
        ageModalTextValidating: "Validating",
        ageModalTextAge: "Age",
        ageModalTextYears: "years"
      }
    },
    es: {
      metadata: {
        title: "Victor Hugo Camerro - Desarrollador FullStack",
        description: "Portafolio de Victor Hugo Camerro"
      },
      title: "Desarrollador FullStack | Ingeniero de Software",
      aboutMe: [
        "Ingeniero de software, dedicado y apasionado por el arte de la codificación, en busca de soluciones a los problemas.",
        "Con una sólida base en Ciencias de la Computación y una mente creativa, asumo el desafío de transformar problemas en soluciones.",
        "Mi carrera abarca desde proyectos de automatización como freelancer hasta el desarrollo de sistemas robustos en entornos corporativos, utilizando stacks modernos y DevOps.",
        "Consciente de los nuevos desafíos tecnológicos, estoy en una búsqueda incesante de nuevos conocimientos."
      ],
      resume: "/Curriculum_Victor.pdf",
      experiences: [
        {
          role: "Ingeniero de Software Independiente",
          company: "Freelancer / Autónomo",
          period: "Noviembre, 2023 - Presente",
          description: "Liderazgo en el desarrollo de aplicaciones full-stack utilizando Golang y React. Creación de la plataforma Bitsolo, implementando contenedorización con Docker, e integración de APIs RESTful personalizadas."
        },
        {
          role: "Desarrollador Full-Stack",
          company: "Atlas",
          period: "Junio, 2022 - Noviembre, 2023",
          description: "Desarrollo de plataforma de gestión de riesgos y logística con interfaces complejas en React. Orquestación de microservicios de backend con Node.js, MongoDB, RabbitMQ, Docker y Kubernetes."
        },
        {
          role: "Desarrollador Frontend",
          company: "Convertize",
          period: "Octubre, 2021 - Enero, 2022",
          description: "Desarrollo de interfaces de comercio electrónico responsivas e integración optimizada entre componentes visuales de React y APIs en Django."
        },
        {
          role: "Desarrollador de Software",
          company: "Freelancer",
          period: "Noviembre, 2020 - Octubre, 2021",
          description: "Desarrollo de scripts en Python para automatización web y creación de aplicaciones web completas conectando interfaces React con servidores de automatización."
        }
      ],
      ui: {
        navHome: "Inicio",
        navProjects: "Proyectos",
        navAbout: "Sobre Mí",
        navResume: "Currículum",
        heroContactBtn: "Contactar",
        heroDownloadCvBtn: "Descargar CV",
        recentProjectsTitle: "Proyectos Recientes",
        projectsSeeCodeBtn: "Ver Código",
        allProjectsBtn: "Ver Todos los Proyectos",
        allProjectsTitle: "Todos los Proyectos",
        allProjectsDescription: "Una colección completa de mis repositorios públicos en GitHub.",
        gitNoDescription: "Repositorio sin descripción disponible.",
        gitSomethingWrong: "¡Ups! Algo salió mal.",
        gitFailedLoad: "No se pudieron cargar los datos de GitHub.",
        gitFailedDetails: "Esto puede deberse al límite de solicitudes de la API. Por favor, inténtelo de nuevo más tarde.",
        aboutTitle: "Sobre Mí & Habilidades",
        aboutSubtitle: "Un Poco Sobre Mi Trayectoria",
        experienceTitle: "Experiencia Profesional",
        footerTitle: "¡Conectemos!",
        footerDescription: "No dudes en ponerte en contacto.",
        footerRights: "Todos los derechos reservados.",
        resumeTools: "Tecnologías y Herramientas",
        resumeTitle: "Carrera y Competencias",
        resumeDescription: "Mi trayectoria en el desarrollo de software y las tecnologías que domino.",
        resumeDownloadBtn: "Descargar CV en PDF",

        ageModalTitle: "Verificación de edad",
        ageModalSubtitle: "Por favor, posiciona tu rostro en la cámara.",
        ageModalPrivacy: "No se guardan imágenes.",
        ageModalLoading: "Cargando Módulos...",
        ageModalStartBtn: "Verificar con Cámara",
        ageModalCancelBtn: "Cancelar",
        ageModalExitBtn: "Salir del Sitio",
        ageModalSuccessTitle: "Acceso Permitido",
        ageModalSuccessDesc: "Entrando...",
        ageModalStatusReady: "IA Lista. Inicie la verificación.",
        ageModalStatusSearching: "Buscando rostro...",
        ageModalStatusApproach: "Acércate",
        ageModalStatusUnderage: "La edad detectada es menor de 18 años.",
        ageModalErrorCamera: "Acceso a la cámara denegado.",
        ageModalErrorIA: "Error al cargar los modelos de IA.",
        ageModalTextScan: "Escaneando...",
        ageModalTextValidating: "Validando",
        ageModalTextAge: "Edad",
        ageModalTextYears: "años"
      }
    }
  }
};