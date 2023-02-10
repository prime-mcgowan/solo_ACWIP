


//Profile Edit Reducer ***reducer has to be put in the store***
const volunteerToEdit = (state = {}, action) => {
    if (action.type === 'SET_VOLUNTEER_TO_EDIT') {
        return action.payload; //a volunteer object
    } else if (action.type === 'EDIT_FIRST_NAME') {
        return {...state, first_name: action.payload}
    } else if (action.type === 'EDIT_LAST_NAME') {
    return {...state, last_name: action.payload}
}
    return state;
}



export default volunteerToEdit;

















