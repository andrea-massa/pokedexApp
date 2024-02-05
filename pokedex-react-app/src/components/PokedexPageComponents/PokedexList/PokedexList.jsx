import PokedexEntry from "../PokedexEntry/PokedexEntry"
import "./PokedexList.css"

function PokedexList({isNavbarExpanded, allPokemonData}){
    return(
        <ol id="pokedex-list" className={isNavbarExpanded && 'high-margin'}>                
            {allPokemonData.map((pokemon, index) => {
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