// IMPORTS
// Styles
import "./TotalStat.css"



// COMPONENT
function TotalStat(props){
    // JSX
    return(
        <div className="col-2 total-stat">
            <h3>Total</h3>
            <div                
                className="total-stat-value"
                style={{height: `${props.value / 2}px`}}>
                {props.value}
            </div>
        </div>
    )
}

export default TotalStat