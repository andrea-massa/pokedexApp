// IMPORTS
// Styles
import "./PokemonTextEntry.css"



// COMPONENT
function PokemonTextEntry(props){
    // JSX
    return(
        <p className="pokemon-text-entry">
            {props.value}
        </p>
    )
}



export default PokemonTextEntry