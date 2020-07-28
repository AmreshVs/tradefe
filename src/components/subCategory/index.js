import React from 'react';

export default function SubCategory({ more = true }) {
  return (
    <>
      <div className="col-md-5 col-4 pr-2 px-0">
        <div className="text-center">
          <img src="https://3.imimg.com/data3/EM/QS/GLADMIN-2/49_hardware-fittings-250x250.jpg" alt="hw" className="sub-img shadow" />
          <h5>Hardware Fitting</h5>
        </div>
      </div>
      <div className="col-md-7 col-8 px-0">
        <p className="text-muted">Aluminium Section</p>
        <p className="text-muted">Aluminium Section</p>
        <p className="text-muted">Aluminium Section</p>
        {more ? <button className="btn btn-link">See More</button> : null}
      </div>
    </>
  )
}