import React from 'react';

import ProductDetail from 'pages/productDetail';
import Home from 'pages/home';
import Navbar from 'components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <ProductDetail />
      </div>
    </>
  );
}

export default App;
