import axios from './config';
import {setItem} from '../utils/localStorage';

export const login = (username, password) =>{
  return  axios.post('authorizations',{
            username,
            password
          });
};

export const refreshToken = () => {
  axios.put('authorizations/current').then(function(response){
      setItem('token', response.data.access_token);
      setItem('token_type', response.data.token_type);
      setItem('token_expires_in', response.data.expires_in);
  }).catch(function(error){
      console.log(error);
  });;
}

export const deleteToken = () =>{
  axios.put('authorizations/current').then(function(response){
    setItem('token', null);
    setItem('token_expires_in', null);
  }).catch(function(error){
      console.log(error);
  });;
}