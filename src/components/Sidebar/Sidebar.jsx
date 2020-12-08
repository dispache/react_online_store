import React from 'react';
import { Checkbox,FormControlLabel } from '@material-ui/core';


import './Sidebar.css';


const Sidebar = () => {



	return <div className='sidebar'>

		<div className='sidebar__content'>

			<p className='sidebar__contentElement'><FormControlLabel
				control= { <Checkbox
					            name="checkedSamsung"
					            color="primary"					            
          				/> }
          		label="Samsung"
          /></p>
          <p className='sidebar__contentElement'><FormControlLabel 
				control= { <Checkbox
					            name="checkedApple"
					            color="primary"
          				/> }
          		label="Apple"
          /></p>
          <p className='sidebar__contentElement'><FormControlLabel 
				control= { <Checkbox
					            name="checkedXiaomi"
					            color="primary"
          				/> }
          		label="Xiaomi"
          /></p>
			</div>
		</div>
}


export default Sidebar;