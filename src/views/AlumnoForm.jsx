const AlumnoForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { alumnos, agregarAlumno, actualizarAlumno } =
    useContext(AlumnoContext);

  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actualizarAlumno(parseInt(id), formData);
    } else {
      const nuevoAlumno = {
        ...formData,
        //crypto.UUID()?
        id: Date.now(), // Genera un ID único
      };
      agregarAlumno(nuevoAlumno);
    }
    navigate("/alumnos");
  };

  return <></>;
};

export default AlumnoForm;
