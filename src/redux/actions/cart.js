export const addProdToCartActionCreator = (payload) => {
	return {
		type : 'addProdToCart',
		payload,
	}
} 

export const deleteProdInCart = (payload) => {
	return {
		type : 'deleteProd',
		payload
	}
}

export const deleteAllProdInCart = () => {
	return {
		type : 'deleteAllProd'
	}
}