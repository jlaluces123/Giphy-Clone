import React from 'react';
import "./Home.css";

/* Dependency Imports */
import GphApiClient from "giphy-js-sdk-core";
import { Link } from "react-router-dom";
// import AOS from "aos";

let client = GphApiClient(process.env.REACT_APP_GIPHY_KEY);

class Home extends React.Component {
  state = {
    didLoad: false,
    trendingStickers: [],
    trendingGifs: [],
    date: "",
    day: "",
    error: null
  };

  componentDidMount = () => {
    this.setState({ didLoad: true });
    this.getDate();
    this.trendGifs();
    this.trendStickers();
    // AOS.init();
  };

  getDate = () => {
    let today = new Date();
    this.setState({ date: today.getMonth(), day: today.getDate() });
  };

  trendGifs = () => {
    client.trending("gifs", {"limit": 3})
      .then(res => {
        this.setState({ trendingGifs: res.data, didLoad: true});
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
    let { didLoad, error, trendingStickers, trendingGifs, date, day } = this.state;

    /* getDate() gives you a number, here I just want to transfer it into text for the h1 tag below */
    if (date === 4) {
      date = "May";
    } else if (date === 5) {
      date = "June";
    };

    if (error) {
      return <div>Oh No's! There has been an Error!</div>
    } else if (!didLoad) {
      return <div>Gifs Comin' Right Up!</div>
    } else {
      return (
        <div className = "container">
          <main className = "home">
            <h1>Today {date} {day}</h1>
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
                      // data-aos = "fade-up"
                      src = {stickers.images.fixed_height.url}
                      key = {stickers.id}
                      alt = "trending sticker"
                    />
                  )
                })}
              </ul>
            </section>

            <section>
              <header className = "stickers-list__header">
                  <p>Trending Gifs</p>
                  <Link className = "stickers-list__link" to = "/trending/gifs">SEE ALL</Link>
              </header>

              <ul className = "gifs__list">
                {trendingGifs.map(gifs => {
                  return (
                    <img
                      className = "gifs__item"
                      src = {gifs.images.fixed_height.url}
                      key = {gifs.id}
                      alt = "trending gif"
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