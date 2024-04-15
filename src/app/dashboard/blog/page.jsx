import React from "react";
import StoreProvider from "../../StoreProvider";
import Blogs from "./Blogs";

const page = () => {
  return (
    <StoreProvider>
      <Blogs />
    </StoreProvider>
  );
};

export default page;
