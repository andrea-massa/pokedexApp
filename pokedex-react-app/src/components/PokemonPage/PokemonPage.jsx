import React, {useState} from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonTypes from "./PokemonTypes/PokemonTypes"
import PokemonDescription from "./PokemonDescription/PokemonDescription"
import PokemonImage from "./PokemonImage/PokemonImage"
import PokemonAbilities from "./PokemonAbilities/PokemonAbilities"

function PokemonPage(props){
    const {pokemonData} = props        

    return(
        <div className="container-fluid px-sm-0 px-md-3 px-lg-5 pokemon-page">
            <div className="container header-container">
                <PokemonTitle 
                    entryNumber={pokemonData.id} 
                    entryName={pokemonData.name}/>
            </div>
            <div className="container d-md-flex justify-content-between body-container">
                <div className="container-md-10 border container-lg-6 container-xlg-5 description-container">
                    <PokemonTypes 
                        types={pokemonData.types}/>
                    <PokemonDescription 
                        id={pokemonData.id}/>
                    <PokemonAbilities
                        abilities={pokemonData.abilities}
                    />
                </div>
                <div className="container-md-10 container-lg-6 container-xlg-5 image-container">
                    <PokemonImage 
                        img={pokemonData.sprites.other.home.front_default} 
                        pokemonName={`No Image Available For Pokemon: ${pokemonData.name}`}
                        types={pokemonData.types}/>
                </div>
            </div>
        </div>
        
    )
}

export default PokemonPage