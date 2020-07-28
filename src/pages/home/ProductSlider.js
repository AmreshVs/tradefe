/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Slider from 'components/slider';
import Card from 'components/card';

const RightAction = () => {
  return (
    <button className="btn btn-outline-primary btn-sm">View All</button>
  )
}

export default function ProductSlider() {
  return (
    <div className="container-fluid pb-3">
      <div className="row">
        <div className="col-12 px-3 min-padd-10">
          <Card header="Top Products" hover>
            <Slider header="Top Moving Products" rightAction={<RightAction />}>
              {Array(30).fill(0).map((item, index) => (
                <div key={index} className="p-3" style={{ width: 200, display: 'inline-table' }}>
                  <img className="img-fluid rounded shadow" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg" alt="product" />
                  <p className="mb-0">Image {index}</p>
                </div>
              ))}
            </Slider>
          </Card>
        </div>
      </div>
    </div>
  )
}