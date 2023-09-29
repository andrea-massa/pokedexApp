import "./Biometric.css"

function Biometric(props){
    return(
        <div className={`biometric ${props.name}`}>
            <h4 className="biometric-name">{props.name}</h4>
            <p className="biometric-value">
                {props.value / 10}
                <span className="units">
                    {props.name === 'height' 
                    ?
                        ' m'
                        :
                        ' kgs'
                    }
                </span>
            </p>
        </div>
    )
}
export default Biometric