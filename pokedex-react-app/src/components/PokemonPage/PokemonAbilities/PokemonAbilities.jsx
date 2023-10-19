// IMPORTS
// Components
import Ability from "./Ability/Ability"

// Styles
import "./PokemonAbilities.css"



// COMPONENT
function PokemonAbilities(props){
    // JSX
    return(
        <div className="col col-md-11 pokemon-abilities">

            <h3>Abilities</h3>
            
            {/* Render a list which creeates an Ability Component for 
                each ability (hidden and non hidden) that the API provides */}
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