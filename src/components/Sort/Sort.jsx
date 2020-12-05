import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import './Sort.css';

import doubleUp from '../../assets/images/double-up.png';


const Sort = ( { activeItem, items } ) => {
	
	let sortList = useRef();
	let [ visibleSortPopup, setVisibleSortPopup ] = useState(false);
	let [ activeSortItem, setActiveSortItem ] = useState(activeItem);


	useEffect( () => {
		document.body.addEventListener('click', clickOutsideSort)
	},[]);

	const clickOutsideSort = (event) => {
		if ( !event.path.includes(sortList.current) ) {
			setVisibleSortPopup(false)
		}
	}
	const setPopup = () => {
		setVisibleSortPopup(!visibleSortPopup);
	}
	const setActiveItem = (item) => {
		setActiveSortItem(item);
		setVisibleSortPopup(false);
	}
	
	return (<div className="sort" ref={sortList}>
				
				<div><span>Сортировать по :</span>
				<span className='activeSort' onClick={setPopup}>
				<img className={classnames('doubleUpIcon', visibleSortPopup ? 'doubleUpIconRotated' : null)} 
				src={doubleUp} alt='double down'></img>{activeSortItem}</span>
				</div>
				{ visibleSortPopup && <div className='sortList'>
				{items.map( (item,index) => {
					return <div key={index} className='sortItem' onClick={ () => setActiveItem(item)}>{item}</div>
				} ) }
					</div> }



				</div>)
}




export default Sort;