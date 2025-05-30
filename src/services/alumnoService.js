import { useContext } from 'react';
import { AlumnoContext } from '../context/AlumnoContext.jsx';

// Hook personalizado para acceder al contexto de alumnos
export function useAlumnos() {
  const context = useContext(AlumnoContext);
  if (!context) {
    throw new Error('useAlumnos debe usarse dentro de un AlumnoProvider');
  }
  return context;
}

export default useAlumnos;