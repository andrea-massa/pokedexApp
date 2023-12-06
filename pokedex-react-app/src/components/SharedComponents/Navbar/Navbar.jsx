import {useState} from "react"
import { CiSearch } from "react-icons/ci";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import NavLink from "./NavLink/NavLink"

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
        <nav className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>            
            <div className="hamburger-menu-container">
                <HamburgerMenu
                    handleClick={handleHamburgerMenuClick}
                    isExpanded={isExpanded}
                />
            </div>            
            <ul className={`navbar-links  ${isExpanded ? 'links-expanded' : 'links-collapsed'}`}>
                <NavLink 
                    isExpanded={isExpanded}
                    label="Poke Search"
                    icon={<CiSearch/>}/>
            </ul>
        </nav>       
    )
}