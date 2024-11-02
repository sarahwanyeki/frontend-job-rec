import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateLayout from "./components/layout/PrivateLayout";
import JobList from "./pages/Job/JobList";
import AddJob from "./pages/Job/AddJob";
import Profile from "./pages/Auth/Profile";
import Setting from "./pages/Auth/Setting";

import PublicLayout from "./components/layout/PublicLayout";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
