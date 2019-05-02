import React from 'react';
import './App.css';

/* Component Imports */
import Home from "./components/Home/Home.js";
import Search from "./components/Search/Search.js";
import Root from "./components/Search/Root.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        {/* <Search />       */}
      </header>  
      {/* <Home />     */}
      <Root />
    </div>
  );
}

export default App;
