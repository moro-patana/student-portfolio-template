import React from 'react'
import Interior from "../img/interior.png"
import { Link } from "react-router-dom"

function RecipeBlog(props) {
    return (
        <article className="blog">
            <img src={Interior} alt="design"/>
            <div>
                <p>#HTML #CSS #responsive</p>
                <h2>Recipe Blog</h2>
                <p>
                    Ever need to create some filler text in your Word document or PowerPoint presentation to test formatting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. Here's how to use the sample text generator.
                </p>
                <div>
                    <button><a href="https://interior-consultant-mjk.netlify.app/">Demo</a></button>
                    <button><a href="https://github.com/moro-patana/interior-consultant">Code</a></button>
                </div>
            </div>
            
        </article>
    )
}


export default RecipeBlog;

