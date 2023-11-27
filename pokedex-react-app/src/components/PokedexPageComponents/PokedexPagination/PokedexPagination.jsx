import PaginationPill from "./PaginationPill/PaginationPill"
import "./PokedexPagination.css"

function generatePaginationPills(upperLimit, limit, offset){
    let paginationPills = []
    for (offset; offset <= upperLimit; offset += limit){
        paginationPills.push(<PaginationPill start={offset} end={offset + limit}/>)         
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