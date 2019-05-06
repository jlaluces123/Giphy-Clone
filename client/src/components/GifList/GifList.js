import React from 'react';

/* Component Imports */
import GifItem from "./GifItem.js";

const GifList = (props) => {
  /* Props.Gifs will come from Root.js to supply the GifItem component with necessary info */
  const gifsArr = props.gifs.map(image => {
    return <GifItem key = {image.id} gif = {image} />
  });

  return (   
    /* Here we can just return the gifsArr inside of an unordered-list since the GifItem is just an <li> at its core */
    <ul className = "list">
      {gifsArr}
    </ul>
  );
}
 
export default GifList;