function PaginationPill({start, end}){
    return(
        <li className="page-item current"><a className="page-link">
            <p>{start} - {end}</p>
        </a></li>
    )
}

export default PaginationPill