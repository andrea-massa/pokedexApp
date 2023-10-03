import "./PokemonStats.css"
import Stat from "./Stat/Stat"
import TotalStat from "./TotalStat/TotalStat"

function PokemonStats(props){
    function calculateTotalStat(stats){
        let total = 0
        for(let stat of stats){
            total += stat.base_stat
        }
        return total;
    }

    return(
        <div className="row pokemon-stats-wrapper">
            <TotalStat
                value={calculateTotalStat(props.stats)}/>
            <ul className="col-9 pokemon-stats">
                {props.stats.map((stat, index) => {                
                    return(
                        <Stat                    
                            key={index}
                            name={stat.stat.name}
                            value={stat.base_stat}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokemonStats