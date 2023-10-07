import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading";
import AppError from "../../AppError/AppError"
import PokemonGenus from "./PokemonGenus/PokemonGenus";
import PokemonTextEntry from "./PokemonTextEntry/PokemonTextEntry";
import "./PokemonDescription.css"

function PokemonDescription(props){
    const [descriptionData, setDescriptionData] = useState(null)
    const [appError, setAppError] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
        .then((response) => {
          if(!response.ok){
            throw new Error('Could Not get Description for this Pokemon')
          }
          response.json()
        .then((jsonData) => {
          let pokemonGenus = ''
          let pokemonDescription = ''
          for (let g of jsonData.genera){
            if(g.language.name === 'en'){
              pokemonGenus = g.genus
            }
          }
          for(let d of jsonData.flavor_text_entries){
            if(d.language.name === 'en'){
              pokemonDescription = d.flavor_text
            }
          }
          setDescriptionData({
            genus: pokemonGenus, 
            flavor_text: pokemonDescription     
          })
          props.evolutionChainCallback(jsonData.evolution_chain.url)
          setIsDataLoading(false)
        })})
        .catch((e) => {
          setIsDataLoading(false)
          setAppError({
            errorMessage: e.message
          })
        })    

      return(() => {
        setAppError(null)
        setIsDataLoading(true)
        setDescriptionData(null)
      })
    }, [props.id])


    return(      
        <>
            {appError !== null 
              && <AppError errorTxt={appError.errorMessage}/>}
            
            {isDataLoading &&
              <Loading/>
            }

            {descriptionData !== null && !isDataLoading &&
              <div className="col col-md-11 pokemon-description">
                <PokemonGenus
                  value={descriptionData.genus}/>
                <PokemonTextEntry 
                  value={descriptionData.flavor_text}/>
              </div> 
            }
        </>            
    )
}

export default PokemonDescription