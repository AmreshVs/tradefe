import React from 'react';
import { X } from 'react-bootstrap-icons';

import Quote from 'components/quote';

export default function QuotePopup({ id }) {
  return (
    <div className="modal fade login" id="quoteModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content shadow">
          <div className="modal-body">
            <button type="button" className="btn btn-sm close-btn" data-dismiss="modal" aria-label="Close">
              <X color="#000" size={18} />
            </button>
            <div className="p-xl-5">
              <h2>Modal {id}</h2>
              <h2 className="text-center">Request Quote</h2>
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}