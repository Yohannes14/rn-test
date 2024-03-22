import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userListSaga from './sagas/userListSaga'
import userListReducer from './reducers/userListReducer'

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
    reducer: userListReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// run the saga
sagaMiddleware.run(userListSaga)

export default store;