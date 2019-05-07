import React from 'react';
import "./Home.css";

/* Dependency Imports */
import GphApiClient from "giphy-js-sdk-core";
import { Link } from "react-router-dom";

let client = GphApiClient(process.env.REACT_APP_GIPHY_KEY);

class Home extends React.Component {
  state = { 
    didLoad: false,
    trendingStickers: [],
    trendingGifs: [],
    error: null
  };

  componentDidMount = () => {
    this.setState({ didLoad: true });   
    this.trendGifs();
    this.trendStickers();
  };

  trendGifs = () => {
    client.trending("gifs", {"limit": 10})
      .then(res => {
        this.setState({ trendingGifs: res, didLoad: true});
      })
      .catch(err => this.setState({ error: err }));
  };

  trendStickers = () => {
    client.trending("stickers", {"limit": 13})
      .then(res => {
        this.setState({ trendingStickers: res.data, didLoad: true });        
      })
      .catch(err => this.setState({ error: err }));
  };

  render() { 
    const { didLoad, error, trendingStickers, trendingGifs } = this.state;
    if (error) {
      return <div>Oh No's! There has been an Error!</div>
    } else if (!didLoad) {
      return <div>Gifs Comin' Right Up!</div>
    } else {
      return (
        <div className = "container"> 
          <main>

            <section>
              <header className = "stickers-list__header">
                  <p>Trending Stickers</p>
                  <Link className = "stickers-list__link" to = "/trending/stickers">SEE ALL</Link>
              </header>

              <ul className = "stickers__list">
                {trendingStickers.map(stickers => {
                  return (
                    <img
                      className = "stickers__item"
                      src = {stickers.images.fixed_height.url}
                      key = {stickers.id}
                      alt = "trending sticker"
                    />
                  )
                })}  
              </ul>
            </section>  

          </main>
        </div>
      );
    }   
  };
}
 
export default Home;