import { useState } from "react"

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
            <span className="icon">{icon}</span>
            {isExpanded && <span className="label">{label}</span>}      
            {isActive && children}
        </li>   
    )
}