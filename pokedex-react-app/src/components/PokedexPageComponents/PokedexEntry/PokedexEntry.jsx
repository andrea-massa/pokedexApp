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
    const [appError, setAppError] = useState(null)

    useEffect(() => {
        getEntryImage(fetchInfoUrl)
            .then((imageUrl) => {setPokemonImageUrl(imageUrl)})
            .catch((error) => {console.log(error)})        

    }, [fetchInfoUrl])


    return(
        <div className="pokedex-entry">
            <Link
                className="pokedex-entry border"
                to={navigateTo}>          

                <div className="pokeball">
                    <img className="sprite" src={pokemonImageUrl} alt={`${name}-sprite`} />
                </div>

                <h4 className="pokemon-text">
                    <span className="pokemon-number">{number}</span>
                    <span className="pokemon-name">{name}</span>
                </h4>

            </Link>
        </div>
    )
}



export default PokedexEntry