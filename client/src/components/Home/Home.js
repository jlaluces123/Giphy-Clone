import React from 'react';
import "./Home.css";

class Home extends React.Component {
  state = { 
    didLoad: false,
  };
  render() { 
    return (
      <h3>Home page</h3>
    );
  }
}
 
export default Home;