import React from 'react';

import Slider from 'components/slider';
import Card from 'components/card';
import { APP_URL } from 'common';

export default function SimilarProducts({ data }) {
  return (
    <Card header="Similar Products" hover>
      <Slider>
        {data.map((item, index) => (
          <div key={index} className="p-3 similarProduct">
            <img className="img-fluid rounded shadow" src={APP_URL + item.item_image?.image_path} alt={item.item_name} />
            <p className="mb-0">{item.item_name}</p>
          </div>
        ))}
      </Slider>
    </Card>
  )
}