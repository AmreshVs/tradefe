import React from 'react';
import { TelephoneOutboundFill, ChatRightQuoteFill, PatchCheckFll } from 'react-bootstrap-icons';

import Card from 'components/card';
import { APP_URL } from 'common';

function Product({ data, index, handleClick }) {

  const Footer = ({ data }) => {
    return (
      <div className="container-fluid border-top pt-3 pl-0">
        <div className="row">
          <div className="col-md-6 seller">
            <h5 className="mb-0">
              <PatchCheckFll size={20} className="text-primary mr-2" />
              {data.vendor_name}
            </h5>
            <p className="text-muted mb-0">{data.vendor_address}</p>
          </div>
          <div className="col-md-3 col-6 pr-0">
            <button className="btn btn-outline-secondary w-100 rounded-pill">
              <TelephoneOutboundFill className="mr-2" />
              Show Contact
            </button>
          </div>
          <div className="col-md-3 col-6 pr-0">
            <button className="btn btn-outline-primary w-100 rounded-pill" onClick={() => handleClick(index)} data-toggle="modal" data-target="#quoteModal">
              <ChatRightQuoteFill className="mr-2" />
              Request Quote
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card hover footer={<Footer data={data.seller_details} />}>
      <div className="container product">
        <div className="row">
          <div className="col-md-4 px-0">
            <img src={APP_URL + data.item_image?.image_path} alt="mask" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h3 className="">{data.item_name}</h3>
            <div className="d-flex align-items-center">
              <p className="price text-success mb-1 pr-1">₹{data.price}</p>
              <p className="text-muted mb-1">/ {data.unit_name}</p>
            </div>
            {data.item_spec.map((spec, index) => (
              <div className="d-flex" key={index}>
                <p className="mb-0 pr-2">{spec.item_specification_name} : </p>
                <p className="mb-0 text-muted">{spec.item_specification_value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(Product);