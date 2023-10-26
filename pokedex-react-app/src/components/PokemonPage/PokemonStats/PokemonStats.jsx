// IMPORTS
// Components
import Stat from "./Stat/Stat"
import TotalStat from "./TotalStat/TotalStat"

// Styles
import "./PokemonStats.css"



// COMPONENT
function PokemonStats(props){
    // Utility function to calculate the total stat based on given stat props
    function calculateTotalStat(stats){
        let total = 0
        for(let stat of stats){
            total += stat.base_stat
        }
        return total;
    }


    // JSX
    return(
        <div className="row border ms-lg-5 pokemon-stats-wrapper">

            {/* Render Total Stat Component using the calculate total stat function
                to determine the total
            */}
            <TotalStat value={calculateTotalStat(props.stats)}/>

            {/* Render a list with each stat */}
            <ul className="col pokemon-stats">                
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