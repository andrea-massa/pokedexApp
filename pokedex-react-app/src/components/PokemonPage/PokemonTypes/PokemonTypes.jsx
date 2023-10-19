// IMPORTS
// Components
import Type from "./Type/Type"

// Styles
import "./PokemonTypes.css"



// COMPONENT
function PokemonTypes(props){
    // JSX
    return(
        <div className="col col-md-11 pokemon-types">
            {/* Create a list rendering an element for each element 
                given in props (type). */}
            <ul 
                className="d-flex justify-content-center justify-content-md-start pokemon-types-list">
                {props.types.map((type, index) => {                    
                    return <Type key={index} value={type.type.name}/>
                })}
            </ul>
        </div>
    )
}



export default PokemonTypes