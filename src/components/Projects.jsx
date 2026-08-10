import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaImage,
  FaCube,
  FaShoppingBag,
} from "react-icons/fa";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";
import kiotoImg from "../assets/kioto.png";
import proxiDesktopImg from "../assets/proxi-desktop.png";
import proxiMobileImg from "../assets/proxi-mobile.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("projects.proxi.title"),
      description: t("projects.proxi.description"),
      image: null,
      gallery: { desktop: proxiDesktopImg, mobile: proxiMobileImg },
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      githubUrl: "",
      liveUrl: "https://www.proximarket.com.ar/",
    },
    {
      id: 2,
      title: t("projects.kioto.title"),
      description: t("projects.kioto.description"),
      image: kiotoImg,
      technologies: ["React.js", "Node.js", "MongoDB", "Zustand", "Galio Pay", "CI/CD"],
      githubUrl: "https://github.com/christianToscano96/kioto-indu",
      liveUrl: "https://kioto-ecomerce.vercel.app/",
    },
  ];

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <h2 className="section-title fade-in">{t("projects.title")}</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item fade-in"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={`project-header ${!project.image ? "project-header-full" : ""}`}>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {techIcons[tech] || tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                {project.image && (
                  <div className="project-image-col">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image-single"
                    />
                  </div>
                )}
              </div>
              {project.gallery && (
                <div className="project-gallery">
                  <img
                    src={project.gallery.desktop}
                    alt={`${project.title} - desktop`}
                    className="project-gallery-desktop"
                  />
                  <div className="project-gallery-phone">
                    <img
                      src={project.gallery.mobile}
                      alt={`${project.title} - mobile`}
                      className="project-gallery-mobile"
                    />
                  </div>
                </div>
              )}
              {project.liveUrl && (
                <div className="project-url-section">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-url-card"
                  >
                    <FaExternalLinkAlt className="project-url-icon" />
                    <span className="project-url-text">{project.liveUrl}</span>
                  </a>
                </div>
              )}
              {!project.liveUrl && !project.image && (
                <div className="project-placeholder-section">
                  <div className="placeholder-content">
                    <FaImage className="placeholder-icon-lg" />
                    <span>Media coming soon</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const techIcons = {
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <FaDatabase />,
  "React.js": <FaReact />,
  "Galio Pay": <FaShoppingBag />,
  Zustand: <FaCube />,
  "CI/CD": <FaJs />,
};

export default Projects;
