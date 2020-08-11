import React from 'react';

import Product from 'components/product';

export default function Recommended({ data }) {
  return (
    <div>
      <h2>Recommended Products</h2>
      <div className="row pr-3">
        {data.map((item, index) => (
          <div className="col-lg-6 col-md-12 mb-3 pr-0" key={index}>
            <Product data={item} handleClick={() => console.log('Clicked')} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}