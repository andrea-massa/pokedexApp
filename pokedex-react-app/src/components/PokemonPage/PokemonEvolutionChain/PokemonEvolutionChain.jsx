import { useEffect, useState } from "react"
import "./PokemonEvolutionChain.css"
import Loading from "../../Loading/Loading";

function PokemonEvolutionChain(props){
    const [evolutionData, setEvolutionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        setIsLoading(true)
        fetch(props.endpoint)
            .then((response) => {
                response.json()
                    .then((jsonData) => {
                        setIsLoading(false)
                        setEvolutionData(jsonData);
                    })
            })
            .catch((error) => {
                setIsLoading(false)
                alert(error)
            })
    }, [props.endpoint])

    return (
        <div className="evolution-chain">
            {isLoading
                ?
                <Loading/>
                :
                <p>lol</p>
            }
        </div>
    )
}

export default PokemonEvolutionChain