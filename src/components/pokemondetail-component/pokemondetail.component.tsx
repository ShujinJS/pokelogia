// Redux Saga
import { useSelector } from "react-redux";
// TS Types
import { RootState } from "../../redux/types/pokemons.types"
// Styling
import "../../assets/css/components-css/pokemondetail-css/pokemondetail.style.css"

export default function PokemonDetailComponent(){

    const myPokemon = useSelector((state: RootState) => state.rootState.selectedPokemon)
    console.log(myPokemon)
    console.log(myPokemon.sprites)

    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-detail-header">
                <span>{myPokemon.name}</span>
                <div/>
            </div>
            <div>
                <span>Abilities</span>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}