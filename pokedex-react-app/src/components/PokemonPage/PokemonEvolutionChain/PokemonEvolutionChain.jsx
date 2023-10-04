import { useEffect, useState } from "react"
import "./PokemonEvolutionChain.css"
import Loading from "../../Loading/Loading";
import PokemonEvolutionNode from "./PokemonEvolutionNode/PokemonEvolutionNode";

function PokemonEvolutionChain(props){
    const [evolutionData, setEvolutionData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        fetch(props.endpoint)
            .then((response) => {
                response.json()
                    .then((jsonData) => {
                        setIsLoading(false)
                        setEvolutionData({firstStage:[jsonData.chain.evolves_to]}, {secondStage:[jsonData.chain.evolves_to.evolves_to]});
                        if(jsonData.chain.evolves_to.length > 0){
                            setEvolutionData({firstStage: jsonData.chain.evolves_to})
                            if(jsonData.chain.evolves_to[0].evolves_to.length > 0){
                                setEvolutionData((previousValue) =>{
                                    return ({firstStage: previousValue.firstStage, secondStage: jsonData.chain.evolves_to[0].evolves_to})
                                })
                            }
                        }
                    })
            })
            .catch((error) => {
                setIsLoading(false)
                alert(error)
            })
        
        return(() =>{
            setIsLoading(true)
            setEvolutionData(null)
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
                    {/* <PokemonEvolutionNode
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
                    } */}
                </ul>
            }
        </div>
    )
}

export default PokemonEvolutionChain