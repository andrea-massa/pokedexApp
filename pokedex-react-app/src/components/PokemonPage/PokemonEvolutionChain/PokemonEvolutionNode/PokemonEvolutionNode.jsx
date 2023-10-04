function PokemonEvolutionNode(props){
    return(
        <li className="evolution-node">            
            {JSON.stringify(props)}           
        </li>
    )
}

export default PokemonEvolutionNode