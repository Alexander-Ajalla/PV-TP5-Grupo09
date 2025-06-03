import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    <i className="bi bi-mortarboard-fill me-2"></i>
                    Sistema de Gestión de Alumnos
                </Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="bi bi-house-door me-1"></i> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alumnos" className="nav-link">
                                <i className="bi bi-people-fill me-1"></i> Alumnos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alumnos/nuevo" className="nav-link">
                                <i className="bi bi-person-plus-fill me-1"></i> Nuevo Alumno
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/acerca" className="nav-link">
                                <i className="bi bi-info-circle-fill me-1"></i> Acerca de
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
