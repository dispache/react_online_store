const SET_SMARTPHONES = 'setSmartphones';
const SET_SORT_BY = 'setSortBy';
const SET_SIDEBAR_BRANDS = 'setSidebarBrands';
const SET_ACTIVE_PAGE = 'setActivePage';
const SET_SELECTED_CATEGORIES = 'setSelectedCategories';
const SET_TOTAL_PAGES = 'setTotalPages';
const SET_CHECKED_SIDEBAR_ITEMS = 'setCheckedSidebarItems';

let initialState = {
	smartphones : [],
	isLoaded : false,
	activePage : 1,
	sortBy : { name : "популярности", type : 'popular', order : 'desc' },
	sortItems : [
		{ name : "популярности", type : 'popular', order : 'desc' },
		{ name : "цене", type : 'price', order : 'desc' },
		{ name : "алфавиту", type : 'brand', order : 'asc' }
	],
	sidebarItems : [
		{ title : 'Apple', id : 0, isChecked : false },
		{ title : 'Samsung', id : 1, isChecked : false },
		{ title : 'Xiaomi', id : 2, isChecked : false }
],
	selectedCategories : [],
	totalPages : null
}

const smartphonesReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_SMARTPHONES : 
			return {
				...state,
				smartphones : action.payload,
				isLoaded : true
			}
		case SET_SIDEBAR_BRANDS : 
			return {
				...state,
				sidebarBrands : action.payload,
			}
		case SET_SORT_BY : 
			return {
				...state,
				sortBy : action.payload
			}
		case SET_TOTAL_PAGES : 
			return {
				...state,
				totalPages : Math.ceil(action.payload / 4)
			}
		case SET_SELECTED_CATEGORIES : 
			return {
				...state,
				selectedCategories : action.payload
			}
		case SET_ACTIVE_PAGE : 
			return {
				...state,
				activePage : action.page
			}
		case SET_CHECKED_SIDEBAR_ITEMS : 
			let newSidebarItems = state.sidebarItems.map( el => {
				if ( el.id === action.payload.id ) {
					el.isChecked = !el.isChecked
				} return el
			})
			return {
				...state,
				sidebarItems : newSidebarItems
			}
		default :
			return state;

	}
}


export default smartphonesReducer;