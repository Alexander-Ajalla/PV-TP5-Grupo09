import { useContext } from 'react';
import { AlumnoContext } from '../context/AlumnoContext';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  const { mensaje } = useContext(AlumnoContext);

  return (
    <div className="container-fluid px-4 py-5">
      {mensaje && (
        <div className="alert alert-info alert-dismissible fade show text-center mb-4" role="alert">
          {mensaje}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}


      <div className="text-center mb-4">
        <img
          src="https://www.fi.unju.edu.ar/images/Institucional/Logos/logo-fi-unju-institucional-285x159.jpg" // <--- Replace this with the actual logo URL
          alt="Logo UNJU"
          className="img-fluid unju-logo"
        />
      </div>

      <div className="row align-items-center min-vh-75 py-5">
        <div className="col-lg-6 col-md-7 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-3">Sistema de Gestión de Alumnos</h1>
          <h2 className="h4 text-muted mb-4">
            Facultad de Ingeniería - Universidad Nacional de Jujuy
          </h2>
          <p className="lead mb-4">
            Plataforma administrativa para la gestión integral de la información académica de los estudiantes. Acceda a las funcionalidades para registrar, consultar y actualizar datos de manera eficiente y segura.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/alumnos" className="btn btn-primary btn-lg px-4 py-2">
              Ver Listado de Alumnos
            </Link>
            <Link to="/alumnos/nuevo" className="btn btn-outline-secondary btn-lg px-4 py-2">
              Registrar Nuevo Alumno
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="bg-light rounded-4 p-5 shadow-sm text-center">
            <img 
              src="https://noticias.unju.edu.ar/noticias/serv/notis/35060.jpg" 
              alt="Gestión Educativa UNJU" 
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;