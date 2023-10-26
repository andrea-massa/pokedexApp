// IMPORTS
// Hooks
import React, {useState} from "react"

// Components
import PokemonTitle from "./PokemonTitle/PokemonTitle"
import PokemonTypes from "./PokemonTypes/PokemonTypes"
import PokemonDescription from "./PokemonDescription/PokemonDescription"
import PokemonImage from "./PokemonImage/PokemonImage"
import PokemonAbilities from "./PokemonAbilities/PokemonAbilities"
import PokemonBiometrics from "./PokemonBiometrics/PokemonBiometrics"
import PokemonEvolutionChain from "./PokemonEvolutionChain/PokemonEvolutionChain"
import PokemonStats from "./PokemonStats/PokemonStats"

// Styles
import "./PokemonPage.css"



// COMPONENT -> Renders Everything Associated with the Pokemon Data
function PokemonPage({pokemonData}){      
    // STATES
    const [evolutionChainEndpoint, setEvolutionChainEndpoint] = useState('');    


    // JSX
    return(
        <div className="border container-fluid pokemon-page">

            <div className="container header-container">
                <PokemonTitle 
                    entryNumber={pokemonData.id} 
                    entryName={pokemonData.name}/>
            </div>

            <div className="container body-container">
                <div className="d-lg-none image-container">
                    <PokemonImage 
                            img={pokemonData.sprites.other.home.front_default || pokemonData.sprites.front_default} 
                            pokemonName={pokemonData.name}
                            types={pokemonData.types}/>
                </div>
                <div className="row">
                    <div className="mt-3 col col-lg-8 description-container">
                        <PokemonTypes types={pokemonData.types}/>
                        <PokemonDescription 
                            id={pokemonData.id}
                            evolutionChainCallback={(endpoint) => {
                                setEvolutionChainEndpoint(endpoint)
                            }}/>
                        <PokemonAbilities
                            abilities={pokemonData.abilities}/>
                        <PokemonBiometrics 
                            weight={pokemonData.weight}
                            height={pokemonData.height}/>                    
                    </div>
                    <div className="d-none d-lg-block col-lg-4 image-container">
                        <PokemonImage 
                            img={pokemonData.sprites.other.home.front_default || pokemonData.sprites.front_default} 
                            pokemonName={pokemonData.name}
                            types={pokemonData.types}/>
                    </div>
                </div>
                <div className="d-flex flex-column-reverse flex-lg-row row ">
                    <div className="col-12 col-lg-7 mt-5 evolution-container">
                        <PokemonEvolutionChain endpoint={evolutionChainEndpoint}/>
                    </div>
                    <div className="col-12 col-lg-5 mt-5 stats-container">
                        <PokemonStats stats={pokemonData.stats}/>                    
                    </div>
                </div>
            </div>
            
        </div>        
    )
}



export default PokemonPage