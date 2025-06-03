import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AlumnoContext } from '../context/AlumnoContext.jsx'; // Importa el contexto donde están los alumnos
import './AlumnoList.css'; 


function AlumnoList() {
  //aca se extraeria el array de alumnos y la función para eliminar del contexto
  const { alumnos, eliminarAlumno } = useContext(AlumnoContext);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <i className="bi bi-mortarboard-fill me-2"></i>
          Lista de Alumnos
        </h2>
        <Link to="/alumnos/nuevo" className="btn btn-primary rounded-pill">
          <i className="bi bi-person-plus-fill me-2"></i>
          Agregar Nuevo Alumno
        </Link>
      </div>

      {/* Si no hay alumnos, muestra mensaje */}
      {alumnos.length === 0 ? (
        <div className="alert alert-info text-center">
          <i className="bi bi-info-circle-fill me-2"></i>
          No hay alumnos registrados.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Nombre Completo</th>
                <th scope="col">LU</th>
                <th scope="col">Curso</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{`${alumno.apellido}, ${alumno.nombre}`}</td>
                  <td>{alumno.lu}</td>
                  <td>{alumno.curso}</td>
                  <td>{alumno.email}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link 
                        to={`/alumnos/${alumno.id}`} 
                        className="btn btn-outline-info btn-sm"
                        title="Ver Detalles"
                      >
                        <i className="bi bi-eye-fill"></i>
                      </Link>
                      <Link 
                        to={`/alumnos/${alumno.id}/editar`} 
                        className="btn btn-outline-warning btn-sm"
                        title="Editar"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Link>
                      <button 
                        onClick={() => {
                          if (window.confirm('¿Está seguro de que desea eliminar este alumno?')) {
                            eliminarAlumno(alumno.id);
                          }
                        }} 
                        className="btn btn-outline-danger btn-sm"
                        title="Eliminar"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AlumnoList;
