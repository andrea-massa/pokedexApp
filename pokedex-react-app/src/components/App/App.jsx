import { useEffect, useState } from 'react'
import PokemonPage from '../PokemonPage/PokemonPage'
import PokedexSearch from '../PokedexSearch/PokedexSearch'
import './App.css'
import '../../../public/fonts.css'
import '../../../public/colors.css';


function App() {  
  let [pokemonData, setPokemonData] = useState({})
  let [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/487`)
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
  }, [])
  

  return (
    <div className='App container-fluid'>
      {!isDataLoading && <PokemonPage pokemonData={pokemonData}/>}
    </div>
  )
}

export default App
