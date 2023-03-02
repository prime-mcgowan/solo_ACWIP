import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* letterSaga() {
    yield takeEvery('SAGA/CREATE_NEW_LETTER', createNewLetter);
}

function* createNewLetter(action) {
    try {
        const newLetter = action.payload;

        const response = yield axios({
            method: 'POST', 
            url: '/letter', 
            data: newLetter
    });
} catch (error) {
    console.log('newLetter POST request failed', error)
}
}

export default letterSaga;