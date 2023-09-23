import React from "react"
import "./PokemonTitle.css"

function PokemonTitle(props){
    return(
        <h1 className="pokemon-title">
            <span className="entry-number">{props.entryNumber}</span>
            <span className="entry-name">{props.entryName}</span>
        </h1>
    )
}

export default PokemonTitle