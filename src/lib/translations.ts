export type Language = 'es' | 'en';

export const translations = {
  es: {
    hero: {
      title: 'PORTFOLIO',
      subtitle: 'Bachiller en Ingeniería de Sistemas',
      role: 'Desarrolladora Full Stack',
      description: 'Desarrolladora Full Stack con experiencia en Flutter, NestJS, Python y arquitecturas limpias. Transformando ideas en soluciones tecnológicas innovadoras.',
      cta: 'Ver Proyectos',
      cta2: 'Descargar CV'
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    about: {
      title: 'Mis Habilidades',
      description: 'Ingeniera de Sistemas con experiencia en desarrollo full stack. Me especializo en crear soluciones escalables y eficientes combinando las mejores prácticas.',
      languages: 'Lenguajes que domino',
      technologies: 'Tecnologías y herramientas'
    },
    skills: {
      title: 'Mis Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      qa: 'QA',
      devops: 'DevOps'
    },
    projects: {
      title: 'Mis Proyectos',
      view: 'Ver Proyecto',
      code: 'Ver Código'
    },
    experience: {
      title: 'Experiencia Laboral',
      present: 'Presente'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¡Trabajemos juntos!',
      description: 'Estoy abierta a nuevas oportunidades y proyectos emocionantes. ¡Contáctame!'
    },
    chatbot: {
      welcome: '¡Hola! Soy tu asistente virtual. ¿Qué tipo de CV te gustaría generar hoy?',
      placeholder: 'Pregunta por "Frontend", "Backend" CV...',
      typing: 'Escribiendo...',
      download: 'Descargar CV PDF'
    }
  },
  en: {
    hero: {
      title: 'PORTFOLIO',
      subtitle: 'Systems Engineering Bachelor',
      role: 'Full Stack Developer',
      description: 'Full Stack Developer with experience in Flutter, NestJS, Python and clean architectures. Turning ideas into innovative tech solutions.',
      cta: 'View Projects',
      cta2: 'Download CV'
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    about: {
      title: 'My Skills',
      description: 'Systems Engineer with full stack development experience. I specialize in creating scalable and efficient solutions combining best practices.',
      languages: 'Languages I master',
      technologies: 'Technologies and tools'
    },
    skills: {
      title: 'My Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      qa: 'QA',
      devops: 'DevOps'
    },
    projects: {
      title: 'My Projects',
      view: 'View Project',
      code: 'View Code'
    },
    experience: {
      title: 'Work Experience',
      present: 'Present'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's work together!",
      description: 'I am open to new opportunities and exciting projects. Contact me!'
    },
    chatbot: {
      welcome: 'Hi! I am your virtual assistant. What type of CV would you like to generate?',
      placeholder: 'Ask for "Frontend", "Backend" CV...',
      typing: 'Typing...',
      download: 'Download CV PDF'
    }
  }
};

export const getTranslation = (lang: Language) => translations[lang];
