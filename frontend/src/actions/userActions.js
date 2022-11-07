import axios from 'axios';
import {
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../constants/userConstants'

export const getUsers  = () => async dispatch => {
    dispatch({
        type: USER_LIST_REQUEST
    });
    try{
        const res = await axios.get('/api/users');
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}


export const getUserDetails  = (id) => async dispatch => {
    dispatch({
        type: USER_DETAILS_REQUEST
    });
    try{
        const res = await axios.get(`/api/users/${id}`);
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}

export const login = (email, password) => async dispatch => {
    dispatch({
        type: USER_LOGIN_REQUEST
    });
    try{
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/users/login', {email, password}, config);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}

export const register = (name, email, password) => async dispatch => {
    dispatch({
        type: USER_REGISTER_REQUEST
    });
    try{
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/users', {name,email, password}, config);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}