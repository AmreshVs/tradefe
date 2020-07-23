import React from 'react';

import Navbar from 'components/navbar';
import Carousel from './Carousel';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import ProductSlider from './ProductSlider';
import SubCategories from './SubCategories';
import MoreCategories from './MoreCategories';

export default function index() {
  return (
    <div className="home">
      <Navbar />
      <div className="layout">
        <Categories />
        <Carousel />
        <CategoryProducts />
        <ProductSlider />
        <SubCategories />
        <MoreCategories />
      </div>
    </div>
  )
}