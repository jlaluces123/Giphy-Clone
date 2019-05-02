import React from 'react';

const GifItem = (image) => {
  return (
    <li className = "list__item">
      <img src = {image.gif.images.fixed_height_downsampled.url} alt = "searched-gif" />
    </li>
  );
}
 
export default GifItem;