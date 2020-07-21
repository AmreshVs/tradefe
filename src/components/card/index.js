import React from 'react';

export default function index({ header, footer, children, hover }) {
  return (
    <div className={`card p-3 mb-3 shadow-sm ${hover ? 'card-hover' : ''}`}>
      {header &&
        <div className="heading">
          <h4>For a productive home office</h4>
        </div>
      }
      {children}
      {footer &&
        <div className="footer">
          {footer}
        </div>
      }
    </div>
  )
}