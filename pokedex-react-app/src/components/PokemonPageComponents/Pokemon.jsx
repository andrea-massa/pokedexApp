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
import "./Pokemon.css"



// COMPONENT -> Renders Everything Associated with the Pokemon Data
function Pokemon(props){      
    // STATES
    const [evolutionChainEndpoint, setEvolutionChainEndpoint] = useState('');    
    
    // JSX
    return(
        <div className={`pokemon container-fluid ${props.isNavbarExpanded && 'high-margin'}`}>

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
                    <div className="col-12 col-lg-4 ms-lg-5 mt-5 stats-container">
                        <PokemonStats stats={props.pokemonData.stats}/>                    
                    </div>
                </div>
            </div>
            
        </div>        
    )
}



export default Pokemon