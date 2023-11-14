import { useState, useEffect, useRef } from "react"
import { IoDuplicateOutline, IoSearchCircle, IoSearchOutline } from "react-icons/io5"

import "./SearchBar.css"



function SearchBar(props){
    
    // State
    const [isBarExpanded, setIsBarExpanded] = useState(false)    
    const [currentSearchBarValue, setCurrentSearchBarValue] = useState('')
    

    //Effect, whenever the user focuses outside the search box or scrolls, the search box shall collapse
    useEffect(() => {             
        const searchBarInput = document.getElementById('search-bar-input')    

        function handleFocusOut(){                      
            setTimeout(() => {setIsBarExpanded(false)}, 100)
        }
        function handleScroll(){
            setTimeout(() => {
                if(scrollY > 100){
                    setIsBarExpanded(false)
                }
            }, 1000)
        }

        if(isBarExpanded && searchBarInput){
            searchBarInput.focus()            
            searchBarInput.addEventListener('focusout', handleFocusOut)
            document.addEventListener('scroll', handleScroll)
        }        
        
        return () =>{
            if(searchBarInput){
                searchBarInput.removeEventListener('focusout', handleFocusOut)
                document.removeEventListener('scroll', handleScroll)
            }            
        }

    }, [isBarExpanded])


    function handleSearch(){
        if(currentSearchBarValue === 'giratina'){
            props.onSubmit('giratina-altered')
        }
        else{
            props.onSubmit(currentSearchBarValue.toLowerCase())   
        }                        
        setCurrentSearchBarValue('')
        setIsBarExpanded(false)
    }

    
    // JSX
    return(
        <div className="container-fluid search-bar-container" id="search-bar">

            {/* Search Bar Expanded State */}
            {isBarExpanded ?
            <div 
                className="col-12 col-lg-6 search-bar expanded"
                >                
                <input 
                    className="form-control form-control-lg" 
                    id="search-bar-input"
                    type="text" 
                    placeholder="Pokemon Name or Number Ex: Ditto" 
                    aria-label=".form-control-lg example"
                    value={currentSearchBarValue}
                    onChange={(e) => {setCurrentSearchBarValue(e.target.value)}}
                    onKeyDown={(e) => {if(e.key === 'Enter') handleSearch()}}
                    /> 
                <button 
                    className="btn btn-primary search-button"
                    onClick={(e) => {handleSearch()}}>
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