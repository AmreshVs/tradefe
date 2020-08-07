import React from 'react';

import Navbar from 'components/navbar';
// import Home from 'pages/home';
import AllSubCategories from 'pages/allSubCategories';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <AllSubCategories />
      </div>
      {/* <QuotePopup /> */}
    </>
  );
}

export default App;
