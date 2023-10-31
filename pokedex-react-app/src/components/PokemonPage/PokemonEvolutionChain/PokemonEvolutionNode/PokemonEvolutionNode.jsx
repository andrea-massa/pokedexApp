// IMPORTS
// Components
import PokemonEvolutionForm from "./PokemonForm/PokemonEvolutionForm"

// Styles
import "./PokemonEvolutionNode.css"



// COMPONENT
function PokemonEvolutionNode(props){
    // JSX
    return(        
        <li className="pokemon-evolution-node">            
            {props.nodeData.length < 2
            ?

            // If the pokemon only has one form at this evolution stage, render one form element
            (
                <div className="single-form">                                    
                    <PokemonEvolutionForm
                        evolutionData={props.nodeData[0].evolution_details}
                        pokemonData={props.nodeData[0].species} 
                        />                
                </div>
            )
            :

            // If the pokemon has multiple forms at this evolution stage, render multiple
            // form elements.
            (
                <div className="multi-form">
                    <ul className="d-flex flex-row flex-lg-column flex-wrap form-list">
                        <div id="pokemonFormCarouselIndicators" className="carousel slide">
                            <div className="carousel-indicators">                            
                                {props.nodeData.map((form, index) => {
                                    return(                                 
                                        <button key={index} type="button" data-bs-target="#pokemonFormCarouselIndicators" className={index === 0 ? "active" : "not-active"} data-bs-slide-to={index} aria-label={`Form ${index}`}></button>
                                    )
                                })}
                            </div>
                            <div className="carousel-inner">
                                {props.nodeData.map((form, index) => {
                                    return(                                 
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : "not-active"}`}>
                                            <PokemonEvolutionForm
                                                evolutionData={form.evolution_details}
                                                pokemonData={form.species} />
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#pokemonFormCarouselIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#pokemonFormCarouselIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </ul>
                </div>
            )
            }
        </li>
    )
}

export default PokemonEvolutionNode