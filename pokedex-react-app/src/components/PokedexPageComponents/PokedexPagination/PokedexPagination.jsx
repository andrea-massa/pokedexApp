import { useState } from "react"
import PaginationPill from "./PaginationPill/PaginationPill"
import "./PokedexPagination.css"



function PokedexPagination({currentState, getPrev, getNext, offset, limit, customQuery, upperLimit}){
    let [numPills, setNumPills] = useState(2)
    

    function generatePaginationPills(){
        let currentOffset = offset
        let paginationPills = []
        for (let i = offset - limit * numPills; i <= offset + limit * numPills; i += limit){
            if(i >= 0 && i < upperLimit - limit){
                paginationPills.push(
                    <PaginationPill 
                        key={i}
                        start={i} 
                        end={i + limit} 
                        getPokemon={customQuery}
                        isCurrent={(currentOffset >= i) && (currentOffset < (i + limit)) ? true : false}/>
                )         
            }
        }
        return paginationPills
    }


    return(                    
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${currentState.prev === null && 'disabled'}`} onClick={() => {
                    getPrev()                                
                }}><a className="page-link">
                    Prev
                </a></li>      
                {generatePaginationPills().map((element) => {return element})}
                <li className={`page-item ${(currentState.next === null || offset + limit >= upperLimit) && 'disabled'}`} onClick={() => {
                        getNext(offset)
                    }}>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>        
    )
}

export default PokedexPagination