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
      .then(gifs => {
        this.setState({ trendingGifs: gifs, didLoad: true });
        console.log(this.state.trendingGifs);        
      })
      .catch(error => {
        this.setState({ error, didLoad: false })
        console.log(error);
      })     
  };

  componentDidMount = () => {
    this.fetchTrendingGifs();
    console.log(`trendingGifs is: ${this.state.trendingGifs}`)
  };

  render() {
    const { didLoad, error, trendingGifs } = this.state; 
    if (error) {
      return <div>Oh No's! There as been an Error!</div> /* We can make a component for this page later on */
    } else if (!didLoad) {
      return <div>Gifs Comin' Right Up!</div> /* We can make a component for this page later on */
    } else {
      return (
        <div className = "container">          
  
          <main>
            <section className = "list">
              {trendingGifs.data.map(gifs => {                
                return (
                  <img 
                    className = "list__item" 
                    src = {gifs.images.fixed_height_downsampled.url} 
                    key = {gifs.id} 
                    alt = {gifs.title} 
                  /> 
                );               
              })}
            </section>
          </main>
          
        </div>
      );
    };             
  };
};
 
export default Home;