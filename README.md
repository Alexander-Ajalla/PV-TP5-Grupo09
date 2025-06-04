<img src="./src/assets/logo-fi-unju-gran-formato-horizontal-3000x683.png" alt="logo fi">

# Trabajo Práctico N° 5 - Programación Visual <img src="https://www.svgrepo.com/show/303157/react-logo.svg" alt="React Logo" width="50" height="60" style="vertical-align: middle, object-fit:contain;">

## Sistema de Gestión de Alumnos en React
### Descripción del Proyecto 📚

Se trata de una **aplicación web desarrollada en React** que permite **gestionar la información de alumnos** mediante una interfaz moderna y dinámica.

La finalidad de este trabajo es integrar conceptos fundamentales de desarrollo frontend, haciendo foco en:

- El manejo adecuado de **eventos** en React.
- La implementación de una **navegación completa** entre vistas utilizando **React Router DOM**.
- La construcción de **componentes funcionales reutilizables** y la comunicación entre ellos.
- El uso de formularios controlados y el **ciclo de vida de los componentes** para gestionar el estado de la aplicación.

## 🧩 Objetivos del Trabajo

- Aplicar los **eventos sintéticos y nativos** en React para capturar y procesar acciones del usuario.
- Utilizar **props y estados locales** para estructurar la lógica del sistema.
- Incorporar rutas dinámicas para permitir navegación entre distintas vistas, como edición y visualización detallada.
- Aprender a estructurar una aplicación web modular utilizando **componentes funcionales** y principios de **Single Page Application (SPA)**.

## Funcionalidades 👾
La aplicación permite a los usuarios:

- Agregar nuevos productos a la lista mediante un formulario.
- Buscar productos existentes por descripción o ID.
- Modificar la información de productos seleccionados.
- Eliminar productos de la lista.

## 🛠 Características Técnicas

- Desarrollado con **React** y **Vite**.
- Interfaz de usuario construida con **JSX**.
- Uso de **Bootstrap** como framework de diseño para una interfaz moderna y responsiva.
- Gestión de estado con `useState`.
- Efectos secundarios mediante `useEffect` (por ejemplo, para inicializar datos o escuchar cambios).
- Uso de `useParams` para capturar rutas dinámicas y `useNavigate` para redirecciones.
- **Optimización opcional** con `useMemo` para evitar renders innecesarios.
- **Memorización de funciones** con `useCallback` para mejorar el rendimiento en componentes que reciben funciones por props.
- Utilización de eventos sintéticos del DOM: `onClick`, `onChange`, `onSubmit`, etc.
- Componentes reutilizables y organizados: `AlumnoForm`, `AlumnoItem`, `AlumnoList`, `NavBar`, `DetalleAlumno`.

## Navegación con React Router 🌐
La navegación entre vistas está completamente gestionada mediante **React Router DOM**, permitiendo una experiencia fluida de una sola página (SPA).

### Rutas implementadas

- `/` → Página principal (Home)
- `/alumnos` → Lista de alumnos
- `/alumnos/nuevo` → Formulario para agregar un alumno
- `/alumnos/:id` → Detalle del alumno
- `/alumnos/:id/editar` → Formulario de edición
- `/acerca` → Información sobre los creadores

## Integrantes 👥

- Alexander Natanael Ajalla ➡ [Alexander-Ajalla](https://github.com/Alexander-Ajalla)
- Barrientos Lautaro Nicolás ➡ [Lautaro Barrientos](https://github.com/BarrientosLautaro)
- Ivo Thaiel Vicencio Rosas ➡ [IvoThaielVicencioRosas](https://github.com/ivothaiel)
- Álvarez Carlos Matías ➡ [AlvarezCarlosMatias](https://github.com/MintBlue06)
- Sánchez Ariel Maximiliano ➡ [MaxiSanchez27](https://github.com/MaxiSanchez27)

## Tecnologías utilizadas 🛠️

- **React + Vite** como base del proyecto.
- **React Router DOM** para el enrutamiento.
- **JSX** para estructurar la interfaz.
- **CSS o Framework de UI** en este caso Bootstrap

#### Dependencias a instalar

`$ npm install bootstrap`

`$ npm install bootstrap-icons`
