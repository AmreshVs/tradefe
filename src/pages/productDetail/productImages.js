import React, { useState, createRef, useLayoutEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import Slider from 'components/slider';

export default function ProductImages() {

  let imageWidth = createRef();
  const [magnifyWidth, setMagnifyWidth] = useState(0);
  const [productImage, setProductImage] = useState('https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg');
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
          alt: 'Wristwatch by Ted Baker London',
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
          {Array(10).fill(0).map((item, index) => (
            <img key={index} index={index} className={`imgSmall ${index === selectedImage ? 'selected' : ''}`} onMouseOver={hoverImage} src="https://rukminim1.flixcart.com/image/832/832/jtvtz0w0/smartwatch/8/9/p/dz09-black-b11-rock-original-imafdxt5bfdjzvky.jpeg?q=70" alt="watch" />
          ))}
        </Slider>
      </div>
    </div>
  )
}