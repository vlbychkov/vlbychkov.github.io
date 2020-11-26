import { charReducers } from './character';
import {pagesReducers} from './pages'
const { combineReducers } = require("redux");

export const allReducers = combineReducers({
    api: pagesReducers,
    characterCard: charReducers
})