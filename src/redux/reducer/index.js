const initialState = {
    prospects: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PROSPECTS':
            return {
                ...state,
                prospects: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer;