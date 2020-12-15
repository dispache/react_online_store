import React from 'react';

import removeIcon from '../../../assets/images/removeIcon.png';

import '../../../css/Cart/CartProd.css';


const CartProd = React.memo( ({brand,model,image,price,prodIndex, deleteProd}) => {


	let deleteObj = { brand,model,image,price,prodIndex };


	return (
	
				<div className='cartprod'>
					<img className='prodImg' src={image} alt='Product'></img>
							<div className='prodInfo'>
									<div className='prodBrand'>{brand}</div>
									<div className='prodModel'>{model}</div>
							</div>
					<div className='prodPrice'>{price} грн</div>
					<img src={removeIcon} alt='remove' className='removeProdIcon' 
					onClick={ () => deleteProd(deleteObj)}></img>
				</div>
			
		)
})

export default CartProd;