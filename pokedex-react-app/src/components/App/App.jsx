// IMPORTS
// Hooks Used
import { useEffect, useState } from 'react'

// Components Used
import Loading from '../Loading/Loading'
import AppError from '../AppError/AppError'
import PokemonPage from '../PokemonPage/PokemonPage'

// Styles Used
import './App.css'
import '../../../public/fonts.css'



// COMPONENT
function App() {  
  // STATES
  let [pokemonData, setPokemonData] = useState({})
  let [isDataLoading, setIsDataLoading] = useState(true);
  let [appError, setAppError] = useState(null)
  let [input, setInput] = useState('');
  let [query, setQuery] = useState('ditto')


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
    })
  }, [query])
  

  // JSX
  return (
    <div className='app container-fluid'>
      <div className='controls'>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
        }}/>
        <button 
          onClick={() => {
            setQuery(input);
            setInput('');
            }}>
          Search</button>
      </div>
      
      {/* Renders App Error Component is app-error state is not null */}
      {appError !== null && <AppError errorTxt={appError.errorMessage}/>}
      
      {/* Renders the Loading Component if data is Loading */}
      {isDataLoading && <Loading/>}

      {/* Renders pokemon page if pokemon data is present and not loading state */}
      {pokemonData !== null && !isDataLoading && <PokemonPage pokemonData = {pokemonData}/>}
    </div>
  )
}

export default App
