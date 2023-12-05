import Arrow from "./Arrow/Arrow"
import BackButton from "./BackButton/BackButton"

import './PokemonPageUI.css'



function PokemonPageUI({current}){

    return(
        <div className="container-fluid pokemon-page-ui">
            <div id="back-button-container">
                <BackButton/>
            </div>
            <div id='arrows-ui'>
                <Arrow
                    current={current}
                    type="prev"/>
                <Arrow
                    current={current}
                    type="next"/>
            </div>
        </div>
    )

}



export default PokemonPageUI