import { useState } from "react"

import "./NavLink.css"



export default function NavLink({label, icon, activeData, isExpanded, callBackClick}){    

    function handleClick(){
        // if(isActive){
        //     isExpanded && callBackClick()
        //     setIsActive(false)
        // }
        // if(!isActive){
        //     !isExpanded && callBackClick()
        //     setIsActive(true)
        // }
        callBackClick(activeData.name)
    }    

    return(
        <li onClick={() => {                
                handleClick()
            }}                
            className={`navlink ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
            {activeData.isActive ? activeData.activeComponent : <span className="icon">{icon}</span>}            
            {isExpanded && <span className="label">{label}</span>}                
        </li>   
    )
}