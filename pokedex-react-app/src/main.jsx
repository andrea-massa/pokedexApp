import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from './components/App/App.jsx'
import Pokedex from './components/Routes/PokedexPage/PokedexPage.jsx'
import PokedexSearch from './components/PokedexSearch/PokedexSearch.jsx'


import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/pokemon/:pokemonId",
        element: <PokedexSearch/>
      }
    ]        
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
