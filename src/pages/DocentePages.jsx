import { useEffect } from "react";
import { useDocentes } from "../context/DocenteContext";
import { useNavigate, Link } from "react-router-dom";

function DocentePages() {
  const { getDocentes, docentes, deleteDocente } = useDocentes();
  const navigate  = useNavigate()
  const NewDocente = () => {
    navigate("/newdocente");
  };
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este registro?");
    if (confirmDelete) {
      deleteDocente(id);
    }
  };

  useEffect(() => {
      getDocentes()
  }, [])

  return (
    <div id="contact" className="contact section">
      <div className="Form_Title2" data-aos="fade-up">
      <h2>Docentes</h2>
      <button type="button" className="btn btn-success" onClick={NewDocente}>Crear registro</button>
    </div>
      <table className="table table-bordered table-striped table_id" id="tblDatos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Firma</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {docentes.length > 0 ? (
            docentes.map((docente) => (
              <tr key={docente.id}>
                <td>{docente.nombre}</td>
                <td>{docente.apellido}</td>
                <td>{docente.cedula}</td>
                <td>{docente.firma}</td>
                <td>
                  <Link to={`/docente/${docente._id}`} className="mr-3" title="Modificar registro" data-toggle="tooltip">
                    <span className="fa fa-pencil"></span>
                  </Link>
                  <Link onClick={() => handleDelete(docente._id)} title="Borrar registro" data-toggle="tooltip">
                    <span className="fa fa-trash"></span>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay docentes disponibles.</td> {/* Mensaje si no hay docentes */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DocentePages;
