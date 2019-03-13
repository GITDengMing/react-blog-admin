import { FETCH_STARTED, FETCH_FAILURE, FETCH_SUCCESS } from './actionTypes';
import {passAuth, setAuthUser} from '../../redux/auth/actions'
import { message } from 'antd';
import { setItem } from '../../utils/localStorage';
import {login as fecthLogin,getUser as fecthMe} from '../../apis';

//同步action
export const loginStarted = () => ({
    type : FETCH_STARTED,
});

export const loginSuccessed = () => ({
    type : FETCH_SUCCESS,
});

export const loginFailure = (error) => ({
    type : FETCH_FAILURE,
    error
});

//异步action
export const login = (username, password, history) => {
    return (dispatch) => {
        dispatch(loginStarted());
        fecthLogin(username, password).then(function(response){
            dispatch(loginSuccessed());
            dispatch(passAuth(response.data));
            //存储token信息到本地
            setItem('token', response.data.access_token);
            setItem('token_type', response.data.token_type);
            setItem('token_expires_in', response.data.expires_in);
            // history.push('/');
            // message.success('登录成功！');
            //获取个人信息
            fecthMe().then((result)=>{
                    dispatch(setAuthUser(result.data));
                    setItem('auth_user',JSON.stringify(result.data));
                    history.push('/');
                    message.success('登录成功！');
                }).catch((error)=>{
                    if(error.response.status === 401){
                        this.props.history.push('/login');
                    }
                });
        }).catch(function(error){
            if (error.response) {
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                //console.log(error.response.data);
                //console.log(error.response.status);
                //console.log(error.response.headers);
                message.error(error.response.data.message,);
                dispatch(loginFailure(error.response));
            } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error', error.message);
                message.error(error.message);
                dispatch(loginFailure(error.message));
            }
        });
    }
};