const penpalMatch = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENPALS':
            return action.payload
        default:
            return state
    }
}


export default penpalMatch;