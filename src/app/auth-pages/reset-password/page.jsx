import React from "react";
import StoreProvider from "../../StoreProvider";
import ResetPassword from "./ResetPassword";

const page = () => {
  return (
    <StoreProvider>
      <ResetPassword />
    </StoreProvider>
  );
};

export default page;
