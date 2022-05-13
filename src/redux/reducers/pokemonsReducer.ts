import { ROOT_ACTION_TYPES } from "../types/root.action.types";
// type narrowing, type predicates
// Actions
import { PokemonsActions } from "../actions/pokemonsActions";
// Types
import { GetResult, PokemonDetail } from "../types/pokemons.types"

export type PokemonsState = {
    readonly pokemonList: GetResult;
    readonly selectedPokemon: PokemonDetail
}

export const pokemonsState: PokemonsState = {
    pokemonList: {},
    selectedPokemon: {}
};

// Discreminating Union "action = {} as BlablaActions"
export function pokemonsReducer (state = pokemonsState, action = {}as PokemonsActions) {
    switch (action.type){
        case ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMONS:
            return { ...state, pokemonList: action.payload }
            break;
        case ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMON_DETAIL:
            return { ...state, selectedPokemon: action.payload }
            break
        default:
            return state;
    }
}