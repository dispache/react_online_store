import React from 'react';

import { Sidebar, Content, Sort, Header } from '../components';


const Home = () => {
		return (
			<div className='homePage'>
					<Header />
					<Sort />
		        	<Sidebar />
		        	<Content />

		        		</div>
        	)
}


export default Home;