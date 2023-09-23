import React from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonImage from "./PokemonImage/PokemonImage"

function PokemonPage(props){
    console.log(props.pokemonData)
    return(
        <div className="container-fluid pokemon-page">
            <PokemonTitle entryNumber={props.pokemonData.id} entryName={props.pokemonData.name}/>
            <PokemonImage 
                img={props.pokemonData.sprites.other.home.front_default} 
                pokemonName={`No Image Available For Pokemon: ${props.pokemonData.name}`}
                types={props.pokemonData.types}
                />
        </div>
        
    )
}

export default PokemonPage