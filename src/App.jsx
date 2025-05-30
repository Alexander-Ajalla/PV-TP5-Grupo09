import { Routes, Route } from 'react-router-dom';
import { AlumnoProvider } from './context/AlumnoContext.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './views/Home.jsx';
import AlumnoList from './views/AlumnoList.jsx';
import AlumnoForm from './views/AlumnoForm.jsx';
import AlumnoDetail from './views/AlumnoDetail.jsx';
import SobreNosotros from './views/SobreNosotros.jsx';

// Componente principal que define las rutas y provee el contexto
function App() {
  return (
    // Envuelve la aplicación con el proveedor de contexto
    <AlumnoProvider>
      <div className="container">
        <NavBar /> {/* Componente de navegación siempre visible */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
          <Route path="/alumnos" element={<AlumnoList />} /> {/* Ruta para la lista de alumnos */}
          <Route path="/alumnos/nuevo" element={<AlumnoForm />} /> {/* Ruta para agregar un nuevo alumno */}
          <Route path="/alumnos/:id/editar" element={<AlumnoForm />} /> {/* Ruta para editar un alumno */}
          <Route path="/alumnos/:id" element={<AlumnoDetail />} /> {/* Ruta para ver detalles de un alumno */}
          <Route path="/acerca" element={<SobreNosotros />} /> {/* Ruta para la página "Acerca de" */}
        </Routes>
      </div>
    </AlumnoProvider>
  );
}

export default App;