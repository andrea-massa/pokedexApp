import "./PokemonTypes.css"
import Type from "./Type/Type"

function PokemonTypes(props){
    return(
        <ul 
            className="col col-md-11 pokemon-types"
            >
            {props.types.map((type, index) => {
                let val = type.type.name;
                return <Type key={index} value={val}/>
            })}
        </ul>
    )
}

export default PokemonTypes