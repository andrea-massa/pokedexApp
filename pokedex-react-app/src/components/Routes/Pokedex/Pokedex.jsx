import {Link} from "react-router-dom"

function Pokedex(){
    return(
        <div className="pokedex">
            <div className="pokemon">               
                <Link to={"/pokemon/1"}>Click</Link>
            </div>
        </div>
    )
}

export default Pokedex