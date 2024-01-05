import React, {useState, useEffect, useContext} from "react"
import { useParams, Link } from "react-router-dom"

import { NavbarExpandedContext } from "../../App/App"

import Loading from '../../Loading/Loading'
import AppError from '../../AppError/AppError'
import Pokemon from '../../PokemonPageComponents/Pokemon'
import PokemonPageUI from "../../PokemonPageComponents/PokemonPageUI/PokemonPageUI"
import SearchBar from "../../PokemonPageComponents/SearchBar/SearchBar"

import './PokemonPage.css'



function PokemonPage(){
    const params = useParams();

    // Contexts
    const isNavbarExpanded = useContext(NavbarExpandedContext);

    // STATES
    let [pokemonData, setPokemonData] = useState({})
    let [isDataLoading, setIsDataLoading] = useState(true);
    let [appError, setAppError] = useState(null)

    // USE-EFFECT
    useEffect(()=>{        
        // Fetch Pokemon Data from the PokeAPI based on the given query state
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
        .then((response) => {
            // If no or bad response, throw an error. Otherwise, return that reponse
            if(!response.ok){
                throw new Error(`Could not find Pokemon with given query ${query}`)
            }

            return response.json();
        })
        // Parse the returned response
        .then((jsonData) => {
            // Handle the case in which there is an error in parsing the JSON
            if(!jsonData.hasOwnProperty('abilities')){
                throw new Error('Error getting Data')
            }

            // If everything goes well set the state to the data received and stop loading
            setPokemonData(jsonData)
            setIsDataLoading(false)
            return
        })
        // Handles the case in which there is any type of error in the above procedure 
        // by setting the error state message to whatever error is sent to catch.
        .catch((e) => {      
            setIsDataLoading(false)
            setPokemonData(null);
            setAppError({
                errorMessage: e.message
            })  
        })
    
        // Cleanup function that runs everytime component is re-rendered 
        // before the function above
        return (() => {
            setPokemonData(null)
            setIsDataLoading(true);
            setAppError(null);
            window.scrollTo(0, 0);
        })
    }, [params.pokemonId])
  




  // JSX
  return (
    <div className='container-fluid pokemon-page'>      

      <PokemonPageUI
        current={params.pokemonId}/>

      {/* Renders App Error Component is app-error state is not null */}
      {appError !== null && <AppError errorTxt={appError.errorMessage}/>}
      
      {/* Renders the Loading Component if data is Loading */}
      {isDataLoading && <Loading/>}

      {/* Renders pokemon page if pokemon data is present and not loading state */}
      {pokemonData !== null && !isDataLoading && 
      <Pokemon
          pokemonData = {pokemonData}
          isNavbarExpanded = {isNavbarExpanded}
        />
      }

    </div>
  )
}

export default PokemonPage