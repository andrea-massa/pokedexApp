// IMPORTS
import PokemonEvolutionForm from "../PokemonForm/PokemonEvolutionForm"


// COMPONENT
function PokemonFormCarousel(props){
    // JSX
    return(
        <div id={`pokemonFormCarouselIndicators${props.stage}`} className="carousel slide">            
            <div className="carousel-indicators">                            
                {props.formsData.map((form, index) => {
                    return(                                 
                        <button key={index} type="button" data-bs-target={`pokemonFormCarouselIndicators${props.stage}`} className={index === 0 ? "active" : "not-active"} data-bs-slide-to={index} aria-label={`Form ${index}`}></button>
                    )
                })}
            </div>
            <div className="carousel-inner">
                {props.formsData.map((form, index) => {
                    return(                                 
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : "not-active"}`}>
                            <PokemonEvolutionForm
                                evolutionData={form.evolution_details}
                                pokemonData={form.species} />
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#pokemonFormCarouselIndicators${props.stage}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#pokemonFormCarouselIndicators${props.stage}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export default PokemonFormCarousel