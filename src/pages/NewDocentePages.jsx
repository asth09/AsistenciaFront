import { useForm } from "react-hook-form";
import { useDocentes } from "../context/DocenteContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function NewDocentePages() {
    const {register, handleSubmit, setValue} = useForm()
    const {createDocente, getDocente, updateDocente} = useDocentes()
    const navigate  = useNavigate()
    const params = useParams()
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateDocente(params.id, data);
        } else{
            createDocente(data);
        }
        navigate('/docente')
    })
    useEffect(() => {
        async function loadDocente(){
            if (params.id) {
                const docente = await getDocente(params.id)
                console.log(docente)
                setValue('nombre', docente.nombre)
                setValue('apellido', docente.apellido)
                setValue('cedula', docente.cedula)
                setValue('firma', docente.firma)
            }
        }
        loadDocente()
    },[])

  return (
    <div> 
        <section id="contact" className="contact section">
          <div className="container text-center" data-aos="fade-up">
                  <div className="Form_Title" data-aos="fade-up">
                      <h2>Crear nuevo docente</h2>
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

export default NewDocentePages