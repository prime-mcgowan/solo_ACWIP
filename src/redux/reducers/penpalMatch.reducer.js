const penpalMatch = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCH':
            return action.payload
        default:
            return state
    }
}


export default penpalMatch;