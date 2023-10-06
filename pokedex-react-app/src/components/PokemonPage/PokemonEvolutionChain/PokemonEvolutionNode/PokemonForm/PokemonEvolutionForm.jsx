import "./PokemonEvolutionForm.css"

function PokemonEvolutionForm(props){
    return(
        <div className="pokemon-evolution-form">
            <div className="form-image">                        
            </div>
            <p className="form-name">{props.pokemonData.name}</p>
        </div>
    )
}

export default PokemonEvolutionForm