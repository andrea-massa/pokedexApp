// IMPORTS
// Components
import Biometric from './Biometric/Biometric';

// Styles
import './PokemonBiometrics.css';



// COMPONENT
function PokemonBiometrics(props){
    // JSX
    return(
        <div className='col col-md-11 pokemon-biometrics'>
            <Biometric
                name={"height"}
                value={props.height}/>
            <Biometric
                name={"weight"}
                value={props.weight}/>
        </div>
    )
}



export default PokemonBiometrics;