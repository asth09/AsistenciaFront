import { useEffect } from "react";
import { useEmpleados } from "../context/EmpleadoContext";
import { useNavigate, Link } from "react-router-dom";

function EmpleadoPages() {
    const { getEmpleados, empleados, deleteEmpleado } = useEmpleados();
    const navigate = useNavigate()
    const NewEmpleado = () => {
      navigate("/newempleado");
    };

  useEffect(() => {
      getEmpleados()
  }, [])
  return (
    <div id="contact" className="contact section">
      <div className="Form_Title2" data-aos="fade-up">
            <h2>Empleado</h2>
            <button type="button" className="btn btn-success" onClick={NewEmpleado}>Crear registro</button>
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
          {empleados.length > 0 ? (
            empleados.map((empleado) => (
              <tr key={empleado.cedula}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.cedula}</td>
                <td>{empleado.firma}</td>
                <td>
                  <Link to={`/empleado/${empleado._id}`} className="mr-3" title="Modificar registro" data-toggle="tooltip">
                    <span className="fa fa-pencil"></span>
                  </Link>
                  <Link onClick={() =>  {deleteEmpleado(empleado._id)}} title="Borrar registro" data-toggle="tooltip">
                    <span className="fa fa-trash"></span>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay Empleados disponibles.</td> {/* Mensaje si no hay empleados */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default EmpleadoPages