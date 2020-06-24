import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING} from '../actions/types';

const initalState = {
    groups: [],
    loading: false
}

export default (state = initalState, action) => {
    switch(action.type) {
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload,
                loading: false
            };
        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter(group => group.id !== action.payload)
            };
        case ADD_GROUP:
            return {
                ...state,
                groups: [action.payload, ...state.groups]
            };
        case GROUPS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}