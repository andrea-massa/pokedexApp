import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading";
import "./PokemonDescription.css"
import PokemonGenus from "./PokemonGenus/PokemonGenus";

function PokemonDescription(props){
    const [speciesData, setSpeciesData] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
        .then((response) => {
          response.json()
            .then((jsonData) => {
              setSpeciesData(jsonData)
              console.log(jsonData);
              setIsDataLoading(false)
            })
        })
        .catch((error) => {
          console.log(error)
          alert('There was an error')
        })    
    }, [props.id])


    return(      
      
        <div className="pokemon-description">
            {!isDataLoading 
            ? 
              <PokemonGenus
                value={speciesData.genera[7].genus}
              />              
            : 
              <Loading/>
            }
        </div>            
    )
}

export default PokemonDescription