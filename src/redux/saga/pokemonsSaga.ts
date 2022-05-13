import { call, put } from "@redux-saga/core/effects";
import rootActions from "../actions/rootAction";
import axios from "axios";
import { takeLatest } from "redux-saga/effects";
import { ROOT_ACTION_TYPES } from "../types/root.action.types";

// Utils
import { getData } from "../../utils/data.utils";
import { GetResult, Pokemon } from "../../types/pokemon-list-types/pokemon.list.type";

const fetchPokemons = async () => {
    try{
        const pokemonsData = await getData<GetResult>("https://pokeapi.co/api/v2/pokemon?limit=9999");
        return pokemonsData.results;
    } catch (err) {
        throw err;
    }
};

const fetchPokemonDetail = async (selectedPokemon) => {
    try {
        const selectedPokemonData = await getData<>(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}/`)
        return selectedPokemonData;
    } catch (err) {
        throw err;
    }
}

// Generator Function
export function* handleGetPokemons () {
    const pokemons = yield call(fetchPokemons);
    yield put(rootActions.pokemonsActions.setPokemons(pokemons))
}

export function* handleGetPokemonDetail (action) {
    const myPokemon = yield call(fetchPokemonDetail,action.payload.id);
    yield put(rootActions.pokemonsActions.setPokemonDetail(myPokemon))
}

export function* watchPokemons(){
    yield takeLatest(rootConstants.pokemons.ACTION_TYPE_GET_POKEMONS, handleGetPokemons)
}

export function* watchPokemonDetail(){
    yield takeLatest(rootConstants.pokemons.ACTION_TYPE_GET_POKEMON_DETAIL, handleGetPokemonDetail)
}