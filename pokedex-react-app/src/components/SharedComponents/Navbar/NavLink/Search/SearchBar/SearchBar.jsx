export default function SearchBar({onChange}){

    function handleChange(e){
        onChange(e.target.value)
    }

    return(
        <div className="search-bar">
            <input type="text" onChange={(e) => {handleChange(e)}}/>
        </div>
    )
}