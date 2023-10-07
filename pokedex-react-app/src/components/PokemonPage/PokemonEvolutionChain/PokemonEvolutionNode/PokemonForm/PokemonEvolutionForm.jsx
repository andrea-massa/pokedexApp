import "./PokemonEvolutionForm.css"
import Loading from "../../../../Loading/Loading"
import AppError from "../../../../AppError/AppError"
import PokemonImage from "../../../PokemonImage/PokemonImage"
import { useEffect, useState } from "react"
import PokemonEvolutionTrigger from "../PokemonEvolutionTrigger/PokemonEvolutionTrigger"

function PokemonEvolutionForm(props){
    const [isLoading, setIsLoading] = useState('true')
    const [formImageData, setFormImageData] = useState(null)
    const [appError, setAppError] = useState(null)

    useEffect(() => {   
        let toFetch = props.pokemonData.name == 'giratina' ? 487 : null
        fetch(`https://pokeapi.co/api/v2/pokemon/${toFetch || props.pokemonData.name}`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Error getting pokemon form image')
            }
            response.json()
            .then((jsonData) => {
                setIsLoading(false)
                setFormImageData({
                    img: jsonData.sprites.other.home.front_default || jsonData.sprites.front_default,
                    types: jsonData.types
                })
            })
        })
        .catch((e) => {
            setIsLoading(false)
            setFormImageData(null)
            setAppError({
                errorMessage: e.message
            })
        })
        return(() => {
            setIsLoading(true)
            setFormImageData(null)
            setAppError(null)
        })
    }, [props.pokemonData.url])

    return(
        <div className="d-lg-flex flex-row">
            {appError !== null 
                && <AppError errorTxt={appError.errorMessage}/>}

            {props.evolutionData.length > 0
                && 
                <PokemonEvolutionTrigger
                    triggerName={props.evolutionData[0].trigger.name}/>
            }
            <div className="pokemon-evolution-form">
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