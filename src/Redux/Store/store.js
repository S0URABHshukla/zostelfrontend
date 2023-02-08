
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as locationReducer } from "../Action/reducer.js";
import logger from "redux-logger";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ locationReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
