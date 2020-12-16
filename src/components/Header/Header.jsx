import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.css';

import headerLogo from '../../assets/images/headerLogo.png';
import cartIcon from '../../assets/images/cartIcon.png';

import { setNotAuthUserActionCreator as setNotAuthUser } from '../../redux/actions/auth.js';

const Header = ({history}) => {
	
	let authUser = useSelector( state => state.auth );
	let dispatch = useDispatch();

	const exitBtnHandler = () => {
		alert('Вы вышли с аккаунта');
		dispatch(setNotAuthUser());
		history.push('/')
	}



	return (
		<div className='header__wrapper'>
			
			<div className='header__logo'>
				<NavLink to='/'><img className='header__logoImg' title='На главную'
				src={headerLogo} alt='Logo'></img></NavLink>
				<div className='header__title'>Интернет-магазин смартфонов SMART+</div>
			</div>
			
			{ authUser.isAuth && 
			<div className='authInfo'>Вы вошли как <span className='authLogin'>{authUser.login}</span></div>
			}
			
			<ul className='header__items'>
				
				<li className='header__itemsLi'>
					
					{ authUser.isAuth &&
					<button className='header__itemsLi__buttons'>
					<NavLink to='/cart' className='navLinkCart'>Корзина
					<img className='header__itemsLi__buttons__icons' src={cartIcon} alt="Cart"></img>
					</NavLink>
					</button>
				}
				
				</li>

				<li className='header__itemsLi'>
					
					{ authUser.isAuth ? 
					<button className='header__itemsLi__btn' onClick={exitBtnHandler}>Выйти</button>
					: <button className='header__itemsLi__btn'>
						<NavLink to='/login' className='navLinkCart'>Войти</NavLink></button>
					}
				</li>
			
			</ul>
		
		</div>

	)
}


export default withRouter(Header);