import React from 'react';
import "./Search.css";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });    
  };

  render() { 
    return ( 
      <section>
        <input 
          type = "text" 
          name = "search" 
          value = {this.state.search} 
          onChange = {this.handleChange} 
          className = "input" 
        />
      </section>
    );
  };
};
 
export default Search;