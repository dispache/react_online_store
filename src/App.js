import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Home, Cart } from './pages';
import { Login } from './pages';

import './App.css';


function App() {
  
  return (
    <Router>
    
    	<div className="App">
          <Route exact path='/login' component={Login} />
        	<Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
        	<Route exact path='/cart' component={Cart} />
   		
   		</div>

   	</Router>
  );
}


export default App;
