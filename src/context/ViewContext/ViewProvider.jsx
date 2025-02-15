import { useState } from "react"
import { ViewContext } from "./ViewContext"

export const ViewProvider = ({children}) => {
    const [vista, setVista] = useState("")
    return (
    <ViewContext.Provider value={{vista,setVista}}>
        {children}
    </ViewContext.Provider>
  )
}
