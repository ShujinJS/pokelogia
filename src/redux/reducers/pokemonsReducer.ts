import { AnyAction } from "redux";
// Actions
import  PokemonsActions from "../actions/pokemonsActions";
// Types
import { PokemonsState } from "../types/pokemons.types"

export const pokemonsState: PokemonsState = {
    pokemonList: {},
    selectedPokemon: ""
};

// Discriminating Union "action = {} as BlablaActions"
export const pokemonsReducer = (state = pokemonsState, action = {} as AnyAction ) : PokemonsState => {
    if(PokemonsActions.setPokemons.match(action)){
        return { ...state, pokemonList: action.payload }
    }

    if(PokemonsActions.setPokemonDetail.match(action)){
        return { ...state, selectedPokemon: action.payload.url }
    }

    return state;
}