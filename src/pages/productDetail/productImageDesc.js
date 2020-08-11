import React from 'react';
import { TelephoneOutboundFill, ChatRightQuoteFill } from 'react-bootstrap-icons';

import Card from 'components/card';
import ProductImages from './productImages';

export default function ProductImageDesc({ name, spec, price, unit, images }) {

  const Attributes = ({ pkey, pvalue }) => {
    return (
      <div className="row pb-1">
        <div className="col-md-5 col-5">
          {pkey}
        </div>
        <div className="col-md-7 col-7">
          <span className="text-muted">
            {pvalue}
          </span>
        </div>
      </div>
    )
  }

  return (
    <Card header="Product Images & Details" hover>
      <div className="row">
        <ProductImages images={images} />
        <div className="col-md-12 col-lg-6 col-12 pl-4">
          <h2 className="mb-0">{name}</h2>
          <div className="d-flex align-items-center">
            <span className="price text-success pr-1">₹ {price}</span>
            <span className="text-muted"> / {unit}</span>
          </div>
          <div className="pt-2">
            {spec.map((item, index) => (
              <Attributes pkey={item.item_specification_name} pvalue={item.item_specification_value} key={index} />
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-md-5 col-lg-5 col-6 pr-0">
              <button className="btn btn-outline-secondary w-100 rounded-pill">
                <TelephoneOutboundFill className="mr-2" />
                Show Contact
              </button>
            </div>
            <div className="col-md-5 col-lg-6 col-6">
              <button className="btn btn-outline-primary w-100 rounded-pill" data-toggle="modal" data-target="#quoteModal">
                <ChatRightQuoteFill className="mr-2" />
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}