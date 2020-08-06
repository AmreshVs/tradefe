import React from 'react';

import Carousel from './Carousel';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import ProductSlider from './ProductSlider';
import SubCategories from './SubCategories';
import MoreCategories from './MoreCategories';
import withAPICall from 'hoc/withApiCall';
import { HOME } from 'api/routes';

const apiParams = {
  url: HOME.url + '1'
}

const Home = ({ header_category, banner }) => {

  return (
    <div className="home">
      <Categories data={header_category} />
      <Carousel data={banner} />
      <CategoryProducts />
      <ProductSlider />
      <SubCategories />
      <MoreCategories />
    </div>
  )
}

export default withAPICall(Home, apiParams);