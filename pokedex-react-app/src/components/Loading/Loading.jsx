// IMPORTS
// Hooks
import { useState } from "react"

// Styles
import "./Loading.css"



// COMPONENT -> Displays Loading Animation for User
function Loading(){
    // JSX
    return(
        <div className="loading">
            <div className="pokeball">
            </div>
            <p className="loading-text">Loading...</p>
        </div>
    )
}



export default Loading