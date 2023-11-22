function PokedexPagination(props){
    return(
        <>
            <button onClick={() => {props.prev()}}>Prev</button>
            <button onClick={() => {props.next()}}>Next</button>
        </>
    )
}

export default PokedexPagination