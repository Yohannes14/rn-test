import { combineReducers } from 'redux'
import userListReducer from "./userListReducer";

const rootReducer = combineReducers({
    usrInfo: userListReducer,
});

export default rootReducer;
