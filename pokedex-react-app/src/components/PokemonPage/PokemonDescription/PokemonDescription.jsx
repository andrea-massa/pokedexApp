import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading";
import "./PokemonDescription.css"
import PokemonGenus from "./PokemonGenus/PokemonGenus";
import PokemonTextEntry from "./PokemonTextEntry/PokemonTextEntry";

function PokemonDescription(props){
    const [speciesData, setSpeciesData] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
        .then((response) => {
          response.json()
            .then((jsonData) => {
              setSpeciesData(jsonData)
              setIsDataLoading(false)
            })
        })
        .catch((error) => {
          console.log(error)
          alert('There was an error')
        })    
    }, [props.id])


    return(      
        <>
            {!isDataLoading 
            ? 
            <div className="col col-md-11 pokemon-description">
              <PokemonGenus
                value={speciesData.genera[7].genus}/>
              <PokemonTextEntry 
                value={speciesData.flavor_text_entries[0].flavor_text}/>
            </div>
            : 
              <Loading/>
            }
        </>            
    )
}

export default PokemonDescription