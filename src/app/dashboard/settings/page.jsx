import React from "react";
import StoreProvider from "../../StoreProvider";
import UserSettingsPage from "./Settings";

const page = () => {
  return (
    <StoreProvider>
      <UserSettingsPage />
    </StoreProvider>
  );
};

export default page;
