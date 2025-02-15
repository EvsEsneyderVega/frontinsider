import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

  return (
    <UsuarioContext.Provider value={{usuario,setUsuario}}>
        {children}
    </UsuarioContext.Provider>
    )
}
/**proveedor de contexto
 * necesita el contexto y los hijos a los que
 * usaran el contexto 
 */