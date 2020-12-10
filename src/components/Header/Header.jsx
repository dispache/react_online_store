import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

import aboutUsIcon from '../../assets/images/aboutUsIcon.png'
import contactsIcon from '../../assets/images/contactsIcon.png';
import headerLogo from '../../assets/images/headerLogo.png';
import cartIcon from '../../assets/images/cartIcon.png'

const Header = () => {
	return (
		<div className='header__wrapper'>
			
			<div className='header__logo'>
				<NavLink to='/'><img title='На главную' className='header__logoImg' 
				src={headerLogo} alt='Logo'></img></NavLink>
			</div>
			
			<ul className='header__items'>
				<li className='header__itemsLi'>
					<button className='header__itemsLi__buttons'>О нас
					<img className='header__itemsLi__buttons__icons' src={aboutUsIcon} alt="About us"></img>
					</button>
				</li>
				<li className='header__itemsLi'>
					<button className='header__itemsLi__buttons'>Контакты
					<img className='header__itemsLi__buttons__icons' src={contactsIcon} alt="Contacts"></img>
					</button>
				</li>
				<li className='header__itemsLi'>
					
					<button className='header__itemsLi__buttons'>
					<NavLink to='/cart' className='navLinkCart'>Корзина
					<img className='header__itemsLi__buttons__icons' src={cartIcon} alt="Cart"></img>
					</NavLink>
					</button>
				</li>
			</ul>
		</div>

	)
}


export default Header;