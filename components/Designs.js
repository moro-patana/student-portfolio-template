import React, { useContext } from 'react'
import { Context } from "../context"
export default function Designs() {
    const {state} = useContext(Context)
    const {designs} = state
    return (
        <div className="designs">
            {designs.map(design => (
                <article key={design.id} className="design-card">
                    <img src={design.designImg} alt={design.title}/>
                    <div>
                        <p>{design.type}</p>
                        <h3>{design.title}</h3>
                        <p>{design.description}</p>
                        <div className="button-link">
                            <button className="blue-btn"><a href={design.demo}>Demo</a></button>
                            <button className="btn"><a href={design.code}>Code</a></button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}
