import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* portalSagas() {
    yield takeEvery('SAGA/CREATE_NEW_TO_DO', createToDo);
}

function* createToDo(action) {
    try {
        const toDo = action.payload;
        console.log('in createToDo', toDo);

        const response = yield axios({
            method: 'POST',
            url: '/portal',
            data: toDo
        });
    } catch(error) {
        console.log('toDo SAGAS/POST request fail', error);
    }
}



export default portalSagas;