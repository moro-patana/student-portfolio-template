import React, { useContext } from 'react'
import { Context} from "../context"

export default function Hobbies() {
    const {state} = useContext(Context)
    const {hobbies} = state
    return (
        <div className="hobbies">
            <h2>Hobbies</h2>
            <div className="hobby-container">
                {hobbies.map(hobby => (
                  <article key={hobby.id} className="hobby-card">
                      <img src={hobby.hobbyImg} alt={hobby.title}/>
                      <h3>{hobby.title}</h3>
                      <p>{hobby.description}</p>
                  </article>
                ))}
                
            </div>
        </div>
    )
}
