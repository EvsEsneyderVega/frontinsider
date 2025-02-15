import { useState } from "react"
import { ViewContext } from "./ViewContext"

export const ViewProvider = ({Children}) => {
    const [vista, setVista] = useState("")
    return (
    <ViewContext.Provider value={{vista,setVista}}>
        {Children}
    </ViewContext.Provider>
  )
}
