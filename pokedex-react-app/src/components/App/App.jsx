import {Outlet, Link} from "react-router-dom"

// IMPORTS
// Hooks
import React from 'react'

// Components
import Navbar from "../SharedComponents/Navbar/Navbar"

// Styles
import './App.css'
import '../../../public/fonts.css'



// ROOT COMPONENT
function App() {  
  return(
    <div className='app d-flex flex-column flex-lg-row'>
      <Navbar/>
      <Outlet/>        
    </div>
  )
}



export default App

