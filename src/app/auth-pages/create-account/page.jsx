import React from "react";
import StoreProvider from "../../StoreProvider";
import CreateAccount from "./CreateAccount";

const page = () => {
  return (
    <StoreProvider>
      <CreateAccount />
    </StoreProvider>
  );
};

export default page;
