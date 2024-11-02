import React from "react";
import "../../assets/css/style.css";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      {/* Ensure it spans full width */}
      <footer className="text-center bg-light py-4">
        <div className="container-fluid">
          {" "}
          {/* Adjusted from container to container-fluid */}
          <p>
            &copy; 2024 <strong>Ongozy Technology.</strong> All rights reserved.
          </p>
          <div>
            <a href="#" className="me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
