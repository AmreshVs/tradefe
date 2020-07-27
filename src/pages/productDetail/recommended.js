import React from 'react';
import Card from 'components/card';

import Product from 'components/product';

export default function Recommended() {
  return (
    <div>
      <h2>Recommended Products</h2>
      <div className="row pr-3">
        {Array(6).fill(0).map((item, index) => (
          <div className="col-lg-6 col-md-12 mb-3 pr-0" key={index}>
            <Product />
          </div>
        ))}
      </div>
    </div>
  )
}