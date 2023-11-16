import {Outlet, Link} from "react-router-dom"

// IMPORTS
// Hooks
import React from 'react'
import { useEffect, useState } from 'react'

// Components
import PokedexSearch from '../PokedexSearch/PokedexSearch'

// Styles
import './App.css'
import '../../../public/fonts.css'



// ROOT COMPONENT
function App() {  
  return(
    <div className='container-fluid app'>
        <div>
          <Link to={'./pokedex'}>Pokedex</Link>          
        </div>
        <div>
          <Link to={'./pokemon/89'}>Pokemon</Link>
        </div>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}



export default App

