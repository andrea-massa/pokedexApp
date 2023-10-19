// IMPORTS
// Styles
import "./PokemonTitle.css"



// COMPONENT -> Displays the Pokemon Header at the top with number and Pokemon Name
function PokemonTitle(props){
    // JSX
    return(
        <h1 className="pokemon-title">
            <span 
                style={props.entryNumber < 100 ? {padding: '10px 20px'} : {padding: '15px'}}
                className="entry-number">{props.entryNumber}
            </span>
            <span className="entry-name">
                {props.entryName}
            </span>
        </h1>
    )
}



export default PokemonTitle