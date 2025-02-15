import DOMPurify from 'isomorphic-dompurify';
import { useForm } from '../../hooks/useForm';
import { LoginService } from '../../services/LoginService';
import { useContext } from 'react';
import { UsuarioContext } from '../../context/UserContext/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import "./LoginComponent.css"
import Logo from '../../img/logo.png'
import toast, { Toaster } from 'react-hot-toast';
const LoginComponent = () => {
  const initialForm = {
    NICK_USR: '',
    password: ''
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate(); // Para redirigir después del login

  const handleUsuario = async () => {
    if(formState.NICK_USR==""|| formState.password==""){
        notify("Datos vacios!")
        return
    }
    const respu = await LoginService(formState);
    
    if (respu) { // Validamos que la respuesta no sea null
      setUsuario(respu);
      // Redirigir según el rol del usuario
      if (respu.ROL === "ROOT") {
        console.log("si entro");
        navigate("/admin");
      } else if (respu.ROL === "user") {
        navigate("/dashboard");
      } else {
        navigate("/guest");
      }
    } else {
      notify("Datos Erroneos")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUsuario();
  };
  const notify = (mensaje)=>{
    toast.error(mensaje, { removeDelay: 1500 });
  }
  return (
    <div className='frm-container'>
      <Toaster/>
      <form onSubmit={handleSubmit} className='frm-login'>
        <img src={Logo} alt="" />
        <div className='frm-group'>
          <label htmlFor="NICK_USR">Usuario</label>
          <input
            placeholder='Usuario'
            type="text"
            name="NICK_USR"
            id="NICK_USR"
            onChange={onInputChange}
            value={formState.NICK_USR} // Corregido el acceso a la variable
          />
        </div>
        <div className='frm-group'>
          <label htmlFor="password">Contraseña</label>
          <input
            placeholder='Contraseña'
            type="password"
            name="password"
            id="password"
            value={formState.password} // Corregido el acceso a la variable
            onChange={onInputChange}
          />
        </div>
        <button className='frm-button' type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginComponent;
