import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import './App.css';


function App() {
  
  return (
    <Router>
    
    	<div className="App">
       
        	<Header />
        	<Route exact path='/' component={Home} />
        	<Route exact path='/cart' component={Cart} />
        	
   		</div>

   	</Router>
  );
}


export default App;
