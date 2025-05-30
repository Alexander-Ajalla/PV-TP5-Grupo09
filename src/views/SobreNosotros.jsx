import './SobreNosotros.css';

function SobreNosotros() {
  return (
    <div className="about">
      <h2>Sobre el Sistema de Gestión de Alumnos</h2>
      <div className="about-content">
        <p>
          Este sistema fue desarrollado como parte del Trabajo Práctico 5 para la materia de Visualización de Datos.
          Permite gestionar información de alumnos de manera eficiente y organizada.
        </p>
        
        <h3>Características principales:</h3>
        <ul>
          <li>Registro de nuevos alumnos</li>
          <li>Visualización de lista de alumnos</li>
          <li>Edición de información de alumnos</li>
          <li>Eliminación de registros</li>
          <li>Vista detallada de cada alumno</li>
        </ul>

        <h3>Tecnologías utilizadas:</h3>
        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>Context API</li>
          <li>CSS moderno</li>
        </ul>
      </div>
    </div>
  );
}

export default SobreNosotros;