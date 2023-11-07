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
        <PokedexSearch/>
    </div>
  )
}



export default App
