import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    rootState: pokemonsReducer
})

export default rootReducer;