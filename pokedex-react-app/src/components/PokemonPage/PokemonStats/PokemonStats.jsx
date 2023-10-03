import "./PokemonStats.css"
import Stat from "./Stat/Stat"

function PokemonStats(props){

    return(
        <ul className="pokemon-stats">
            {props.stats.map((stat, index) => {                
                return(
                    <Stat                    
                        key={index}
                        name={stat.stat.name}
                        value={stat.base_stat}/>
                )
            })}
        </ul>
    )
}

export default PokemonStats