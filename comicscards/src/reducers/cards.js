import { REQUEST_DATA, SUCCESS_DATA } from '../const'

const initialState = {
    arr: {},
    isFetchCards: false,
}

export function pagesReducers(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isFetchCards: true,
            }
        case SUCCESS_DATA:
            return {
                ...state,
                arr: action.payload,
                isFetchCards: false,
            }
        default:
            return state
    }
}
