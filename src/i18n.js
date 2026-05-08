import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        experience: "Experiencia",
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
        linkedin: "LinkedIn",
        github: "GitHub",
        scroll: "Scroll",
      },
      experience: {
        title: "Experiencia Laboral",
        exo: {
          date: "jul. 2020 - feb. 2021",
          duration: "7 meses",
          title: "Full Stack & React Native Developer",
          company: "Exo Mindset",
          location: "Córdoba, Argentina",
          description:
            "Desarrollé funcionalidades frontend y backend para proyectos de clientes, traduciendo requisitos de negocio en código listo para producción. Contribuí al desarrollo de aplicaciones móviles con React Native, entregando componentes UI e integraciones de APIs en plazo.",
          highlights: [
            "Desarrollé y mantuve aplicaciones web y móviles para clientes diversos",
            "Implementé integraciones de API en React Native, entregando features en tiempo y forma",
            "Colaboré en equipos ágiles siguiendo metodologías Scrum",
          ],
        },
        aptly: {
          date: "feb. 2021 - mar. 2026",
          duration: "5 años 1 mes",
          title: "Frontend Engineer",
          company: "Aptly",
          location: "California, USA (Remote)",
          description:
            "Lideré la migración del core application de Meteor/Blaze a React.js, mejorando performance y mantenibilidad. Implementé nuevas features y librería de componentes reutilizables, reduciendo código duplicado en ~30%. También mantuve el sitio web con WordPress/Webflow y localicé el portal de alquileres al español.",
          highlights: [
            "Lideré migración de Meteor/Blaze a React.js, mejorando performance y mantenibilidad",
            "Creé librería de componentes reutilizables, reduciendo código duplicado ~30%",
            "Desarrollé y mantuve sitio web con WordPress + Webflow",
            "Localicé completamente el portal de rentas (portal.getaptly.com) al español",
          ],
        },
        freelance: {
          date: "mar. 2026 - Presente",
          duration: "Actual",
          title: "Freelance Full Stack Developer",
          company: "Self-Employed",
          location: "Jujuy, Argentina",
          description:
            "Desarrollo soluciones full-stack a medida, combinando React Native, Nest.js, Docker, TypeScript, MongoDB y pasarelas de pago. Unifico flujos de negocio en plataformas multi-venue y entrego ecommerce completos con checkout integrado.",
          highlights: [
            "Desarrollé app cross-platform React Native + Nest.js unificando gestión de gimnasio y nightclub con loyalty programs",
            "Construí ecommerce Kioto Indu con Galio Pay, catálogo completo y flujo de checkout",
            "Reducí overhead operativo del cliente centralizando 2 flujos de negocio en 1 plataforma",
            "Ambos proyectos disponibles en christiantoscano.netlify.app",
          ],
          isCurrent: true,
          portfolioUrl: "https://christiantoscano.netlify.app",
        },
      },
      githubCTA: {
        title: "Ve a mi GitHub",
        description:
          "Explora más proyectos, contribuciones y código open source",
        button: "Visitar GitHub",
      },
      projects: {
        title: "Proyectos Destacados",
         gymNightclub: {
           title: "Gym & Nightclub Unified Platform",
           description:
             "Desarrollé una aplicación cross-platform en React Native + Nest.js que unifica la gestión de gimnasios y nightclubs para un mismo cliente. Implementé flujos de lealtad y descuentos centralizados entre ambos espacios, reduciendo la carga operativa. (En desarrollo)",
           githubUrl: "",
           liveUrl: "",
         },
         kioto: {
           title: "Kioto Indu Ecommerce",
           description:
             "Proyecto full stack que integra React.js (frontend), Node.js (backend), MongoDB (base de datos), Zustand (gestión de estado) y CI/CD. Plataforma ecommerce completa con catálogo de productos, carrito de compras y checkout con Galio Pay. Listo para producción.",
           githubUrl: "https://github.com/christianToscano96/kioto-indu",
           liveUrl: "",
         },
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
        linkedin: "LinkedIn",
        github: "GitHub",
        scroll: "Scroll",
      },
      experience: {
        title: "Work Experience",
        exo: {
          date: "Jul. 2020 – Feb. 2021",
          duration: "7 months",
          title: "Full Stack & React Native Developer",
          company: "Exo Mindset",
          location: "Córdoba, Argentina",
          description:
            "Developed frontend and backend features for client projects, translating business requirements into production-ready code. Contributed to mobile app development using React Native, delivering UI components and API integrations on schedule.",
          highlights: [
            "Developed and maintained web and mobile applications for diverse clients",
            "Implemented API integrations in React Native, delivering features on time",
            "Collaborated in agile teams following Scrum methodologies",
          ],
        },
        aptly: {
          date: "Feb. 2021 – Mar. 2026",
          duration: "5 years 1 month",
          title: "Frontend Engineer",
          company: "Aptly",
          location: "California, USA (Remote)",
          description:
            "Led migration of core application from Meteor/Blaze to React.js, improving rendering performance and maintainability. Built reusable component library and implemented new product features, reducing duplicated code by ~30%. Maintained company website (WordPress/Webflow) and fully localized the rental portal to Spanish.",
          highlights: [
            "Led Meteor/Blaze → React.js migration, boosting performance and maintainability",
            "Built reusable component library, cutting duplicate code by ~30%",
            "Maintained company site with WordPress and Webflow",
            "Fully localized rental portal (portal.getaptly.com) to Spanish",
          ],
        },
        freelance: {
          date: "Mar. 2026 – Present",
          duration: "Current",
          title: "Freelance Full Stack Developer",
          company: "Self-Employed",
          location: "Jujuy, Argentina",
          description:
            "Build custom full-stack solutions using React Native, Nest.js, Docker, TypeScript, MongoDB, and payment gateways. Unify multi-venue business workflows into single platforms; deliver complete ecommerce with integrated checkout.",
          highlights: [
            "Built cross-platform React Native + Nest.js app unifying gym & nightclub management with loyalty programs",
            "Developed Kioto Indu ecommerce with Galio Pay, full catalog and checkout flow",
            "Reduced client operational overhead by centralizing 2 business workflows into one platform",
            "Both projects showcased at christiantoscano.netlify.app",
          ],
          isCurrent: true,
          portfolioUrl: "https://christiantoscano.netlify.app",
        },
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
          "Recently, I have undertaken a new challenge: developing custom applications that solve real problems with modern technology. This project is born from identifying opportunities in the market and the desire to facilitate management and improve the experience for my clients.",
        paragraph5: "Greetings from Jujuy - Argentina!!!",
      },
      githubCTA: {
        title: "Check out my GitHub",
        description:
          "Explore more projects, contributions and open source code",
        button: "Visit GitHub",
      },
      projects: {
        title: "Featured Projects",
         gymNightclub: {
           title: "Gym & Nightclub Unified Platform",
           description:
             "Built a cross-platform app in React Native + Nest.js merging gym management and a nightclub for a single client, enabling unified customer loyalty and discount workflows across both venues. Architected with Docker, TypeScript, MongoDB, and payment integrations; reduced client operational overhead by centralizing two business workflows into one platform. (In development)",
           githubUrl: "",
           liveUrl: "",
         },
         kioto: {
           title: "Kioto Indu Ecommerce",
           description:
             "Full-stack project integrating React.js (frontend), Node.js (backend), MongoDB (database), Zustand (state management), and CI/CD. Complete ecommerce platform with product catalog, shopping cart, and checkout using Galio Pay. Ready for production.",
           githubUrl: "https://github.com/christianToscano96/kioto-indu",
           liveUrl: "",
         },
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
