// IMPORTS
// Styles
import "./TotalStat.css"



// COMPONENT
function TotalStat(props){
    // JSX
    return(
        <div className="d-flex flex-column col-2 total-stat">
            <h4>Total</h4>
            <div                
                className="total-stat-value"
                style={{height: `${props.value / 2}px`}}>
                {props.value}
            </div>
        </div>
    )
}

export default TotalStat