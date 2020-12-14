import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Smartphone from './Smartphone.jsx';

import './Content.css';

import preloader from '../../../assets/images/preloader.gif';

import { fetchSmartphones, setActivePageActionCreator as setActivePage } from '../../../redux/actions/smartphones';
import { addProdToCartActionCreator } from '../../../redux/actions/cart';

const Content = () => {

	let dispatch = useDispatch();

	let { smartphones, sortBy, isLoaded, selectedCategories, activePage, totalPages, cartItems } = useSelector( 
		({smartphonesPage, cartPage}) => {
		return {
			smartphones : smartphonesPage.smartphones,
			activePage : smartphonesPage.activePage,
			sortBy : smartphonesPage.sortBy,
			isLoaded : smartphonesPage.isLoaded,
			selectedCategories : smartphonesPage.selectedCategories,
			totalPages : smartphonesPage.totalPages,
			cartItems : cartPage.cartItems
		}
	})

	useEffect(() => {
		dispatch(fetchSmartphones(sortBy,activePage, selectedCategories));
	}, [activePage,sortBy,selectedCategories,dispatch]);

	let pages = [];
	
	for ( let i = 1 ; i <= totalPages ; i++ ) {
		pages.push(i);
	}

	const handlePage = (page) => {
		dispatch(setActivePage(page));	
	}

	const addProdToCart = (obj) => {
		alert('Товар был добавлен в корзину');
		let prodIndex = cartItems.length + 1;
		obj = {...obj, prodIndex}
		dispatch(addProdToCartActionCreator(obj))
	}

	return <div className='content'>
		
		<div className='sortBy'>Сортировать по :</div>

		<div className='content__paginationBlock'>
			<div className='test'>
		 <div className='content__paginationItems'> 
		 	{ pages.map( page => {
		 		return <span key={page} className={classnames('pageNum', page===activePage ? 'activePage' : null)} 
		 		onClick={() => handlePage(page)}>{page}</span>
		 	}) 
			}	
		 	</div>
		</div>
		</div>
	
			<div className='content__main'>
				
				{ isLoaded ? smartphones.map( item => {
					return <Smartphone {...item} key={item.model} addProd={addProdToCart}/>
				}) 
				: Array(4).fill(0).map((el, index) => <div className='loadingBlock' key={index}>
					<div className='loadingBlock'>
					<img className='preloaderGif' src={preloader} alt='Загрузка'></img>
						</div>
					</div>)
				}					
			</div>

	</div>
}


export default Content;





