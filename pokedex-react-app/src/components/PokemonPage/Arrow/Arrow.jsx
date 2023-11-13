// IMPORTS
// Components
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

// Styles
import "./Arrow.css"


// COMPONENT
function Arrow(props){
    // JSX
    return(
        <a 
            className={`arrow ${props.type === "next" ? "right-arrow" : "left-arrow"}`} 
            onClick={props.onClick}>            
            {props.type === "next" ? <RiArrowDropRightLine/> : <RiArrowDropLeftLine/>}
        </a>
    )
}



export default Arrow