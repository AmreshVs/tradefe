import React from 'react';
import { Geo, FunnelFill } from 'react-bootstrap-icons';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function FilterHeader({ name }) {
  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-12 heading">
          <h1 className="mb-0">{name}</h1>
        </div>
        <div className="col-xl-7 col-lg-7 col-12 filter">
          <div className="filterElements">
            <button className="btn btn-outline-primary mr-2">
              <Geo className="mr-1" />
                Current City
              </button>
            <span className="mr-2">Or</span>
            <div className="search">
              <Typeahead id="city" placeholder="Search City" onChange={() => console.log('Change')} options={[{ id: 1, label: 'Coimbatore' }, { id: 2, label: 'Madurai' }]} />
              <button className="btn btn-secondary ml-2">
                <FunnelFill className="mr-1" />
                  Filter
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}