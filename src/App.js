import React from 'react';

import { Header, Sort, Sidebar, Content } from './components';

import './App.css';


function App() {
  
  return (
    <div className="App">
       
        <Header />
        <Sort activeItem={'популярности'}/>
        <Sidebar />
        <Content />




    </div>
  );
}


export default App;
