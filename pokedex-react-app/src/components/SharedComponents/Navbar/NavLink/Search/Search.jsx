import { useEffect, useState } from "react";

import SearchBar from "./SearchBar/SearchBar"

import "./Search.css"



export default function Search(){
    // Array containing all the Pokemon
    let [allPokemon, setAllPokemon] = useState([]);
    // Current Search Query State
    let [searchQuery, setSearchQuery] = useState('');

    // Async function that calls the API 
    async function getAllPokemonData(){
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1018');
        let jsonData = await response.json()
        return jsonData
    }

    // Function that is passed as a prop to handle the search bar change
    function handleSearchBarChange(value){
        setSearchQuery(value);        
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
            <SearchBar
                onChange={handleSearchBarChange}/>
            <p>{searchQuery}</p>
        </div>
    )
}