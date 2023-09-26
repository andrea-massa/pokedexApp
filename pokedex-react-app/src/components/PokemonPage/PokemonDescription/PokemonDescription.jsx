import { useEffect, useState } from "react"
import "./PokemonDescription.css"

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
            {/* <PokemonGenus value={"Blaze Pokemon"}/> */}
        </div>
    )
}

export default PokemonDescription