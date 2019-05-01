import React from 'react';
import "./Search.css";

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
        console.log(this.state.foundGifs);
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
    let { search, foundGifs, didSearch, error } = this.state;
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
            <button className = "form__submit" onClick = {this.handleSubmit}>Search</button>
          </form>                   
        </section>
      );
    }       
  };
};
 
export default Search;