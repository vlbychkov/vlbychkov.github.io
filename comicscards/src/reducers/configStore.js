import { charReducers } from './character'
import { pagesReducers } from './cards'
const { combineReducers } = require('redux')

export const allReducers = combineReducers({
    api: pagesReducers,
    characterCard: charReducers,
})
