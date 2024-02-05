import "./PaginationPill.css"

function PaginationPill({start, end, isCurrent, getPokemon}){
    return(
        <li className={`page-item pagination-pill ${isCurrent && 'active'}`}>
            <a className="page-link" onClick={() => {!isCurrent && getPokemon(start, (end - start))}}>
                <p>{start} - {end}</p>            
            </a>
        </li>
    )
}

export default PaginationPill