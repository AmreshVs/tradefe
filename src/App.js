import React from 'react';

import Products from 'pages/products';
import Navbar from 'components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Products />
      </div>
    </>
  );
}

export default App;
