import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

import headerLogo from '../../assets/images/headerLogo.png';
import cartIcon from '../../assets/images/cartIcon.png'

const Header = () => {
	return (
		<div className='header__wrapper'>
			
			<div className='header__logo'>
				<NavLink to='/'><img className='header__logoImg' title='На главную'
				src={headerLogo} alt='Logo'></img></NavLink>
				<div className='header__title'>Интернет-магазин смартфонов SMART+</div>
			</div>
			
			<ul className='header__items'>
				
				<li className='header__itemsLi'>
					<button className='header__itemsLi__buttons'>
					<NavLink to='/cart' className='navLinkCart'>Корзина
					<img className='header__itemsLi__buttons__icons' src={cartIcon} alt="Cart"></img>
					</NavLink>
					</button>
				</li>

				<li className='header__itemsLi'>
					<button className='header__itemsLi__buttons'>
					<NavLink to='/login' className='navLinkCart'>Войти
					<img className='header__itemsLi__buttons__icons' src={cartIcon} alt="Cart"></img>
					</NavLink>
					</button>
				</li>
			
			</ul>
		
		</div>

	)
}


export default Header;