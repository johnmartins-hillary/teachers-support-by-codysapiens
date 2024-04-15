import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";
import { useSelector } from "react-redux";
import { selectAuth } from "../Redux/features/authSlice";

const RouterComponent = () => {
  const { loggedInUser } = useSelector(selectAuth);

  return (
    <Router>
      <Routes>
        {loggedInUser?.username && (
          <Route path="/*" element={<PrivateRoutes />} />
        )}
        {!loggedInUser?.username && (
          <Route path="/*" element={<AuthRoutes />} />
        )}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
