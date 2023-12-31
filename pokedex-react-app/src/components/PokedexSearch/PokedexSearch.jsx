import React, {useState, useEffect} from "react"
import './PokedexSearch.css'

import Loading from '../Loading/Loading'
import AppError from '../AppError/AppError'
import PokemonPage from '../PokemonPage/PokemonPage'
import Arrow from "../PokemonPage/Arrow/Arrow"
import SearchBar from "./SearchBar/SearchBar"


function PokedexSearch(){
    // STATES
    let [pokemonData, setPokemonData] = useState({})
    let [isDataLoading, setIsDataLoading] = useState(true);
    let [appError, setAppError] = useState(null)
    let [query, setQuery] = useState('pikachu')
    let [searchBarInput, setSearchBarInput] = useState('');

    // USE-EFFECT
    useEffect(()=>{
        // Fetch Pokemon Data from the PokeAPI based on the given query state
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
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
    }, [query])
  

    // This function changes the query based on the input received from pokemonName
    function changeQuery(pokemonName){
        setQuery(pokemonName)
    }

    // These functions are related to the arrows in the UI and allow to fetch the previous and 
    // next pokemon on the current page
    function getNextPokemon(){
        setQuery(pokemonData.id + 1)
    }  
    function getPreviousPokemon(){
        setQuery(pokemonData.id - 1)
    }


  // JSX
  return (
    <div className='container-fluid pokedex-search '>      
      
      <SearchBar
        onSubmit={changeQuery}
      />

      <div className='arrows-ui'>
        <Arrow
          onClick={getPreviousPokemon}
          type="prev"
        />
        <Arrow
          onClick={getNextPokemon}
          type="next"        
        />
      </div>

      {/* Renders App Error Component is app-error state is not null */}
      {appError !== null && <AppError errorTxt={appError.errorMessage}/>}
      
      {/* Renders the Loading Component if data is Loading */}
      {isDataLoading && <Loading/>}

      {/* Renders pokemon page if pokemon data is present and not loading state */}
      {pokemonData !== null && !isDataLoading && 
        <PokemonPage 
          pokemonData = {pokemonData}
          changePokemon = {changeQuery}/>
      }

    </div>
  )
}

export default PokedexSearch