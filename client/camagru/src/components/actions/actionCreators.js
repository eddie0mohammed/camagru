import axios from 'axios';
import * as actionTypes from './actionTypes';


export const signUp = (formProps, callback) => {
    return async (dispatch) => {
        try{

            const res = await axios.post('http://localhost:3090/signup', formProps)
            
            // console.log(res.data); receives token back

            dispatch({
                type: actionTypes.SIGN_UP,
                payload: res.data.token
            })
            localStorage.setItem('token', res.data.token);
            callback();
        }catch(err){
            dispatch({
                type: actionTypes.AUTH_ERROR,
                payload: 'Email in use'
            })
        }
    }

}

export const logout = () => {
    localStorage.removeItem('token');

    return {
        type: actionTypes.LOGOUT,
        payload: ''
    }
}

export const signIn = (formProps, callback) => {
    return async (dispatch) => {
        try{

            const res = await axios.post('http://localhost:3090/signin', formProps)
            
            // console.log(res.data); receives token back

            dispatch({
                type: actionTypes.SIGN_IN,
                payload: res.data.token
            })
            localStorage.setItem('token', res.data.token);
            callback();
        }catch(err){
            dispatch({
                type: actionTypes.AUTH_ERROR,
                payload: 'Invalid login credentials'
            })
        }
    }

}