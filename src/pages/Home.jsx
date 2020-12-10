import React from 'react';

import { Sidebar, Content, Sort } from '../components';


const Home = () => {
		return (
			<div className='homePage'>
			
					<Sort activeItem={'популярности'}/>
		        	<Sidebar />
		        	<Content />

		        		</div>
        	)
}


export default Home;