import "./TotalStat.css"

function TotalStat(props){

    return(
        <div className="col-3 total-stat">
            <p>Total</p>
            <div                
                className="total-stat-value"
                style={{height: `${props.value / 2}px`}}>
                {props.value}
            </div>
        </div>
    )
}

export default TotalStat