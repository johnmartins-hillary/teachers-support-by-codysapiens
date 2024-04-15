"use client";

import { selectNav } from "../../../../lib/features/navSlice";
import Sidebar from "../../Nav/Sidebar";
import Header from "./../../Nav/Header";
import { useSelector } from "react-redux";

const PageWrapper = ({ children }) => {
  const { openSidebar } = useSelector(selectNav);
  return (
    <div className="flex w-full h-full ">
      <Sidebar />
      <div
        className={`flex flex-col  ${
          openSidebar ? "w-[80%]" : "w-[95%]"
        } h-screen overflow-y-auto`}
      >
        <Header />
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
