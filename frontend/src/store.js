import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer} from './reducers/userReducers';

const middleware =[thunk];

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userRegister: userRegisterReducer

});

const initialState={}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

