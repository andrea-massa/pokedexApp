import "./Stat.css"

function Stat(props){


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

    return(
        <li className={`row stat ${props.name}-stat`}>
            <span 
                className="col-2 stat-name">
                    {shortenStatName(props.name)}</span>
            <span 
                style={{width:`${props.value * 1.5}px`}} 
                className="col-10 stat-value">
                    {props.value}</span>
        </li>
    )
}

export default Stat