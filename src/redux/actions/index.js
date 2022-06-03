import axios from 'axios';

export function getProspects() {
    return async function (dispatch) {
        const json = await axios.get('https://api.opendota.com/api/proPlayers')
        return dispatch({
            type: 'GET_PROSPECTS',
            payload: json.data
        })
    }
}