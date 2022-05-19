import { takeLatest, call, put } from "typed-redux-saga";
import { ROOT_ACTION_TYPES } from "../types/root.action.types";
import PokemonsActions from "../actions/pokemonsActions"
// Actions
import { AnyAction } from "redux";
// Utils
import { getData } from "../../utils/data.utils";
import { GetResult, Pokemon, PokemonDetail } from "../../redux/types/pokemons.types";

const fetchPokemons = async () => {
    try{
        const pokemonsData = await getData<GetResult>("https://pokeapi.co/api/v2/pokemon?limit=9999");
        return pokemonsData;
    } catch (err) {
        throw err;
    }
};

const fetchPokemonDetail = async (selectedPokemon: string) => {
    try {
        //const selectedPokemonData = await getData<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        const selectedPokemonData = await getData<PokemonDetail>(selectedPokemon);
        return selectedPokemonData;
    } catch (err) {
        throw err;
    }
}

// Generator Function, typed-redux-saga ile "yield" yerine "yield*" kullan
export function* handleGetPokemons () {
    const pokemonList = yield* call(fetchPokemons);
    yield* put(PokemonsActions.setPokemons(pokemonList))
}

export function* handleGetPokemonDetail (action = {} as AnyAction) {
    const myPokemon = yield* call(fetchPokemonDetail,action.payload);
    yield* put(PokemonsActions.setPokemonDetail(myPokemon))
}

export function* watchPokemons(){
    yield* takeLatest(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMONS, handleGetPokemons)
}

export function* watchPokemonDetail(){
    yield* takeLatest(ROOT_ACTION_TYPES.POKEMONS_ACTION_TYPES.ACTION_TYPE_GET_POKEMON_DETAIL, handleGetPokemonDetail)
}