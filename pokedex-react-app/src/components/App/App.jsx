// IMPORTS
// Hooks
import React from 'react'
import { useState, createContext } from 'react'

// Components
import Navbar from "../SharedComponents/Navbar/Navbar"
import PokedexPage from '../Routes/PokedexPage/PokedexPage'
import Footer from '../SharedComponents/Footer/Footer'
import {Outlet, Link} from "react-router-dom"


// Styles
import './App.css'
import '../../../public/fonts.css'



export const NavbarExpandedContext = createContext(null);

// ROOT COMPONENT
export default function App() {  
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)

  function handleNavbarOnExpand(value){
    setIsNavbarExpanded(value)    
  }

  return(
    <>
      <main className='app d-flex flex-column flex-lg-row'>

        <Navbar
          onExpand={handleNavbarOnExpand}/>              

        <NavbarExpandedContext.Provider value={isNavbarExpanded}>
          <PokedexPage/>
          <Outlet/>        
        </NavbarExpandedContext.Provider>  

      </main>

      <Footer/>
    </>
  )
}


