import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PrivateNavbar from "../PrivateNavbar";
import Footer from "../Footer/Footer";
import { useAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="layout-container">
      <PrivateNavbar />
      <div className="main-content ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default PrivateLayout;
