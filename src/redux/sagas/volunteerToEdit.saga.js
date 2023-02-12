import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


//Profile rootSaga
function* editVolunteerProfileSaga() {
    yield takeEvery('FETCH_VOLUNTEER_TO_EDIT', fetchVolunteerToEdit);
    yield takeEvery('UPDATE_VOLUNTEER_PROFILE', updateVolunteerProfile)
}   




// Profile Edit Saga function
function* fetchVolunteerToEdit(action) {
    const response = yield axios({
        method: 'GET',
        url: '/profile'
    })
    yield put({
        type: 'SET_VOLUNTEER_TO_EDIT', 
        payload: response.data
    })
}


//
function* updateVolunteerProfile(action) {
    const updatedVolunteer = action.payload
    yield axios({
        method: 'PUT',
        url: '/profile',
        data: updatedVolunteer
    })
}


export default editVolunteerProfileSaga;