import React from 'react';
import { X } from 'react-bootstrap-icons';

export default function Login() {
  return (
    <div className="modal fade login" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content shadow">
          <div className="modal-body">
            <button type="button" className="btn btn-sm close-btn" data-dismiss="modal" aria-label="Close">
              <X color="#000" size={18} />
            </button>
            <div className="p-xl-5 p-md-3">
              <h2 className="modal-title text-center">Welcome to Trade Hub</h2>
              <p className="text-center text-muted mb-2">The hub of Premium traders</p>
              <h3 className="text-center text-primary">Sign In</h3>
              <div className="form-group">
                <label>Email ID</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group pt-3">
                <button className="btn btn-primary w-100">Login</button>
              </div>
              <p className="text-center">New user? <a href="www.signup" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Create Account</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}