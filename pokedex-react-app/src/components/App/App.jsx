import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import AppError from '../AppError/AppError'
import PokedexSearch from '../PokedexSearch/PokedexSearch'
import PokemonPage from '../PokemonPage/PokemonPage'
import './App.css'
import '../../../public/fonts.css'


function App() {  
  let [pokemonData, setPokemonData] = useState({})
  let [isDataLoading, setIsDataLoading] = useState(true);
  let [appError, setAppError] = useState(null)
  let [input, setInput] = useState('');
  let [query, setQuery] = useState('ditto')

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((response) => {
      if(!response.ok){
        throw new Error(`Could not find Pokemon with given query ${query}`)
      }
      return response.json();
    })
    .then((jsonData) => {
      if(!jsonData.hasOwnProperty('abilities')){
        throw new Error('Error getting Data')
      }
      setPokemonData(jsonData)
      setIsDataLoading(false)
      return
    })
    .catch((e) => {
      setIsDataLoading(false)
      setPokemonData(null);
      setAppError({
        errorMessage: e.message
      })
    })

    return (() => {
      setPokemonData(null)
      setIsDataLoading(true);
      setAppError(null);
    })
  }, [query])
  

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
      
      {appError !== null 
        && <AppError errorTxt={appError.errorMessage}/>}
      
      {isDataLoading &&
        <Loading/>
      }

      {pokemonData !== null && !isDataLoading && 
        <PokemonPage pokemonData = {pokemonData}/>}
    </div>
  )
}

export default App
