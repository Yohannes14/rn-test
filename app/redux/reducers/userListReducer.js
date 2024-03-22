
import * as type from "../actions/types"

const initialState = {
    usrInfo: [],
    loading: false,
    error: null,
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_USERLIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case type.FETCH_USERLIST_SUCCESS:
            return {
                ...state,
                usrInfo: action.payload,
                loading: false,
                error: null,
            };
        case type.FETCH_USERLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userListReducer;