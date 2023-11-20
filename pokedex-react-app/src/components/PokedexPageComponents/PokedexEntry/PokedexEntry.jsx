import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

import Loading from "../../Loading/Loading"
import AppError from "../../AppError/AppError"

import "./PokedexEntry.css"


async function getEntryImage(url){
    let response = await fetch(url)
    let jsonData = await response.json()
    return jsonData.sprites.front_default;
}


function PokedexEntry({navigateTo, name, number, fetchInfoUrl}){
    const [pokemonImageUrl, setPokemonImageUrl] = useState(null)
    const[isImageLoading, setIsImageLoading] = useState(true)

    useEffect(() => {

        getEntryImage(fetchInfoUrl)
            .then((imageUrl) => {
                setPokemonImageUrl(imageUrl)
                setIsImageLoading(false)                
            })
            .catch((error) => {
                setIsImageLoading(false)
                console.log(`No image for ${name}`)                
            })        

        return() => {
            setIsImageLoading(true)
        }
    }, [fetchInfoUrl])


    return(        
        <Link
            className="pokedex-entry"
            to={navigateTo}>          

            {isImageLoading ? <Loading/> : 
            <>
            <div className="pokeball-image-container">
                <img className="sprite img-fluid" src={pokemonImageUrl} alt={`${name}-sprite`} />
            </div>
            

            <h4 className="pokemon-text">
                <span className="pokemon-number">{number}</span>
                <span className="pokemon-name">{name}</span>
            </h4>
            </>
            }
        </Link>        
    )
}



export default PokedexEntry