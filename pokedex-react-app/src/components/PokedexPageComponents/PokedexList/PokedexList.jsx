import PokedexEntry from "../PokedexEntry/PokedexEntry"

function PokedexList(props){
    return(
        <ol id="pokedex-list">                
            {props.allPokemonData.map((pokemon, index) => {
                if(pokemon.url.split('/')[6] <= 1008){
                    return(                    
                        <PokedexEntry
                            key={index}
                            navigateTo={`/pokemon/${pokemon.url.split('/')[6]}`}
                            name={pokemon.name}                   
                            number={pokemon.url.split('/')[6]}
                            fetchInfoUrl={pokemon.url}
                        />                        
                    )     
                }
            })}
        </ol>
    )
}

export default PokedexList