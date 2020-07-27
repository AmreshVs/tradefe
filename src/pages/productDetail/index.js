import React from 'react';

import ProductImageDesc from './productImageDesc';
import ProductDescription from './productDescription';
import CompanyDetails from './companyDetails';
import Requirement from './requirement';
import Seller from './seller';
import Recommended from './recommended';
import SimilarProducts from './similarProducts';

export default function ProductDetail() {

  return (
    <>
      <div className="container-fluid pb-3 pt-3 productDetail">
        <div className="row mb-3">
          <div className="col-md-8 col-lg-9">
            <div className="row">
              <div className="col-md-12 mb-3 rightPadd">
                <ProductImageDesc />
              </div>
              <div className="col-md-12 mb-3 rightPadd">
                <ProductDescription />
              </div>
              <div className="col-md-12 rightPadd">
                <CompanyDetails />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="sticky-item">
              <div className="sticky-component">
                <Requirement />
                <div className="mt-3">
                  <Seller />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <SimilarProducts />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <Recommended />
          </div>
        </div>
      </div>
    </>
  )
}