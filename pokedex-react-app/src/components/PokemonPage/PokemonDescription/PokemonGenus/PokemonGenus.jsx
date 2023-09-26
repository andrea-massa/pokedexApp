import "./PokemonGenus.css"

function PokemonGenus(props){
    return(
        <h2 className="pokemon-genus">
            {props.value}
        </h2>
    )
}

export default PokemonGenus