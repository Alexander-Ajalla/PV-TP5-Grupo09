import './SobreNosotros.css';

function SobreNosotros() {
  return (
    <div className="about container py-5">
      <h2 className="text-center mb-4">Sobre el Sistema de Gestión de Alumnos</h2>
      <div className="about-content row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="lead text-center">
            Este sistema fue desarrollado como parte del Trabajo Práctico 5 para la materia de Programación Visual.
          </p>
          <p className="lead text-center">
            Grupo9.
          </p>
          <h3 className="mt-4">Características principales:</h3>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Registro de nuevos alumnos</li>
            <li className="list-group-item">Visualización de lista de alumnos</li>
            <li className="list-group-item">Edición de información de alumnos</li>
            <li className="list-group-item">Eliminación de registros</li>
            <li className="list-group-item">Vista detallada de cada alumno</li>
          </ul>
          <h3 className="mt-4">Tecnologías utilizadas:</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">React</li>
            <li className="list-group-item">React Router</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Bootstrap Icons</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;