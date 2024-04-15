"use client"
// import Header from "../../Nav/Header";
import Sidebar from "../../Nav/Sidebar";
import StoreProvider from './../../../StoreProvider';

const PageWrapper = ({ children }) => {
  return (
    <StoreProvider>
    <div className="flex w-full h-full ">
      <Sidebar />
      <div
        className={`flex flex-col  ${
          //  " openSidebar ? "w-[80%]" : "w-[95%]""
          ""
        } h-screen overflow-y-auto`}
      >
        {/* <Header /> */}
        {children}
      </div>
    </div></StoreProvider>
  );
};

export default PageWrapper;
