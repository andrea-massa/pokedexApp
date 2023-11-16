// IMPORTS
// Components
import { Link } from "react-router-dom";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

// Styles
import "./Arrow.css"


// COMPONENT
function Arrow(props){
    // JSX
    return(
        <Link 
            className={`arrow ${props.type === "next" ? "right-arrow" : "left-arrow"}`} 
            to={props.type === "next" ? `/pokemon/${parseInt(props.current) + 1}` : `/pokemon/${parseInt(props.current) - 1}`}>            
            {props.type === "next" ? <RiArrowDropRightLine/> : <RiArrowDropLeftLine/>}
        </Link>
    )
}



export default Arrow