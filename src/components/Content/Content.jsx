import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import * as axios from 'axios';

import Smartphone from './Smartphone.jsx';

import './Content.css';


const Content = () => {
	
	let [ activePage, setActivePage ] = useState(1);
	let [ smartphones, setSmartphones ] = useState([]); 
	let totalPages = Math.ceil(15/4);


	useEffect( () => {
		axios.get(`http://localhost:3001/smartphones?_page=${activePage}&_limit=4`)
		.then( ({data}) => {
			setSmartphones(data);
		});
		
	}, [activePage])


	let pages = [];
	for ( let i = 1 ; i <= totalPages ; i++ ) {
		pages.push(i);
	}

	const handlePage = (page) => {
		setActivePage(page);
	}

	return <div className='content'>
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
				{ smartphones.map( item => {
					return <Smartphone {...item} key={item.model} />
				})}					
			</div>

	</div>
}


export default Content;





