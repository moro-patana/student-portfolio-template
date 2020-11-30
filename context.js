import React, { useEffect, useState } from "react"
const Context = React.createContext()
import PortFolioData from "./portfolio.json"
function ContextProvider({children}) {
    const [designs, setDesigns] = useState([])
    useEffect(() => {
        setDesigns(PortFolioData)
        console.log(designs);
    })
    return (
        <Context.Provider 
        value={{
            designs

        }}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}