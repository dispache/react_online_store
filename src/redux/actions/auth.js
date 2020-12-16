export const setAuthUserActionCreator = (payload) => {
	return {
		type : 'setAuthUser',
		payload
	}
}

export const setNotAuthUserActionCreator = () => {
	return {
		type : 'setNotAuthUser'
	}
}