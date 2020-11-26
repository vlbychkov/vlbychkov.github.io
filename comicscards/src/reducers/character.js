
import { REQUEST_DATA_PERSON, SUCCESS_DATA_PERSON } from "../const"


const initialState = {
    person: [],
    isFetchPerson: false,
}

export function charReducers(state=initialState, action) {
    switch (action.type) {
        case REQUEST_DATA_PERSON:
            return {
                ...state, isFetchPerson:true,
            }
        case SUCCESS_DATA_PERSON:
            return {
                ...state,
                person: action.person,
                isFetchPerson: false,
            }
        default:
            return state
    }
}