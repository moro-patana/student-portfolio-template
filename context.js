import React, { useEffect, useState, useReducer } from "react"
const Context = React.createContext()
import AboutMeData from "./aboutMe.json"
console.log(AboutMeData);
import HobbiesData from "./hobbies.json"
import ExperienceData from "./experience.json"
import DesignsData from "./design.json"
function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "LOAD_ABOUTME_DATA": {
                return {
                    ...state, aboutMe: action.value
                }

            }
            case "LOAD_REACT_DESIGNS": {
                return {
                    ...state, designs: action.value
                }
            }
            case "GET_RESPONSIVE_DESIGNS": {
                return {
                    ...state, designs: action.value
                }
            }
            case "GET_REACT_DESIGNS": {
                return {
                    ...state, designs: action.value
                }
            }
            case "GET_VANILLA_JAVASCRIPT_DESIGNS": {
                return {
                    ...state, designs: action.value
                }
            }

            case "LOAD_HOBBIES": {
                return {
                    ...state, hobbies: action.value
                }
            }
            case "LOAD_EXPERIENCES": {
                return {
                    ...state, experiences: action.value
                }
            }


        }

    },{
        aboutMe:[],
        designs: [],
        hobbies: [],
        experiences: []

    })

    useEffect(() => {
        dispatch({type:"LOAD_ABOUTME_DATA", value: AboutMeData})
        dispatch({type:"LOAD_REACT_DESIGNS", value: DesignsData})
        dispatch({type:"LOAD_HOBBIES", value: HobbiesData})
        dispatch({type:"LOAD_EXPERIENCES", value: ExperienceData})
    },[])
   
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}