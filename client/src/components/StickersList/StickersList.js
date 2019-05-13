import React from 'react';

/* Dependency Imports */
import GphApiClient from "giphy-js-sdk-core";

let client = GphApiClient(process.env.REACT_APP_GIPHY_KEY);

class StickersList extends React.Component {
  state = {
    trendingStickers: [],
    didLoad: false,
    error: null
  };

  componentDidMount = () => {
    this.trendStickers();
  };

  trendStickers = () => {
    client.trending("stickers", {})
      .then(res => {
        this.setState({ trendingStickers: res.data, didLoad: true });
      })
      .catch(err => this.setState({ error: err }));
  };

  render() {
    const { didLoad, error, trendingStickers } = this.state;
    if (error) {
      return <div>Oh No's! There as been an Error!</div> /* We can make a component for this page later on */
    } else if (!didLoad) {
      return <div>Stickers Comin' Right Up!</div> /* We can make a component for this page later on */
    } else {
      return (
        <div className = "container">
          <main>
            <h3 className = "container__title">Top 25 Trending Stickers!</h3>
            <section className = "list">
              {trendingStickers.map(stickers => {
                return (
                  <img
                    className = "list__item"
                    src = {stickers.images.fixed_height.url}
                    key = {stickers.id}
                    alt = "trending sticker"
                  />
                );
              })}
            </section>
          </main>
        </div>
      );
    };
  };
}

export default StickersList;