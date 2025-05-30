import { useContext } from 'react';
import { AlumnoContext } from '../context/AlumnoContext';
import './Home.css';


function Home() {
  const { mensaje } = useContext(AlumnoContext); // Accede al mensaje del contexto

  return (
    <div className="home container">
      {mensaje && <div className="notification">{mensaje}</div>} {/* Muestra notificaciones */}
      <h1>Bienvenidos al Sistema de Gestión de Alumnos</h1>
      <p>Esta es una aplicación para administrar información de alumnos.</p>
    </div>
  );
}

export default Home;