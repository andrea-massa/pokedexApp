import { useState, useEffect} from "react"
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import PaginationPill from "./PaginationPill/PaginationPill"
import "./PokedexPagination.css"



function PokedexPagination({currentState, getPrev, getNext, offset, limit, customQuery, upperLimit}){
    let [pillsVisible, setPillVisible] = useState(true)
    let [numPills, setNumPills] = useState(window.innerWidth < 992 ? 1 : 2)


    // Use Effect that delays the component being shown
    // useEffect(() => {
    //     const timeout = setTimeout(() => { 
    //         setPillVisible(true); 
    //     }, 1000); 
         
    //     return () => {
    //         clearTimeout(timeout)
    //         setPillVisible(false)
    //     }; 
    // }, [])


    function handlePillsClick(){
        setPillVisible(false)
        setTimeout(() => setPillVisible(true), 200)
    }

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
                        isCurrent={(currentOffset >= i) && (currentOffset < (i + limit)) ? true : false}
                        handlePillsClick={handlePillsClick}/>
                )         
            }
        }
        return paginationPills
    }


    return(                    
        <nav aria-label="pagination" id="pokedex-pagination">
            {pillsVisible && 
                <ul className="pagination">
                    <li className={`page-item ${currentState.prev === null && 'disabled'}`} onClick={() => {
                        handlePillsClick()
                        getPrev()                                
                    }}>
                        <a className="pagination-arrow page-link"><RiArrowDropLeftLine/></a>
                    </li>      
                    {generatePaginationPills().map((element) => {return element})}
                    <li className={`page-item ${(currentState.next === null || offset + limit >= upperLimit) && 'disabled'}`} onClick={() => {
                        handlePillsClick()
                        getNext(offset)
                    }}>
                        <a className="pagination-arrow page-link"><RiArrowDropRightLine/></a>
                    </li>
                </ul>
            }
            
        </nav>        
    )
}

export default PokedexPagination