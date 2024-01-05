// IMPORTS
// Hooks
import React from 'react'
import { useState } from 'react'

// Components
import Navbar from "../SharedComponents/Navbar/Navbar"
import {Outlet, Link} from "react-router-dom"

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

