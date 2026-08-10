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
          location: "",
          description: "",
          highlights: [
            "Entregué funcionalidades frontend y backend listas para producción en distintos proyectos de clientes, asegurando alineación con requisitos de negocio complejos",
            "Aceleré la entrega de productos móviles construyendo componentes UI de alta fidelidad e integraciones de API robustas con React Native",
          ],
        },
        aptly: {
          date: "feb. 2021 - mar. 2026",
          duration: "5 años 1 mes",
          title: "Frontend Engineer",
          company: "Aptly",
          location: "California, USA (Remote)",
          description: "",
          highlights: [
            "Responsable de la migración técnica de la aplicación core de Meteor/Blaze a React.js, liderando el rediseño de una arquitectura monolítica a un modelo modular basado en componentes reutilizables, mejorando el rendimiento de renderizado y la mantenibilidad del código a largo plazo",
            "Implementé la localización completa al español del portal de alquileres (portal.getaptly.com) usando React-i18next, incrementando el engagement de usuarios en mercados hispanohablantes, y mantuve la presencia web corporativa en WordPress y Webflow",
            "Diseñé y construí funcionalidades end-to-end que abarcan diseño de esquemas en MongoDB, lógica de API e implementación de UI, asegurando integridad y consistencia de datos en todo el stack",
            "Adopté flujos de desarrollo asistidos por IA usando Claude, implementando gentleman-ai como metodología de Spec-Driven Development (SDD)",
            "Optimicé el rendimiento de la aplicación mediante code splitting, lazy loading de rutas/componentes y reducción de re-renders innecesarios, y lideré la adopción de un sistema de componentes (design system) consistente en todas las features",
            "Participé en decisiones de producto y UX junto al equipo de diseño, incorporando buenas prácticas de accesibilidad (a11y) en los componentes construidos para ampliar la base de usuarios de la plataforma",
          ],
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
         proxi: {
           title: "Proxi Marketplace",
           description:
             "Marketplace multi-rubro construido con Next.js, Node.js y PostgreSQL. Permite a comercios, emprendedores y prestadores de servicios crear su tienda, publicar productos y venderlos por categoría y ubicación, con búsqueda geolocalizada y gestión de catálogo. En producción.",
           githubUrl: "",
           liveUrl: "https://www.proximarket.com.ar/",
         },
         kioto: {
           title: "Kioto Indu Ecommerce",
           description:
             "Proyecto full stack que integra React.js (frontend), Node.js (backend), MongoDB (base de datos), Zustand (gestión de estado) y CI/CD. Plataforma ecommerce completa con catálogo de productos, carrito de compras y checkout con Galio Pay. Listo para producción.",
           githubUrl: "https://github.com/christianToscano96/kioto-indu",
           liveUrl: "https://kioto-ecomerce.vercel.app/",
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
          location: "",
          description: "",
          highlights: [
            "Delivered production-ready frontend and backend features across a range of client projects, ensuring alignment with complex business requirements",
            "Accelerated mobile product delivery by building high-fidelity UI components and robust API integrations with React Native",
          ],
        },
        aptly: {
          date: "Feb. 2021 – Mar. 2026",
          duration: "5 years 1 month",
          title: "Frontend Engineer",
          company: "Aptly",
          location: "California, USA (Remote)",
          description: "",
          highlights: [
            "Responsible for the technical migration of the core application from Meteor/Blaze to React.js, leading the redesign from a monolithic architecture to a modular model based on reusable components, improving rendering performance and long-term codebase maintainability",
            "Implemented full Spanish localization of the rental portal (portal.getaptly.com) using React-i18next, increasing user engagement in Spanish-speaking markets, and maintained the corporate web presence on WordPress and Webflow",
            "Designed and built end-to-end features spanning MongoDB schema design, API logic, and UI implementation, ensuring data integrity and consistency across the full stack",
            "Adopted AI-assisted development workflows using Claude, implementing gentleman-ai as a Spec-Driven Development (SDD) methodology",
            "Optimized application performance through code splitting, route/component lazy loading, and reduction of unnecessary re-renders, and led the adoption of a consistent component (design) system across features",
            "Took part in product and UX decisions alongside the design team, incorporating accessibility (a11y) best practices into the components built to broaden the platform's user base",
          ],
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
         proxi: {
           title: "Proxi Marketplace",
           description:
             "Multi-category marketplace built with Next.js, Node.js, and PostgreSQL. Lets stores, entrepreneurs, and service providers create a shop, list products, and sell by category and location, with geolocated search and catalog management. In production.",
           githubUrl: "",
           liveUrl: "https://www.proximarket.com.ar/",
         },
         kioto: {
           title: "Kioto Indu Ecommerce",
           description:
             "Full-stack project integrating React.js (frontend), Node.js (backend), MongoDB (database), Zustand (state management), and CI/CD. Complete ecommerce platform with product catalog, shopping cart, and checkout using Galio Pay. Ready for production.",
           githubUrl: "https://github.com/christianToscano96/kioto-indu",
           liveUrl: "https://kioto-ecomerce.vercel.app/",
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
