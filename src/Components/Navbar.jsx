import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className="navbar container-fluid navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home"><img src="logo.png" alt="" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end w-100 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item d-flex align-items-center justify-content-center">
              <Link to="/home" className="nav-link fas fa-bag-shopping fs-3"></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
