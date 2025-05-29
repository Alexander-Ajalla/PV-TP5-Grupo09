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
    if (id) {
      const alumnoAEditar = alumnos.find(
        (alumno) => alumno.id === parseInt(id)
      );
      if (alumnoAEditar) {
        setFormData(alumnoAEditar);
      }
    }
  }, [id, alumnos]);

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
