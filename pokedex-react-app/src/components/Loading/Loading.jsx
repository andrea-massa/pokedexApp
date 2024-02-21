// IMPORTS
// Hooks
import { useState } from "react"

// Styles
import "./Loading.css"



// COMPONENT -> Displays Loading Animation for User
function Loading({isAllPage}){    
    return(
        <div className={`loading ${isAllPage && 'allPage'}`}>
            <div className="pokeball">
            </div>
            <p className="loading-text">Loading...</p>
        </div>
    )
}



export default Loading