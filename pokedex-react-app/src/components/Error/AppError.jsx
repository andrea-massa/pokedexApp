import "./Error.css"

function Error(props){
    return(
        <div className="container error-container">
            <div className="error">
                <h2>Error</h2>
                <p className="error-message">{props.errorTxt}</p>
            </div>
        </div>
    )    
}

export default Error