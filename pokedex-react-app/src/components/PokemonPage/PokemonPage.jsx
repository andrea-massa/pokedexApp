import React, {useState} from "react"
import "./PokemonPage.css"

import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonTypes from "./PokemonTypes/PokemonTypes"
import PokemonDescription from "./PokemonDescription/PokemonDescription"
import PokemonImage from "./PokemonImage/PokemonImage"
import PokemonAbilities from "./PokemonAbilities/PokemonAbilities"
import PokemonBiometrics from "./PokemonBiometrics/PokemonBiometrics"
import PokemonEvolutionChain from "./PokemonEvolutionChain/PokemonEvolutionChain"
import PokemonStats from "./PokemonStats/PokemonStats"

function PokemonPage(props){
    const {pokemonData} = props        
    const [evolutionChainEndpoint, setEvolutionChainEndpoint] = useState('');    

    return(
        <div className="container-fluid px-sm-0 px-md-3 px-lg-5 pokemon-page">
            <div className="row header-container">
                <PokemonTitle 
                    entryNumber={pokemonData.id} 
                    entryName={pokemonData.name}/>
            </div>
            <div className="container body-container">
                <div className="d-md-none image-container">
                    <PokemonImage 
                            img={pokemonData.sprites.other.home.front_default || pokemonData.sprites.front_default} 
                            pokemonName={`No Image Available For Pokemon: ${pokemonData.name}`}
                            types={pokemonData.types}/>
                </div>
                <div className="row">
                    <div className="col col-md-8 description-container">
                        <PokemonTypes 
                            types={pokemonData.types}/>
                        <PokemonDescription 
                            id={pokemonData.id}
                            evolutionChainCallback={(endpoint) => {
                                setEvolutionChainEndpoint(endpoint)
                            }}/>
                        <PokemonAbilities
                            abilities={pokemonData.abilities}
                        />
                        <PokemonBiometrics 
                            weight={pokemonData.weight}
                            height={pokemonData.height}
                        />                    
                    </div>
                    <div className="d-none d-md-block col-md-4 image-container">
                        <PokemonImage 
                            img={pokemonData.sprites.other.home.front_default || pokemonData.sprites.front_default} 
                            pokemonName={`No Image Available For Pokemon: ${pokemonData.name}`}
                            types={pokemonData.types}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 evolution-container">
                        <PokemonEvolutionChain
                            evolutionChainEndpoint={evolutionChainEndpoint}
                        />
                    </div>
                    <div className="border col-12 col-md-4 stats-container">
                        <PokemonStats 
                            stats={pokemonData.stats}
                        />                    
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PokemonPage