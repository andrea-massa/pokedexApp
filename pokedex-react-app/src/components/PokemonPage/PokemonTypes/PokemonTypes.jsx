import "./PokemonTypes.css"
import Type from "./Type/Type"

function PokemonTypes(props){
    return(
        <div className="col col-md-11 pokemon-types">
            <ul 
                className="d-flex justify-content-center justify-content-md-start pokemon-types-list">
                {props.types.map((type, index) => {
                    let val = type.type.name;
                    return <Type key={index} value={val}/>
                })}
            </ul>
        </div>
    )
}

export default PokemonTypes