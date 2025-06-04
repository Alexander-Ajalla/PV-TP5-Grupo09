import { Routes, Route } from 'react-router-dom';
import { AlumnoProvider } from './context/AlumnoContext.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx'; // 👈 Importamos el Footer

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
      <div className="d-flex flex-column min-vh-100"> {/* Asegura que el footer quede abajo */}
        <NavBar /> {/* Componente de navegación siempre visible */}

        <main className="flex-grow-1 container py-4"> {/* Contenedor principal con espacio */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumnos" element={<AlumnoList />} />
            <Route path="/alumnos/nuevo" element={<AlumnoForm />} />
            <Route path="/alumnos/:id/editar" element={<AlumnoForm />} />
            <Route path="/alumnos/:id" element={<AlumnoDetail />} />
            <Route path="/acerca" element={<SobreNosotros />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </AlumnoProvider>
  );
}

export default App;
