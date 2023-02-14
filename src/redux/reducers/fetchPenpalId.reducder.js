
//Looked at: movie-sagas index.js
//fetchPenpalIdReducer
const penpalId = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENPAL_ID':
            return action.payload;
        default:
            return state;
    }
}

export default penpalId;