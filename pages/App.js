import React from 'react'
import AboutMe from "../components/aboutMe"
import Hobbies from "../components/Hobbies"
import Experiences from "../components/Experiences"
import Designs from "../components/Designs"
import Projects from "../components/Projects"

export default function App() {
    return (
        <div>
            <h1>Student Portfolio</h1>
            <AboutMe/>
            <Hobbies/>
            <Experiences/>
            {/* <Designs/> */}
            <Projects/>
        </div>
    )
}
