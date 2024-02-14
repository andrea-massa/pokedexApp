import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import "./PokemonResult.css"


export default function PokemonResult({name, onClick}){    
    // State of Pokemon Containing the data of the current result
    // this will be updated once the API call is made
    const [pokemonData, setPokemonData] = useState(null)


    // Function that gets the pokemon data given the name,
    // results will be used to set image, name, url and id
    async function getPokemonData(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        return data;
    }


    // Formats the data received from the API in order
    // to then set the state
    function formatPokemonData(resultData){
        return{
            name: resultData.name,
            id: resultData.id,
            imageUrl: resultData.sprites.front_default,
            path: `/pokemon/${resultData.id}`            
        }
    }


    // Use Effect will call the API once the componet renders and will update
    // the state of the component
    useEffect(() => {        
        getPokemonData()
            .then((data) => {
                setPokemonData(formatPokemonData(data))                
            })
            .catch((error) => console.log('Error fetching Pokemon Data', error))
    }, [name])



    return(
        <li className="pokemon-result">
            {pokemonData !== null &&
                <Link className="pokemonData" 
                    to={pokemonData.path}
                    onClick={onClick}>                    
                    <span className="pokemonId">{pokemonData.id} </span>
                    <span className="pokemonName">{pokemonData.name}</span>       
                    <img className="pokemonImage" src={pokemonData.imageUrl} alt={pokemonData.name}/>                                        
                </Link>
            }
        </li>
    )
}