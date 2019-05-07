import React from 'react';
import "./Navigation.css";
import GiphyLogo from "../../assets/giphy-word-logo.svg";

/* Dependency Based Imports */
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className = "navigation">
      <ul className = "menu">

        <li className = "menu__item">
          <Link to = "/" className = "menu__link">
            <img className = "logo" src = {GiphyLogo} alt = "giphy logo"/>
          </Link>
        </li>

        <li className = "menu__item">
          <Link to = "/search" className = "menu__link">Search</Link>
        </li>

        <li className = "menu__item">
          <Link to = "/trending" className = "menu__link">Trending</Link>
        </li>

      </ul>
    </section>
  );
}
 
export default Navigation;