import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout } = useAuth();
  return (
    <header id="header" className="header fixed-top">

    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">ueecarlossoublette1949@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+58 4262409392</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="https://www.facebook.com/profile.php?id=100078041196929" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ueecarlossoublette/" className="instagram"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>

    <div className="branding d-flex align-items-cente">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to={'/'} className="logo d-flex align-items-center">
          <h1 className="sitename">Asistencia</h1>
          <span>.</span>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
          {isAuthenticated ? (
          <>
            <li>
              <Link to={'/docente'}>Docente</Link>
            </li>
            <li>
              <Link to={'/empleado'}>Empleado</Link>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
               <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/register'}>Registro</Link>
            </li>
          </>
        )}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>
  )
}

export default Navbar