import React from 'react';

import Products from 'pages/products';
import Navbar from 'components/navbar';
import Home from 'pages/home';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Home />
      </div>
      {/* <QuotePopup /> */}
    </>
  );
}

export default App;
