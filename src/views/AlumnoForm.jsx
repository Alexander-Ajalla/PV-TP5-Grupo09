// Importación de hooks y contexto necesario
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AlumnoContext } from "../context/AlumnoContext.jsx";
import "./AlumnoForm.css";

// Componente funcional del formulario para agregar alumno
const AlumnoForm = () => {
  const navigate = useNavigate(); // Hook para redirigir luego de guardar
  const { id } = useParams();
  const { alumnos, actualizarAlumno, agregarAlumno } =
    useContext(AlumnoContext); // Función del contexto para agregar alumno

  // Estado local para manejar los datos del formulario
  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  // Función que actualiza el estado cada vez que se escribe en un campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validarAlumno(formData);
    if (error) {
      alert(error);
      return;
    }

    const luConPrefijo = `APU00${formData.lu.trim()}`;

    let datosAlumno = {
      ...formData,
      lu: luConPrefijo,
    };

    if (id) {
      actualizarAlumno(Number(id), datosAlumno);
      alert(`Alumno ${formData.nombre} actualizado correctamente`);
    } else {
      datosAlumno = {
        ...datosAlumno,
        id: Date.now(),
      };
      agregarAlumno(datosAlumno);
      alert(`Alumno ${datosAlumno.nombre} agregado correctamente`);
    }

    navigate("/alumnos");
  };

  useEffect(() => {
    // Este efecto carga los datos del alumno cuando el ID (LU) cambia
    // o si la lista de alumnos se actualiza.
    // Si el alumno no se encuentra, notifica y redirige.
    if (!id) return;
    if (!alumnos || alumnos.length === 0) return;

    const alumno = alumnos.find((a) => a.id === Number(id));
    if (alumno) {
      setFormData(alumno);
    } else {
      alert(`Alumno con ID ${id} no encontrado`);
      navigate("/alumnos");
    }
  }, [id, alumnos, navigate]);

  const validarAlumno = (formData) => {
    const camposRequeridos = [
      "lu",
      "nombre",
      "apellido",
      "curso",
      "email",
      "domicilio",
      "telefono",
    ];
    const camposVacios = camposRequeridos.filter(
      (campo) => !formData[campo]?.trim()
    );

    if (camposVacios.length > 0) {
      return `Los siguientes campos son obligatorios: ${camposVacios.join(
        ", "
      )}`;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const luRegex = /^\d{4,10}$/;
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,50}$/;
    const cursoRegex = /^[a-zA-Z0-9 ]{2,30}$/;
    const domicilioRegex = /^.{5,100}$/;
    const telefonoRegex = /^\d{10,15}$/;

    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      return "El correo electrónico no tiene un formato válido";
    }
    if (!luRegex.test(formData.lu.trim())) {
      return "LU debe ser un número de 4 a 10 dígitos";
    }
    if (!nombreRegex.test(formData.nombre.trim())) {
      return "Nombre debe contener solo letras y tener entre 3 y 50 caracteres";
    }
    if (!nombreRegex.test(formData.apellido.trim())) {
      return "Apellido debe contener solo letras y tener entre 3 y 50 caracteres";
    }
    if (!cursoRegex.test(formData.curso.trim())) {
      return "Curso debe contener letras o números y tener entre 2 y 30 caracteres";
    }
    if (!domicilioRegex.test(formData.domicilio.trim())) {
      return "Domicilio debe tener entre 5 y 100 caracteres";
    }
    if (!telefonoRegex.test(formData.telefono.trim())) {
      return "Teléfono debe contener solo números y tener entre 10 y 15 dígitos";
    }

    return null;
  };

  return (
    <div className="alumno-form">
      <h2>{formData.id ? "Editar Alumno" : "Nuevo Alumno"}</h2>
      {/* Formulario controlado */}
      <form onSubmit={handleSubmit}>
        {/* Campo LU */}
        {!formData.id && (
          <div className="form-group">
            <label htmlFor="lu">LU:</label>
            <input
              type="text"
              className="form-control"
              value={formData.lu}
              onChange={(e) => setFormData({ ...formData, lu: e.target.value })}
            />
          </div>
        )}

        {/* Campo Nombre */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Apellido */}
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Curso */}
        <div className="form-group">
          <label htmlFor="curso">Curso:</label>
          <input
            type="text"
            id="curso"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Domicilio */}
        <div className="form-group">
          <label htmlFor="domicilio">Domicilio:</label>
          <input
            type="text"
            id="domicilio"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botones de acción */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/alumnos")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnoForm;
