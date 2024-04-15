import React from "react";
import StoreProvider from "../../StoreProvider";

const page = () => {
  return (
    <StoreProvider>
      <Notifications />
    </StoreProvider>
  );
};

export default page;
