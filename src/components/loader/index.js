import React from 'react';

export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}