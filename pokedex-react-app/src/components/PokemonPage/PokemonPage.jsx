import React, {useState} from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonTypes from "./PokemonTypes/PokemonTypes"
import PokemonImage from "./PokemonImage/PokemonImage"

function PokemonPage(props){
    const {pokemonData} = props        

    return(
        <div className="container-fluid pokemon-page">
            <PokemonTitle entryNumber={props.pokemonData.id} entryName={props.pokemonData.name}/>
            <PokemonTypes types={pokemonData.types}/>
            <PokemonImage 
                img={pokemonData.sprites.other.home.front_default} 
                pokemonName={`No Image Available For Pokemon: ${props.pokemonData.name}`}
                types={pokemonData.types}
                />
        </div>
        
    )
}

export default PokemonPage