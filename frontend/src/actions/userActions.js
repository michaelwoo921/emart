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
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL
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


export const getUserDetails  = (id) => async (dispatch, getState)=> {
    dispatch({
        type: USER_DETAILS_REQUEST
    });
    const {userInfo} = getState().userLogin;
    try{
        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`
            }
        }
        const res = await axios.get(`/api/users/${id}`, config);
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
        localStorage.setItem('userInfo', JSON.stringify(res.data));
    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}

export const logout =() =>  async dispatch => {
    dispatch({type: USER_LOGOUT });
    localStorage.removeItem('userInfo');
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
        localStorage.setItem('userInfo', JSON.stringify(res.data));
    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}

export const updateUserProfile = (user) => async (dispatch, getState)=> {
    dispatch({
        type: USER_UPDATE_PROFILE_REQUEST
    });
    const {userInfo} = getState().userLogin;
    try{
        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.put(`/api/users/profile`,user, config);
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: res.data
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res.data
        });

        localStorage.setItem('userInfo', JSON.stringify(res.data));

    }catch(error){
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data ? error.response.data.message : error.message
        });
    }
}