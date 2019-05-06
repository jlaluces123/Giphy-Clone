import React from 'react';

/*
  - This will get rendered into the GifList.js
  - "Image" prop will come from Root.js
*/
const GifItem = (image) => {
  return (
    <li className = "list__item">
      <img src = {image.gif.images.fixed_height_downsampled.url} alt = "searched-gif" />
    </li>
  );
}
 
export default GifItem;