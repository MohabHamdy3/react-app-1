import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar({  }) {
 

  return (
    <>
      <nav className="navbar nav-css navbar-expand-lg">
        <div className="container-fluid container my-4">
          <NavLink 
            className="navbar-brand text-white fs-2 fw-bolder"
            to=""
      
          >
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-2">
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white fs-5 fw-bold `}
                  to="/about"
        
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white fs-5 fw-bold `}
                  to="/portfolio"
           
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white fs-5 fw-bold`}
                  to="/contact"
                
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
