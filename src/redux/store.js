
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer, applyMiddleware(logger))

export default store