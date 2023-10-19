// IMPORTS
// Styles
import "./PokemonGenus.css"



// COMPONENT
function PokemonGenus(props){
    // JSX
    return(
        <h2 className="pokemon-genus">
            {props.value}
        </h2>
    )
}



export default PokemonGenus