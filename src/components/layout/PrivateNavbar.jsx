import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
const PrivateNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="jobs">Jobs</NavLink>
      <NavLink to="add-job">Add Job</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="setting">Setting</NavLink>
      <NavLink to="login">Logout</NavLink>
    </nav>
  );
};

export default PrivateNavbar;
