function PaginationPill({start, end, isCurrent}){
    return(
        <li className="page-item current"><a className="page-link">
            <p>{start} - {end}</p>
            <p>{isCurrent && "Current"}</p>
        </a></li>
    )
}

export default PaginationPill