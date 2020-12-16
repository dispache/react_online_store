const SET_AUTH_USER = 'setAuthUser';
const SET_NOT_AUTH_USER = 'setNotAuthUser';


let initialState = {
	login : null,
	password : null,
	isAuth : false
}



const authReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_AUTH_USER : 
			return {
				...action.payload,
				isAuth : true
			}
		case SET_NOT_AUTH_USER : 
			return {
				login : null,
				password : null,
				isAuth : null
			}
		default : 
			return state;
	}
}


export default authReducer;