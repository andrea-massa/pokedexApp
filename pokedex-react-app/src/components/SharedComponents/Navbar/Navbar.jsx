import {useState} from "react"

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"

import "./Navbar.css"



export default function Navbar(){
    const [isExpanded, setIsExpanded] = useState(false)


    function handleHamburgerMenuClick(){
        if(isExpanded === true){
            setIsExpanded(false)        
        }
        else if (isExpanded === false){
            setIsExpanded(true)
        }
    }


    return(         
        <nav className={`navbar border ${isExpanded ? 'expanded' : 'collapsed'}`}>            
            <div className="hamburger-menu-container border">
                <HamburgerMenu
                    handleClick={handleHamburgerMenuClick}
                    isExpanded={isExpanded}
                />
            </div>            
            <ul className={`navbar-links ${isExpanded ? 'links-expanded' : 'links-collapsed'}`}>
                <li className="navbar-link">
                    Search
                </li>
            </ul>
        </nav>       
    )
}