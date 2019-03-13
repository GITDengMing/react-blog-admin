import {PASS_AUTH, DELETE_AUTH, SET_AUTH_USER} from './actionTypes';

export const passAuth = (result) => ({
    type : PASS_AUTH,
    result
});

export const deleteAuth = () => ({
    type : DELETE_AUTH
})

export const setAuthUser = (user) =>({
    type : SET_AUTH_USER,
    user
})