import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/login_icon.png";
const PublicNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark 
    navbar-spacing justify-content-between"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Ongozy Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top logo-text-custom me-2"
          />
          <span className="fw-bold" style={{ fontSize: "25px" }}>
            Ongozy Jobs
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publicNavbarNav"
          aria-controls="publicNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="publicNavbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
