import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./Routes";

import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import DocentePages from "./pages/DocentePages";
import NewDocentePages from "./pages/NewDocentePages";
import { DocenteProvider } from "./context/DocenteContext";
import Navbar from "./componets/Navbar";
import HomePages from "./pages/HomePages";
import Footer from "./componets/Footer";
import { EmpleadoProvider } from "./context/EmpleadoContext";
import EmpleadoPages from "./pages/EmpleadoPages";
import NewEmpleadoPages from "./pages/NewEmpleadoPages";

function App() {
  
  return (
    <AuthProvider> 
      <DocenteProvider> 
        <EmpleadoProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes> 
              <Route path="/" element={<HomePages/>} />
              <Route path="/about" element={<h1>About Page</h1>} />
              <Route path="/login" element={<LoginPages/>} />
              <Route path="/register" element={<RegisterPages/>} />
              <Route path="/contacto" element={<h1>Contacto Page</h1>} />

              {/* Aquí es donde proteges las rutas */}
              <Route element={<ProtectedRoute />}>
                <Route path="/docente" element={<DocentePages/>} />
                <Route path="/empleado" element={<EmpleadoPages/>} />
                <Route path="/newdocente" element={<NewDocentePages/>} />
                <Route path="/docente/:id" element={<NewDocentePages/>} />
                <Route path="/newempleado" element={<NewEmpleadoPages/>} />
                <Route path="/empleado/:id" element={<NewEmpleadoPages/>} />
              </Route>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </EmpleadoProvider>
      </DocenteProvider>
    </AuthProvider>
  )
}

export default App