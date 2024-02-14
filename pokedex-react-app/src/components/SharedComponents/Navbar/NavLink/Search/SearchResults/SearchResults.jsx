import PokemonResult from "./PokemonResult/PokemonResult"

import "./SearchResults.css"


export default function SearchResults({query, matches, handleResultClick}){ 
    function handlePokemonClick(){
        handleResultClick('');
    }

    return(
        <div className="search-results">
            {query !== '' && 
                <p className="query-section">
                    Results for <span className="query">'{query}'</span>
                </p>
            }
            {matches.length > 0 &&
                <ul className="matches-list"> 
                    {matches.map((match, index) => 
                        <PokemonResult 
                            key={index} 
                            name={match}
                            onClick={handlePokemonClick}/>)}
                </ul>
            }
        </div>
    )
}