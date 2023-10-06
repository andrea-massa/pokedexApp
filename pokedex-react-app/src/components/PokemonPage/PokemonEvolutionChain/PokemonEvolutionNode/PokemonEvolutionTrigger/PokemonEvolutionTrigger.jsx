import "./PokemonEvolutionTrigger.css"

function PokemonEvolutionTrigger(props){
    return(
        <div className="mt-4 mt-lg-0 mx-lg-4 pokemon-evolution-trigger">
            <p>{props.triggerName}</p>
        </div>
    )
}   

export default PokemonEvolutionTrigger