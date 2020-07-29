import React, { useState } from 'react';
import { Geo, FunnelFill } from 'react-bootstrap-icons';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import InfiniteDataScroll from 'react-infinite-data';

import Product from 'components/product';
import QuotePopup from 'components/quotePopup';

const Loader = () => (
  <div className="text-center w-100">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default function Products() {

  let [arrLength, setArrLength] = useState(10);
  let [loadMore, setLoadMore] = useState(true);
  let [id, setId] = useState(0);

  const loadData = async () => {
    let getData = new Promise(resolve => {
      setTimeout(() => {
        return resolve();
      }, 2000);
    })
    await getData.then(() => {
      if (arrLength === 60) {
        setLoadMore(false);
      }
      else {
        setArrLength(s => s + 10);
      }
    })
  }

  const handleClick = (index) => {
    setId(index);
  }

  const Header = () => {
    return (
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-12 heading">
            <h1 className="mb-0">Face mask</h1>
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

  return (
    <div className="products">
      <Header />
      <div className="container-fluid pb-3 pt-2 products">
        <div className="row pl-3">
          <InfiniteDataScroll loadMore={loadMore} loadData={loadData} loader={<Loader />}>
            {Array(arrLength).fill(0).map((item, index) => (
              <div className="col-md-12 col-lg-6 mb-3 pl-0" key={index}>
                <Product key={index} handleClick={handleClick} index={index} />
              </div>
            ))}
          </InfiniteDataScroll>
        </div>
      </div>
      <QuotePopup id={id} />
    </div>
  );


}