import { combineReducers }  from 'redux';
import login from '../views/login/reducer';
import auth from './auth/reducer'

export default combineReducers({auth,login});