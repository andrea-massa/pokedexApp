import PokedexEntry from "../PokedexEntry/PokedexEntry"

function PokedexList(props){
    return(
        <ol id="pokedex-list">                
            {props.allPokemonData.map((pokemon, index) => {
                return(
                    <PokedexEntry
                        navigateTo={`/pokemon/${pokemon.url.split('/')[6]}`}
                        pokemonData={pokemon}                                
                    />
                )     
            })}
        </ol>
    )
}

export default PokedexList