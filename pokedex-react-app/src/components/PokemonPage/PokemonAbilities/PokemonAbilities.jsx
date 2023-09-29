import "./PokemonAbilities.css"
import Ability from "./Ability/Ability"

function PokemonAbilities(props){
    return(
        <div className="col col-md-11 pokemon-abilities">
            <h3>Abilities</h3>
            <ul className="abilties-list">
                {props.abilities.map((abilityEl, index) => {
                    return( 
                        <Ability
                            key={index}
                            name={abilityEl.ability.name}
                            isHidden={abilityEl.is_hidden}/>)
                })}
            </ul>
        </div>
    )
}

export default PokemonAbilities