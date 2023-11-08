import { useState } from "react"
import { IoSearchCircle } from "react-icons/io5"

import "./SearchBar.css"



function SearchBar(props){

    // State
    const [isBarExpanded, setIsBarExpanded] = useState(false)    
    const [currentSearchBarValue, setCurrentSearchBarValue] = useState('')
    console.log(currentSearchBarValue)


    // JSX
    return(
        <div className="container-fluid search-bar-container">

            {/* Search Bar Expanded State */}
            {isBarExpanded ?
            <div className="col-12 col-lg-8 search-bar expanded">
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
            
            // Search Bar Collpsed State
            <div className="col-12 me-lg-5 search-bar collapsed">
                <IoSearchCircle 
                    className="search-icon" 
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setIsBarExpanded(true)
                    }}/>                    
            </div>
            }            

        </div>
    )
}



export default SearchBar