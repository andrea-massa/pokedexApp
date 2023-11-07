// IMPORTS
// Hooks
import { useEffect, useState } from "react"

// Components
import Loading from "../../../../Loading/Loading"
import AppError from "../../../../AppError/AppError"
import PokemonImage from "../../../PokemonImage/PokemonImage"
import PokemonEvolutionTrigger from "../PokemonEvolutionTrigger/PokemonEvolutionTrigger"

// Styles
import "./PokemonEvolutionForm.css"



// COMPONENT
function PokemonEvolutionForm(props){
    // States
    const [isLoading, setIsLoading] = useState('true')
    const [formImageData, setFormImageData] = useState(null)
    const [appError, setAppError] = useState(null)

    // Use effect (API CALL) -> Get pokemon name and image based on url.
    useEffect(() => {   
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonData.url.split('/')[6]}`)
        .then((response) => {
            // Make sure response is okay
            if(!response.ok){
                throw new Error('Error getting pokemon form image')
            }
            // If response is okay, parse it and set stateful data with json data
            response.json()
            .then((jsonData) => {                
                setFormImageData({
                    img: jsonData.sprites.other.home.front_default || jsonData.sprites.front_default,
                    types: jsonData.types
                })
                setIsLoading(false)
            })
        })        
        .catch((e) => {
            setIsLoading(false)
            setFormImageData(null)
            setAppError({
                errorMessage: e.message
            })
        })

        // Cleanup function
        return(() => {
            setIsLoading(true)
            setFormImageData(null)
            setAppError(null)
        })
    }, [props.pokemonData.url])

    
    // JSX
    return(
        <div className="d-lg-flex flex-column">

            {/* Render error if any */}
            {appError !== null && <AppError errorTxt={appError.errorMessage}/>}

            {/* Show the trigger for this evolution */}
            {props.evolutionData.length > 0 && <PokemonEvolutionTrigger triggerName={props.evolutionData[0].trigger.name}/> }

            {/* Display this pokemon's form data */}
            <div className="pokemon-evolution-form" onClick={(e) => {
                props.changePokemon(props.pokemonData.name);
            }}>
                <div className="form-image-container">               
                    {isLoading 
                    ? 
                    <Loading/>
                    :
                    <PokemonImage
                        isEvolutionImage={true}
                        img={formImageData.img} 
                        pokemonName={props.pokemonData.name}
                        types={formImageData.types}/>                       
                    }
                </div>
                <p className="form-name">{props.pokemonData.name}</p>                
            </div>
        </div>
    )
}



export default PokemonEvolutionForm