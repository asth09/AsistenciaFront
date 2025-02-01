import { Link } from "react-router-dom";
import Svg  from "../assets/Svg";

function HomePages() {
  return (
    <div> 
        <main className="main">

            <section id="hero" className="hero section accent-background">

            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-5 justify-content-between">
                <div className="Zone">
                <div>
                  <h2>
                    <span>Bienvenidos al </span>
                    <span className="accent">Sistema</span>
                  </h2>
                  <p>
                    ¡Hola! Con nuestro sistema de asistencia, tendrás el control
                    total sobre tus horarios y asistencia. ¡Comencemos!.
                  </p>
                  <div className="d-flex">
                    <Link to={"/login"} className="btn-get-started">
                      Empezar
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                  <Svg />
                </div>
              </div>
                </div>
            </div>

            </section>

            <section id="about" className="about section">

            
            <div className="container section-title" data-aos="fade-up">
                <h2>Sobre nosotros</h2>
                <p>Bienvenido a nuestra plataforma de gestión de asistencia, 
                    diseñada específicamente para ayudar a los directivos de U.E.E Carlos soublette 
                    a llevar un control eficiente y efectivo de la asistencia de profesores y obreros. 
                    Nuestra misión es simplificar el proceso de registro y seguimiento de asistencia, 
                    permitiendo a los administradores centrarse en lo que realmente importa: 
                    la educación y el bienestar de nuestros estudiantes.</p>
            </div>

            <div className="container">

                <div className="row gy-4">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3>¿Qué ofrecemos?</h3>
                    <p><h5>Registro de Asistencia:</h5>
                     Nuestra herramienta permite registrar fácilmente la asistencia diaria de todos los profesores
                      y obreros, asegurando que se mantenga un registro preciso y actualizado.
                    </p>
                    <p><h5>Informes Detallados:</h5>Generamos informes que ofrecen una visión clara de la asistencia,
                     facilitando la identificación de patrones y tendencias. Esto ayuda en la toma de decisiones
                      informadas sobre recursos humanos y gestión escolar.
                    </p>
                      <p><h5>Interfaz Amigable:</h5>
                        La plataforma ha sido diseñada pensando en la facilidad de uso.
                        Con una interfaz intuitiva, los directivos pueden navegar sin dificultad y acceder
                        a las funcionalidades que necesitan.
                        </p>
                        <p><h5>Accesibilidad:</h5> Ya sea desde una computadora o un dispositivo móvil,
                             nuestro sistema está disponible en cualquier momento y lugar, permitiendo
                              a los directivos gestionar la asistencia sin restricciones.
                        </p>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                    <div className="content ps-0 ps-lg-5">
                    <h3>¿Cómo usar la plataforma?</h3>
                    <ul>
                        <li> <span>1. Inicio de Sesión: Accede a tu cuenta con tus credenciales proporcionadas por la administración.</span></li>
                        <li> <span>2. Registro de Asistencia: Selecciona la opción correspondiente para registrar la asistencia del día.</span></li>
                        <li> <span>3. Generar Informes: Utiliza la sección de informes para obtener datos sobre la asistencia en diferentes periodos.</span></li>
                        <li> <span>4. Soporte: Si necesitas ayuda, no dudes en contactar a nuestro equipo de soporte a través de ueecarlossoublette1949@gmail.com.</span></li>
                    </ul>
                    <p>
                    Nuestro Compromiso En U.E.E Carlos soublette, estamos comprometidos con la mejora continua.
                    Valoramos tus comentarios y sugerencias, ya que nos ayudan a perfeccionar nuestra plataforma y ofrecerte
                    un mejor servicio. Gracias por confiar en nosotros para gestionar la asistencia en nuestra comunidad educativa.
                    Juntos, podemos contribuir a un entorno escolar más organizado y eficiente.
                    </p>
                    </div>
                </div>
                </div>

            </div>

            </section>

            <section id="contact" className="contact section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Contacto</h2>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gx-lg-0 gy-4">

                    <div className="col-lg-4">
                        <div className="info-container d-flex flex-column align-items-center justify-content-center">
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                            <h3>Direccion</h3>
                            <p>Calle Carreño</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                            <h3>Llamanos</h3>
                            <p>+58 4262409392</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                            <h3>Envienos un email</h3>
                            <p>ueecarlossoublette1949@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i className="bi bi-clock flex-shrink-0"></i>
                            <div>
                            <h3>Horario de atencion:</h3>
                            <p>Lunes-Viernes: 07AM - 05PM</p>
                            </div>
                        </div>

                        </div>

                    </div>

                    <div className="col-lg-8">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade" data-aos-delay="100">
                        <div className="row gy-4">

                            <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Su nombre" required=""/>
                            </div>

                            <div className="col-md-6 ">
                            <input type="email" className="form-control" name="email" placeholder="Su Email" required=""/>
                            </div>

                            <div className="col-md-12">
                            <textarea className="form-control" name="message" rows="8" placeholder="Mensaje" required=""></textarea>
                            </div>

                            <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>

                            <button type="submit">Enviar Mensaje</button>
                            </div>

                        </div>
                        </form>
                    </div>

                    </div>

                </div>

            </section>

        </main>

       <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
 
    </div>
  )
}

export default HomePages