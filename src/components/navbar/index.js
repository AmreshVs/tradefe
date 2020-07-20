/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Search, List, HexagonFill, ShopWindow, Telephone, Person } from 'react-bootstrap-icons';

export default function index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div>
        <a className="navbar-brand" href="#">
          {/* <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> */}
          <HexagonFill className="mr-2" color="#FFF" size={25} />
          <span className="brandName">Trade Show</span>
        </a>
      </div>
      <div className="searchContainer">
        <input type="text" className="form-control" placeholder="Search Product/Service" />
        <div className="searchIconContainer">
          <Search color="#FFF" />
        </div>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <List color="#FFF" size={25} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <ShopWindow color="#FFF" size={18} />
            <a className="nav-link" href="#">Sell</a>
          </li>
          <li className="nav-item">
            <Telephone color="#FFF" size={18} />
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <Person color="#FFF" size={18} />
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink">
              Sign In
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}