import { useEffect, useState } from "react"
import "./PokemonEvolutionChain.css"
import Loading from "../../Loading/Loading";
import PokemonEvolutionNode from "./PokemonEvolutionNode/PokemonEvolutionNode";

function PokemonEvolutionChain(props){
    const [evolutionData, setEvolutionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasSecondEvolution, setHasSecondEvolution] = useState(false);
    const [hasThirdEvolution, setHasThirdEvolution] = useState(false);

    useEffect(() => {        
        setIsLoading(true)
        setEvolutionData(null)
        setHasSecondEvolution(false)
        setHasThirdEvolution(false)
        fetch(props.endpoint)
            .then((response) => {
                response.json()
                    .then((jsonData) => {
                        setIsLoading(false)
                        setEvolutionData(jsonData);
                        setHasSecondEvolution(jsonData.chain.evolves_to.length > 0 ? true : false)
                        if(jsonData.chain.evolves_to.length > 0 && jsonData.chain.evolves_to[0].evolves_to.length > 0){
                            setHasThirdEvolution(true)
                        }
                    })
            })
            .catch((error) => {
                setIsLoading(false)
                alert(error)
            })
    }, [props.endpoint])

    return (
        <div className="evolution-chain">
            <h3>Evolution Chain</h3>
            {isLoading
                ?
                <Loading/>
                :
                <ul className="evolution-nodes">
                    <PokemonEvolutionNode
                        hasNext={hasSecondEvolution}                        
                        pokemonData={evolutionData.chain.species}/>
                    {hasSecondEvolution && 
                        <PokemonEvolutionNode
                            hasNext={hasThirdEvolution}
                            pokemonData={evolutionData.chain.evolves_to[0].species}
                        />                    
                    }
                    {hasThirdEvolution && 
                        <PokemonEvolutionNode
                            hasNext={false}
                            pokemonData={evolutionData.chain.evolves_to[0].evolves_to[0].species}
                        />
                    }
                </ul>
            }
        </div>
    )
}

export default PokemonEvolutionChain