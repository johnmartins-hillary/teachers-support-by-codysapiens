import React from "react";
import StoreProvider from "../../StoreProvider";
import Students from "./Students";

const page = () => {
  return (
    <StoreProvider>
      <Students />
    </StoreProvider>
  );
};

export default page;
