import React from 'react';
import InfiniteDataScroll from 'react-infinite-data';
import SubCategory from 'components/subCategory';
import Card from 'components/card';

const Loader = () => (
  <div className="text-center w-100">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default function AllSubCategories() {

  let [arrLength, setArrLength] = React.useState(16);
  let [loadMore, setLoadMore] = React.useState(true);

  const loadData = async () => {
    let getData = new Promise(resolve => {
      setTimeout(() => {
        return resolve();
      }, 2000);
    })
    await getData.then(() => {
      if (arrLength === 60) {
        setLoadMore(false);
      }
      else {
        setArrLength(s => s + 10);
      }
    })
  }

  return (
    <div className="pb-3">
      <InfiniteDataScroll loadMore={loadMore} loadData={loadData} loader={<Loader />}>
        <div className="container-fluid pt-3">
          <h2>Industrial Supplies</h2>
          <div className="row pr-3">
            {Array(arrLength).fill(0).map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 pr-0 mb-3">
                <Card hover key={index}>
                  <div className="row">
                    <SubCategory key={index} />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </InfiniteDataScroll>
    </div>
  )
}