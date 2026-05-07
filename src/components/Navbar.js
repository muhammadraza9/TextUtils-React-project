import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* BRAND (LEFT) */}
        <Link className="navbar-brand fw-bold" to="/">
          TextUtils
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT SIDE CONTENT */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav align-items-center">

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            {/* DARK MODE */}
            <li className="nav-item mx-2">
              <div className="form-check form-switch text-light">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={props.toggleMode}
                  id="darkModeSwitch"
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                   Enable DarkMode
                </label>
              </div>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;