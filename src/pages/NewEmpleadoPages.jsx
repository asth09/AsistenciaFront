import { useForm } from "react-hook-form";
import { useEmpleados } from "../context/EmpleadoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function NewEmpleadoPages() {
    const {register, handleSubmit, setValue} = useForm()
        const {createEmpleado, getEmpleado, updateEmpleado} = useEmpleados()
        const navigate  = useNavigate()
        const params = useParams()
        console.log(createEmpleado)
        const onSubmit = handleSubmit((data) => {
            if (params.id) {
                updateEmpleado(params.id, data);
            } else{
                createEmpleado(data);
            }
            navigate('/empleado')
        })
        useEffect(() => {
            async function loadEmpleado(){
                if (params.id) {
                    const empleado = await getEmpleado(params.id)
                    console.log(empleado)
                    setValue('nombre', empleado.nombre)
                    setValue('apellido', empleado.apellido)
                    setValue('cedula', empleado.cedula)
                    setValue('firma', empleado.firma)
                }
            }
            loadEmpleado()
        },[])
  return (
    <div> 
        <section id="contact" className="contact section">
          <div className="container text-center" data-aos="fade-up">
                  <div className="Form_Title" data-aos="fade-up">
                      <h2>Crear nuevo empleado</h2>
                  </div>
              
              <form onSubmit={onSubmit} method="post" className="php-email-form" data-aos="fade" data-aos-delay="100">
                  <div className="row gy-4 justify-content-center">

                      <div className="col-md-6">
                              <input type="text" {...register("nombre", { required: true })} className="form-control" placeholder="Nombre"/>
                      </div>
                        
                      <div className="col-md-6 ">
                              <input type="text" {...register("apellido", { required: true })} className="form-control" placeholder="Apellido"/>
                      </div>

                      <div className="col-md-6 ">
                              <input type="number" {...register("cedula", { required: true })} className="form-control" placeholder="Cedula"/>
                      </div>

                      <div className="col-md-6 ">
                              <input type="text" {...register("firma", { required: true })} className="form-control" placeholder="Firma"/>
                      </div>
                      <br/>
                      <br/>
                      <br/>

                      <div className="col-md-12 text-center">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>

                          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                      </div>

                  </div>
              </form>
          </div>
        </section>
    </div>
  )
}

export default NewEmpleadoPages