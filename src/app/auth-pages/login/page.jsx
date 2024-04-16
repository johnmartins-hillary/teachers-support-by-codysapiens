import React from "react";
import StoreProvider from "../../StoreProvider";
import Login from "./Login";

const LoginPage = () => {
  return (
    <StoreProvider>
      <Login />
    </StoreProvider>
  );
};

export default LoginPage;
