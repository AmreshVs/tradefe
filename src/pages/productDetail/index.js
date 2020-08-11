import React from 'react';

import ProductImageDesc from './productImageDesc';
import ProductDescription from './productDescription';
import CompanyDetails from './companyDetails';
import Requirement from './requirement';
import Seller from './seller';
import Recommended from './recommended';
import SimilarProducts from './similarProducts';
import withAPICall from 'hoc/withApiCall';
import { PRODUCT_DETAIL } from 'api/routes';

const apiParams = {
  url: PRODUCT_DETAIL.url + 1
}

function ProductDetail({ data }) {
  let products = data.products[0];
  let sellerDetails = products.seller_details;

  return (
    <>
      <div className="container-fluid pb-3 pt-3 productDetail">
        <div className="row mb-3">
          <div className="col-md-8 col-lg-9">
            <div className="row">
              <div className="col-md-12 mb-3 rightPadd">
                <ProductImageDesc name={products.item_name} spec={products.item_spec} images={products.item_image} price={products.price} unit={products.unit_name} />
              </div>
              <div className="col-md-12 mb-3 rightPadd">
                <ProductDescription desc={products.item_desc} />
              </div>
              <div className="col-md-12 rightPadd">
                <CompanyDetails video={products.video_link} desc={sellerDetails.vendor_desc} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="sticky-item">
              <div className="sticky-component">
                <Requirement />
                <div className="mt-3">
                  <Seller name={sellerDetails.vendor_name} address={sellerDetails.vendor_address} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <SimilarProducts data={data.related_products} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <Recommended data={data.recomened_products} />
          </div>
        </div>
      </div>
    </>
  )
}

export default withAPICall(ProductDetail, apiParams);