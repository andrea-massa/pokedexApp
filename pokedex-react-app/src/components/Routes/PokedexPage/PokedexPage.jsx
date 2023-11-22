import {useState, useEffect} from "react"


import Loading from "../../Loading/Loading"
import AppError from "../../AppError/AppError"
import PokedexList from "../../PokedexPageComponents/PokedexList/PokedexList"
import PokedexPagination from "../../PokedexPageComponents/PokedexPagination/PokedexPagination"

import "./PokedexPage.css"



function Pokedex(){    
    const [delimeters, setDelimeters] = useState({start: 900, offset: 20})    
    const [allPokemonData, setAllPokemonData] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [appError, setAppError] = useState(null)


    async function getAllPokemonData(){        
        let endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${delimeters.start}&limit=${delimeters.offset}`
        console.log('Calling endpoiint ' + endpoint)
        let response = await fetch(endpoint);
        let jsonData = await response.json()
        return jsonData
    }

    function getPrevPokedexPage(){        
        setDelimeters((prevDelimet) => {
            return {...prevDelimet, start: prevDelimet.start - prevDelimet.offset}
        })
    }

    function getNextPokededexPage(){
        setDelimeters((prevDelimet) =>{                  
            return {...prevDelimet, start: prevDelimet.start + prevDelimet.offset}
        })
    }

    useEffect(() => {
        getAllPokemonData()
        .then((data) => {
            setAllPokemonData(data)
            setIsDataLoading(false)
        })
        .catch(error => {setAppError("Error Fetching Pokedex Data")})

        return () => {
            setAllPokemonData(null)
            setIsDataLoading(true)
            setAppError(null)
        }
    }, [delimeters])


    return(
        <div id="pokedex-page" className='container border'>

            {!isDataLoading !== null && allPokemonData !== null?
                appError == null ?            
                    <PokedexList
                        allPokemonData={allPokemonData.results}/>
                    :
                    <AppError errorTxt={appError}/>
                    :
                <Loading/>                
            }

            <PokedexPagination
                getNext = {getNextPokededexPage}                    
                getPrev = {getPrevPokedexPage}
                currentState = {{
                    first: delimeters.start + 1, 
                    last: delimeters.start + delimeters.offset
                }}
                upperLimit = {1008}
            />
        </div>        
    )
}

export default Pokedex