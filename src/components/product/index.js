import React from 'react';
import { TelephoneOutboundFill, ChatRightQuoteFill, PatchCheckFll } from 'react-bootstrap-icons';

import Card from 'components/card';

function Product() {

  const Footer = () => {
    return (
      <div className="container-fluid border-top pt-3 pl-0">
        <div className="row">
          <div className="col-md-6 seller">
            <h5 className="mb-0">
              <PatchCheckFll size={20} className="text-primary mr-2" />
              Super Plastic Coats Private Limited
            </h5>
            <p className="text-muted mb-0">Coimbatore</p>
          </div>
          <div className="col-md-3 col-6 pr-0">
            <button className="btn btn-outline-secondary w-100 rounded-pill">
              <TelephoneOutboundFill className="mr-2" />
              Show Contact
            </button>
          </div>
          <div className="col-md-3 col-6 pr-0">
            <button className="btn btn-outline-primary w-100 rounded-pill">
              <ChatRightQuoteFill className="mr-2" />
              Request Quote
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card hover footer={<Footer />}>
      <div className="container product">
        <div className="row">
          <div className="col-md-4 px-0">
            <img src="https://5.imimg.com/data5/CA/OO/XV/SELLER-38914087/disposable-face-mask-250x250.jpg" alt="mask" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h3 className="">Ply Ear loop Disposable Face Mask</h3>
            <div className="d-flex">
              <p className="price text-success mb-1 pr-1">₹200</p>
              <p className="text-muted mb-1">/ Pack</p>
            </div>
            {Array(5).fill(0).map((item, index) => (
              <div className="d-flex" key={index}>
                <p className="mb-0 pr-2">Material:</p>
                <p className="mb-0 text-muted">3 Ply</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(Product);