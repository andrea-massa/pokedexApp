import {useState, useEffect} from "react"


import Loading from "../../Loading/Loading"
import AppError from "../../AppError/AppError"
import PokedexList from "../../PokedexPageComponents/PokedexList/PokedexList"


import "./PokedexPage.css"
import App from "../../App/App"


function Pokedex(){    
    const [allPokemonData, setAllPokemonData] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [appError, setAppError] = useState(null)
    const [isVisible, setIsVisible] = useState(true)

    async function getAllPokemonData(){        
        try{
            let response = await fetch ('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1013')
            let jsonData = await response.json()
            return jsonData
        }
        catch(error){
            console.log(error)
            return error
        }
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
    }, [])


    return(
        <div id="pokedex-page" className={`${isVisible ? 'show' : 'hide'} container border`}>

            {!isDataLoading !== null && allPokemonData !== null?
                appError == null ?            
                    <PokedexList
                        allPokemonData={allPokemonData.results}/>
                    :
                    <AppError errorTxt={appError}/>
                    :
                <Loading/>                
            }
        </div>
    )
}

export default Pokedex