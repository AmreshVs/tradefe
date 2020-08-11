import React from 'react';

import withAPICall from 'hoc/withApiCall';
import { ALL_SUB_CATEGORIES } from 'api/routes';
import SubCategories from './subCategories';

const apiParams = {
  url: ALL_SUB_CATEGORIES.url + 1
}

function AllSubCategories({ data }) {
  return (
    <div className="pb-3">
      <div className="container-fluid pt-3">
        <h2>{data[0].main_category_name}</h2>
        <div className="row pr-3">
          <SubCategories data={data[0].category} />
        </div>
      </div>
    </div>
  )
}

export default withAPICall(AllSubCategories, apiParams);