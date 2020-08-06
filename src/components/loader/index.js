import React from 'react';

export default function Loader() {
  return (
    <div className="w-100 text-center p-5">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}