import React, { useContext } from 'react'
import { Context} from "../context"

export default function Experiences() {
    const {state} = useContext(Context)
    const {experiences} = state
    return (
        <div className="experiences">
            <h2>Experiences</h2>

            <div className="experience-post">
                {experiences.map(experience => (
                    <article key={experience.id} className="experience-card">
                        <img src={experience.logo} alt={experience.title}/>
                        <div className="experience-info">
                            <span>{experience.date}</span>
                            <h3>{experience.title}</h3>
                            <p>{experience.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
