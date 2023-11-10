// IMPORTS
// Styles
import "./Stat.css"



// COMPONENT
function Stat(props){

    // Utility Function shortening the stat name given the long version
    // from the API
    function shortenStatName(statName){
        switch(statName){
            case 'hp':
                return 'hp'
                break;
            case 'attack':
                return 'atk'
                break;
            case 'defense':
                return 'def'
                break;
            case 'special-attack':
                return 'sp-atk'
                break
            case 'special-defense':
                return 'sp-def'
                break;
            case 'speed':
                return 'spd'
                break
            default:
                return statName
        }
    }

    // Utility function fetting the stats background color based on the stat name
    function getStatBackgroundColor(statName){
        switch(statName){
            case 'hp':
                return 'linear-gradient(90deg, rgba(122, 199, 76, 0.25) 10.53%, #7AC74C 90.98%)'
                break;
            case 'attack':
                return 'linear-gradient(90deg, rgba(236, 14, 14, 0.25) 0%, rgba(236, 14, 14, 0.35) 0.01%, #EC0E0E 100%)'
                break;
            case 'defense':
                return 'linear-gradient(90deg, rgba(29, 11, 228, 0.25) 0%, #1D0BE4 100%)'
                break;
            case 'special-attack':
                return 'linear-gradient(90deg, rgba(238, 129, 48, 0.25) 0%, #EE8130 100%)'
                break
            case 'special-defense':
                return 'linear-gradient(90deg, rgba(99, 144, 240, 0.25) 0%, #6390F0 100%)'
                break;
            case 'speed':
                return 'linear-gradient(90deg, rgba(236, 14, 14, 0.25) 0%, rgba(226, 191, 101, 0.25) 0.01%, #F7D02C 100%)'
                break
            default:
                return 'linear-gradient(90deg, rgba(122, 199, 76, 0.25) 10.53%, #7AC74C 90.98%)'
        }
    }


    // JSX
    return(
        <li className={`row stat ${props.name}-stat`}>
            <span 
                className="col-2 stat-name">
                    {shortenStatName(props.name)}</span>
            <span 
                style={{
                    width:`${props.value * 1.5}px`,
                    background:getStatBackgroundColor(props.name)}} 
                className="col-10 stat-value">
                    {props.value}</span>
        </li>
    )
}



export default Stat