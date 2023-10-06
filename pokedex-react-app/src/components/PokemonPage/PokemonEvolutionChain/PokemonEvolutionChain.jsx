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
                        setEvolutionData({firstStage: [jsonData.chain]})
                        if(jsonData.chain.evolves_to.length > 0){
                            setEvolutionData((prevValue) => {
                                return ({firstStage: prevValue.firstStage, secondStage: jsonData.chain.evolves_to})
                            })
                            if(jsonData.chain.evolves_to[0].evolves_to.length > 0){
                                setEvolutionData((prevValue) =>{
                                    return ({firstStage: prevValue.firstStage, secondStage: prevValue.secondStage, thirdStage: jsonData.chain.evolves_to[0].evolves_to})
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
        <div className="pokemon-evolution-chain">
            {isLoading
                ?
                <Loading/>
                :                
                <ul className="d-flex flex-column flex-lg-row justify-content-lg-start evolution-nodes">
                    {Object.keys(evolutionData).map((key, index) => {
                        return (
                            <PokemonEvolutionNode
                                key={index}
                                nodeData={evolutionData[key]}/>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default PokemonEvolutionChain