import React from 'react';
import "./Search.css";

const searchIcon = (
  <svg style = {{ width: 24, height: 24 }} viewBox = "0 0 24 24">
    <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
  </svg>
);

class Search extends React.Component {
  state = {
    search: "",
    foundGifs: [],
    didSearch: false,
    error: null
  };

  searchGif = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.search}`)
      .then(res => res.json())
      .then(gifs => {
        this.setState({ foundGifs: gifs, didSearch: true });           
      })
      .catch(err => this.setState({ error: err }));
  };

  handleChange = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value });    
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchGif();
  };

  render() { 
    let { search, error } = this.state;
    if (error) {
      return <h3>Error In Searching. Try again!</h3>
    } else {
      return ( 
        <section>
          <form className = "form" onSubmit = {this.handleSubmit}>
            <input 
              required
              type = "text" 
              name = "search" 
              value = {search} 
              onChange = {this.handleChange} 
              className = "form__input" 
            />
            <button className = "form__submit" onClick = {this.handleSubmit}>{searchIcon}</button>
          </form>                   
        </section>
      );
    }       
  };
};
 
export default Search;