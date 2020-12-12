import React, { useContext } from 'react'
import {Context} from "../context"

export default function AboutMe() {
    const {state, dispatch} = useContext(Context)
    const {aboutMe} = state
    console.log(aboutMe)
    return (
        <article className="about-me">
            {aboutMe.map(item => (
                <div className="profile" key={item.id}>
                        <img className="profile-picture" src={item.profilePicture} alt={item.name}/>
                    <div className="info-container">
                    	<div className="information">
                    	    <div className="more-about">
                    	        <span className="name">{item.name}</span>
                    	        <span className="job">{item.job}</span>
                    	    </div>
                    	    <div className="social-media">
                    	        <span className="email">📩{item.email}</span>
                    	        <span className="phone">📞{item.phone}</span>
                    	    </div>
                    	</div>
                    	<p>{item.about}</p>
                    </div>
                </div>
            ))}
        </article>
    )
}
