export const REQUEST_DATA = 'REQUEST_DATA'
export const SUCCESS_DATA = 'SUCCESS_DATA'

export function getData(choice, count) {
    return dispatch => {
        dispatch({
          type: REQUEST_DATA,
        })

        const axios = require('axios');
        axios.get("https://comicvine.gamespot.com/api/"+choice+"/?api_key=ba11ebe1e047e96f96ba3660f8a73c38421e2c1e&limit="+count+"&format=json")
        .then(response => {
            dispatch({
                type: SUCCESS_DATA,
                payload: response.data.results
            })
        })
    }
}