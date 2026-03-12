import PropTypes from "prop-types";

const Navbar = ({ scrollY, theme, toggleTheme }) => {
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
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>

          <li>
            <a href="#proyecto">Miilo App</a>
          </li>
          <li>
            <a href="#historia">Sobre Mí</a>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
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
