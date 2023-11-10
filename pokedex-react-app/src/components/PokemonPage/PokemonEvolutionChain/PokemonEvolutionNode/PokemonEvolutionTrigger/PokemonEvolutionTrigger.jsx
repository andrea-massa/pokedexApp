// IMPORTS
// Styles
import "./PokemonEvolutionTrigger.css"



// COMPONENT
function PokemonEvolutionTrigger(props){
    // JSX
    return(
        <div className="mt-4 mt-lg-0 mx-lg-4 pokemon-evolution-trigger">
            <p>{props.triggerName}</p>
        </div>
    )
}   



export default PokemonEvolutionTrigger