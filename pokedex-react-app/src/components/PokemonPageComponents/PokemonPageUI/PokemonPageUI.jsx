import Arrow from "./Arrow/Arrow"

import './PokemonPageUI.css'



function PokemonPageUI({current}){

    return(
        <div className="container-fluid pokemon-page-ui">
            <div id='arrows-ui'>
                {current > 1 && <Arrow current={current} type="prev"/>}                
                {current < 1008 && <Arrow current={current} type="next"/>}                
            </div>
        </div>
    )

}



export default PokemonPageUI