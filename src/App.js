import React from 'react';

import Navbar from 'components/navbar';
import Home from 'pages/home';
import ProductDetail from 'pages/productDetail';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <ProductDetail />
      </div>
      {/* <QuotePopup /> */}
    </>
  );
}

export default App;
