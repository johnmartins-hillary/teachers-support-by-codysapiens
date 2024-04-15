import React from "react";
import StoreProvider from "../../StoreProvider";
import CalenderEvents from "./CalenderEvent";

const page = () => {
  return (
    <StoreProvider>
      <CalenderEvents />
    </StoreProvider>
  );
};

export default page;
