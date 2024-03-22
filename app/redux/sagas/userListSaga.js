import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchUserListSuccess, fetchUserListFailure } from '../actions/userListAction';
import { fetchUserAPI } from '../../services/api';

function* fetchUserList() {
    try {
        const response = yield fetchUserAPI();
        const data = response?.data;
        yield put(fetchUserListSuccess(data));
    } catch (error) {
        yield put(fetchUserListFailure(error.message));
    }
}

function* userListSaga() {
    yield takeLatest(types.FETCH_USERLIST_REQUEST, fetchUserList);
}

export default userListSaga;