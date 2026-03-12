import aptlyImg from "../assets/aptly.webp";
import exoImg from "../assets/exo.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "2021 - Presente",
      title: "Freelance Developer",
      company: "Aptly",
      logo: aptlyImg,
      description:
        "Desarrollo de Miilo App, una aplicación móvil y web para la gestión de gimnasios. Implementación de sistemas de check-in con QR, métricas en tiempo real, gestión de clientes y reportes automatizados.",
      technologies: ["React", "React Native", "Node.js", "Firebase", "MongoDB"],
    },
    {
      id: 2,
      date: "2016 - 2021",
      title: "Software Developer",
      company: "Exomindset",
      logo: exoImg,
      description:
        "Desarrollo de aplicaciones web y móviles para diversos clientes. Colaboración en equipos ágiles, implementación de nuevas funcionalidades y optimización de rendimiento en aplicaciones de alta concurrencia.",
      technologies: ["JavaScript", "React", "Angular", "TypeScript", "SQL"],
    },
    {
      id: 3,
      date: "2014 - 2016",
      title: "Desarrollador Independiente",
      company: "Freelance",
      logo: null,
      description:
        "Proyectos independientes para pequeñas y medianas empresas. Desarrollo de sitios web, landing pages y aplicaciones web personalizadas. Gestión completa de proyectos desde el diseño hasta la implementación y mantenimiento.",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "jQuery",
        "PHP",
        "WordPress",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <h2 className="section-title fade-in">Experiencia Laboral</h2>
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
