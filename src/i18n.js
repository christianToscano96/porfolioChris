import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        experience: "Experiencia",
        project: "Miilo App",
        about: "Sobre Mí",
      },
      hero: {
        available: "Disponible para trabajar",
        greeting: "Hey, soy Christian!",
        experience: "+5 años",
        experienceText: "de experiencia",
        role: "Software Developer",
        location: "Jujuy, Argentina 🇦🇷",
        specialization:
          "Especializado en el desarrollo <0>Frontend</0> y enamorado del desarrollo <1>Mobile</1>",
        frontend: "Frontend",
        mobile: "Mobile",
        viewProjects: "Ver Proyectos",
        linkedin: "LinkedIn",
        github: "GitHub",
        scroll: "Scroll",
      },
      experience: {
        title: "Experiencia Laboral",
        exo: {
          date: "jul. 2020 - feb. 2021",
          title: "Full Stack Software Engineer & React Native",
          company: "Exomindset - Argentina",
          description:
            "Mis primeros pasos como Jr Dev. Desarrollo de aplicaciones web y móviles para diversos clientes. Colaboración en equipos ágiles, implementación de nuevas funcionalidades y optimización de rendimiento en aplicaciones de alta concurrencia, aquí mi paso fue veloz!.",
        },
        aptly: {
          date: "feb. 2021 - mar. 2026",
          title: "Software Developer",
          company: "Aptly",
          description:
            "Ingresé como Jr Dev. y fue mi gran experiencia en una startup, fueron como una familia para mí, estuve con ellos por más de 5 años. Trabajé en el desarrollo y mantenimiento de la app web APTLY - CRM and Workflow Management for Property Teams. Implementando nuevos features, migración, mantenimiento y optimización de código ya existentes a React. También manteniendo diversos proyectos y web de Aptly.",
        },
        freelance: {
          date: "2026",
          title: "Desarrollador Independiente",
          company: "Freelance",
          description:
            "Desarrollo de Miilo App, una aplicación móvil para la gestión de gimnasios. Implementación de sistemas de check-in con QR, métricas en tiempo real, gestión de clientes y reportes automatizados.",
        },
      },
      project: {
        description:
          "Miilo App es una aplicación diseñada para resolver una necesidad que están teniendo mis amigos con su administración de sus gimnasios ya que aquí no existen soluciones accesibles para poder costearlos o no se adaptan a la necesidad de los mismos, así que ahí vi una oportunidad para poder cubrir esa demanda. Miilo es una solución integral que facilita la gestión de gimnasios, ofreciendo funcionalidades como check-in con QR, métricas en tiempo real, gestión de clientes, reportes automatizados y suscripciones de membresías a los gyms. Miilo App nace de la pasión que tengo de crear aplicaciones y del deseo de facilitar la experiencia tanto para administradores como para usuarios de los gimnasios. La App aún está en desarrollo, con esto de las AI, en especial Claude me facilitó mucho el proceso de desarrollo, ya que a mí por sí solo me llevaría mucho tiempo jeje.",
        viewOnGithub: "Ver en GitHub",
      },
      about: {
        title: "Sobre Mí",
        paragraph1:
          "Soy un desarrollador apasionado por crear y aprender! Mi enfoque se centra en el desarrollo de aplicaciones web y móviles, con un fuerte interés en el frontend y el desarrollo mobile. Me encanta explorar nuevas tecnologías y siempre estoy buscando formas de mejorar mis habilidades y conocimientos en el campo del desarrollo de software.",
        paragraph2:
          "En mi comienzo en la programación no fue constante, ya que por diversas circunstancias lo dejaba y retomaba, hasta que realmente se me dio la oportunidad de dedicarme de lleno a esta pasión.",
        paragraph3:
          "Mi trayectoria en el desarrollo de software ha sido un viaje constante de aprendizaje. Cada proyecto representa una oportunidad para dominar nuevas tecnologías, perfeccionar mis habilidades y expandir mi visión sobre lo que es posible crear con código.",
        paragraph4:
          "Recientemente, he emprendido un nuevo desafío: <0>Miilo App</0>, una solución innovadora dedicada a satisfacer las necesidades específicas de los <1>gimnasios de mi ciudad</1>. Este proyecto nace de identificar una oportunidad real en el mercado local y el deseo de facilitar la gestión y mejorar la experiencia tanto para administradores como para usuarios de centros fitness.",
        miilo: "Miilo App",
        gyms: "gimnasios de mi ciudad",
        paragraph5: "Saludos desde Jujuy - Argentina!!!",
      },
      features: {
        title: "Características de Miilo",
        feature1: {
          title: "Autenticación Segura",
          description:
            "Sistema de autenticación robusto y seguro que protege la información de los usuarios. Incluye validación en tiempo real, recuperación de contraseña y autenticación de dos factores para máxima seguridad.",
        },
        feature2: {
          title: "Dashboard Interactivo",
          description:
            "Panel de control intuitivo que muestra toda la información importante de un vistazo. Gráficos en tiempo real, acceso rápido a funciones principales y una interfaz diseñada para maximizar la productividad.",
        },
        feature3: {
          title: "Análisis de Métricas",
          description:
            "Visualización avanzada de datos y métricas clave. Gráficos dinámicos, análisis de tendencias y estadísticas detalladas para tomar decisiones informadas basadas en datos reales.",
        },
        feature4: {
          title: "Acceso con Código QR",
          description:
            "Sistema de acceso rápido y seguro mediante códigos QR. Facilita el check-in de usuarios, control de asistencia y validación de identidad de forma instantánea. Tecnología moderna para un acceso sin fricciones.",
        },
        feature5: {
          title: "Gestión de Clientes",
          description:
            "Sistema completo de administración de clientes con perfiles detallados, historial de actividades y seguimiento personalizado. Mantén toda la información organizada y accesible en un solo lugar para mejorar la relación con tus usuarios.",
        },
        feature6: {
          title: "Reportes Detallados",
          description:
            "Generación automática de reportes completos y personalizables. Exporta datos en múltiples formatos, programa reportes periódicos y mantén un seguimiento detallado de todas las actividades.",
        },
        comingSoon: "Y nuevas funcionalidades pronto!!!",
      },
      githubCTA: {
        title: "Ve a mi GitHub",
        description:
          "Explora más proyectos, contribuciones y código open source",
        button: "Visitar GitHub",
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        experience: "Experience",
        project: "Miilo App",
        about: "About Me",
      },
      hero: {
        available: "Available for work",
        greeting: "Hey, I'm Christian!",
        experience: "+5 years",
        experienceText: "of experience",
        role: "Software Developer",
        location: "Jujuy, Argentina 🇦🇷",
        specialization:
          "Specialized in <0>Frontend</0> development and passionate about <1>Mobile</1> development",
        frontend: "Frontend",
        mobile: "Mobile",
        viewProjects: "View Projects",
        linkedin: "LinkedIn",
        github: "GitHub",
        scroll: "Scroll",
      },
      experience: {
        title: "Work Experience",
        exo: {
          date: "Jul. 2020 - Feb. 2021",
          title: "Full Stack Software Engineer & React Native",
          company: "Exomindset - Argentina",
          description:
            "My first steps as a Jr Dev. Development of web and mobile applications for various clients. Collaboration in agile teams, implementation of new features and performance optimization in high-concurrency applications, my journey here was fast!.",
        },
        aptly: {
          date: "Feb. 2021 - Mar. 2026",
          title: "Software Developer",
          company: "Aptly - California, USA",
          description:
            "I joined as Jr Dev. and it was my great experience in a startup, they were like a family to me, I was with them for more than 5 years. I worked on the development and maintenance of the APTLY web app - CRM and Workflow Management for Property Teams. Implementing new features, migration, maintenance and optimization of existing code to React. Also maintaining various Aptly projects and websites.",
        },
        freelance: {
          date: "2026",
          title: "Independent Developer",
          company: "Freelance",
          description:
            "Development of Miilo App, a mobile application for gym management. Implementation of QR check-in systems, real-time metrics, customer management and automated reports.",
        },
      },
      project: {
        description:
          "Miilo App is an application designed to solve a need that my friends are having with their gym administration since there are no accessible solutions here to afford them or they don't adapt to their needs, so I saw an opportunity to cover that demand. Miilo is a comprehensive solution that facilitates gym management, offering features such as QR check-in, real-time metrics, customer management, automated reports and gym membership subscriptions. Miilo App is born from my passion for creating applications and the desire to facilitate the experience for both administrators and gym users. The App is still in development, with this AI thing, especially Claude made the development process much easier for me, since it would take me a long time on my own hehe.",
        viewOnGithub: "View on GitHub",
      },
      about: {
        title: "About Me",
        paragraph1:
          "I am a developer passionate about creating and learning! My focus is on the development of web and mobile applications, with a strong interest in frontend and mobile development. I love exploring new technologies and I'm always looking for ways to improve my skills and knowledge in the field of software development.",
        paragraph2:
          "My start in programming was not constant, as due to various circumstances I would leave it and resume it, until I was really given the opportunity to dedicate myself fully to this passion.",
        paragraph3:
          "My journey in software development has been a constant journey of learning. Each project represents an opportunity to master new technologies, perfect my skills and expand my vision of what is possible to create with code.",
        paragraph4:
          "Recently, I have undertaken a new challenge: <0>Miilo App</0>, an innovative solution dedicated to meeting the specific needs of <1>gyms in my city</1>. This project is born from identifying a real opportunity in the local market and the desire to facilitate management and improve the experience for both administrators and fitness center users.",
        miilo: "Miilo App",
        gyms: "gyms in my city",
        paragraph5: "Greetings from Jujuy - Argentina!!!",
      },
      features: {
        title: "Miilo Features",
        feature1: {
          title: "Secure Authentication",
          description:
            "Robust and secure authentication system that protects user information. Includes real-time validation, password recovery and two-factor authentication for maximum security.",
        },
        feature2: {
          title: "Interactive Dashboard",
          description:
            "Intuitive control panel that displays all important information at a glance. Real-time charts, quick access to main features and an interface designed to maximize productivity.",
        },
        feature3: {
          title: "Metrics Analysis",
          description:
            "Advanced visualization of data and key metrics. Dynamic charts, trend analysis and detailed statistics to make informed decisions based on real data.",
        },
        feature4: {
          title: "QR Code Access",
          description:
            "Fast and secure access system using QR codes. Facilitates user check-in, attendance control and instant identity validation. Modern technology for frictionless access.",
        },
        feature5: {
          title: "Client Management",
          description:
            "Complete customer management system with detailed profiles, activity history and personalized tracking. Keep all information organized and accessible in one place to improve your relationship with users.",
        },
        feature6: {
          title: "Detailed Reports",
          description:
            "Automatic generation of complete and customizable reports. Export data in multiple formats, schedule periodic reports and maintain detailed tracking of all activities.",
        },
        comingSoon: "And new features coming soon!!!",
      },
      githubCTA: {
        title: "Check out my GitHub",
        description:
          "Explore more projects, contributions and open source code",
        button: "Visit GitHub",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
