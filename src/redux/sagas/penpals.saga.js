import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* penpalsSaga() {
    yield takeEvery('FETCH_PENPALS', fetchPenpals);
    yield takeEvery('FETCH_PENPAL_DETAILS', fetchPenpalDetails);
    yield takeEvery('SAGA/CREATE_NEW_PENPAL_MATCH', createNewMatch);
    yield takeEvery('FETCH_PENPAL_MATCH', fetchPenpalMatch)
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


function* fetchPenpalMatch() {
    try {
        const response = yield axios ({
            method: 'GET',
            url: '/penpals'
        })
        yield put({
            type: 'SET_MATCH',
            payload: response.data
        })
    } catch (error) {
        console.log('fetchPenpalMatch SAGA function failed', error)
    }
 }

//Looked at bikes fetchBikeDetails index.js
function* fetchPenpalDetails(action) {
    const penpalId = action.payload;
    try {
        const penpalDetailsRes = yield axios({
            method: 'GET',
            url:`/penpals/${penpalId}`,
        })
        yield put({
            type: 'SET_PENPAL_DETAILS',
            payload:penpalDetailsRes.data
        })
    }catch(error) {
        console.log('fetchPenpaDetails SAGA function failed', error)
    }
}

function* createNewMatch(action) {
    try {
        const newMatch = action.payload;

        const response = yield axios({
            method: 'POST',
            url: '/penpals',
            data: {user_id:newMatch.user_id,
                   penpal_id:newMatch.penpal_id,
                    name:newMatch.name,
                    bio_response:newMatch.bio_response }
        });
    } catch (error) {
        console.log('newMatch SAGA POST request failed', error);
    }
}

export default penpalsSaga;