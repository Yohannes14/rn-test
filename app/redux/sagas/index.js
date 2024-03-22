///root saga
import { all } from 'redux-saga/effects';
import userListSaga from './userListSaga';

function* rootSaga() {
    yield all([
        userListSaga()
    ]);
}

export default rootSaga;