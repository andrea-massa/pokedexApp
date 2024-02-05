// IMPORT
// Styles
import "./Type.css"



// COMPONENT
function Type(props){
    //JSX 
    return(
        <li 
            className="my-1 pokemon-type"
            style={{backgroundColor: `var(--${props.value}Color)`}}>
            {props.value}
        </li>
    )
}



export default Type