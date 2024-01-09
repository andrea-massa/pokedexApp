import Arrow from "./Arrow/Arrow"

import './PokemonPageUI.css'



function PokemonPageUI({current}){

    return(
        <div className="container-fluid pokemon-page-ui">
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