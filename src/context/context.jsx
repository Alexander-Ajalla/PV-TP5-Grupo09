export const AlumnoContext = createContext();

export const AlumnoProvider = ({ children }) => {
  {
    /**const actualizarAlumno = (id, datosActualizados) => {
    setAlumnos(
      alumnos.map((alumno) =>
        alumno.id === id ? { ...alumno, ...datosActualizados } : alumno
      )
    );
    mostrarMensaje("Alumno actualizado exitosamente");
  }; */
  }
  {
    /**const actualizarAlumno = (id, datosActualizados) => {
    const alumnoIndice = alumnos.findIndex((alumno) => alumno.id === id);
    alumnos[alumnoIndice] = {
      ...alumnos[alumnoIndice],
      ...datosActualizados,
      id: alumnos[alumnoIndice].id,
    };
    //guardarAlumnos(alumnos);
    return alumnos[alumnoIndice];
  }; */
  }
  //setAlumnos((prev) => prev.map((a) => (a.id === id ? { ...a, ...datos } : a)));
};
