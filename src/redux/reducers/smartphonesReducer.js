const SET_SMARTPHONES = 'setSmartphones';
const SET_SORT_BY = 'setSortBy';

let initialState = {
	smartphones : [],
	sortBy : 'popular',
}

const smartphonesReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_SMARTPHONES : 
			return {
				...state,
				smartphones : action.payload
			};
		case SET_SORT_BY : 
			return state;
		default :
			return state;

	}
}


export default smartphonesReducer;