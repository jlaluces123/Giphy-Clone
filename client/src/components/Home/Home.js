import React from 'react';

class Home extends React.Component {
  state = {
    didLoad: false,
    error: null,
    trendingGifs: []
  };

  fetchTrendingGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}`)   
      .then(res => res.json())
      .then(text => {
        // this.setState({ trendingGifs: gifs, didLoad: true });
        // console.log(this.state.trendingGifs);
        console.log(text);
      })
      .catch(error => {
        this.setState({ error, didLoad: false })
        console.log(error);
      })     
  };

  componentDidMount = () => {
    this.fetchTrendingGifs();
  };

  render() {
    const { didLoad, error, trendingGifs } = this.state; 
    if (error) {
      return <div>Oh No's! There as been an Error!</div> /* We can make a component for this page later on */
    } else if (!didLoad) {
      return <div>Gifs Comin' Right Up!</div>
    } else {
      return (
        <div className = "home-component-wrapper">
          <section className = "search-bar">
            {/* Search Bar Component Goes Here */}
          </section>
    
          <main>
            <h3>Content served</h3>
          </main>
        </div>
      );
    };             
  };
};
 
export default Home;