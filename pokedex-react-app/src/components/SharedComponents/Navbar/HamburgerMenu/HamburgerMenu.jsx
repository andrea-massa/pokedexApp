import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi"

import "./HamburgerMenu.css"



const collapsedHamburgerVector = <HiMenu/>
const extendedHamburgerVector = <HiMenuAlt1/>


export default function HamburgerMenu({handleClick, isExpanded}){
    return(
        <span className="hamburger-menu"
            id="hamburger-menu" 
            onClick={(e) => {handleClick()}}
            >
                {isExpanded ? extendedHamburgerVector : collapsedHamburgerVector}
        </span>        
    )
}