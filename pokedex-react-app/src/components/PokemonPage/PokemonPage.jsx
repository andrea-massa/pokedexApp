import React, {useState} from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonTypes from "./PokemonTypes/PokemonTypes"
import PokemonDescription from "./PokemonDescription/PokemonDescription"
import PokemonImage from "./PokemonImage/PokemonImage"

function PokemonPage(props){
    const {pokemonData} = props        

    return(
        <div className="container-fluid pokemon-page">
            <PokemonTitle 
                entryNumber={pokemonData.id} 
                entryName={pokemonData.name}/>
            <PokemonDescription 
                id={pokemonData.id}
            />
            <PokemonTypes 
                types={pokemonData.types}/>
            <PokemonImage 
                img={pokemonData.sprites.other.home.front_default} 
                pokemonName={`No Image Available For Pokemon: ${pokemonData.name}`}
                types={pokemonData.types}
                />
        </div>
        
    )
}

export default PokemonPage