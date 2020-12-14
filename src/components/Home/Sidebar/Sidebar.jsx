import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SidebarItems from './SidebarItems.jsx';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './Sidebar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center'
  },
  nested: {
  	width: '70%',
  }

}));


const Sidebar = React.memo( () => {

	let { sidebarItems } = useSelector(({smartphonesPage}) => {
		return {
			sidebarItems : smartphonesPage.sidebarItems
		}
	})
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let popupRef = useRef();
  let titleRef = useRef();

  const handleOutsideClick = (event) => {
  		if ( event.path.includes(titleRef.current)) return;
  		if ( open ) {
  		if ( !event.path.includes(popupRef.current) ) {
			setOpen(false);
			}
		}
  }

  useEffect( () => {
  	document.body.addEventListener('click', handleOutsideClick)
  	return function() {
  		document.body.removeEventListener('click',handleOutsideClick)
  	}
  })

  const handleClick = () => {
    setOpen(!open);
  };

return ( <div className='sidebar'>
	 <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Список товаров
        </ListSubheader>
      }
      className={classes.root}
    >
      
      <ListItem button onClick={handleClick} className={classes.button} ref={titleRef}>
        
        <ListItemText primary="Смартфоны" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <List component="div" disablePadding ref={popupRef}>
          
          { sidebarItems.map( (el,index) => {
          	return (
          		 			<SidebarItems title={el.title} key={el.title} 
	 						isChecked={el.isChecked} id={el.id} />
          		
          	)
          }) }
          
        </List>
      </Collapse>
    </List>
    </div>
)
	// return <div className='sidebar'>

	// 	<div className='sidebar__content'>
	// 			{ sidebarItems.map( (el,index) => <SidebarItems key={el.title} title={el.title} 
	// 				isChecked={el.isChecked} id={el.id}/> ) }
			
	// 		</div>
	// 	</div>
})


export default Sidebar;