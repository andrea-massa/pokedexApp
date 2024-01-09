import {useState, useEffect, useContext} from "react"
import { NavbarExpandedContext } from "../../App/App"

import Loading from "../../Loading/Loading"
import AppError from "../../AppError/AppError"
import PokedexList from "../../PokedexPageComponents/PokedexList/PokedexList"
import PokedexPagination from "../../PokedexPageComponents/PokedexPagination/PokedexPagination"

import "./PokedexPage.css"



function PokedexPage(){    
    const isNavbarExpanded = useContext(NavbarExpandedContext);
    const [endpoints, setEndpoints] = useState({prev: null, current: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40', next: null})
    const [paginationOptions, setPaginationOptions] = useState({offset: 0, limit: 40})
    const [allPokemonData, setAllPokemonData] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [appError, setAppError] = useState(null)


    async function getAllPokemonData(){        
        let response = await fetch(endpoints.current);
        let jsonData = await response.json()
        return jsonData
    }

    function nextEndpoint(currentFirst){
        if((endpoints.next !== null) && ((currentFirst + paginationOptions.limit) < 1008) ){
            setPaginationOptions((prevState) => {
                return {...paginationOptions, offset: prevState.offset + prevState.limit}
            })
            setEndpoints({current: endpoints.next})
        }
    }

    function prevEndpoint(){
        if(endpoints.prev !== null){
            setPaginationOptions((prevState) => {
                return {...paginationOptions, offset: prevState.offset - prevState.limit}
            })
            setEndpoints({current: endpoints.prev})
        }
    }

    function changeEndpoint(offset, limit){     
        setPaginationOptions({offset: offset, limit: limit})
        setEndpoints({current: `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`})
    }

    
    useEffect(() => {
        getAllPokemonData()
        .then((data) => {
            setEndpoints((prevState) => {
                return {...endpoints, prev: data.previous, next: data.next}
            })
            setAllPokemonData(data.results)
            setIsDataLoading(false)
        })
        .catch(error => {setAppError("Error Fetching Pokedex Data")})

        return () => {
            setAllPokemonData(null)
            setIsDataLoading(true)
            setAppError(null)
        }
    }, [endpoints.current])


    return(
        <div id="pokedex-page" className='container'>

            {!isDataLoading !== null && allPokemonData !== null?
                appError == null ?            
                    <PokedexList
                        allPokemonData={allPokemonData}
                        isNavbarExpanded={isNavbarExpanded}/>
                    :
                    <AppError errorTxt={appError}/>
                    :
                <Loading/>                
            }

            <div className="container-lg" id="pagination-container">
                <PokedexPagination
                    getNext = {nextEndpoint}                    
                    getPrev = {prevEndpoint}
                    offset = {paginationOptions.offset}
                    limit = {paginationOptions.limit}
                    customQuery={changeEndpoint}
                    currentState = {endpoints}                
                    upperLimit = {1008}
                />
            </div>
        </div>        
    )
}

export default PokedexPage