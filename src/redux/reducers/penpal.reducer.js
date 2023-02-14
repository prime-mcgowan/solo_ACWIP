//penpals reducer
const penpal = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENPALS':
            return action.payload
        default:
            return state
    }
}


export default penpal;