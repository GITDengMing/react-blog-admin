import {PASS_AUTH, DELETE_AUTH, SET_AUTH_USER} from './actionTypes';
import {getItem} from '../../utils/localStorage';

const initialState = {
    access_token:getItem('token'),
    token_type:getItem('token_type'),
    expires_in:getItem('token_expires_in'),
    auth_user:JSON.parse(getItem('auth_user'))
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PASS_AUTH:
            return {...state, ...action.result};
        case DELETE_AUTH:
            return {access_token:null, token_type:null, expires_in:null, auth_user:null}
        case SET_AUTH_USER:
            return {...state, auth_user: action.user}
        default:
            return state;
    }
}

export default reducer;