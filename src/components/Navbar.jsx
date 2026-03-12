import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Navbar = ({ scrollY, theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
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
        <ul className="nav-menu">
          <li>
            <a href="#inicio">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#experiencia">{t("nav.experience")}</a>
          </li>

          <li>
            <a href="#proyecto">{t("nav.project")}</a>
          </li>
          <li>
            <a href="#historia">{t("nav.about")}</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Toggle language"
          >
            {i18n.language === "es" ? "🇺🇸" : "🇦🇷"}
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  scrollY: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
