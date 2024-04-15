import React from "react";
import StoreProvider from "../../StoreProvider";

const page = () => {
  return (
    <StoreProvider>
      <Courses />
    </StoreProvider>
  );
};

export default page;
