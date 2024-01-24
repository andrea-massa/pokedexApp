import { useEffect, useState } from "react";

import SearchBar from "./SearchBar/SearchBar"
import SearchResults from "./SearchResults/SearchResults";

import "./Search.css"



export default function Search(){
    // Array containing all the Pokemon
    let [allPokemon, setAllPokemon] = useState([]);
    // Current Search Query State
    let [searchQuery, setSearchQuery] = useState('');
    // Current Matches
    let [matches, setMatches] = useState([]);

    // Async function that calls the API 
    async function getAllPokemonData(){
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1018');
        let jsonData = await response.json()
        return jsonData
    }

    // Formats pokemon data from API data to just array
    // with name of every single pokemon
    function formatPokemonData(data){
        return data.map((el) => el.name)
    }

    // Use Effect calls the PokeApi and gets all the Pokemon Data and 
    // stores it into the allPokemon variable
    useEffect(() => {
        getAllPokemonData()
        .then((data) => {
            setAllPokemon(formatPokemonData(data.results))
        })
        .catch(error => {
            console.log('Error getting Pokemon Data from the API')
        })
    }, [])

    // Function that is passed as a prop to handle the search bar change
    function handleSearchBarChange(value){
        setSearchQuery(value);
        let matchesArr = []
        if(value !== ''){
            matchesArr = allPokemon.filter((el) => {
                return el.includes(value)            
            });                
        }
        setMatches(matchesArr)
    }



    return(        
        <div className="search">            
            <SearchBar
                onChange={handleSearchBarChange}/>
            <SearchResults            
                query={searchQuery}
                matches={matches.slice(0, 5)}/>
        </div>
    )
}