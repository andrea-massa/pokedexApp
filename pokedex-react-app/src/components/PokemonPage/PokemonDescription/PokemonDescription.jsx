// IMPORTS
// Hooks
import { useEffect, useState } from "react"

// Components
import Loading from "../../Loading/Loading";
import AppError from "../../AppError/AppError"
import PokemonGenus from "./PokemonGenus/PokemonGenus";
import PokemonTextEntry from "./PokemonTextEntry/PokemonTextEntry";

// Styles
import "./PokemonDescription.css"



// COMPONENT
function PokemonDescription(props){
    // STATES
    const [descriptionData, setDescriptionData] = useState(null)
    const [appError, setAppError] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true);

    // API CALL -> Get Pokemon Detailed Data from PokeAPI
    useEffect(() => {
        // Fetch the Pokemon Data from PokeAPI based on the given ID in props
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
        // Throw an error if the response is not okay (Ex 404)
        .then((response) => {
          if(!response.ok){
            throw new Error('Could Not get Description for this Pokemon')
          }
          // If the response is okay, parse the JSON
          response.json()
        .then((jsonData) => {
          // Assign the description data state for this pokemon
          // to the genus and description property of the JSON
          // but make sure it is in english.
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
          // Send the evolution data (endpoint to call for that API) back to the evolution chain callback function
          // in order to update the evolution chain state in the parent component
          props.evolutionChainCallback(jsonData.evolution_chain.url)
          setIsDataLoading(false)
        })})
        // Catch any error that can occurr in the above process and set the APP error state to 
        // render that error
        .catch((e) => {
          setIsDataLoading(false)
          setAppError({
            errorMessage: e.message
          })
        })    

      // Cleanup funciton 
      return(() => {
        setAppError(null)
        setIsDataLoading(true)
        setDescriptionData(null)
      })
    }, [props.id])



    // JSX
    return(      
        <>
            {/* If there is an error in the app render it */}
            {appError !== null && <AppError errorTxt={appError.errorMessage}/>}
            
            {/* If data is loading render the Loading component */}
            {isDataLoading && <Loading/>}

            {/* If we have data, display it */}
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