import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import './Sort.css';

import doubleUp from '../../assets/images/double-up.png';

import { setSortByActionCreator as setSortBy } from '../../redux/actions/smartphones';


let sortItems = [
	{ name : "популярности", type : 'popular', order : 'desc' },
	{ name : "цене", type : 'price', order : 'desc' },
	{ name : "алфавиту", type : 'brand', order : 'asc' }
]

const Sort = ( { activeItem } ) => {
	
	let sortList = useRef();
	
	let [ visibleSortPopup, setVisibleSortPopup ] = useState(false);
	let [ activeSortItem, setActiveSortItem ] = useState(activeItem);
	
	let dispatch = useDispatch();

	useEffect( () => {
		document.body.addEventListener('click', clickOutsideSort)
	},[]);

	const clickOutsideSort = (event) => {
		if ( !event.path.includes(sortList.current) ) {
			setVisibleSortPopup(false);
		}
	}
	const setPopup = () => {
		setVisibleSortPopup(!visibleSortPopup);
	}
	const setActiveItem = (item) => {
		setActiveSortItem(item.name);
		// console.log(item)
		dispatch(setSortBy(item))
		setVisibleSortPopup(false);
	}

	return (<div className="sort" ref={sortList}>
				
				<div className='activeSort' onClick={setPopup}>
				<img className={classnames('doubleUpIcon', visibleSortPopup ? 'doubleUpIconRotated' : null)} 
				src={doubleUp} alt='double down'></img>{activeSortItem}</div>
				{ visibleSortPopup && <div className='sortList'>
				{ sortItems.map( (item,index) => {
					return <div key={index} className='sortItem' onClick={ () => setActiveItem(item)}>{item.name}</div>
				} ) }
					</div> }



				</div>)
}




export default Sort;