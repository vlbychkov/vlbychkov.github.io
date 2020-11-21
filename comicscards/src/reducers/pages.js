import { REQUEST_DATA, SUCCESS_DATA } from "../action/cards"

const initialState = {
    arr: [],
    isFetch: false,
    choice: ""
}

export function pagesReducers(state=initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state, isFetch:true, choice: "load"
            }
        case SUCCESS_DATA:
            return {
                ...state,
                arr: action.payload,
                isFetch: false,
                choice: "",
            }
        default:
            return state
    }
}