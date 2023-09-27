import "./Ability.css";

function Ability(props){
    return(
        <li className="abilty">
            {props.name}{props.isHidden}
        </li>
    )
}

export default Ability;