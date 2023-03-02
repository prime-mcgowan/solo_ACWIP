
//Looked at: movie-sagas index.js
//fetchPenpalIdReducer
const detail = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENPAL_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default detail;