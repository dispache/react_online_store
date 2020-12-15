import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import '../../../css/Home/Sort.css';

import doubleUp from '../../../assets/images/double-up.png';

import { setSortByActionCreator as setSortBy } from '../../../redux/actions/smartphones';



const Sort = React.memo( () => {
	
	let sortList = useRef();
	
	let { sortBy, sortItems } = useSelector(({smartphonesPage}) => {
		return {
			sortBy : smartphonesPage.sortBy,
			sortItems : smartphonesPage.sortItems
		}
	})

	let [ visibleSortPopup, setVisibleSortPopup ] = useState(false);
	let [ activeSortItem, setActiveSortItem ] = useState(sortBy.name);
	
	let dispatch = useDispatch();

	useEffect( () => {
		document.body.addEventListener('click', clickOutsideSort);
		return function() {
			document.body.removeEventListener('click', clickOutsideSort);
		}
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
}) 




export default Sort;