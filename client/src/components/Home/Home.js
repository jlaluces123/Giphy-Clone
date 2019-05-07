import React from 'react';
import "./Home.css";

/* Dependency Imports */
import GphApiClient from "giphy-js-sdk-core";

let client = GphApiClient(process.env.REACT_APP_GIPHY_KEY);

class Home extends React.Component {
  state = { 
    didLoad: false,
  };

  componentDidMount = () => {
    this.setState({ didLoad: true });
    // this.stickerSearch();
    this.categories();
  };

  // stickerSearch = () => {
  //   client.search("stickers", {"q": "cats"})
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };

  categories = () => {
    client.categoriesForGifs({}) 
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() { 
    return (
      <div className = "container">
        <header className = "header">

        </header>

        <main>
          
        </main>
      </div>
    );
  };
}
 
export default Home;