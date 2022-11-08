import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {
    userDetailsReducer, 
    userListReducer, 
    userLoginReducer, 
    userRegisterReducer,
    userUpdateProfileReducer
} from './reducers/userReducers';

const middleware =[thunk];

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer
});

const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo')) || null;

const initialState={
    userLogin: {userInfo: userInfoFromStorage},
    
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

