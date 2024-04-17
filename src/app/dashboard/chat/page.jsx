import React from "react";
import StoreProvider from "../../StoreProvider";
import Chat from "./Chat"

const page = () => {
  return (
    <StoreProvider>
      <Chat />
    </StoreProvider>
  );
};

export default page;
