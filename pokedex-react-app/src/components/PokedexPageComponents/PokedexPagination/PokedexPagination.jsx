import PaginationPill from "./PaginationPill/PaginationPill"
import "./PokedexPagination.css"

function generatePaginationPills(upperLimit, limit, offset, currentState){
    let currentOffset = offset
    let paginationPills = []
    for (let i = offset - limit * 2; i <= offset + limit * 2; i += limit){
        if(i >= 0 && i < upperLimit - limit){
            paginationPills.push(
                <PaginationPill 
                    start={i} 
                    end={i + limit} 
                    isCurrent={(currentOffset >= i) && (currentOffset < (i + limit)) ? true : false}/>
            )         
        }
    }
    return paginationPills
}

function PokedexPagination({currentState, getPrev, getNext, offset, limit, customQuery, upperLimit}){
    return(                    
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${currentState.prev === null && 'disabled'}`} onClick={() => {
                    getPrev()                                
                }}><a className="page-link">
                    Prev
                </a></li>      
                {generatePaginationPills(upperLimit, limit, offset).map((element) => {return element})}
                <li className={`page-item ${currentState.next === null && 'disabled'}`} onClick={() => {
                        getNext()
                    }}>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>        
    )
}

export default PokedexPagination