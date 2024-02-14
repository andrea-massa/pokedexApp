import "./PaginationPill.css"

function PaginationPill({start, end, isCurrent, getPokemon, handlePillsClick}){
    return(
        <li className={`page-item pagination-pill ${isCurrent && 'active'}`}>
            <a className="page-link" onClick={() => {
                    !isCurrent && getPokemon(start, (end - start))
                    handlePillsClick()
                }}>
                <p>{start} - {end}</p>            
            </a>
        </li>
    )
}

export default PaginationPill