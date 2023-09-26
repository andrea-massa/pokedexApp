import "./PokemonTypes.css"
import Type from "./Type/Type"

function PokemonTypes(props){
    return(
        <ul 
            className="pokemon-types"
            style={
                props.types.length === 1 
                ? 
                {justifyContent: 'center'} 
                : 
                {justifyContent: 'left'}}
            >
            {props.types.map((type, index) => {
                let val = type.type.name;
                return <Type key={index} value={val}/>
            })}
        </ul>
    )
}

export default PokemonTypes