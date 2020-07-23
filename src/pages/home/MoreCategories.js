import React from 'react';

import Card from 'components/card';

export default function MoreCategories() {
  return (
    <div className="container-fluid pb-3 more-categories">
      <div className="row">
        <div className="col-12 pr-4 pl-4 min-padd-10">
          <Card hover>
            <div className="container-fluid">
              <div className="row">
                {Array(11).fill(0).map((item, index) => (
                  <div className="col-md-1 col-6 text-center" key={index}>
                    <img src="https://hm.imimg.com/imhome_gifs/bigBn04.jpg" alt="hospital" className="img-fluid shadow mb-2" />
                    <p className="mb-0">Hospital and Equipment</p>
                  </div>
                ))}
                <div className="col-md-1 col-6 text-center d-flex">
                  <button className="btn btn-outline-primary">View All Categories</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}