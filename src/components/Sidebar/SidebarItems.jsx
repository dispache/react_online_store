import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Checkbox,FormControlLabel } from '@material-ui/core';

import { fetchSmartphones, 
setSelectedCategoriesActionCreator as setSelectedCategories } from '../../redux/actions/smartphones';


const SidebarItems = ( { title, id }) => {
	
	let elemRef = React.useRef();

	let { selectedCategories, sortBy, activePage } = useSelector(( {smartphonesPage} ) => {
		return {
			selectedCategories : smartphonesPage.selectedCategories,
			sortBy : smartphonesPage.sortBy,
			activePage : smartphonesPage.activePage
		}
	})

	let dispatch = useDispatch();

	const clickOnCategory = (event) => {
		if ( elemRef.current.control.checked ) {
			selectedCategories.push({ title, id})
			dispatch(fetchSmartphones(sortBy,activePage,selectedCategories))
		} else {
			let array = selectedCategories.filter( el => el.title !== title )
			dispatch(setSelectedCategories(array))
			dispatch(fetchSmartphones(sortBy,activePage,selectedCategories))
		}
	}

	return <p className='sidebar__contentElement'><FormControlLabel
				control= { <Checkbox
					            id={String(id)}
					            name={`checked${title}`}
					            color="primary"
					            onClick={clickOnCategory}
          				/> }
          		label={title}
          		ref={elemRef}
          		
          /></p>
}


export default SidebarItems;