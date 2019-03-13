import axios from './config';
//import {setItem} from '../utils/localStorage';

export const getUser = ()=>{
    return  axios.get('user');
}