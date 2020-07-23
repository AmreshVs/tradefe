import React from 'react';
import { Geo } from 'react-bootstrap-icons';

import Product from 'components/product';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function Products() {

  const Header = () => {
    return (
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-md-5 col-12 heading">
            <h1 className="mb-0">Face mask</h1>
          </div>
          <div className="col-md-7 col-12 filter">
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary mr-2">
                <Geo className="mr-1" />
                Current City
              </button>
              <span className="mr-2">Or</span>
              <Typeahead placeholder="Search City" onChange={() => console.log('Change')} options={[{ id: 1, label: 'Coimbatore' }, { id: 2, label: 'Madurai' }]} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="container-fluid pb-3 pt-2 products">
        <div className="row pl-3">
          {Array(20).fill(0).map((item, index) => (
            <div className="col-md-12 col-lg-6 mb-3 pl-0" key={index}>
              <Product />
            </div>
          ))}
        </div>
      </div>
    </>
  );


}