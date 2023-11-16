import {useState, useEffect} from "react"
import {Link} from "react-router-dom"



function Pokedex(){    
    const [allPokemonData, setAllPokemonData] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true)

    async function getAllPokemonData(){        
        let response = await fetch ('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1013')
        let jsonData = await response.json()
        return jsonData
    }

    useEffect(() => {
        getAllPokemonData()
        .then((data) => {
            setAllPokemonData(data)
            setIsDataLoading(false)
        })

        return () => {
            setAllPokemonData(null)
            setIsDataLoading(true)
        }
    }, [])


    return(
        <div className="pokedex">
            <div className="pokemon">               
                <Link to={"/pokemon/145"}>Click</Link>                
            </div>
            <div>                
                {!isDataLoading && 
                    allPokemonData.results.map((pokemon, index) => {
                        return(<div>
                            <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>{pokemon.name}</Link>    
                        </div>)
                        
                    })
                }
            </div>
        </div>
    )
}

export default Pokedex