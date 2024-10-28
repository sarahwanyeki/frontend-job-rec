import React from "react";
import "./Navbar.css";
import logo from "../../assets/login_icon.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                Sign Up
              </a>
              <a className="nav-link" href="#">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Ongozy Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          Ongozy Jobs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Jobs
            </a>
            <a className="nav-link" href="#">
              Add Job
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
