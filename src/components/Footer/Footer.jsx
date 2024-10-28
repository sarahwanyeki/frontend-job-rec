import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      {/* <!-- Footer --> */}
      <footer className="text-center bg-light py-4">
        <div className="container">
          <p>&copy; 2024 OngozyJobs. All rights reserved.</p>
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
