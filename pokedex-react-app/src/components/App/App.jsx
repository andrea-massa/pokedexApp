import { useEffect, useState } from 'react'
import PokemonPage from '../PokemonPage/PokemonPage'
import Loading from '../Loading/Loading'
import PokedexSearch from '../PokedexSearch/PokedexSearch'
import Error from '../Error/Error'
import './App.css'
import '../../../public/fonts.css'
import '../../../public/colors.css';


function App() {  
  let [pokemonData, setPokemonData] = useState({})
  let [isDataLoading, setIsDataLoading] = useState(true);
  let [error, setError] = useState(null)
  let [input, setInput] = useState('');
  let [query, setQuery] = useState('ditto')

  useEffect(()=>{
    setIsDataLoading(true);
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((response) => {
        if(!response.ok){
          setIsDataLoading(false)
          setPokemonData(null);
          setError({
            errorStatus: response.status,
            errorMessage: `Could not find pokemon with name ${query}`
          })
        }
        return response.json();
      })
        .then((jsonData) => {
          if(jsonData.hasOwnProperty('abilities')){
            setError(null);
            setPokemonData(jsonData)
            setIsDataLoading(false)
            return
          }
          else{
            setIsDataLoading(false)
            setPokemonData(null);
            setError({
              errorMessage: `Could not find pokemon with name ${query}`
            })
          }
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
      
      {error !== null 
        && <Error errorTxt={error.errorMessage}/>}
      
      {isDataLoading &&
        <Loading/>
      }

      {pokemonData !== null && !isDataLoading && 
        <PokemonPage pokemonData = {pokemonData}/>}
    </div>
  )
}

export default App
