import "./Ability.css";
import {BsFillEyeSlashFill, BsFillEyeFill} from 'react-icons/bs'

function Ability(props){
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
            <span className="abilityName">{props.name}{props.isHidden}</span>
        </li>
    )
}

export default Ability;