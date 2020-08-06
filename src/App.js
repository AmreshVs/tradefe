import React from 'react';

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
