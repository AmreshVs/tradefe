import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

import Card from 'components/card';

export default function ProductDetail() {

  const Attributes = ({ pkey, pvalue }) => {
    return (
      <div className="row pb-1">
        <div className="col-md-5">
          {pkey}
        </div>
        <div className="col-md-7">
          <span className="text-muted">
            {pvalue}
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid pb-3 pt-3 productDetail">
        <div className="row">
          <div className="col-md-9">
            <Card header="Product Images & Details" hover>
              <div className="row">
                <div className="col-6 productMagnify">
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      src: 'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
                      width: 400,
                      height: 600,
                    },
                    largeImage: {
                      src: 'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
                      width: 1200,
                      height: 1800
                    }
                  }}
                  />
                </div>
                <div className="col-6">
                  <h2 className="mb-0">Disposable KN95 Mask</h2>
                  <div>
                    <span className="price text-success">₹ 250</span>
                    <span className="text-muted"> / Piece</span>
                  </div>
                  <div className="pt-2">
                    {Array(6).fill(0).map((item, index) => (
                      <Attributes pkey="Disposability" pvalue="Disposable" key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}