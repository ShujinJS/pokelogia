import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { watcherSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watcherSaga)

export default appStore;