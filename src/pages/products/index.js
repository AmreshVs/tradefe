import React from 'react';
import { Geo, FunnelFill } from 'react-bootstrap-icons';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import InfiniteDataScroll from 'react-infinite-data';

import Product from 'components/product';

export default function Products() {

  let [arrLength, setArrLength] = React.useState(10);
  let [loadMore, setLoadMore] = React.useState(true);

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
              <Typeahead id="city" placeholder="Search City" onChange={() => console.log('Change')} options={[{ id: 1, label: 'Coimbatore' }, { id: 2, label: 'Madurai' }]} />
              <button className="btn btn-secondary ml-2">
                <FunnelFill className="mr-1" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Loader = () => (
    <div className="text-center w-100">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      <div className="container-fluid pb-3 pt-2 products">
        <div className="row pl-3">
          <InfiniteDataScroll loadMore={loadMore} loadData={loadData} loader={<Loader />}>
            {Array(arrLength).fill(0).map((item, index) => (
              <div className="col-md-12 col-lg-6 mb-3 pl-0" key={index}>
                <Product index={index} />
              </div>
            ))}
          </InfiniteDataScroll>
        </div>
      </div>
    </>
  );


}