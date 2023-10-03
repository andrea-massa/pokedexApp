function PokemonEvolutionNode(props){
    return(
        <li className="evolution-node">            
            {props.pokemonData.name}
        </li>
    )
}

export default PokemonEvolutionNode