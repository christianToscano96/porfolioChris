import aptlyImg from "../assets/aptly.webp";
import exoImg from "../assets/exo.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "jul. 2020 - feb. 2021 ",
      title: "Full Stack Software Engineer & React Native",
      company: "Exomindset - Argentina",
      logo: exoImg,
      description:
        "Mis primeros pasos como Jr Dev. Desarrollo de aplicaciones web y móviles para diversos clientes. Colaboración en equipos ágiles, implementación de nuevas funcionalidades y optimización de rendimiento en aplicaciones de alta concurrencia, aqui mi paso fue veloz!.",
      technologies: ["JavaScript", "React", "Angular", "React Native"],
    },
    {
      id: 2,
      date: "feb. 2021 - mar. 2026 ",
      title: "Software Developer",
      company: "Aptly",
      logo: aptlyImg,
      description:
        "Ingrese como Jr Dev. y fue mi gran experiencia en una startup, fueron como una familia para mi, estuve con ellos por mas de 5 años. Trabaje en el desarrollo y mantenimiento de la app web APTLY - CRM and Workflow Management for Property Teams. Implementando nuevos features, migración, mantenimiento y optimización de código ya existentes a React. También manteniendo diversos proyectos y web de Aptly.",
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
      date: "2026",
      title: "Desarrollador Independiente",
      company: "Freelance",
      logo: null,
      description:
        "Desarrollo de Miilo App, una aplicación móvil para la gestión de gimnasios. Implementación de sistemas de check-in con QR, métricas en tiempo real, gestión de clientes y reportes automatizados.",
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
