import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPages() {
  const { register, handleSubmit} = useForm()
  const {signin, isAuthenticated, errors} = useAuth();
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
                        </div>
                        <div className="col-md-6 ">
                        <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Contraseña"/>
                        </div>
                        <br/>
                        <br/>

                        <div className="col-md-12 text-center">
                        <button type="submit">Iniciar sesion</button>
                        </div>

                  </div>
              </form>
              {errors && (
                <div className="error-message-container">
                  <p className="error-message">{errors}</p>
                </div>
              )}
          </div>
      </section>
    </div>
  )
}

export default LoginPages