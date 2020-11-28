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
                        <h3>Name</h3>
                        <p>Job</p>
                    </div>
                    <div>
                        <p>📩email</p>
                        <p>📞 Phone</p>
                    </div>
                </div>
                <p>Ever need to create some filler text in your Word document or PowerPoint presentation to test formatting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. <br></br>
                Here's how to use the sample text generator.</p>
            </div>
        </article>

    )
}
export default About;