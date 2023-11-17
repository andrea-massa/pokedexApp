import {Link} from "react-router-dom"
import "./PokedexEntry.css"

function PokedexEntry(props){
    return(
        <Link
            className="pokedex-entry border"
            to={props.navigateTo}>
            {props.pokemonData.name}
        </Link>
    )
}



export default PokedexEntry