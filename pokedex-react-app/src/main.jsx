import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from './components/App/App.jsx'
import Pokedex from './components/Routes/PokedexPage/PokedexPage.jsx'
import Pokemon from './components/Routes/PokemonPage/Pokemon.jsx'


import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Pokedex/>
      },      
      {
        path: "/pokemon/:pokemonId",
        element: <Pokemon/>
      }
    ]        
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
