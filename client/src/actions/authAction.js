import axios from 'axios';
import { USER_LOADING, USER_LOADED, LOGIN_FAIL } from './types';

export const getUser = () => dispatch => {
    dispatch(setUserLoading());
    axios
        .get('/api/auth/status')
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data.user
        }))
}

export const logUserIn = () => {
    axios
        .get('/api/auth')
}

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
}