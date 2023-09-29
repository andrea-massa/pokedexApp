import './PokemonBiometrics.css';
import Biometric from './Biometric/Biometric';

function PokemonBiometrics(props){
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