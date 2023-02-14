import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* penpalsSaga() {
    yield takeEvery('FETCH_PENPALS', fetchPenpals);
    yield takeEvery('FETCH_PENPAL_ID', fetchPenpalId)
}

function* fetchPenpals() {
    try {
        const response = yield axios({
            method: 'GET', 
            url:'/penpals'
        })
        yield put({
            type: 'SET_PENPALS',
            payload: response.data
        })
    } catch (error) {
        console.log('fetchPenpals SAGA function failed', error);
    }
}

//Looked at: movies-sagas index.js
//SAGA function to get a penpal id
function* fetchPenpalId(action) {
    try {
        const penpalId = yield axios({
            method: 'GET',
            url:`/penpals/${action.payload}`,
        })
    }catch(error) {
        console.log('fetchPenpalId SAGA function failed', error)
    }
}



export default penpalsSaga;