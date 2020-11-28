import React from 'react'
import LearnCss from "../img/learning-css.jpg"
import '../styles/organiseCss.css'


function OrganiseCss() {
    return (
        <article className="learn__css">
            <header>
                <p><a href="/">Blog</a></p>
                <h2>How to organise your css</h2>
            </header>
            <img src={LearnCss} alt="Learn coding css"/>
            <div className="learn__css__method">
                <p className="learn__css__instruction">
                In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. 
                </p>
                <p>
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
                </p>
                <span><a href="/dev">dev.to</a></span>
            </div>
        </article>
    )
}

export default OrganiseCss

