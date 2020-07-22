import React from 'react';

export default function index({ header, footer, rightAction, children, hover }) {
  console.log(rightAction)
  return (
    <div className={`card p-3 shadow-sm ${hover ? 'card-hover' : ''}`}>
      {header &&
        <div className="heading">
          <h4>{header}</h4>
          {rightAction}
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