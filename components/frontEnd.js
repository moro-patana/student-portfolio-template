import React from 'react'
import '../styles/frontEnd.css'

function FrontEnd(props) {
    return (
        <article className="progress">
            <h2>Front end</h2>
            <div class="progress__bar__container">
                <div className="progress-bar">
                    <label for="react">React</label>
                    <progress id="react" max="100" value="70"> 70% </progress>
                </div>
                <div className="progress-bar">
                    <label for="javascript">Javascript</label>
                    <progress id="javascript" max="100" value="60"> 60% </progress>
                </div>
                <div className="progress-bar">
                    <label for="css">CSS</label>
                    <progress id="css" max="100" value="70"> 70% </progress>
                </div>
                <div className="progress-bar">
                    <label for="vue">Vue</label>
                    <progress id="vue" max="100" value="2"> 2% </progress>
                </div>
                <div className="progress-bar">
                    <label for="redux">Redux</label>
                    <progress id="redux" max="100" value="10"> 10% </progress>
                </div>
                <div className="progress-bar">
                    <label for="react-native">React Native</label>
                    <progress id="react-native" max="100" value="30"> 30% </progress>
                </div>
            </div>
        </article>
    )
}


export default FrontEnd

