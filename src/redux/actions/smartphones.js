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

export const setLoadedActionCreator = (payload) => {
	return {
		type : 'setLoaded',
		payload
	}
};

export const setSidebarBrandsActionCreator = (payload) => {
	return {
		type : 'setSidebarBrands',
		payload
	}
}

export const setActivePageActionCreator = (payload) => {
	return {
		type : 'setActivePage',
		page : payload
	}
}

export const fetchSidebarBrands = () => (dispatch) => {
	axios.get('http://localhost:3001/brands')
	.then ( ({data}) => {
		dispatch(setSidebarBrandsActionCreator(data))
	})
}

export const setSelectedCategoriesActionCreator = (payload) => {
	return {
		type : 'setSelectedCategories',
		payload
	}
}

export const setTotalPagesActionCreator = (payload) => {
	return {
		type : 'setTotalPages',
		payload
	}
}

export const setCheckedSidebarItems = (payload) => {
	return {
		type : 'setCheckedSidebarItems',
		payload
	}
}

export const fetchSmartphones = (sortBy,activePage,selectedCategories) => (dispatch) => {
	const auxiliaryFetch = (options) => {
		axios.get(`http://localhost:3001/smartphones?${options}&_sort=${sortBy.type}
			&_order=${sortBy.order}&_limit=4&_page=${activePage}`)
		.then( ( response ) => {
		dispatch(setTotalPagesActionCreator(response.headers['x-total-count']));
		dispatch(setSmartphonesActionCreator(response.data));
		if ( response.data.length === 0 ) dispatch(setActivePageActionCreator(1))
		})	
	}
	if ( selectedCategories.length === 0 || selectedCategories.length === 3 ) {
		auxiliaryFetch('')
	}
	else if ( selectedCategories.length === 1 ) {
		auxiliaryFetch(`brandId=${selectedCategories[0].id}`)
	}
	else if ( selectedCategories.length === 2 ) {
		auxiliaryFetch(`brandId=${selectedCategories[0].id}&brandId=${selectedCategories[1].id}`)
	}
}