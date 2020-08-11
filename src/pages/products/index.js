import React, { useState, useEffect } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import InfiniteDataScroll from 'react-infinite-data';

import Product from 'components/product';
import QuotePopup from 'components/quotePopup';
import LoaderSmall from 'components/loader/loaderSmall';
import Loader from 'components/loader';
import api from 'api';
import { PRODUCTS } from 'api/routes';
import FilterHeader from './filterHeader';

const params = {
  url: PRODUCTS.url + 103
}

export default function Products() {

  let [state, setState] = useState({
    arrLength: 10,
    loadMore: true,
    data: [],
    id: 0,
    loading: true
  });

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await api(params);

    if (!response.ok) {
      setState({ ...state, loading: false });
      return;
    }

    setState({ ...state, data: response.data, loading: false });
  }

  const handleClick = (index) => {
    setState({ ...state, id: index });
  }

  return (
    state.loading ?
      <Loader />
      :
      <div className="products">
        <FilterHeader name={state.data.sub_category.category_name} />
        <div className="container-fluid pb-3 pt-2 products">
          <div className="row pl-3">
            <InfiniteDataScroll loadMore={state.loadMore} loadData={loadData} loader={<LoaderSmall />}>
              {state.data.products.map((item, index) => (
                <div className="col-md-12 col-lg-6 mb-3 pl-0" key={index}>
                  <Product data={item} handleClick={handleClick} index={index} />
                </div>
              ))}
            </InfiniteDataScroll>
          </div>
        </div>
        <QuotePopup id={state.id} />
      </div>
  );


}