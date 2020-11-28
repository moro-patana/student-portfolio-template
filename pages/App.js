import React from "react"
import About from "../components/about"
import '../styles/body.css'
import FrontEnd from "../components/frontEnd"
import RecipeBlog from "../components/blog"

function App() {
    return (
        <div className="container">
            <h1>Students Portfolio</h1>
            <About/>
            <FrontEnd/>
            <RecipeBlog/>
        </div>
    )
}
export default App;