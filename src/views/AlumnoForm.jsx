// Importación de hooks y contexto necesario
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AlumnoContext } from '../context/AlumnoContext.jsx';
import './AlumnoForm.css';

// Componente funcional del formulario para agregar alumno
function AlumnoForm() {
  const navigate = useNavigate(); // Hook para redirigir luego de guardar
  const { agregarAlumno } = useContext(AlumnoContext); // Función del contexto para agregar alumno

  // Estado local para manejar los datos del formulario
  const [formData, setFormData] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  // Función que actualiza el estado cada vez que se escribe en un campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Crea un nuevo alumno con un ID único
    const nuevoAlumno = {
      ...formData,
      id: Date.now()
    };

    agregarAlumno(nuevoAlumno); // Llama a la función del contexto para guardar el alumno
    navigate('/alumnos'); // Redirige a la vista de lista de alumnos
  };

  return (
    <div className="alumno-form">
      <h2>Nuevo Alumno</h2>
      
      {/* Formulario controlado */}
      <form onSubmit={handleSubmit}>
        {/* Campo LU */}
        <div className="form-group">
          <label htmlFor="lu">LU:</label>
          <input
            type="text"
            id="lu"
            name="lu"
            value={formData.lu}
            onChange={handleChange}
            required
          />
        </div>

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
            onClick={() => navigate('/alumnos')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AlumnoForm;
