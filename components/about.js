import React from "react"
import  "../styles/about.css"
import profile from "../img/my-profile.jpg"

function About() {
    return (
        <article className="about">
            <img src={profile} alt="my profile"/>
            <div className="address-container">
                <div className="address">
                    <div>
                        <h3>Manjaka Randrianirina</h3>
                        <p>Front-end developer</p>
                    </div>
                    <div>
                        <p>📩 randrianirinaholisoa@gmail.com</p>
                        <p>📞 +261 34 345 81</p>
                    </div>
                </div>
                <div className="information">
                    <p>Ever need to create some filler text in your Word document or PowerPoint presentation to test formatting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English.
                    </p>
    
                    <p>Here's how to use the sample text generator.</p>
                </div>
            </div>
        </article>

    )
}
export default About;