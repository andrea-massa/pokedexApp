import React from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"

function PokemonPage(props){
    console.log(props.pokemonData)
    return(
        <div className="container-fluid pokemon-page">
            <PokemonTitle entryNumber={props.pokemonData.id} entryName={props.pokemonData.name}/>
        </div>
    )
}

export default PokemonPage