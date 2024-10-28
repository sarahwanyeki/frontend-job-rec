import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const PublicNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </nav>
  );
};

export default PublicNavbar;
