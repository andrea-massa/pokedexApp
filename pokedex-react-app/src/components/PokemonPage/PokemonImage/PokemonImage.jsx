import "./PokemonImage.css"
import "../../../../public/colors.css"

function PokemonImage(props){
    // Function that gets colors needed for the background of the pokemon image
    // based on the type(s) of the pokemon
    const getColors = () => {        
        let colorsArr = [];
        for (let type of props.types){
            let typeIdentifier = type.type.name;            
            colorsArr.push(`${typeIdentifier}Color`);                    
        }      
        return colorsArr
    }
    
    const colorsArr = getColors();

    return(
        <div 
            className={`pokemon-image`}
            style={colorsArr.length === 2 ?
                {background: `
                    linear-gradient(to bottom right, var(--${colorsArr[0]}) 0%, var(--${colorsArr[1]}) 50%) bottom right / 50% 50% no-repeat, 
                    linear-gradient(to bottom left, var(--${colorsArr[0]}) 0%, var(--${colorsArr[1]}) 50%) bottom left / 50% 50% no-repeat, 
                    linear-gradient(to top left, var(--${colorsArr[0]}) 0%, var(--${colorsArr[1]}) 50%) top left / 50% 50% no-repeat, 
                    linear-gradient(to top right, var(--${colorsArr[0]}) 0%, var(--${colorsArr[1]}) 50%) top right / 50% 50% no-repeat`}
                :
                {backgroundColor: `var(--${colorsArr[0]})`}
            } 
            >
            <img
                className="img-fluid"
                src={props.img} 
                alt={props.pokemonName}/>
        </div>
    )
}

export default PokemonImage