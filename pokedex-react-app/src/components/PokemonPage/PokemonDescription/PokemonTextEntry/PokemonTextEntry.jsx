import React from "react"
import "./PokemonTextEntry.css"

function PokemonTextEntry(props){
    return(
        <p className="pokemon-text-entry">
            {props.value}
        </p>
    )
}

export default PokemonTextEntry