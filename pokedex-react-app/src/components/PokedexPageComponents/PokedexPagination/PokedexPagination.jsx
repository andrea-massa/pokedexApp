function PokedexPagination({currentState, getPrev, getNext, offset, limit, customQuery, upperLimit}){
    return(
        <>
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${currentState.prev === null && 'disabled'}`} onClick={() => {
                            getPrev()                                
                        }}><a className="page-link">
                            Prev
                        </a></li>                                          
                        <li className="page-item current"><a className="page-link">
                            {offset} - {offset + limit}
                        </a></li>
                        <li className="page-item"><a className="page-link">
                            {offset + limit} - {(offset + limit) + limit}
                        </a></li>
                        {/* {currentState.first < 1000 &&
                            <li className="page-item" onClick={() => {getNext()}}>
                                <a className="page-link">{`${currentState.first + offset} - ${currentState.last + offset}`}
                            </a></li>                            
                        } */}
                        <li className={`page-item ${currentState.next === null && 'disabled'}`} onClick={() => {
                                getNext()
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