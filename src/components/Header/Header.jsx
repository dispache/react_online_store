import React from 'react';

import './Header.css';

import headerLogo from '../../assets/images/headerLogo.png';
import cartIcon from '../../assets/images/cartIcon.png'

const Header = () => {
	return (
		<div className='header__wrapper'>
			<div className='header__logo'><img className='header__logoImg' src={headerLogo} alt='Logo'></img></div>
			<div className='header__basket'>
				<button className='header__basketButton'>Корзина<img className='cartIcon' src={cartIcon} alt="Cart Icon"></img></button>
			</div>
		</div>

	)
}


export default Header;