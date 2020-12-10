import React, { useRef, useState } from 'react';

import './Smartphone.css';


const Smartphone = ({ brand,model,price,image}) => {
	
	let priceBlock = useRef();

	let [ priceBuy, setPriceBuy ] = useState(price + ' грн')

	const mouseOverPrice = (event) =>  {
			
				setPriceBuy('Купить')
		
	}

	const mouseOutPrice = (event) => {
		setPriceBuy(price + ' грн')
	}
	

	return (
		<div className='smartphone' onMouseOver={mouseOverPrice} onMouseOut={mouseOutPrice}>
			<img src={image} alt='Smartphone' className='smartphone__img'></img>
			<div className='smartphone__brand'>{brand}</div>		
			<div className='smartphone__model'>{model}</div>
			<div className='smartphone__price' ref={priceBlock} 
			onClick={() => alert('Товар добавлен в корзину')}>{priceBuy}</div>
			</div>
	)
}



export default Smartphone;