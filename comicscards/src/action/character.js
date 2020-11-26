import { REQUEST_DATA_PERSON, SUCCESS_DATA_PERSON, } from '../const';


export function getCharacter(id) {
    return dispatch => {
        dispatch({
          type: REQUEST_DATA_PERSON,
        })

        const axios = require('axios');
        axios.get("https://comicvine.gamespot.com/api/characters/?api_key=ba11ebe1e047e96f96ba3660f8a73c38421e2c1e&filter=id:"+id+"&format=json")
        .then(response => {
            console.log(response.data.results)
            dispatch({
                type: SUCCESS_DATA_PERSON,
                person: response.data.results
            })
        })
    }
}