// IMPORTS
// Components
import PokemonFormCarousel from "./PokemonFormCarousel/PokemonFormCarousel"
import PokemonEvolutionForm from "./PokemonForm/PokemonEvolutionForm"
import HasEvolutionArrow from "./HasEvolutionArrow/HasEvolutionArrow"

// Styles
import "./PokemonEvolutionNode.css"



// COMPONENT
function PokemonEvolutionNode(props){    
    // JSX
    return(          
        <>  
            {/* If the pokemon evolves from another pokemon, add an arrow indicating that */}
            {props.nodeOrder !== 1 && <HasEvolutionArrow/>}                    

            <li className="pokemon-evolution-node mx-auto mx-lg-4">            
                {props.nodeData.length < 2
                ?            
                // If the pokemon only has one form at this evolution stage, render one form element
                (
                    <div className="single-form">                    
                        <PokemonEvolutionForm
                            evolutionData={props.nodeData[0].evolution_details}
                            pokemonData={props.nodeData[0].species}   
                            changePokemon={props.changePokemon}/>                                        
                    </div>
                )
                :

                // If the pokemon has multiple forms at this evolution stage, render multiple
                // form elements.
                (
                    <div className="multi-form">
                        <div className="d-flex flex-row flex-lg-column flex-wrap form-list">
                            <PokemonFormCarousel
                                stage={props.nodeOrder}                            
                                formsData={props.nodeData}
                                changePokemon={props.changePokemon}/>
                        </div>                    
                    </div>
                )
                }
            </li>
        </>
    )
}

export default PokemonEvolutionNode