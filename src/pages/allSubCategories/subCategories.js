import React from 'react';
import { APP_URL } from 'common';

import Card from 'components/card';

export default function SubCategories({ data, more = true }) {
  return (
    data.map((item, index) => (
      <div className="col-xl-3 col-lg-6 col-md-6 mb-3 pr-0 sub-categories" key={index}>
        <Card hover>
          <div className="row">
            <div className="col-md-5 col-4 pr-2 px-0">
              <div className="text-center">
                <img src={APP_URL + item.category_image_path} alt={item.category_name} className="sub-img shadow" />
                <h5>{item.category_name}</h5>
              </div>
            </div>
            <div className="col-md-7 col-8 px-0">
              {item.sub_category?.map((item, index) => (
                <p className="text-muted" key={index}>{item.sub_category_name}</p>
              ))}
              {more ? <button className="btn btn-link">See More</button> : null}
            </div>
          </div>
        </Card>
      </div>
    ))
  )
}