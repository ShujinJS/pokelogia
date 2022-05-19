// Redux Saga
import { useSelector } from "react-redux";
// TS Types
import { RootState } from "../../redux/types/pokemons.types"


export default function PokemonDetailComponent(){

    const myPokemon = useSelector((state: RootState) => state.rootState.selectedPokemon)
    console.log(myPokemon)

    return (
        <div>
            <div className="pokemon-header">
                <span>{myPokemon.name}</span>
                <span>{myPokemon.name}</span>
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