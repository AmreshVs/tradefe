import React from 'react';

import Card from 'components/card';
import SubCategory from 'components/subCategory';

const RightAction = () => {
  return (
    <button className="btn btn-outline-primary btn-sm">View All</button>
  )
}

const CategoryDetails = () => {
  return (
    Array(6).fill(0).map((item, index) => (
      <div className="col-xl-4 col-lg-6 col-md-6 mb-4" key={index}>
        <div className="row">
          <SubCategory />
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
          <div className="col-12 px-3 min-padd-10">
            <Card header="Billing and Construction" rightAction={<RightAction />} hover>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-12 border-right">
                  <img src="https://dir.imimg.com/images/Building_Construction.jpg" alt="building" className="img-fluid shadow" />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-12 mt-md-4">
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