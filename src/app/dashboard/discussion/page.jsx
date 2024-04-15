import React from "react";
import StoreProvider from "../../StoreProvider";
import Discussion from "./Discussion"

const page = () => {
  return (
    <StoreProvider>
      <Discussion />
    </StoreProvider>
  );
};

export default page;
