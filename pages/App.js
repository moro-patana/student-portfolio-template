import React from "react"
import About from "../components/about"
import '../styles/body.css'
import FrontEnd from "../components/frontEnd"

function App() {
    return (
        <div className="container">
            <h1>Students Portfolio</h1>
            <About/>
            <FrontEnd/>
        </div>
    )
}
export default App;