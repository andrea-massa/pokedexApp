function PokedexPagination({currentState, upperLimit, getPrev, getNext}){
    return(
        <>
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${currentState.first < 20 && 'disabled'}`} onClick={() => {getPrev()}}><a className="page-link">
                            Prev
                        </a></li>                            
                        {currentState.first >= 20 &&                        
                            <li className="page-item" onClick={() => {getPrev()}}><a className="page-link">
                                {`${currentState.first - 20} - ${currentState.last - 20}`}
                            </a></li>
                        }
                        <li className="page-item disabled"><a className="page-link">
                            {`${currentState.first} - ${currentState.last}`}
                        </a></li>
                        {currentState.first < 1000 &&
                            <li className="page-item" onClick={() => {getNext()}}>
                                <a className="page-link">{`${currentState.first + 20} - ${currentState.last + 20}`}
                            </a></li>                            
                        }
                        <li className={`page-item ${currentState.first > 1000 && 'disabled'}`} onClick={() => {getPrev()}}>
                            <a className="page-link" onClick={() => {getNext()}}>Next</a>
                        </li>
                </ul>
                </nav>
            </div>
        </>
    )
}

export default PokedexPagination