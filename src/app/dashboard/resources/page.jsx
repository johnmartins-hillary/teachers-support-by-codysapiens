import React from "react";
import StoreProvider from "../../StoreProvider";
import ResourcesAndLibraryPage from "./Resources"

const page = () => {
  return (
    <StoreProvider>
      <ResourcesAndLibraryPage />
    </StoreProvider>
  );
};

export default page;
