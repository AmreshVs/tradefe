import React from 'react';

import Card from 'components/card';

const RightAction = () => {
  return (
    <button className="btn btn-outline-primary btn-sm">View All</button>
  )
}

const CategoryDetails = () => {
  return (
    Array(6).fill(0).map((item, index) => (
      <div className="col-md-4" key={index}>
        <div className="row mb-4">
          <div className="col-md-6 col-6">
            <div className="text-center">
              <img src="https://3.imimg.com/data3/EM/QS/GLADMIN-2/49_hardware-fittings-250x250.jpg" alt="hw" className="sub-img shadow" />
              <h5>Hardware Fitting</h5>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <p className="text-muted">Aluminium Section</p>
            <p className="text-muted">Aluminium Section</p>
            <p className="text-muted">Aluminium Section</p>
            <button className="btn btn-link">See More</button>
          </div>
        </div>
      </div>
    ))
  )
}

export default function SubCategories() {
  return (
    Array(3).fill(0).map((item, index) => (
      <div className="container-fluid pb-3 sub-categories" key={index}>
        <div className="row">
          <div className="col-12 pr-4 pl-4 min-padd-10">
            <Card header="Billing and Construction" rightAction={<RightAction />} hover>
              <div className="row">
                <div className="col-md-3 border-right">
                  <img src="https://dir.imimg.com/images/Building_Construction.jpg" alt="building" className="img-fluid shadow" />
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <CategoryDetails />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    ))
  )
}