import { useEffect, useState } from 'react'
import PokemonPage from '../PokemonPage/PokemonPage'
import PokedexSearch from '../PokedexSearch/PokedexSearch'
import './App.css'
import '../../../public/fonts.css'


function App() {  
  let [pokemonData, setPokemonData] = useState({})

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then((response) => {
      response.json()
        .then((jsonData) => {
          setPokemonData(jsonData)
        })
    })
    .catch((error) => {
      console.log(error)
      alert('There was an error')
    })
  }, [])
  

  return (
    <div className='App container-fluid'>
      <PokemonPage pokemonData={pokemonData}/>
    </div>
  )
}

export default App
