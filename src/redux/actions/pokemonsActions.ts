import { ROOT_ACTION_TYPES } from './../types/root.action.types';
//? ROOT_ACTION_TYPE üzerinden ulaşamadım.
import { POKEMONS_ACTION_TYPES } from "../types/pokemons.types";
// Pokemon Types
import { GetResult, PokemonDetail, PickedPokemon } from "../types/pokemons.types"
import { createAction, Action, ActionWithPayload } from "../../utils/reducer.utils";

// const setPokemons = (pokemons) => ({
//     type: rootConstant.pokemons.ACTION_TYPE_SET_POKEMONS,
//     payload: pokemons
// })

// const getPokemons = () => ({
//     type: ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMONS
// })

// Function Overloading
export type SetPokemons = ActionWithPayload<POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMONS, GetResult>

const setPokemons = (pokemons: GetResult): SetPokemons => createAction(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMONS, pokemons);

export type GetPokemons = Action<POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMONS>

const getPokemons = (): GetPokemons => createAction(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMONS);

export type SetPokemonDetail = ActionWithPayload<POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMON_DETAIL, PokemonDetail>

const setPokemonDetail = (pickedPokemon: PokemonDetail): SetPokemonDetail => createAction(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_SET_POKEMON_DETAIL, pickedPokemon);

export type GetPokemonDetail = ActionWithPayload<POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMON_DETAIL, PokemonDetail>

const getPokemonDetail = ( param: PokemonDetail ) => {
    createAction(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMON_DETAIL, param);
}

export type ClearPokemonDetail = Action<POKEMONS_ACTION_TYPES.ACTION_TYPE_CLEAR_POKEMON_DETAIL>

const clearPokemonDetail = (): ClearPokemonDetail => 
    createAction(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_CLEAR_POKEMON_DETAIL);

// Union
export type PokemonsActions = SetPokemons | GetPokemons |SetPokemonDetail | GetPokemonDetail | ClearPokemonDetail;

const pokemonsActions = {
    setPokemons,
    getPokemons,
    setPokemonDetail,
    getPokemonDetail,
    clearPokemonDetail
}

export default pokemonsActions;