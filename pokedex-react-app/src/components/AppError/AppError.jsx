// IMPORTS
// Styles
import "./AppError.css"



// COMPONENT
function AppError(props){
    // JSX
    return(
        <div className="container app-error">
            <div className="error">
                <h2>Error</h2>
                <p className="error-message">
                    {props.errorTxt}
                </p>
            </div>
        </div>
    )    
}



export default AppError