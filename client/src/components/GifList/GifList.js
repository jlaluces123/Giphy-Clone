import React from 'react';

/* Component Imports */
import GifItem from "./GifItem.js";

const GifList = (props) => {
  
  const gifsArr = props.gifs.map(image => {
    return <GifItem key = {image.id} gif = {image} />
  });

  return (   
    <ul className = "list">
      {gifsArr}
    </ul>
  );
}
 
export default GifList;