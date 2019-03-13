import { FETCH_STARTED, FETCH_FAILURE, FETCH_SUCCESS } from './actionTypes';
import * as STATUS from './status';

export default (state = {status : null, errorMessage: null}, action) => {
    switch(action.type) {
        case FETCH_STARTED : {
            return {...state, status : STATUS.LOADING};
        }
        case FETCH_SUCCESS : {
            return {...state, status: STATUS.SUCCESS,}
        }
        case FETCH_FAILURE : {
            return {status: STATUS.FAILURE,  errorMessage: action.error.data.message, errorCode:action.error.status}
        }
        default : {
            return state;
        }
    }
}