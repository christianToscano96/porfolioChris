import aptlyImg from "../assets/aptly.webp";
import exoImg from "../assets/exo.png";
import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaAngular,
  FaMobile,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const techIcons = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  "Node.js": <FaNodeJs />,
  Mongo: <FaDatabase />,
  Docker: <FaDocker />,
  Angular: <FaAngular />,
  "React Native": <FaMobile />,
  Blaze: "🔥",
  Meteor: "☄️",
  Wordpress: "W",
  TypeScript: <SiTypescript />,
  "Claude AI": "🤖",
  Webflow: "🎨",
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      date: t("experience.exo.date"),
      duration: t("experience.exo.duration"),
      title: t("experience.exo.title"),
      company: t("experience.exo.company"),
      location: t("experience.exo.location"),
      description: t("experience.exo.description"),
      highlights: t("experience.exo.highlights", { returnObjects: true }),
      technologies: ["JavaScript", "React", "Angular", "React Native"],
      logo: exoImg,
      isCurrent: false,
    },
    {
      id: 2,
      date: t("experience.aptly.date"),
      duration: t("experience.aptly.duration"),
      title: t("experience.aptly.title"),
      company: t("experience.aptly.company"),
      location: t("experience.aptly.location"),
      description: t("experience.aptly.description"),
      highlights: t("experience.aptly.highlights", { returnObjects: true }),
      technologies: [
        "React",
        "Mongo",
        "Blaze",
        "Meteor",
        "Wordpress",
        "Docker",
        "Webflow",
        "Claude AI",
      ],
      logo: aptlyImg,
      isCurrent: false,
    },
    {
      id: 3,
      date: t("experience.freelance.date"),
      duration: t("experience.freelance.duration"),
      title: t("experience.freelance.title"),
      company: t("experience.freelance.company"),
      location: t("experience.freelance.location"),
      description: t("experience.freelance.description"),
      highlights: t("experience.freelance.highlights", { returnObjects: true }),
      technologies: ["React Native", "Mongo", "TypeScript", "Docker", "Node.js", "Claude AI"],
      logo: null,
      isCurrent: true,
      portfolioUrl: t("experience.freelance.portfolioUrl"),
    },
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <h2 className="section-title fade-in">{t("experience.title")}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="timeline-item fade-in"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-marker"></div>
              {exp.isCurrent && <div className="current-indicator"></div>}
              <div className="timeline-content">
                <div className="timeline-date">
                  {exp.date}
                  <span className="duration-badge">({exp.duration})</span>
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company-text">{exp.company}</span>
                  {exp.location && (
                    <span className="timeline-location">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  )}
                </div>
                {exp.highlights && exp.highlights.length > 0 ? (
                  <ul className="timeline-highlights">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>
                        <span className="highlight-bullet">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-description">{exp.description}</p>
                )}
                <div className="timeline-tech">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge" title={tech}>
                      {techIcons[tech] || tech}
                    </span>
                  ))}
                </div>
                {exp.portfolioUrl && (
                  <div className="portfolio-link">
                    <a
                      href={exp.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link-anchor"
                    >
                      <LiaExternalLinkAltSolid />
                      <span>Ver portfolio de proyectos</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
