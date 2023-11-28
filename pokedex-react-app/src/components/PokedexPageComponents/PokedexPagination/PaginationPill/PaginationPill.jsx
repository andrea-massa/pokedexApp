function PaginationPill({start, end, isCurrent, getPokemon}){
    return(
        <li className="page-item current"><a className="page-link" onClick={() => {getPokemon(start, (end - start))}}>
            <p>{start} - {end}</p>
            <p>{isCurrent && "Current"}</p>
        </a></li>
    )
}

export default PaginationPill