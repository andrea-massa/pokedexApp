import { useEffect, useState } from 'react'
import PokemonPage from '../PokemonPage/PokemonPage'
import Loading from '../Loading/Loading'
import PokedexSearch from '../PokedexSearch/PokedexSearch'
import './App.css'
import '../../../public/fonts.css'
import '../../../public/colors.css';


function App() {  
  let [pokemonData, setPokemonData] = useState({})
  let [isDataLoading, setIsDataLoading] = useState(true);
  let [input, setInput] = useState('');
  let [query, setQuery] = useState('ditto')

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((response) => {
      response.json()
        .then((jsonData) => {
          setPokemonData(jsonData)
          setIsDataLoading(false)
        })
    })
    .catch((error) => {
      console.log(error)
      alert('There was an error')
    })
  }, [query])
  

  return (
    <div className='App container-fluid'>
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

      {!isDataLoading 
      ? 
        <PokemonPage pokemonData={pokemonData}/> 
        : 
        <Loading/>
      }
    </div>
  )
}

export default App
