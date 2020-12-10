import React from 'react';

import './CartContent.css';
import cartIcon from '../../../assets/images/cartIcon.png';
import deleteIcon from '../../../assets/images/deleteIcon.png';

const CartContent = () => {
	return <div className='cartContent__wrapper'>
		
		<div className='cartContent__header'>
			
			<img src={cartIcon} alt='Cart Icon' className='cartIcon'></img>
			
			<div className='headerTitle'>Корзина</div>
			
			<div className='deleteBlock'>
			
			<img className='deleteBlock__icon' src={deleteIcon} alt="Delete"></img>
				<span className='deleteBlock__title'>Очистить корзину</span>
			</div>
		</div>


	</div>
}


export default CartContent;