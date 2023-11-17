// IMPORTS
// Hooks
import React, {useState} from "react"

// Components
import PokemonTitle from "../../PokemonPageComponents/PokemonTitle/PokemonTitle"
import PokemonTypes from "../../PokemonPageComponents/PokemonTypes/PokemonTypes"
import PokemonDescription from "../../PokemonPageComponents/PokemonDescription/PokemonDescription"
import PokemonImage from "../../PokemonPageComponents/PokemonImage/PokemonImage"
import PokemonAbilities from "../../PokemonPageComponents/PokemonAbilities/PokemonAbilities"
import PokemonBiometrics from "../../PokemonPageComponents/PokemonBiometrics/PokemonBiometrics"
import PokemonEvolutionChain from "../../PokemonPageComponents/PokemonEvolutionChain/PokemonEvolutionChain"
import PokemonStats from "../../PokemonPageComponents/PokemonStats/PokemonStats"

// Styles
import "./PokemonPage.css"



// COMPONENT -> Renders Everything Associated with the Pokemon Data
function PokemonPage(props){      
    // STATES
    const [evolutionChainEndpoint, setEvolutionChainEndpoint] = useState('');    

    // JSX
    return(
        <div className="container-fluid pokemon-page">
            {/* Change this */}
            <button 
                className="btn btn-primary"
                onClick={() => {
                    document.getElementById('pokedex').classList()
                }}>
                Back
            </button>

            <div className="container header-container">
                <PokemonTitle 
                    entryNumber={props.pokemonData.id} 
                    entryName={props.pokemonData.name}/>
            </div>

            <div className="container body-container">
                <div className="d-lg-none image-container">
                    <PokemonImage 
                            img={props.pokemonData.sprites.other.home.front_default || props.pokemonData.sprites.front_default} 
                            pokemonName={props.pokemonData.name}
                            types={props.pokemonData.types}/>
                </div>
                <div className="row">
                    <div className="col col-lg-8 description-container">
                        <PokemonTypes types={props.pokemonData.types}/>
                        <PokemonDescription 
                            id={props.pokemonData.id}
                            evolutionChainCallback={(endpoint) => {
                                setEvolutionChainEndpoint(endpoint)
                            }}/>
                        <PokemonBiometrics 
                            weight={props.pokemonData.weight}
                            height={props.pokemonData.height}/>                    
                        <PokemonAbilities
                            abilities={props.pokemonData.abilities}/>
                    </div>
                    <div className="d-none d-lg-block col-lg-4 image-container">
                        <PokemonImage 
                            img={props.pokemonData.sprites.other.home.front_default || props.pokemonData.sprites.front_default} 
                            pokemonName={props.pokemonData.name}
                            types={props.pokemonData.types}/>
                    </div>
                </div>
                <div className="d-flex flex-column-reverse flex-lg-row row ">
                    <div className="col-12 col-lg-7 mt-5 evolution-container">
                        <PokemonEvolutionChain 
                            endpoint={evolutionChainEndpoint}
                            changePokemon={props.changePokemon}/>
                    </div>
                    <div className="col-12 col-lg-5 mt-5 stats-container">
                        <PokemonStats stats={props.pokemonData.stats}/>                    
                    </div>
                </div>
            </div>
            
        </div>        
    )
}



export default PokemonPage