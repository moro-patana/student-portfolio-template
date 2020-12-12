import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../context"
import ProjectList from "../components/ProjectList"

export default function Projects(props) {
    const {state, dispatch} = useContext(Context)
    const {designs} = state
    const [isOpen, setIsOpen] = useState(false)
    const responsiveDesigns = designs.filter(design => design.type === "#Html #CSS #responsive")
    const reactDesigns = designs.filter(design => design.type === "#React")
    const vanillaJavascriptDesigns = designs.filter(design => design.type === "#Vanilla Javascript")
    console.log(reactDesigns);
     function handleResponsiveDesign() {
         setIsOpen(!isOpen)
        dispatch({type: "GET_RESPONSIVE_DESIGNS", value: responsiveDesigns})
    }
    function handleVanillaJavascriptDesign() {
        setIsOpen(!isOpen)
        dispatch({type: "GET_VANILLA_JAVASCRIPT_DESIGNS", value: vanillaJavascriptDesigns})
    }
    function handleReactDesign() {
        setIsOpen(!isOpen)
        dispatch({type: "GET_REACT_DESIGNS", value: reactDesigns})
    }

    return (
        <div>
        <div  className="search-list">
            <h3>Projects</h3>
            <div className="button-link">
                <button onClick={handleReactDesign}>React</button>
                <button onClick={handleVanillaJavascriptDesign}>Vanilla Javascript</button>
                <button onClick={handleResponsiveDesign}>Responsive</button>
            </div>
        </div>
            <ProjectList />
        </div>

    )
}
