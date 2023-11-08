import { useState } from "react"



function SearchBar(props){

    // State
    const [isBarExpanded, setIsBarExpanded] = useState(false)    
    const [currentSearchBarValue, setCurrentSearchBarValue] = useState('')
    console.log(currentSearchBarValue)


    // JSX
    return(
        <div className="search-ui">

            {/* Search Bar Expanded State */}
            {isBarExpanded ?
            <div className="search-bar expanded">
                <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Pokemon Name or Number Ex: Ditto" 
                    aria-label=".form-control-lg example"
                    value={currentSearchBarValue}
                    onChange={(e) => {setCurrentSearchBarValue(e.target.value)}}/> 
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={(e) => {
                        props.onSubmit(currentSearchBarValue)
                        console.log('hitting')
                        setCurrentSearchBarValue('')
                    }}
                    >                    
                    Search
                </button>                
                <a onClick={()=> {setIsBarExpanded(false)}}>Close</a>
            </div>

            :
            
            // Search Bar Not Expanded State
            <div className="search-bar">
                <div 
                    className="search-icon" 
                    onClick={() => {setIsBarExpanded(true)}}>
                    Search
                </div>
            </div>
            }            

        </div>
    )
}



export default SearchBar