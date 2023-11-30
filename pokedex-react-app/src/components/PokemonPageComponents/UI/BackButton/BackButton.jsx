import { Link } from "react-router-dom"

function BackButton(){
    return(
        <Link className="back-button btn btn-primary" to={'/'}>
            Back
        </Link>        
    )    
}

export default BackButton