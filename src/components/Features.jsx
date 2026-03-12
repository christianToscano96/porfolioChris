import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import loginImg from "../assets/login.png";
import dashboardImg from "../assets/dashboar.png";
import metricasImg from "../assets/metricas.png";
import reportesImg from "../assets/reportes.png";
import qrImg from "../assets/qr.png";
import clienteImg from "../assets/cliente.png";

const Features = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      id: 1,
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
      image: loginImg,
      alt: "Pantalla de Login de Miilo App",
      tags: ["JWT", "OAuth", "Encriptación"],
    },
    {
      id: 2,
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
      image: dashboardImg,
      alt: "Dashboard de Miilo App",
      tags: ["Real-time", "Responsive", "Intuitivo"],
    },
    {
      id: 3,
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
      image: metricasImg,
      alt: "Panel de Métricas",
      tags: ["Analytics", "Charts", "Data Viz"],
    },
    {
      id: 4,
      title: t("features.feature4.title"),
      description: t("features.feature4.description"),
      image: qrImg,
      alt: "Sistema de Acceso QR",
      tags: ["QR Scanner", "Instant Access", "Secure"],
    },
    {
      id: 5,
      title: t("features.feature5.title"),
      description: t("features.feature5.description"),
      image: clienteImg,
      alt: "Gestión de Clientes",
      tags: ["CRM", "Profiles", "History Tracking"],
    },
    {
      id: 6,
      title: t("features.feature6.title"),
      description: t("features.feature6.description"),
      image: reportesImg,
      alt: "Sistema de Reportes",
      tags: ["PDF Export", "Automated", "Customizable"],
    },
    {
      id: 7,
      isComingSoon: true,
      title: t("features.comingSoon"),
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
        <h2 className="section-title fade-in">{t("features.title")}</h2>

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
