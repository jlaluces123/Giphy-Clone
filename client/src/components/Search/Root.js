import React from 'react';

/* Component Imports */
import Search from "./Search.js";
import GifList from "../GifList/GifList.js";

class Root extends React.Component {
  state = {
    foundGifs: [],
    error: null,
    search: "",
  };

  searchGif = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.search}`)
      .then(res => res.json())
      .then(gifs => {
        this.setState({ foundGifs: gifs.data });   
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
    return (
      <section>
        <Search search = {this.state.search} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} />
        <GifList gifs = {this.state.foundGifs} />
      </section>
    );
  };
}
 
export default Root;