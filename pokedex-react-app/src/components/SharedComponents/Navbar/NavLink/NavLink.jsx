import { useState } from "react"

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import "./NavLink.css"



export default function NavLink({name, label, icon, isExpanded, isActive, activateLink, deactivateLink, children}){    

    function handleDropDownClick(){
        if(!isActive){
            activateLink(name)
        }        
    }    
    
    function handleDropUpClick(){
        if(isActive){
            console.log('Deactivating the Link')
            deactivateLink(name)
        }
    }


    return(
        <li onClick={() => {                
                handleDropDownClick()
            }}                
            className={`navlink ${isExpanded ? 'expanded' : 'collapsed'} ${isActive ? 'active' : 'non-active'}`}
            >
                <div className="navlink-header">
                    <span className="icon">{icon}</span>
                    {isExpanded && <span className="label">{label}</span>}
                    {!isActive && <RiArrowDropDownLine/>}      
                </div>
                <div className="navlink-content">
                    {isActive && 
                        <>
                            {children} <RiArrowDropUpLine onClick={()=> handleDropUpClick()}/>
                        </>}
                </div>
        </li>   
    )
}