import { REQUEST_DATA, SUCCESS_DATA } from '../const'

export function getData(choice, count, offset) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_DATA,
        })

        async function getCardPerson(choice, count, offset) {
            const axios = require('axios')
            await axios
                .get(
                    'https://comicvine.gamespot.com/api/' +
                        choice +
                        '/?api_key=ba11ebe1e047e96f96ba3660f8a73c38421e2c1e&limit=' +
                        count +
                        '&offset=' +
                        offset * count +
                        '&format=json'
                )
                .then((response) => {
                    dispatch({
                        type: SUCCESS_DATA,
                        payload: response.data,
                    })
                })
                .catch(function (error) {
                    dispatch({
                        type: SUCCESS_DATA,
                        payload: {
                            error: error,
                        },
                    })
                })
        }
        getCardPerson(choice, count, offset)
    }
}
