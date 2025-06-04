// src/componentes/Footer.jsx
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer text-white mt-auto py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span>
          &copy; {year} Sistema de Gestión de Alumnos | Desarrollado por <strong>Grupo 9</strong>
        </span>
        <div className="social-icons mt-2 mt-md-0">
          <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:tuemail@example.com">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
