import React from "react";
import StoreProvider from "../../StoreProvider";
import Notifications from "./Notifications";

const page = () => {
  return (
    <StoreProvider>
      <Notifications />
    </StoreProvider>
  );
};

export default page;
