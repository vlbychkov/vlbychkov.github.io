import logger from "redux-logger";
import thunk from "redux-thunk";
import { allReducers } from "../reducers/configStore";

const { createStore, applyMiddleware } = require("redux");



export const store = createStore(allReducers, applyMiddleware(thunk, logger));