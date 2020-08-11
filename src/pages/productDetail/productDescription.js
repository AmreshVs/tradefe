import React from 'react';

import Card from 'components/card';

export default function ProductDescription({ desc }) {
  return (
    <Card header="Product Description" hover={true}>
      <p>{desc}</p>
    </Card>
  )
}