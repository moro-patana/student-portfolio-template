import React, { useContext } from "react"
import { Context } from "../context"
import '../styles/blog.css'
function Responsive() {
    const { designs } = useContext(Context)
    return (
        <div className="card">
           {designs.map(design => (
           <article key={design.id} className="responsive__design">
               <img src={design.photo} alt={design.title}/>
                <div className="responsive__design__container">
                    <header className="responsve__design__title">
                        <h2>{design.type}</h2>
                    </header>
                    <span className="responsive__desisgn__name">
                        {design.title}
                    </span>
                    <p className="responsive__design__description">
                        {design.description}
                    </p>
                    <div className="responsive__design__button">
                        <button className="responsive__design__button-blue">
                            <a href={design.demo}>Demo</a>
                        </button>
                        <button className="responsive__design__button-white">
                            <a href={design.code}>Code</a>
                        </button>
                    </div>
                </div>
            </article>
           ))}
        </div>

    )
}
export default Responsive;