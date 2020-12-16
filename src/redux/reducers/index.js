import { combineReducers } from 'redux';

import smartphonesReducer from './smartphonesReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';


let rootReducer = combineReducers({
	smartphonesPage : smartphonesReducer,
	cartPage : cartReducer,
	auth : authReducer
})


export default rootReducer;
