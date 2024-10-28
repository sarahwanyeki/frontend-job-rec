import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import JobList from "./pages/Job/JobList";
import AddJob from "./pages/Job/AddJob";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

import PublicLayout from "./components/layout/PublicLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const App = () => {
  return (
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
  );
};

export default App;
