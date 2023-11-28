function PaginationPill({start, end, isCurrent, getPokemon}){
    return(
        <li className={`page-item current ${isCurrent && 'active'}`}><a className="page-link" onClick={() => {getPokemon(start, (end - start))}}>
            <p>{start} - {end}</p>
            <p></p>
        </a></li>
    )
}

export default PaginationPill