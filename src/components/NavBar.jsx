import { Link } from 'react-router-dom';
import './NavBar.css';

//componente funcional para el menu de navegacion
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Sistema de Gestión de Alumnos</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alumnos" className="nav-link">Alumnos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alumnos/nuevo" className="nav-link">Nuevo Alumno</Link>
                </li>
                <li className="nav-item">
                    <Link to="/acerca" className="nav-link">Acerca de</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;