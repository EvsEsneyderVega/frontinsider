import DOMPurify from 'isomorphic-dompurify';
import { useForm } from '../../hooks/useForm';
import { LoginService } from '../../services/LoginService'
import { useContext } from 'react';
import { UsuarioContext } from '../../context/UsuarioContext';

const LoginComponent = () => {
  const initialForm={
    NICK_USR:'',
    password:''
  }
  const {formState,user,password,onInputChange} = useForm(initialForm);
  const {usuario,setUsuario} = useContext(UsuarioContext);
  const handleUsuario = async ()=>{
    const respu = await LoginService(formState)
    setUsuario(respu)
    console.log("login: ",respu)
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      handleUsuario()
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="NICK_USR">Usuario</label>
            <input 
            type="text" 
            name="NICK_USR"
            id="NICK_USR" 
            onChange={onInputChange}
            value={user}
            />
            <label htmlFor="password">Contraseña</label>
            <input 
            type="password" 
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            />
            <button type="submit">enviar</button>
        </form>
    </>
  )
}

export default LoginComponent