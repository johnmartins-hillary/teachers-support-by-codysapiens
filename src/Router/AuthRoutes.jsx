import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../app/Login";
import CreateAccount from "../app/auth/create-account/page";
import ResetPassword from "../app/auth/reset-password/page";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<CreateAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
