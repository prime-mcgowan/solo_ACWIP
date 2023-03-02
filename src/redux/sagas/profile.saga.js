import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* profileSaga() {
    yield takeEvery('SAGA/CREATE_NEW_VOLUNTEER', createVolunteer);
}



function* createVolunteer(action) {
    try {
        const newVolunteer = action.payload;

        const response = yield axios({
            method: 'POST',
            url: '/profile', 
            data: newVolunteer
        });
    } catch (error) {
        console.log('newVolunteer POST request failed', error);
    }
}

export default  profileSaga;