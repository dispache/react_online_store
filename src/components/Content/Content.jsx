import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Smartphone from './Smartphone.jsx';

import './Content.css';

import { fetchSmartphones } from '../../redux/actions/smartphones';

const Content = () => {
	
	let [ activePage, setActivePage ] = useState(1);
	let totalPages = Math.ceil(15/4);

	let dispatch = useDispatch();

	let { smartphones, sortBy } = useSelector( ({smartphonesPage}) => {
		return {
			smartphones : smartphonesPage.smartphones,
			sortBy : smartphonesPage.sortBy,
		}
	})

	useEffect(() => {
		dispatch(fetchSmartphones(sortBy,activePage));
	}, [activePage,sortBy,dispatch]);

	let pages = [];
	
	for ( let i = 1 ; i <= totalPages ; i++ ) {
		pages.push(i);
	}

	const handlePage = (page) => {
		setActivePage(page);
	}

	return <div className='content'>
		
		<div className='sortBy'>Сортировать по :</div>

		<div className='content__paginationBlock'>
	
		 <div className='content__paginationItems'> 
		 	{ pages.map( page => {
		 		return <span key={page} className={classnames('pageNum', page===activePage ? 'activePage' : null)} 
		 		onClick={() => handlePage(page)}>{page}</span>
		 	}) 
			}	
		 	</div>
			
		</div>
	
			<div className='content__main'>
				{ smartphones && smartphones.map( item => {
					return <Smartphone {...item} key={item.model} />
				})}					
			</div>

	</div>
}


export default Content;





