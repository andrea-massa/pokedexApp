import "./Ability.css";

function Ability(props){
    return(
        <li className="ability">
            <span className="isHidden">
                
            </span>
            <span className="abilityName">{props.name}{props.isHidden}</span>
        </li>
    )
}

export default Ability;