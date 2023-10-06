import "./PokemonEvolutionNode.css"
import PokemonEvolutionForm from "./PokemonForm/PokemonEvolutionForm"


function PokemonEvolutionNode(props){
    return(        
        <li className=" pokemon-evolution-node">
            {props.nodeData.length < 2
            ?
            (
                <div className="single-form">                    
                    <PokemonEvolutionForm
                        evolutionData={props.nodeData[0].evolution_details}
                        pokemonData={props.nodeData[0].species} 
                        />                
                </div>
            )
            :
            (
                <div className="multi-form">
                    <ul className="d-flex flex-row flex-lg-column flex-wrap form-list">
                        {props.nodeData.map((form, index) => {
                            return( 
                                <li className={`form-{${index + 1}}`} key={index}>
                                    <PokemonEvolutionForm          
                                        evolutionData={form.evolution_details}                              
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