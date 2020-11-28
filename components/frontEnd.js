import React from 'react'

function FrontEnd(props) {
    return (
        <article>
            <div>
                <label for="react">React</label>
                <progress id="react" max="100" value="70"> 70% </progress>
            </div>
            <div>
                <label for="javascript">Javascript</label>
                <progress id="javascript" max="100" value="70"> 60% </progress>
            </div>
            <div>
                <label for="css">CSS</label>
                <progress id="css" max="100" value="70"> 70% </progress>
            </div>
            <div>
                <label for="vue">Vue</label>
                <progress id="vue" max="100" value="70"> 2% </progress>
            </div>
            <div>
                <label for="redux">Redux</label>
                <progress id="redux" max="100" value="70"> 10% </progress>
            </div>
            <div>
                <label for="react-native">React Native</label>
                <progress id="react-native" max="100" value="70"> 30% </progress>
            </div>

            
        </article>
    )
}


export default FrontEnd

