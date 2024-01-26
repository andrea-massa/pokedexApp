import "./SearchBar.css"

export default function SearchBar({onChange}){

    function handleChange(e){
        onChange(e.target.value.toLowerCase())
    }

    return(
        <div className="search-bar">
            <input type="text" placeholder="Ex. Magikarp" onChange={(e) => {handleChange(e)}}/>
        </div>
    )
}