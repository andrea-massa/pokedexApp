// IMPORTS
// Styles
import "./PokemonGenus.css"


// COMPONENT
function PokemonGenus(props){    
    // Utility function that formats the string from 'Pokémon' to 'Pokemon'  because the font we use only likes the second one
    function formatGenusString(genus){
        return genus.replace('Pokémon', 'Pokemon')
    }


    // JSX
    return(
        <h2 className="pokemon-genus">
            {formatGenusString(props.value)} 
        </h2>
    )
}



export default PokemonGenus