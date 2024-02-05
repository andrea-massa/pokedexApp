// IMPORTS
// Components
import { Link } from "react-router-dom";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

// Styles
import "./Arrow.css"


// COMPONENT
function Arrow({current, type}){
    // JSX
    return(
        <Link 
            className={`arrow ${type === "next" ? "right-arrow" : "left-arrow"}`} 
            to={type === "next" ? `/pokemon/${parseInt(current) + 1}` : `/pokemon/${parseInt(current) - 1}`}>            
            {type === "next" ? <RiArrowDropRightLine/> : <RiArrowDropLeftLine/>}
        </Link>
    )
}



export default Arrow