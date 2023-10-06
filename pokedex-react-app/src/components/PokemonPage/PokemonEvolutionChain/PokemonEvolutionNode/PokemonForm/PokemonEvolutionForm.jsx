import "./PokemonEvolutionForm.css"
import Loading from "../../../../Loading/Loading"
import PokemonImage from "../../../PokemonImage/PokemonImage"
import { useEffect, useState } from "react"
import PokemonEvolutionTrigger from "../PokemonEvolutionTrigger/PokemonEvolutionTrigger"

function PokemonEvolutionForm(props){
    const [isLoading, setIsLoading] = useState('true')
    const [formImageData, setFormImageData] = useState(null)

    useEffect(() => {   
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonData.name}`)
            .then((response) => {
                response.json()
                    .then((jsonData) => {
                        setIsLoading(false)
                        setFormImageData({
                            img: jsonData.sprites.other.home.front_default || jsonData.sprites.front_default,
                            types: jsonData.types
                        })
                    })
            })
            .catch((error) => {
                setIsLoading(false)
                alert('Error' + error)
            })
        return(() => {
            setIsLoading(true)
            setFormImageData(null)
        })
    }, [props.pokemonData.url])

    return(
        <div className="d-lg-flex flex-row">
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