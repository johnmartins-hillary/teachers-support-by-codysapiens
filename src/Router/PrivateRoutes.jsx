import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../app/dashboard/home/page";
import Sidebar from "../Components/Nav/Sidebar";
import { selectNav } from "../Redux/features/navSlice";
import { useSelector } from "react-redux";
import Header from "../Components/Nav/Header";
import Blog from "../app/dashboard/page";
import Courses from "../app/dashboard/courses/page";
import Discussion from "../app/dashboard/discussion/page";
import JobBoard from "../app/dashboard/job-board/page";
import Notifications from "../app/dashboard/notification/page";
import NewAndUpdates from "../app/dashboard/news-and-updates/page";
import Resources from "../app/dashboard/resources/page";
import Settings from "../app/dashboard/settings/page";
import Feedback from "../app/dashboard/feedback/page";
import Networking from "../app/dashboard/networking/page";
import CalenderEvents from "../app/dashboard/calender-event/page";

const PrivateRoutes = () => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/news-&-updates" element={<NewAndUpdates />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/calender-events" element={<CalenderEvents />} />
        </Routes>
      </div>
    </div>
  );
};

export default PrivateRoutes;
