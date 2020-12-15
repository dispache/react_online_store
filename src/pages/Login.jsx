import React from 'react';

import '../css/Login/Login.css';

const Login = () => {
	return (
		<div className='login__wrapper'>
			
			<div className='login__title'>Вход
			</div>

				<div className='login__content'>
					
					<form>
						<div className='formText'>Ваш логин</div>
							<input placeholder="Введите логин"></input>
					

					
						<div className='formText'>Ваш пароль</div>
							<input placeholder='Введите пароль'></input>
					
						<button className='formSubmitBtn'>Войти</button> 

					</form>
				</div>

		</div>
	)
}


export default Login;