import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SidebarItems from './SidebarItems.jsx';

import { fetchSidebarBrands } from '../../../redux/actions/smartphones';

import './Sidebar.css';


const Sidebar = () => {

	let dispatch = useDispatch();
	let brands = useSelector( ({smartphonesPage}) => smartphonesPage.sidebarBrands);

	useEffect( () => {
		dispatch(fetchSidebarBrands())
	}, [dispatch])

	return <div className='sidebar'>

		<div className='sidebar__content'>
				{ brands.map( (el,index) => <SidebarItems key={el.title} title={el.title} id={el.id}/> ) }
			
			</div>
		</div>
}


export default Sidebar;