import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Checkbox,FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './SidebarItems.css';

import { setSelectedCategoriesActionCreator as setSelectedCategories,
setCheckedSidebarItems } from '../../../redux/actions/smartphones';

const useStyles = makeStyles((theme) => ({
	checkbox: {
		width : '100%',
		fontWeight: 1000,
		paddingBottom: 0,
		marginLeft: 50,
	}
}));
 

const SidebarItems = React.memo( ({ title, id, isChecked }) => {
	
	let elemRef = React.useRef();

	let { selectedCategories } = useSelector(( {smartphonesPage} ) => {
		return {
			selectedCategories : smartphonesPage.selectedCategories
		}
	})

	let dispatch = useDispatch();

	const clickOnCategory = (event) => {
		if ( elemRef.current.control.checked ) {
			let newSelectedCategories = [...selectedCategories, { title, id } ];
			dispatch(setCheckedSidebarItems( { title, id, isChecked : true } ))
			dispatch(setSelectedCategories(newSelectedCategories))
		} else {
			dispatch(setCheckedSidebarItems( { title, id, isChecked : false }))
			let array = selectedCategories.filter( el => el.title !== title )
			dispatch(setSelectedCategories(array))
		}
	}

	const classes = useStyles();

	return <FormControlLabel
				control= { <Checkbox
					            id={String(id)}
					            name={`checked${title}`}
					            color="primary"
					            onClick={clickOnCategory}
					            checked={isChecked}
          				/> }
          		label={title}
          		ref={elemRef}
          		className={classes.checkbox}
          		
          />
})


export default SidebarItems;