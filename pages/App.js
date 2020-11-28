import React from "react"
import About from "../components/about"
import '../styles/body.css'
import FrontEnd from "../components/frontEnd"
import RecipeBlog from "../components/blog"
import OrganiseCss from "../components/css"

function App() {
    return (
        <div className="container">
            <h1>Students Portfolio</h1>
            <About/>
            <RecipeBlog/>
            <FrontEnd/>
            <OrganiseCss/>
        </div>
    )
}
export default App;