import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaMobile,
  FaBrain,
  FaExternalLinkAlt,
  FaGithub,
  FaImage,
  FaCube,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import kiotoImg from "../assets/kioto.png";
import kiotoVideo from "../assets/kioto-video.mp4";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("projects.gymNightclub.title"),
      description: t("projects.gymNightclub.description"),
      image: null,
      video: null,
      technologies: ["React Native", "Nest.js", "Docker", "TypeScript", "MongoDB"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      id: 2,
      title: t("projects.kioto.title"),
      description: t("projects.kioto.description"),
      image: kiotoImg,
      video: kiotoVideo,
        technologies: ["React.js", "Node.js", "MongoDB", "Zustand", "Galio Pay", "CI/CD"],
      githubUrl: "https://github.com/christianToscano96/kioto-indu",
      liveUrl: "",
    },
  ];

  const [videoErrors, setVideoErrors] = useState({});

  const handleVideoError = (projectId) => {
    console.error(`Video failed to load for project ${projectId}`);
    setVideoErrors((prev) => ({ ...prev, [projectId]: true }));
  };

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
              <div className="project-header">
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
              {project.video && (
                <div className="project-video-section">
                  <div className="video-container">
                    {!videoErrors[project.id] ? (
                      <video
                        className="project-video-full"
                        controls
                        preload="metadata"
                        poster={project.image || undefined}
                        onError={() => handleVideoError(project.id)}
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="video-error-fallback">
                        <FaImage className="error-icon" />
                        <p>Video unavailable</p>
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="video-direct-link"
                        >
                          Open video in new tab
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!project.video && !project.image && (
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
  "React Native": <FaMobile />,
  "Nest.js": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  Docker: <FaDocker />,
  TypeScript: <SiTypescript />,
  MongoDB: <FaDatabase />,
  "React.js": <FaReact />,
  "Galio Pay": <FaBrain />,
  "Zustand": <FaCube />,
  "CI/CD": <FaDocker />,
  "Payment Integration": <FaJs />,
};

export default Projects;
