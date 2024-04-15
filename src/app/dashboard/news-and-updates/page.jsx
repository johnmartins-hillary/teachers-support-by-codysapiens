import React from "react";
import StoreProvider from "../../StoreProvider";
import NewAndUpdates from "./NewsAndUpdates";

const page = () => {
  return (
    <StoreProvider>
      <NewAndUpdates />
    </StoreProvider>
  );
};

export default page;
