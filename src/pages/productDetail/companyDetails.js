import React from 'react';

import Card from 'components/card';

export default function CompanyDetails({ desc, video }) {
  return (
    <Card header="Company Details" hover={true}>
      <div className="row">
        <div className="col-12">
          <iframe className="embed-responsive" title="video" height="600" src={"https://www.youtube.com/embed/" + video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
      <p className="mt-3">{desc}</p>
      <div className="row mb-3">
        <div className="col-md-4 col-lg-3">
          <h4>GSTIN</h4>
          <span className="text-muted">
            XF64ASA9844CS
          </span>
        </div>
        <div className="col-md-4 col-lg-3">
          <h4>Company Since</h4>
          <span className="text-muted">
            2015
          </span>
        </div>
        <div className="col-md-4 col-lg-3">
          <h4>Company Since</h4>
          <span className="text-muted">
            2015
          </span>
        </div>
        <div className="col-md-4 col-lg-3">
          <h4>Company Since</h4>
          <span className="text-muted">
            2015
          </span>
        </div>
      </div>
    </Card>
  )
}