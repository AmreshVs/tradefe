import React from 'react';

import Navbar from 'components/navbar';
import Carousel from './Carousel';
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import ProductSlider from './ProductSlider';

export default function index() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Categories />
        <Carousel />
        <CategoryProducts />
        <ProductSlider />
      </div>
    </>
  )
}