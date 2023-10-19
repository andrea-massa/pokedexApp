// IMPORTS
// Components
import {BsFillEyeSlashFill, BsFillEyeFill} from 'react-icons/bs'

// Styles
import "./Ability.css";


// COMPONENT
function Ability(props){
    // JSX
    return(
        <li className="ability">
            <span className="isHidden">
                {props.isHidden 
                ? 
                    <BsFillEyeSlashFill/>
                : 
                    <BsFillEyeFill/>
                }
            </span>
            <span className="abilityName">
                {props.name}{props.isHidden}
            </span>
        </li>
    )
}

export default Ability;