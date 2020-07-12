import { combineReducers } from 'redux';
import groupReducer from './groupReducer';
import authReducer from './authReducer';

export default combineReducers({
    group: groupReducer,
    auth: authReducer
});