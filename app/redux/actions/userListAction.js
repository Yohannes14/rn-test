import * as type from "./types";

export const fetchUserListRequest = () => ({
    type: type.FETCH_USERLIST_REQUEST,
});

export const fetchUserListSuccess = (data) => ({
    type: type.FETCH_USERLIST_SUCCESS,
    payload: data,
});

export const fetchUserListFailure = (error) => ({
    type: type.FETCH_USERLIST_FAILURE,
    payload: error,
});