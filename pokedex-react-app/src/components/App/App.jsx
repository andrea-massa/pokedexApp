import {Outlet, Link} from "react-router-dom"

// IMPORTS
// Hooks
import React from 'react'
import { useEffect, useState } from 'react'

// Components
import Pokedex from "../Routes/PokedexPage/PokedexPage"
import PokedexSearch from '../Routes/PokemonPage/PokemonPage'

// Styles
import './App.css'
import '../../../public/fonts.css'



// ROOT COMPONENT
function App() {  
  return(
    <div className='app'>
      <Outlet/>        
    </div>
  )
}



export default App

