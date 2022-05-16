import { AnyAction } from "redux";
// Actions
import  PokemonsActions from "../actions/pokemonsActions";
// Types
import { PokemonsState } from "../types/pokemons.types"

export const pokemonsState: PokemonsState = {
    pokemonList: {},
    selectedPokemon: {}
};

// Discriminating Union "action = {} as BlablaActions"
export const pokemonsReducer = (state = pokemonsState, action = {} as AnyAction ) : PokemonsState => {
    if(PokemonsActions.setPokemons.match(action)){
        return { ...state, pokemonList: action.payload }
    }

    if(PokemonsActions.setPokemonDetail.match(action)){
        return { ...state, selectedPokemon: action.payload }
    }

    return state;

    // switch (action.type){
    //     case ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMONS:
    //         return { ...state, pokemonList: action.payload }
    //         break;
    //     case ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMON_DETAIL:
    //         return { ...state, selectedPokemon: action.payload }
    //         break
    //     default:
    //         return state;
    // }
}