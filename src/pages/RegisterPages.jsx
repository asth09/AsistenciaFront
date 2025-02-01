import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RegisterPages() {
    const { register, handleSubmit } = useForm()
    const {signup, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
          navigate("/");
        }
      }, [isAuthenticated]);

  return (
    <div> 
      <section id="contact" className="contact section">
          <div className="container text-center" data-aos="fade-up">
                  <div className="Form_Title" data-aos="fade-up">
                      <h2>Registro</h2>
                  </div>
              
              <form onSubmit={handleSubmit(async (values) => { 
                      signup(values);
                      })} method="post" className="php-email-form" data-aos="fade" data-aos-delay="100">
                  <div className="row gy-4 justify-content-center">

                  <div className="col-md-6">
                        <input type="text" {...register("usuario", { required: true })} className="form-control" placeholder="Usuario"/>
                        </div>

                        <div className="col-md-6 ">
                        <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Contraseña"/>
                        </div>
                        <div className="col-md-6">
                          <select className="form-control"{...register("role", { required: true })}>
                            <option value="">Selecciona un rol</option>
                            <option value="docente">Docente</option>
                            <option value="empleado">Empleado</option>
                        </select></div>
                        <br/>
                        <br/>

                        <div className="col-md-12 text-center">
                        <button type="submit">Registro</button>
                        </div>

                  </div>
              </form>
          </div>
      </section>
    </div>
  )
}

export default RegisterPages