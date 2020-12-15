import React, { useRef, useState } from 'react';

import '../../../css/Home/Smartphone.css';


const Smartphone = React.memo(({ brand,model,price,image, addProd }) => {
	
	let priceBlock = useRef();

	let [ priceBuy, setPriceBuy ] = useState(price + ' грн')

	const mouseOverPrice = (event) =>  {
			
				setPriceBuy('Купить')
		
	}

	const mouseOutPrice = (event) => {
		setPriceBuy(price + ' грн')
	}

	let obj = { brand, model, price, image };
	

	return (
		<div className='smartphone' onMouseOver={mouseOverPrice} onMouseOut={mouseOutPrice}>
			<img src={image} alt='Smartphone' className='smartphone__img'></img>
			<div className='smartphone__brand'>{brand}</div>		
			<div className='smartphone__model'>{model}</div>
			<div className='smartphone__price' ref={priceBlock} 
			onClick={() => addProd(obj)}>{priceBuy}</div>
			</div>
	)
})



export default Smartphone;