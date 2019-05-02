import React from 'react';

const GifItem = (image) => {
  return (
    <li className = "list__item">
      <img src = {image.gif.images.fixed_height_downsampled.url} />
    </li>
  );
}
 
export default GifItem;