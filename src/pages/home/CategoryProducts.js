import React from 'react';

import Card from 'components/card';

export default function CategoryProducts() {
  return (
    <div className="container-fluid mt-3">
      <div className="row pr-3 min-padd-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 px-2 pl-xl-3 pr-xl-0 pl-md-3 pr-md-0 mb-3" key={index}>
            <Card
              header="For a productive home office"
              footer={<button className="btn btn-outline-primary btn-sm">View More</button>}
              hover
            >
              <div className="row">
                {[1, 2, 3, 4].map((item, index) => (
                  <div className="col-md-6 col-6" key={index}>
                    <img className="img-fluid rounded shadow" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg" alt="product" />
                    <p>Dishwashers</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}