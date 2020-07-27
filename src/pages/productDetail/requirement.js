import React from 'react';

import Card from 'components/card';

export default function Requirement() {
  return (
    <Card header="Submit Requirement" hover={true}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input type="text" className="form-control" />
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-12 col-4 pr-xl-0 pr-md-3 pr-0">
          <div className="form-group">
            <label>Qty / Piece</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="col-xl-8 col-md-12 col-8">
          <div className="form-group">
            <label>Price Range</label>
            <select class="form-control">
              <option>Less than 1,000</option>
              <option>1,000 to 5,000</option>
              <option>5,000 to 10,000</option>
              <option>10,000 to 50,000</option>
              <option>50,000 to 1 Lakh</option>
              <option>1 Lakh to 5 Lakh</option>
              <option>More than 5 Lakh</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </Card>
  )
}