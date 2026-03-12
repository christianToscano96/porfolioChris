import profileImg from "../assets/yo_2.jpg";

const About = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://www.linkedin.com/in/christianit96/",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://github.com/christianToscano96",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
  ];

  return (
    <section id="historia" className="about-section">
      <div className="container">
        <div className="about-wrapper fade-in">
          <div className="about-content-new">
            <h2 className="section-title-left">Sobre Mí</h2>
            <p className="about-paragraph">
              Soy un desarrollador apasionado por crear y aprender! Mi enfoque
              se centra en el desarrollo de aplicaciones web y móviles, con un
              fuerte interés en el frontend y el desarrollo mobile. Me encanta
              explorar nuevas tecnologías y siempre estoy buscando formas de
              mejorar mis habilidades y conocimientos en el campo del desarrollo
              de software.
            </p>
            <p className="about-paragraph">
              En mi comienzo en la programación no fue constante, ya que por
              diversas circunstancias lo dejaba y retomaba, hasta que realmente
              se me dio la oportunidad de dedicarme de lleno a esta pasión.
            </p>
            <p className="about-paragraph">
              Mi trayectoria en el desarrollo de software ha sido un viaje
              constante de aprendizaje. Cada proyecto representa una oportunidad
              para dominar nuevas tecnologías, perfeccionar mis habilidades y
              expandir mi visión sobre lo que es posible crear con código.
            </p>
            <p className="about-paragraph">
              Recientemente, he emprendido un nuevo desafío:{" "}
              <span className="highlight-text">Miilo App</span>, una solución
              innovadora dedicada a satisfacer las necesidades específicas de
              los <span className="highlight-text">gimnasios de mi ciudad</span>
              . Este proyecto nace de identificar una oportunidad real en el
              mercado local y el deseo de facilitar la gestión y mejorar la
              experiencia tanto para administradores como para usuarios de
              centros fitness.
            </p>{" "}
            <p className="about-paragraph">
              Saludos desde Jujuy - Argentina!!!
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={social.name}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
