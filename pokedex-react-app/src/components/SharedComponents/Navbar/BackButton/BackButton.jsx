import { Link } from "react-router-dom"
import { IoArrowBack, IoConstructOutline } from "react-icons/io5"

import "./BackButton.css"



function BackButton(){
    return(
        <Link className="back-button btn btn-primary" to={'/'}>
            <IoArrowBack/> | Back
        </Link>        
    )    
}

export default BackButton