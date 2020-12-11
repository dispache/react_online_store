import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartProd from './CartProd';

import './CartContent.css';
import cartIcon from '../../../assets/images/cartIcon.png';
import deleteIcon from '../../../assets/images/deleteIcon.png';

import { deleteProdInCart, deleteAllProdInCart } from '../../../redux/actions/cart';

const CartContent = () => {
	
	let dispatch = useDispatch();

	let { cartItems, totalPrice } = useSelector( ({cartPage}) => {
		return { 
			cartItems : cartPage.cartItems,
			totalPrice : cartPage.totalPrice
		}
	})

	const deleteProd = (obj) => {
		dispatch(deleteProdInCart(obj));
	}

	const deleteAllProd = () => {
		dispatch(deleteAllProdInCart());
	}


	return <div className='cartContent__wrapper'>
		
		<div className='cartContent__header'>
			
			<img src={cartIcon} alt='Cart Icon' className='cartIcon'></img>
			
			<div className='headerTitle'>Корзина</div>
			
			<div className='deleteBlock' onClick={deleteAllProd}>
			
			<img className='deleteBlock__icon' src={deleteIcon} alt="Delete"></img>
				<span className='deleteBlock__title'>Очистить корзину</span>
			</div>
		</div>
			<div className='cartProducts'>
				{
					cartItems.map( (item,index) => {
						return <CartProd {...item} key={item.brand + item.model + index} 
						deleteProd={deleteProd} />
					})
				}
				
			</div>

			<div className='cartConfirm'>
			
			<span className='totalPrice'>Общая сумма : <span className='totalPriceValue'>{totalPrice} грн</span></span>
			<button className='confirmButton'>Оформить покупку</button>

		</div>	

	</div>
}


export default CartContent;