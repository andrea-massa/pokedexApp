import "./PokemonAbilities.css"
import Ability from "./Ability/Ability"

function PokemonAbilities(props){
    return(
        <ul className="pokemon-abilities">
            {props.abilities.map((abilityEl, index) => {
                return( 
                    <Ability
                        key={index}
                        name={abilityEl.ability.name}
                        isHidden={abilityEl.is_hidden}/>)
            })}
        </ul>
    )
}

export default PokemonAbilities