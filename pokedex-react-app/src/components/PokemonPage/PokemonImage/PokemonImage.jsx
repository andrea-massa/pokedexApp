import "./PokemonImage.css"

function PokemonImage(props){
    return(
        <div className={`pokemon-image`}>
            <img src={props.img} alt={props.pokemonName}/>
        </div>
    )
}

export default PokemonImage