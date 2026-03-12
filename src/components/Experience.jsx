import aptlyImg from "../assets/aptly.webp";
import exoImg from "../assets/exo.png";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      date: t("experience.exo.date"),
      title: t("experience.exo.title"),
      company: t("experience.exo.company"),
      logo: exoImg,
      description: t("experience.exo.description"),
      technologies: ["JavaScript", "React", "Angular", "React Native"],
    },
    {
      id: 2,
      date: t("experience.aptly.date"),
      title: t("experience.aptly.title"),
      company: t("experience.aptly.company"),
      logo: aptlyImg,
      description: t("experience.aptly.description"),
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
    },
    {
      id: 3,
      date: t("experience.freelance.date"),
      title: t("experience.freelance.title"),
      company: t("experience.freelance.company"),
      logo: null,
      description: t("experience.freelance.description"),
      technologies: [
        "React Native",
        "Mongo",
        "TypeScript",
        "Docker",
        "Node.js",
        "Claude AI",
      ],
    },
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <h2 className="section-title fade-in">{t("experience.title")}</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                {exp.logo ? (
                  <div className="timeline-company-wrapper">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="company-logo"
                    />
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                ) : (
                  <h4 className="timeline-company">{exp.company}</h4>
                )}
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
