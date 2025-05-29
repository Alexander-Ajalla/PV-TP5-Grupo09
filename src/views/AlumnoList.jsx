import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context.jsx'; // Importa el contexto donde están los alumnos
import './AlumnoList.css'; 


function AlumnoList() {
  //aca se extraeria el array de alumnos y la función para eliminar del contexto
  const { alumnos, eliminarAlumno } = useContext(Context);

  return (
    <div className="alumno-list">
      <h2>Lista de Alumnos</h2>

      {/* Enlace para ir al formulario de agregar nuevo alumno */}
      <Link to="/alumnos/nuevo" className="btn btn-primary">
        Agregar Nuevo Alumno
      </Link>

      {/* Si no hay alumnos, muestra mensaje */}
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Recorre el array de alumnos y crea una fila por cada uno */}
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>{alumno.email}</td>
                <td>
                  {/* Botón para ver detalles */}
                  <Link to={`/alumnos/${alumno.id}`} className="btn btn-info">Ver Detalles</Link>

                  {/* Botón para editar */}
                  <Link to={`/alumnos/${alumno.id}/editar`} className="btn btn-warning">Editar</Link>

                  {/* Botón para eliminar con confirmación */}
                  <button 
                    onClick={() => {
                      if (window.confirm('¿Está seguro de que desea eliminar este alumno?')) {
                        eliminarAlumno(alumno.id); // Llama a la función del contexto
                      }
                    }} 
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AlumnoList;
