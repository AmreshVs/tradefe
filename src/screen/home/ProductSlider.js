/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function ProductSlider() {

  let slider = React.createRef(null);
  let scrollWidth = 0;
  let screenWidth = 0;

  const init = () => {
    scrollWidth = slider.current.scrollWidth;
    screenWidth = window.innerWidth;
  }

  React.useEffect(() => {
    init();
  }, []);

  const handlePrev = () => {
    init();
    console.log('Width', scrollWidth - screenWidth);
    console.log(slider.current.scrollLeft);
    slider.current.scrollBy(- screenWidth / 4, 0);
  }

  const handleNext = () => {
    init();
    console.log('Width', scrollWidth - screenWidth);
    console.log(slider.current.scrollLeft);
    slider.current.scrollBy(screenWidth / 4, 0);
  }

  return (
    <div className="container-fluid slider" ref={slider}>
      <div className="position-absolute">
        <button className="btn btn-primary" onClick={handlePrev}>Prev</button>
        <button className="btn btn-primary" onClick={handleNext}>Next</button>
      </div>
      <div className="d-flex">
        {Array(20).fill(0).map((item, index) => (
          <img key={index} className="img-fluid rounded p-3" style={{ width: 200, height: 200 }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg" alt="product" />
        ))}
      </div>
    </div>
  )
}