/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createRef, useLayoutEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import Slider from 'components/slider';
import { APP_URL } from 'common';

export default function ProductImages({ images }) {

  let imageWidth = createRef();
  const [magnifyWidth, setMagnifyWidth] = useState(0);
  const [productImage, setProductImage] = useState(APP_URL + images[0].image_path);
  const [selectedImage, setSelectedImage] = useState(0);

  const hoverImage = (e) => {
    setSelectedImage(Number(e.target.getAttribute('index')));
    setProductImage(e.target.src);
  }

  useLayoutEffect(() => {
    setMagnifyWidth(imageWidth.current.clientWidth - 15);
  }, []);

  return (
    <div className="col-md-12 col-lg-6 productMagnify" ref={imageWidth}>
      <ReactImageMagnify className="product-image" {...{
        smallImage: {
          alt: 'product',
          src: productImage,
          width: window.innerWidth > 500 ? magnifyWidth - 100 : magnifyWidth,
          height: 500,
        },
        largeImage: {
          src: productImage,
          width: 1200,
          height: 1800
        }
      }}
      />
      <div className="w-100 text-left mt-3">
        <Slider card={false} controlOutside={true}>
          {images.map((item, index) => (
            <img key={index} index={index} className={`imgSmall ${index === selectedImage ? 'selected' : ''}`} onMouseOver={hoverImage} src={APP_URL + item.image_path} alt={'product' + index} />
          ))}
        </Slider>
      </div>
    </div>
  )
}