import { useEffect, useState } from "react"


export default function Search(){
    // Array containing all the Pokemon
    let [allPokemon, setAllPokemon] = useState([])

    // Async function that calls the API 
    async function getAllPokemonData(){
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1018');
        let jsonData = await response.json()
        return jsonData
    }

    // Use Effect calls the PokeApi and gets all the Pokemon Data and 
    // stores it into the allPokemon variable
    useEffect(() => {
        getAllPokemonData()
        .then((data) => {
            setAllPokemon(data.results)
        })
        .catch(error => {
            console.log('Error getting Pokemon Data from the API')
        })
    }, [])




    return(        
        <div className="search">            
            
        </div>
    )
}