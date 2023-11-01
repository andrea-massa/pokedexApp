// IMPORTS
// Hooks
import { useEffect, useState } from "react"

// Components
import Loading from "../../Loading/Loading";
import PokemonEvolutionNode from "./PokemonEvolutionNode/PokemonEvolutionNode";
import AppError from "../../AppError/AppError";

// Styles
import "./PokemonEvolutionChain.css"



// COMPONENT
function PokemonEvolutionChain(props){
    // STATES
    const [evolutionData, setEvolutionData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [appError, setAppError] = useState(null)


    // USE-EFFECT (API CALL) -> Gets the evolution data associated with the pokemon
    // based on the endpoint prop passed to us from the parent component
    useEffect(() => {        
        fetch(props.endpoint, {timeout: 6000})
        // If the response is not okay, throw an error
        .then((response) => {
            if(!response.ok){
                throw new Error('Error getting evolution data for this pokemon')
            }
            response.json()
            // If the response is okay, parse the JSON
            .then((jsonData) => {
                // If the JSON is not valid (does not have the right data), throw an error
                if(!jsonData.hasOwnProperty('chain')){
                    throw new Error('Evolution data not availble for this pokemon')
                }                
                // Set the evolution data to the first stage of the evolution (every pokemon should have this)
                setEvolutionData({
                    firstStage: [jsonData.chain]
                })
                // If the pokemon has an evolution, set the evolution data to have a second stage too
                if(jsonData.chain.evolves_to.length > 0){
                    setEvolutionData((prevValue) => {
                        return ({
                            firstStage: prevValue.firstStage, 
                            secondStage: jsonData.chain.evolves_to
                        })
                    })
                    // If there is a second evolution, set the evolution data to have that as well
                    if(jsonData.chain.evolves_to[0].evolves_to.length > 0){
                        setEvolutionData((prevValue) =>{
                            // If the second evolution has different forms, make sure they all get added
                            if(jsonData.chain.evolves_to.length > 1){                                
                                let forms = []
                                for(let i = 0; i < jsonData.chain.evolves_to.length; i++){
                                    forms.push(jsonData.chain.evolves_to[i].evolves_to[0])
                                }                                
                                return({
                                    firstStage: prevValue.firstStage, 
                                    secondStage: prevValue.secondStage, 
                                    thirdStage: forms
                                })
                            }
                            return ({
                                firstStage: prevValue.firstStage, 
                                secondStage: prevValue.secondStage, 
                                thirdStage: jsonData.chain.evolves_to[0].evolves_to
                            })
                        })
                    }
                }
                setIsLoading(false)
            })
        })

        // Cleaup function
        .catch((e) => {
            setIsLoading(false)
            setEvolutionData(null)
            setAppError({
                errorMessage: e.message
            })
        })
        
        return(() =>{
            setIsLoading(true)
            setAppError(null)
            setEvolutionData(null)
        })
    }, [props.endpoint])


    // JSX
    return (        
        <div className="pokemon-evolution-chain">
            <h3 className="text-center text-lg-start">Evolution Chain</h3>
            {/* Display if there are errors in the App */}
            {appError !== null && <AppError errorTxt={appError.errorMessage}/>}

            {/* If the data is stil loading, display loading animation */}
            {isLoading && <Loading/>}

            {/* If the data is ready, render a list displaying each node */}
            {appError === null && isLoading === false &&
            <ul className="d-flex flex-column flex-lg-row justify-content-lg-start evolution-nodes">
                {Object.keys(evolutionData).map((key, index) => {
                    return (
                        <PokemonEvolutionNode
                            key={index}
                            nodeOrder={index+1}
                            nodeData={evolutionData[key]}
                            />
                    )
                })}
            </ul>}
        </div>
    )
}

export default PokemonEvolutionChain