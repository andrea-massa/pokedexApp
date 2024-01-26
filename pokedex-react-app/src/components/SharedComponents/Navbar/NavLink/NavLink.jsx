import { useState } from "react"

import { RiArrowDropDownLine } from "react-icons/ri";

import "./NavLink.css"



export default function NavLink({name, label, icon, isExpanded, isActive, activateLink, children}){    

    function handleClick(){
        activateLink(name)
    }    

    return(
        <li onClick={() => {                
                handleClick()
            }}                
            className={`navlink ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
                <div className="navlink-header">
                    <span className="icon">{icon}</span>
                    {isExpanded && <span className="label">{label}</span>}
                    {!isActive && <RiArrowDropDownLine/>}      
                </div>
                <div className="navlink-content">
                    {isActive && children}
                </div>
        </li>   
    )
}