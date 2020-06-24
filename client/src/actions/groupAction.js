import axios from 'axios';
import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING} from './types';

export const getGroups = () => dispatch => {
    dispatch(SetGroupLoading());
    axios
        .get('/api/groups')
        .then(res =>
            dispatch({
                type: GET_GROUPS,
                payload: res.data
            })
        )
}

export const addGroup = (group) => dispatch => {
    axios
        .post('/api/groups', group)
        .then(res => 
            dispatch({
                type: ADD_GROUP,
                payload: res.data
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