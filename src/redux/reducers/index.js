import { combineReducers } from 'redux';

import smartphonesReducer from './smartphonesReducer';
import cartReducer from './cartReducer';


let rootReducer = combineReducers({
	smartphonesPage : smartphonesReducer,
	cartPage : cartReducer
})


export default rootReducer;
