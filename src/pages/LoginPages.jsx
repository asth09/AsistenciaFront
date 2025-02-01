import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPages() {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const {signin, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

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
                      <h2>Login</h2>
                  </div>
              
              <form onSubmit={onSubmit} method="post" className="php-email-form" data-aos="fade" data-aos-delay="100">
                  <div className="row gy-4 justify-content-center">

                  <div className="col-md-6">
                        <input type="text" {...register("usuario", { required: true })} className="form-control" placeholder="Usuario"/>
                        {errors.usuario && <div className="invalid-feedback">{errors.usuario.message}</div>}
                        </div>
                        <div className="col-md-6 ">
                        <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Contraseña"/>
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                        </div>
                        <br/>
                        <br/>

                        <div className="col-md-12 text-center">
                        <button type="submit">Iniciar sesion</button>
                        </div>

                  </div>
              </form>
          </div>
      </section>
    </div>
  )
}

export default LoginPages