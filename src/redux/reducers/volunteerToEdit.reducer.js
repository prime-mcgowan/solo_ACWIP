


//Profile Edit Reducer ***reducer has to be put in the store***
const volunteerToEdit = (state = {}, action) => {
    if (action.type === 'SET_VOLUNTEER_TO_EDIT') {
        return action.payload; //a volunteer object
    } else if (action.type === 'EDIT_FIRST_NAME') {
        return {...state, first_name: action.payload}
    } else if (action.type === 'EDIT_LAST_NAME') {
    return {...state, last_name: action.payload}
    } else if (action.type === 'EDIT_EMAIL') {
        return {...state, email: action.payload}
    } else if (action.type === 'EDIT_BIRTHDAY') {
    return {...state, birthday: action.payload}
    } else if (action.type === 'EDIT_ADDRESS') {
        return {...state, address: action.payload}
    } else if (action.type === 'EDIT_APT_SUITE_NUMBER') {
        return{...state, apt_suite_number: action.payload}
    } else if (action.type === 'EDIT_CITY') {
        return{...state, city: action.payload}
    } else if (action.type === 'EDIT_STATE') {
        return{...state, state: action.payload}
    } else if (action.type === 'ZIP_CODE') {
        return{...state, zip_code: action.payload}
    }
    return state;
}




export default volunteerToEdit;

















