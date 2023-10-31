// IMPORTS
// Components
import PokemonFormCarousel from "./PokemonFormCarousel/PokemonFormCarousel"
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
                    <div className="d-flex flex-row flex-lg-column flex-wrap form-list">
                        <PokemonFormCarousel
                            stage={props.nodeOrder}                            
                            formsData={props.nodeData}/>
                    </div>
                </div>
            )
            }
        </li>
    )
}

export default PokemonEvolutionNode