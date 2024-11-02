import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PublicNavbar from "../PublicNavbar";
import Footer from "../Footer/Footer";
import { useAuth } from "../context/AuthContext";

const PublicLayout = () => {
  const auth = useAuth();
  // const auth = false;

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="layout-container">
      <PublicNavbar />
      <div className="main-content ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
