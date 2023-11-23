function PokedexPagination({currentState, upperLimit, offset, getPrev, getNext}){
    return(
        <>
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${currentState.first < offset && 'disabled'}`} onClick={() => {
                            if(currentState.first >= 1 + offset){
                                getPrev()                
                            }                                        
                        }}><a className="page-link">
                            Prev
                        </a></li>                            
                        {currentState.first >= offset &&                        
                            <li className="page-item" onClick={() => {getPrev()}}><a className="page-link">
                                {`${currentState.first - offset} - ${currentState.last - offset}`}
                            </a></li>
                        }
                        <li className="page-item disabled"><a className="page-link">
                            {`${currentState.first} - ${currentState.last}`}
                        </a></li>
                        {currentState.first < 1000 &&
                            <li className="page-item" onClick={() => {getNext()}}>
                                <a className="page-link">{`${currentState.first + offset} - ${currentState.last + offset}`}
                            </a></li>                            
                        }
                        <li className={`page-item ${currentState.first > 1000 && 'disabled'}`} onClick={() => {
                                if(currentState.first + offset <= 1008){
                                    getNext()
                                }
                            }}>
                            <a className="page-link">Next</a>
                        </li>
                </ul>
                </nav>
            </div>
        </>
    )
}

export default PokedexPagination