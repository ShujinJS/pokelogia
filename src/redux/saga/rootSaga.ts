import { all, fork } from "redux-saga/effects";
import { ROOT_ACTION_TYPES } from "../types/root.action.types";
import { handleGetPokemons, handleGetPokemonDetail } from "./pokemonsSaga";

import * as pokemonsSaga from "./pokemonsSaga";

export function* watcherSaga(){
    yield all([fork(pokemonsSaga.watchPokemons),fork(pokemonsSaga.watchPokemonDetail)])
}