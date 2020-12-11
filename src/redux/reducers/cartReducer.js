const ADD_PROD_TO_CART = 'addProdToCart';
const DELETE_PROD = 'deleteProd';
const DELETE_ALL_PROD = 'deleteAllProd';

let initialState = {
	cartItems : [],
	totalPrice : 0,
};

const calcTotalPrice = (arr) => arr.reduce((prev,el) => prev + el.price,0)


const cartReducer = (state=initialState,action) => {
	
	// let newTotalPrice;

	switch(action.type)	{

		case ADD_PROD_TO_CART : 
			
			let newState = {
				...state,
				cartItems : [...state.cartItems, action.payload]
			}

		
		return {
			...newState,
			totalPrice : calcTotalPrice(newState.cartItems)
		}
		
		case DELETE_PROD : 
			
			let newCartItems = state.cartItems.filter( item => item.prodIndex !== action.payload.prodIndex )
			return {
				...state,
				cartItems : newCartItems,
				totalPrice : calcTotalPrice(newCartItems)
			}
		
		case DELETE_ALL_PROD : 
			
			return {
				...state,
				cartItems : [],
				totalPrice : 0
			}
		
		default : 
			return state;
	}
}



export default cartReducer;