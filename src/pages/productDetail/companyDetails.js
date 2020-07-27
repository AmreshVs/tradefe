import React from 'react';

import Card from 'components/card';

export default function CompanyDetails() {
  return (
    <Card header="Company Details" hover={true}>
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
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className="row mt-3">
        <div className="col-12">
          <iframe className="embed-responsive" title="video" height="600" src="https://www.youtube.com/embed/i4uXbSgVjZ8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen />
        </div>
      </div>
    </Card>
  )
}