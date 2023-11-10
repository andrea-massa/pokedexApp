import { useState } from "react"
import { IoSearchCircle, IoSearchOutline } from "react-icons/io5"

import "./SearchBar.css"



function SearchBar(props){

    // State
    const [isBarExpanded, setIsBarExpanded] = useState(false)    
    const [currentSearchBarValue, setCurrentSearchBarValue] = useState('')


    // JSX
    return(
        <div className="container-fluid search-bar-container">

            {/* Search Bar Expanded State */}
            {isBarExpanded ?
            <div className="col-12 col-lg-6 search-bar expanded">
                <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Pokemon Name or Number Ex: Ditto" 
                    aria-label=".form-control-lg example"
                    value={currentSearchBarValue}
                    onChange={(e) => {setCurrentSearchBarValue(e.target.value)}}/> 
                <button 
                    className="btn btn-primary search-button"
                    onClick={(e) => {
                        props.onSubmit(currentSearchBarValue.toLowerCase())
                        setCurrentSearchBarValue('')
                        setIsBarExpanded(false)
                    }}>
                    <IoSearchOutline
                        className="search-icon"
                    />
                </button>                                                      
            </div>

            :
            
            // Search Bar Collapsed State
            <div className="me-lg-5 border search-bar collapsed">
                <IoSearchOutline 
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