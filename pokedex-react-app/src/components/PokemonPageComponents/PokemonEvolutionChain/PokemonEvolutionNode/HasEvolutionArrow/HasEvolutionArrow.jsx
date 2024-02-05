// IMPORTS
// Components
import {BsArrowRight, BsArrowDown} from 'react-icons/bs'

// Styles
import "./HasEvolutionArrow.css"



function HasEvolutionArrow(){
    // JSX
    return(
        <>
            <div className='d-flex d-lg-none arrow-container arrow-down-container'>
                <BsArrowDown/>
            </div>
            <div className='d-none d-lg-flex arrow-container arrow-right-container'>
                <BsArrowRight/>
            </div>
        </>
    )
}

export default HasEvolutionArrow