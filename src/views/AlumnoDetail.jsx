import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AlumnoContext } from "../context/context";
import "./AlumnoDetail.css";

function AlumnoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { alumnos, eliminarAlumno } = useContext(AlumnoContext);

  const alumno = alumnos.find((a) => a.id === parseInt(id));

  if (!alumno) {
    return (
      <div className="alumno-detail">
        <h2>Alumno no encontrado</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/alumnos")}
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm("¿Está seguro de que desea eliminar este alumno?")) {
      eliminarAlumno(alumno.id);
      navigate("/alumnos");
    }
  };

  return (
    <div className="alumno-detail">
      <h2>Detalles del Alumno</h2>
      <div className="alumno-info">
        <p>
          <strong>LU:</strong> {alumno.lu}
        </p>
        <p>
          <strong>Nombre:</strong> {alumno.nombre}
        </p>
        <p>
          <strong>Apellido:</strong> {alumno.apellido}
        </p>
        <p>
          <strong>Curso:</strong> {alumno.curso}
        </p>
        <p>
          <strong>Email:</strong> {alumno.email}
        </p>
        <p>
          <strong>Domicilio:</strong> {alumno.domicilio}
        </p>
        <p>
          <strong>Teléfono:</strong> {alumno.telefono}
        </p>
      </div>

      <div className="alumno-actions">
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/alumnos/${id}/editar`)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleEliminar}>
          Eliminar
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/alumnos")}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default AlumnoDetail;
