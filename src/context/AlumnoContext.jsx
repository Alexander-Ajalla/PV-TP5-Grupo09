import { createContext, useState } from "react";

export const AlumnoContext = createContext();

export const AlumnoProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const alumnosIniciales = [
    {
      id: 1,
      lu: "APU004576",
      nombre: "Ariel Maximiliano",
      apellido: "Sánchez",
      curso: "Programación Visual",
      email: "maxisanchezms.ms@gmail.com",
      domicilio: "Soldado Sevilla 29",
      telefono: "3884625359",
    },
    {
      id: 2,
      lu: "APU004890",
      nombre: "Carlos Matias",
      apellido: "Alvarez",
      curso: "Programacion Visual",
      email: "43269789@fi.unju.edu.ar",
      domicilio: "B° 20 Viviendas S/N",
      telefono: "3884379293",
    },
    {
      id: 3,
      lu: "APU005634",
      nombre: "Lautaro",
      apellido: "Barrientos",
      curso: "Programación",
      email: "barrientoslautaro8@gmail.com",
      domicilio: "Alto Gorriti",
      telefono: "3644369786",
    },
    {
      id: 4,
      lu: "APU005553",
      nombre: "Ivo",
      apellido: "Vicencio",
      curso: "Programación Visual",
      email: "ivothaielvicencio@gmail.com",
      domicilio: "El picaflor 477",
      telefono: "2995757328",
    },
    {
      id: 5,
      lu: "APU005855",
      nombre: "Alexander",
      apellido: "Ajalla",
      curso: "Programación Visual",
      email: "alexander.ajalla404@gmail.com",
      domicilio: "Av. Exodo B° Centro",
      telefono: "3884217429",
    },
  ];
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

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
    setAlumnos((prev) =>
      prev.map((alumno) =>
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
