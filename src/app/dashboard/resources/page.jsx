import React from "react";
import StoreProvider from "../../StoreProvider";

const page = () => {
  return (
    <StoreProvider>
      <ResourcesAndLibraryPage />
    </StoreProvider>
  );
};

export default page;
