import * as axios from 'axios';

export const setSmartphonesActionCreator = (payload) => {
	return {
		type : 'setSmartphones',
		payload
	}
};

export const setSortByActionCreator = (payload) => {
	return {
		type : 'setSortBy',
		payload
	}
};

export const fetchSmartphones = (sortBy,activePage) => (dispatch) => {
	axios.get(`http://localhost:3001/smartphones?_sort=${sortBy}&_order=desc&_limit=4&_page=${activePage}`)
	.then( ( { data } ) => {
		dispatch(setSmartphonesActionCreator(data));
	})
}