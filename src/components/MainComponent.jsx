import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent/LoginComponent";
import { UsuarioContext } from "../context/UserContext/UsuarioContext";
import AdminComponent from "./AdminComponent/AdminComponent";
import UserComponent from "./UserComponent/UserComponent";
import GuestComponent from "./GuestComponent/GuestComponent";
import VConsole from 'vconsole'
const MainComponent = () => {
    const { usuario } = useContext(UsuarioContext);
    new VConsole();
    if (usuario === null) {
      return <div>Cargando...</div>;
    }
  
    return (
      
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/login" element={<LoginComponent />} />
  
          {/* Rutas protegidas según el rol */}
          {usuario?.autenticado ? (
            <>
              {usuario.ROL === "ROOT" && <Route path="/admin" element={<AdminComponent />} />}
              {usuario.ROL === "user" && <Route path="/dashboard" element={<UserComponent />} />}
              {usuario.ROL === "guest" && <Route path="/guest" element={<GuestComponent />} />}
  
              {/* Redirigir según su rol después de autenticarse */}
              <Route path="/" element={<Navigate to={usuario.ROL === "admin" ? "/admin" : usuario.ROL === "user" ? "/dashboard" : "/guest"} />} />
            </>
          ) : (
            // Si no está autenticado, lo manda al login
            <>
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      
    );
  };
  
  export default MainComponent;
