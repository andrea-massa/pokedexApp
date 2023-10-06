import "./PokemonEvolutionNode.css"
import PokemonEvolutionForm from "./PokemonForm/PokemonEvolutionForm"


function PokemonEvolutionNode(props){
    return(        
        <li className="col-md-3 pokemon-evolution-node">
            {props.nodeData.length < 2
            ?
            (
                <div className="single-form">                    
                    <PokemonEvolutionForm
                        evolutionData={props.nodeData[0].evolutionDetails}
                        pokemonData={props.nodeData[0].species} 
                        />                
                </div>
            )
            :
            (
                <div className="multi-form">
                    <ul className="d-flex flex-row flex-md-column flex-wrap form-list">
                        {props.nodeData.map((form, index) => {
                            return( 
                                <li className={`form-{${index + 1}}`} key={index}>
                                    <PokemonEvolutionForm          
                                        evoltionData={form.evolutionDetails}                              
                                        pokemonData={form.species}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
            }
        </li>
    )
}

export default PokemonEvolutionNode