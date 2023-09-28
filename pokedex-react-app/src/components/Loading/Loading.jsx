import { useState } from "react"
import "./Loading.css"

function Loading(){
    return(
        <div className="loading">
            <div className="pokeball">
            </div>
            <p className="loading-text">Loading...</p>
        </div>
    )
}

export default Loading