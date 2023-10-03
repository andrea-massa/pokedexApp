import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading";
import "./PokemonDescription.css"
import PokemonGenus from "./PokemonGenus/PokemonGenus";
import PokemonTextEntry from "./PokemonTextEntry/PokemonTextEntry";

function PokemonDescription(props){
    const [speciesData, setSpeciesData] = useState({});
    const [descriptionData, setDescriptionData] = useState(null)
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        setIsDataLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
        .then((response) => {
          response.json()
            .then((jsonData) => {
              let pokemonGenus = ''
              let pokemonDescription = ''
              for (let g of jsonData.genera){
                if(g.language.name === 'en'){
                  pokemonGenus = g.genus
                }
              }
              for(let d of jsonData.flavor_text_entries){
                if(d.language.name === 'en'){
                  pokemonDescription = d.flavor_text
                }
              }
              setDescriptionData({
                genus: pokemonGenus, 
                flavor_text: pokemonDescription     
              })
              props.evolutionChainCallback(jsonData.evolution_chain.url)
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
                value={descriptionData.genus}/>
              <PokemonTextEntry 
                value={descriptionData.flavor_text}/>
            </div>
            : 
              <Loading/>
            }
        </>            
    )
}

export default PokemonDescription