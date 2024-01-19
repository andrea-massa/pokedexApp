import {useState} from "react"
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import BackButton from "./BackButton/BackButton";
import NavLink from "./NavLink/NavLink"
import SearchBar from "./NavLink/SearchBar/SearchBar";

import "./Navbar.css"



export default function Navbar({onExpand}){
    const currentPath = useLocation().pathname;
    const [isExpanded, setIsExpanded] = useState(false)
    const [activeLinks, setActiveLinks] = useState([]) 

    function handleHamburgerMenuClick(){
        isExpanded ? setIsExpanded(false) : setIsExpanded(true)    
        setActiveLinks([])   
    }

    function handleLinkClick(name){
        setIsExpanded(true)
        if(!activeLinks.includes(name)){
            setActiveLinks((prevState) => {            
                return [...prevState, name]
            })
        }
    }


    return(         
        <nav className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>    
            <div className="nav-header">
                <div className="hamburger-menu-container">
                  <HamburgerMenu
                      handleClick={() => {
                          onExpand(!isExpanded)
                          handleHamburgerMenuClick()
                      }}
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
                    activateLink={handleLinkClick}
                    isExpanded={isExpanded}
                    label="Search"
                    name="search-link"                    
                    icon={<CiSearch/>}
                    isActive={activeLinks.includes('search-link')}>
                    <SearchBar/>
                </NavLink>
            </ul>
        </nav>       
    )
}