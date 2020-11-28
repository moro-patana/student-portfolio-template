import React from 'react'
import LearnCss from "../img/css.jpg"
import '../styles/organiseCss.css'


function OrganiseCss() {
    return (
        <article>
            <header>
                <p><a href="/">Blog</a></p>
                <h2>How to organise your css</h2>
            </header>
            <img src={LearnCss} alt="Learn coding css"/>
            <p>
            In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. 
            <br></br>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
            </p>
            <span><a href="/dev">dev.to</a></span>
        </article>
    )
}

export default OrganiseCss

