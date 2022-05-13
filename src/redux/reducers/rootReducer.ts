import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    pokemons: pokemonsReducer
})

export default rootReducer;