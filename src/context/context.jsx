import { createContext, useState } from "react";

export const AlumnoContext = createContext();

export const AlumnoProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const [alumnos, setAlumnos] = useState([]);

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(""), 3000); // El mensaje desaparece después de 3 segundos
  };

  const agregarAlumno = (alumno) => {
    setAlumnos([...alumnos, alumno]);
    mostrarMensaje("Alumno agregado exitosamente");
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    mostrarMensaje("Alumno eliminado exitosamente");
  };

  const actualizarAlumno = (id, datosActualizados) => {
    setAlumnos(
      alumnos.map((alumno) =>
        alumno.id === id ? { ...alumno, ...datosActualizados } : alumno
      )
    );
    mostrarMensaje("Alumno actualizado exitosamente");
  };

  return (
    <AlumnoContext.Provider
      value={{
        alumnos,
        mensaje,
        agregarAlumno,
        eliminarAlumno,
        actualizarAlumno,
      }}
    >
      {children}
    </AlumnoContext.Provider>
  );
};
