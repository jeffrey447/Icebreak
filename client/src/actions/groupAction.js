import axios from 'axios';
import { GET_GROUPS, GET_GROUP, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING} from './types';

export const getGroups = () => dispatch => {
    dispatch(SetGroupLoading());
    axios
        .get('/api/groups')
        .then(res =>
            dispatch({
                type: GET_GROUPS,
                payload: res.data.groups
            })
        )
}

export const getGroup = handler => dispatch => {
    dispatch(SetGroupLoading());
    axios
        .get(`api/groups/${handler}`)
        .then(res => 
            dispatch({
                type: GET_GROUP,
                payload: res.data.groups
            }))
}

export const addGroup = group => dispatch => {
    axios
        .post('/api/groups', group)
        .then(res => 
            dispatch({
                type: ADD_GROUP,
                payload: res.data.groups
            })
        )
}

export const deleteGroup = id => {
    return {
        type: DELETE_GROUP,
        payload: id
    };
}

export const SetGroupLoading = () => {
    return {
        type: GROUPS_LOADING
    };
}