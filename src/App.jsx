import { useEffect, useState } from "react";
import "./App.css";
import loginImg from "./assets/login.png";
import dashboardImg from "./assets/dashboar.png";
import metricasImg from "./assets/metricas.png";
import reportesImg from "./assets/reportes.png";
import qrImg from "./assets/qr.png";
import clienteImg from "./assets/cliente.png";
import profileImg1 from "./assets/yo.jpeg";
import profileImg from "./assets/yo_2.jpg";

import miiloTitleImg from "./assets/miilo_titlepng.png";
import aptlyImg from "./assets/aptly.webp";
import exoImg from "./assets/exo.png";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".fade-in, .feature-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* Navegación */}
      <nav
        className="navbar"
        style={{
          background:
            scrollY > 50
              ? theme === "dark"
                ? "rgba(0, 0, 0, 0.95)"
                : "rgba(255, 255, 255, 0.95)"
              : "transparent",
        }}
      >
        <div className="nav-container">
          <h2 className="nav-logo">Portfolio</h2>
          <ul className="nav-menu">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#historia">Sobre Mí</a>
            </li>
            <li>
              <a href="#proyecto">Miilo App</a>
            </li>
            <li>
              <a href="#galeria">Github</a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Sección Hero - Presentación */}
      <section id="inicio" className="hero">
        <div className="hero-content fade-in">
          <div className="hero-profile-header">
            <img
              src={profileImg1}
              alt="Christian Toscano"
              className="hero-profile-img"
            />
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              Disponible para trabajar
            </div>
          </div>

          <div className="hero-greeting">
            <span className="wave">👋</span>
            <h1 className="hero-hey">Hey, soy Christian</h1>
          </div>

          <div className="hero-info">
            <div className="info-badge">
              <span className="badge-accent">+5 años</span> de experiencia
            </div>
            <div className="info-details">
              <span className="role">Software Developer</span>
              <span className="divider">•</span>
              <span className="location">Jujuy, Argentina 🇦🇷</span>
            </div>
          </div>

          <p className="hero-specialization">
            Especializado en el desarrollo{" "}
            <span className="highlight-gradient">Frontend</span> y enamorado del
            desarrollo <span className="highlight-gradient">Mobile</span>
          </p>

          <div className="hero-buttons">
            <a href="#proyecto" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#historia" className="btn btn-secondary">
              Sobre Mí
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Sección Experiencia Laboral */}
      <section id="experiencia" className="experience-section">
        <div className="container">
          <h2 className="section-title fade-in">Experiencia Laboral</h2>
          <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - Presente</div>
                <h3 className="timeline-title">Freelance Developer</h3>
                <div className="timeline-company-wrapper">
                  <img src={aptlyImg} alt="Aptly" className="company-logo" />
                  <h4 className="timeline-company">Aptly</h4>
                </div>
                <p className="timeline-description">
                  Desarrollo de Miilo App, una aplicación móvil y web para la
                  gestión de gimnasios. Implementación de sistemas de check-in
                  con QR, métricas en tiempo real, gestión de clientes y
                  reportes automatizados.
                </p>
                <div className="timeline-tech">
                  <span>React</span>
                  <span>React Native</span>
                  <span>Node.js</span>
                  <span>Firebase</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2016 - 2021</div>
                <h3 className="timeline-title">Software Developer</h3>
                <div className="timeline-company-wrapper">
                  <img src={exoImg} alt="Exomindset" className="company-logo" />
                  <h4 className="timeline-company">Exomindset</h4>
                </div>
                <p className="timeline-description">
                  Desarrollo de aplicaciones web y móviles para diversos
                  clientes. Colaboración en equipos ágiles, implementación de
                  nuevas funcionalidades y optimización de rendimiento en
                  aplicaciones de alta concurrencia.
                </p>
                <div className="timeline-tech">
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Angular</span>
                  <span>TypeScript</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">2014 - 2016</div>
                <h3 className="timeline-title">Desarrollador Independiente</h3>
                <h4 className="timeline-company">Freelance</h4>
                <p className="timeline-description">
                  Proyectos independientes para pequeñas y medianas empresas. 
                  Desarrollo de sitios web, landing pages y aplicaciones web personalizadas. 
                  Gestión completa de proyectos desde el diseño hasta la implementación y 
                  mantenimiento.
                </p>
                <div className="timeline-tech">
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>PHP</span>
                  <span>WordPress</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyecto Miilo App */}
      <section id="proyecto" className="project-section">
        <div className="container">
          <div className="project-card fade-in">
            <div className="project-header">
              <img
                src={miiloTitleImg}
                alt="Miilo App"
                className="project-title-image"
              />
            </div>
            <div className="project-content">
              <p className="project-description">
                Miilo App es una aplicación innovadora diseñada para mejorar la
                productividad y gestión de tareas personales. Con una interfaz
                intuitiva y moderna, permite a los usuarios organizar su día a
                día de manera eficiente. La aplicación integra funcionalidades
                de recordatorios, seguimiento de hábitos y análisis de
                productividad, todo en una plataforma fácil de usar.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Firebase</span>
              </div>
              <a
                href="https://github.com/tu-usuario/miilo-app"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <span>Ver en GitHub</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Features de Miilo App */}
      <section id="galeria" className="features-section">
        <div className="features-title-container">
          <h2 className="section-title fade-in">Características de Miilo</h2>
        </div>

        {/* Feature 1 - Login */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item fade-in">
              <div className="feature-image">
                <img src={loginImg} alt="Pantalla de Login de Miilo App" />
              </div>
              <div className="feature-content">
                <h3>Autenticación Segura</h3>
                <p>
                  Sistema de autenticación robusto y seguro que protege la
                  información de los usuarios. Incluye validación en tiempo
                  real, recuperación de contraseña y autenticación de dos
                  factores para máxima seguridad.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">JWT</span>
                  <span className="feature-tag">OAuth</span>
                  <span className="feature-tag">Encriptación</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Dashboard */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item reverse fade-in">
              <div className="feature-image">
                <img src={dashboardImg} alt="Dashboard de Miilo App" />
              </div>
              <div className="feature-content">
                <h3>Dashboard Interactivo</h3>
                <p>
                  Panel de control intuitivo que muestra toda la información
                  importante de un vistazo. Gráficos en tiempo real, acceso
                  rápido a funciones principales y una interfaz diseñada para
                  maximizar la productividad.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Real-time</span>
                  <span className="feature-tag">Responsive</span>
                  <span className="feature-tag">Intuitivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 - Métricas */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item fade-in">
              <div className="feature-image">
                <img src={metricasImg} alt="Panel de Métricas" />
              </div>
              <div className="feature-content">
                <h3>Análisis de Métricas</h3>
                <p>
                  Visualización avanzada de datos y métricas clave. Gráficos
                  dinámicos, análisis de tendencias y estadísticas detalladas
                  para tomar decisiones informadas basadas en datos reales.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Analytics</span>
                  <span className="feature-tag">Charts</span>
                  <span className="feature-tag">Data Viz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4 - Reportes */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item reverse fade-in">
              <div className="feature-image">
                <img src={reportesImg} alt="Sistema de Reportes" />
              </div>
              <div className="feature-content">
                <h3>Reportes Detallados</h3>
                <p>
                  Generación automática de reportes completos y personalizables.
                  Exporta datos en múltiples formatos, programa reportes
                  periódicos y mantén un seguimiento detallado de todas las
                  actividades.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">PDF Export</span>
                  <span className="feature-tag">Automated</span>
                  <span className="feature-tag">Customizable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 5 - Acceso QR */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item fade-in">
              <div className="feature-image">
                <img src={qrImg} alt="Sistema de Acceso QR" />
              </div>
              <div className="feature-content">
                <h3>Acceso con Código QR</h3>
                <p>
                  Sistema de acceso rápido y seguro mediante códigos QR.
                  Facilita el check-in de usuarios, control de asistencia y
                  validación de identidad de forma instantánea. Tecnología
                  moderna para un acceso sin fricciones.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">QR Scanner</span>
                  <span className="feature-tag">Instant Access</span>
                  <span className="feature-tag">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 6 - Gestión de Clientes */}
        <div className="feature-wrapper">
          <div className="container">
            <div className="feature-item reverse fade-in">
              <div className="feature-image">
                <img src={clienteImg} alt="Gestión de Clientes" />
              </div>
              <div className="feature-content">
                <h3>Gestión de Clientes</h3>
                <p>
                  Sistema completo de administración de clientes con perfiles
                  detallados, historial de actividades y seguimiento
                  personalizado. Mantén toda la información organizada y
                  accesible en un solo lugar para mejorar la relación con tus
                  usuarios.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">CRM</span>
                  <span className="feature-tag">Profiles</span>
                  <span className="feature-tag">History Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="historia" className="about-section">
        <div className="container">
          <div className="about-wrapper fade-in">
            <div className="about-content-new">
              <h2 className="section-title-left">Sobre Mí</h2>
              <p className="about-paragraph">
                Soy un desarrollador apasionado por crear soluciones
                tecnológicas que realmente impacten. Durante{" "}
                <span className="highlight-text">5 años trabajé en Aptly</span>,
                donde tuve la oportunidad de participar en proyectos desafiantes
                que me permitieron crecer tanto profesional como personalmente.
              </p>
              <p className="about-paragraph">
                Mi trayectoria en el desarrollo de software ha sido un viaje
                constante de aprendizaje. Cada proyecto representa una
                oportunidad para dominar nuevas tecnologías, perfeccionar mis
                habilidades y expandir mi visión sobre lo que es posible crear
                con código.
              </p>
              <p className="about-paragraph">
                Recientemente, he emprendido un nuevo desafío:{" "}
                <span className="highlight-text">Miilo App</span>, una solución
                innovadora dedicada a satisfacer las necesidades específicas de
                los{" "}
                <span className="highlight-text">gimnasios de mi ciudad</span>.
                Este proyecto nace de identificar una oportunidad real en el
                mercado local y el deseo de facilitar la gestión y mejorar la
                experiencia tanto para administradores como para usuarios de
                centros fitness.
              </p>
            </div>

            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img
                  src={profileImg}
                  alt="Christian Toscano"
                  className="profile-image"
                />
              </div>

              <div className="social-icons">
                <a
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="X (Twitter)"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Christian Toscano. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
