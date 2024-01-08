import {useState} from "react"
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import BackButton from "./BackButton/BackButton";
import NavLink from "./NavLink/NavLink"
import SearchBar from "./NavLink/SearchBar/SearchBar";

import "./Navbar.css"



export default function Navbar(){    
    const currentPath = useLocation().pathname;
    const [isExpanded, setIsExpanded] = useState(false)
    const [activeLinks, setActiveLinks] = useState(
        [
            {
                name: 'search-bar',            
                data: 
                {                    
                    isActive: false,
                    activeComponent: <SearchBar/>
                }
            }
        ]
    )

    function handleHamburgerMenuClick(){
        isExpanded ? setIsExpanded(false) : setIsExpanded(true)
    }

    function handleLinkClick(name){
        setActiveLinks((prevState) => {
            console.log(prevState.find((e) => e.name == name))
            return [...prevState, {name: name, data: {isActive: true}}]
        })
        console.log(activeLinks)
    }


    return(         
        <nav className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>    
            <div className="nav-header">
                <div className="hamburger-menu-container">
                    <HamburgerMenu
                        handleClick={handleHamburgerMenuClick}
                        isExpanded={isExpanded}
                    />                
                </div>            
                {currentPath != "/" && 
                    <div className="back-button-container">
                        <BackButton/>
                    </div>}
            </div>                    
            <ul className={`navbar-links  ${isExpanded ? 'links-expanded' : 'links-collapsed'}`}>
                <NavLink 
                    callBackClick={handleLinkClick}
                    isExpanded={isExpanded}
                    label="Search"                    
                    icon={<CiSearch/>}
                    activeData={activeLinks.find((e) => e.name == 'search-bar')}/>
            </ul>
        </nav>       
    )
}