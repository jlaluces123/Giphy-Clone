import React from 'react';
import './App.css';

/* Dependency-Based Imports */
import { Route } from "react-router-dom";

/* Component Imports */
import Trending from "./components/Trending/Trending.js";
import Root from "./components/Search/Root.js";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/Home.js";
import StickersList from "./components/StickersList/StickersList.js";
import SingleGif from "./components/SingleGif/SingleGif.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>

      <main className = "block">
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/trending/stickers" component = {StickersList} />
        <Route exact path = "/trending/gifs" component = {Trending} />
        <Route exact path = "/trending" component = {Trending} />
        <Route path = "/search" component = {Root} />
      </main>
    </div>
  );
}

export default App;
