import React from 'react';

/* Component Imports */
import Search from "./Search.js";
import GifList from "../GifList/GifList.js";

/*
  In this component we combine the Search and GifList components to: 
    - Render the GifList based on whatever term is searched up in the Search Component
    - Handle Props from both components
*/
class Root extends React.Component {
  state = {
    foundGifs: [],
    error: null,
    search: "",
  };

  /* 
    Pretty much the same as the trendingGifs helper function found in Trending.js 
      - We just pass in the additional part of the query string
        - This will be the search term found in our state, which is being handled in the helper function below (handleChange)
  */  
  searchGif = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.search}`)
      .then(res => res.json())
      .then(gifs => {
        this.setState({ foundGifs: gifs.data });   
        console.log(this.state.foundGifs);
      })
      .catch(err => this.setState({ error: err }));
  };

  /*
    This will update this.state.search for the searchGif function above based on what is used in the Search bar 
      - Destructured the event.target for legibility
  */
  handleChange = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value });        
  };

  /* Will trigger the searchGif function each time a user submits another search time or the same one */
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