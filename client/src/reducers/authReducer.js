import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT_SUCESS,
    LOGOUT_FAIL
} from '../actions/types';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }
}