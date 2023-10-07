import { useEffect, useState } from "react"
import "./PokemonEvolutionChain.css"
import Loading from "../../Loading/Loading";
import PokemonEvolutionNode from "./PokemonEvolutionNode/PokemonEvolutionNode";
import AppError from "../../AppError/AppError";

function PokemonEvolutionChain(props){
    const [evolutionData, setEvolutionData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [appError, setAppError] = useState(null)

    useEffect(() => {        
        fetch(props.endpoint, {timeout: 6000})
        .then((response) => {
            if(!response.ok){
                throw new Error('Error getting evolution data for this pokemon')
            }
            response.json()
            .then((jsonData) => {
                if(!jsonData.hasOwnProperty('chain')){
                    throw new Error('Evolution data not availble for this pokemon')
                }
                setIsLoading(false)
                setEvolutionData({
                    firstStage: [jsonData.chain]
                })
                if(jsonData.chain.evolves_to.length > 0){
                    setEvolutionData((prevValue) => {
                        return ({
                            firstStage: prevValue.firstStage, 
                            secondStage: jsonData.chain.evolves_to
                        })
                    })
                    if(jsonData.chain.evolves_to[0].evolves_to.length > 0){
                        setEvolutionData((prevValue) =>{
                            return ({
                                firstStage: prevValue.firstStage, 
                                secondStage: prevValue.secondStage, 
                                thirdStage: jsonData.chain.evolves_to[0].evolves_to
                            })
                        })
                    }
                }
            })
        })
        .catch((e) => {
            setIsLoading(false)
            setEvolutionData(null)
            setAppError({
                errorMessage: e.message
            })
            alert(e)
        })
        
        return(() =>{
            setIsLoading(true)
            setAppError(null)
            setEvolutionData(null)
        })
    }, [props.endpoint])

    return (
        <div className="pokemon-evolution-chain">
            {appError !== null 
                && <AppError errorTxt={appError.errorMessage}/>}

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