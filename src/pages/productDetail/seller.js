import React from 'react';

import Card from 'components/card';
import { Geo, Globe2, TelephoneOutboundFill } from 'react-bootstrap-icons';

export default function Seller({ name, address }) {
  return (
    <Card header="Seller Details" hover={true}>
      <h4>{name}</h4>
      <div className="row pb-2">
        <div className="col-md-2 col-2 text-primary icon p-0">
          <Geo size={20} />
        </div>
        <div className="col-md-10 col-10 pl-0">
          {address}
        </div>
      </div>
      <div className="row pb-2">
        <div className="col-md-2 col-2 text-primary icon p-0">
          <Globe2 size={20} />
        </div>
        <div className="col-md-10 col-10 pl-0">
          <a href="www.tradeshow.com">www.tradeshow.com</a>
        </div>
      </div>
      <button className="btn btn-outline-secondary w-100 rounded-pill mt-3">
        <TelephoneOutboundFill className="mr-2" />
          Show Contact
      </button>
    </Card>
  )
}