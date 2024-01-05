import {useState} from "react"
import { CiSearch } from "react-icons/ci";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import NavLink from "./NavLink/NavLink"
import SearchBar from "./NavLink/SearchBar/SearchBar";

import "./Navbar.css"



export default function Navbar(){
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
            <div className="hamburger-menu-container">
                <HamburgerMenu
                    handleClick={handleHamburgerMenuClick}
                    isExpanded={isExpanded}
                />
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