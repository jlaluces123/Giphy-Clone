import React from 'react';
import "./Search.css";

/* Taken from materialdesignicons.com */
const searchIcon = (
  <svg style = {{ width: 24, height: 24 }} viewBox = "0 0 24 24">
    <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
  </svg>
);

/* Props will go to Root.js */
const Search = (props) => {
  return (
    <section>
      {/* We put the onSubmit and onClick to handle the user pressing "enter" and handle the user pressing the search button just in case */}
      <form className = "form" onSubmit = {props.handleSubmit}>
        <input 
          required
          type = "text" 
          name = "search" 
          value = {props.search} 
          onChange = {props.handleChange} 
          className = "form__input" 
        />
        <button className = "form__submit" onClick = {props.handleSubmit}>{searchIcon}</button>
      </form>                   
    </section>
  );
};
 
export default Search;