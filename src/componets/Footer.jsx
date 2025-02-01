
function Footer() {
  return (
    <div> 
        <footer id="footer" className="footer accent-background">
        <div className="container footer-top">
        <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">U.E.E Carlos soublette</span>
            </a>
            <p>¡Hola! Con nuestro sistema de asistencia, tendrás el control
            total sobre tus horarios y asistencia.</p>
            <div className="social-links d-flex mt-4">
                <a href="https://www.facebook.com/profile.php?id=100078041196929"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/ueecarlossoublette/"><i className="bi bi-instagram"></i></a>
            </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
            <h4>Link</h4>
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
                <li><a href="https://www.linkedin.com/in/asdrith-contreras-9b5935260/">Web Design</a></li>
                <li><a href="https://github.com/asth09">Web Development</a></li>
            </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contacto</h4>
            <p>Calle Carreño Con Girardot</p>
            <p className="mt-4"><strong>Telefono:</strong> <span>+58 4262409392</span></p>
            <p><strong>Email:</strong> <span>ueecarlossoublette1949@gmail.com</span></p>
            </div>

        </div>
        </div>

        <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Impact</strong> <span>All Rights Reserved</span></p>
        </div>

        </footer>

    </div>
  )
}

export default Footer