import { useState, useEffect } from "react";
import loginImg from "../assets/login.png";
import dashboardImg from "../assets/dashboar.png";
import metricasImg from "../assets/metricas.png";
import reportesImg from "../assets/reportes.png";
import qrImg from "../assets/qr.png";
import clienteImg from "../assets/cliente.png";

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      id: 1,
      title: "Autenticación Segura",
      description:
        "Sistema de autenticación robusto y seguro que protege la información de los usuarios. Incluye validación en tiempo real, recuperación de contraseña y autenticación de dos factores para máxima seguridad.",
      image: loginImg,
      alt: "Pantalla de Login de Miilo App",
      tags: ["JWT", "OAuth", "Encriptación"],
    },
    {
      id: 2,
      title: "Dashboard Interactivo",
      description:
        "Panel de control intuitivo que muestra toda la información importante de un vistazo. Gráficos en tiempo real, acceso rápido a funciones principales y una interfaz diseñada para maximizar la productividad.",
      image: dashboardImg,
      alt: "Dashboard de Miilo App",
      tags: ["Real-time", "Responsive", "Intuitivo"],
    },
    {
      id: 3,
      title: "Análisis de Métricas",
      description:
        "Visualización avanzada de datos y métricas clave. Gráficos dinámicos, análisis de tendencias y estadísticas detalladas para tomar decisiones informadas basadas en datos reales.",
      image: metricasImg,
      alt: "Panel de Métricas",
      tags: ["Analytics", "Charts", "Data Viz"],
    },
    {
      id: 4,
      title: "Acceso con Código QR",
      description:
        "Sistema de acceso rápido y seguro mediante códigos QR. Facilita el check-in de usuarios, control de asistencia y validación de identidad de forma instantánea. Tecnología moderna para un acceso sin fricciones.",
      image: qrImg,
      alt: "Sistema de Acceso QR",
      tags: ["QR Scanner", "Instant Access", "Secure"],
    },
    {
      id: 5,
      title: "Gestión de Clientes",
      description:
        "Sistema completo de administración de clientes con perfiles detallados, historial de actividades y seguimiento personalizado. Mantén toda la información organizada y accesible en un solo lugar para mejorar la relación con tus usuarios.",
      image: clienteImg,
      alt: "Gestión de Clientes",
      tags: ["CRM", "Profiles", "History Tracking"],
    },
    {
      id: 6,
      title: "Reportes Detallados",
      description:
        "Generación automática de reportes completos y personalizables. Exporta datos en múltiples formatos, programa reportes periódicos y mantén un seguimiento detallado de todas las actividades.",
      image: reportesImg,
      alt: "Sistema de Reportes",
      tags: ["PDF Export", "Automated", "Customizable"],
    },
    {
      id: 7,
      isComingSoon: true,
      title: "Y nuevas funcionalidades pronto!!!",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="galeria" className="features-section">
      <div className="container">
        <h2 className="section-title fade-in">Características de Miilo</h2>

        <div className="carousel-container">
          {/* Carousel Track */}
          <div className="carousel-track">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`carousel-slide ${
                  index === currentSlide ? "active" : ""
                } ${index < currentSlide ? "prev" : ""} ${
                  index > currentSlide ? "next" : ""
                }`}
              >
                {feature.isComingSoon ? (
                  <div className="carousel-content carousel-coming-soon">
                    <div className="coming-soon-content">
                      <div className="coming-soon-sparkle">✨</div>
                      <h3 className="coming-soon-title">{feature.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="carousel-content">
                    <div className="carousel-image-wrapper">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="carousel-image"
                      />
                    </div>

                    <div className="carousel-info">
                      <div className="feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="carousel-title">{feature.title}</h3>
                      <p className="carousel-description">
                        {feature.description}
                      </p>
                      <div className="carousel-tags">
                        {feature.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="carousel-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="carousel-btn carousel-btn-prev"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="carousel-btn carousel-btn-next"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
