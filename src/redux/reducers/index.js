import { combineReducers } from 'redux';

import smartphonesReducer from './smartphonesReducer';


let rootReducer = combineReducers({
	smartphonesPage : smartphonesReducer
})


export default rootReducer;
