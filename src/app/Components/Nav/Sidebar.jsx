"use client";

import { BsChatDots } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { GoBook } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { VscSearch } from "react-icons/vsc";
import { TbBrandBlogger, TbLogout2 } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { RiSettings4Line } from "react-icons/ri";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { selectNav, toggleSidebar } from "./../../../lib/features/navSlice";
import { logoutUser } from "../../../lib/features/authSlice";

const Sidebar = () => {
  const { openSidebar } = useSelector(selectNav);
  const dispatch = useDispatch();
  const router = useRouter();

  const Menus = [
    { title: "Home", icon: <SlHome size={18} />, link: "/dashboard/home" },
    {
      title: "Discussion Forum",
      icon: <BsChatDots size={18} />,
      link: "/dashboard/discussion",
    },
    {
      title: "Resource Library",
      icon: <GoBook size={18} />,
      gap: true,
      link: "/dashboard/resources",
    },
    {
      title: "Courses ",
      icon: <FaRegBookmark size={18} />,
      link: "/dashboard/courses",
    },
    {
      title: "Students",
      icon: <PiStudent size={18} />,
      gap: true,
      link: "/dashboard/students",
    },
    {
      title: "Lessons ",
      icon: <LiaChalkboardTeacherSolid size={18} />,
      link: "/dashboard/lessons",
    },
    {
      title: "Job Board",
      icon: <VscSearch size={18} />,
      link: "/dashboard/job-board",
      gap: true,
    },
    {
      title: "Blog",
      icon: <TbBrandBlogger size={18} />,
      link: "/dashboard/blog",
    },
    {
      title: "Calender Events",
      icon: <SlCalender size={18} />,
      gap: true,
      link: "/dashboard/calender-event",
    },
    {
      title: "Networking",
      icon: <FaNetworkWired size={18} />,
      link: "/dashboard/networking",
    },
    {
      title: "News & Updates",
      icon: <GiNewspaper size={18} />,
      link: "/dashboard/news-and-updates",
    },
    {
      title: "Settings",
      icon: <RiSettings4Line size={18} />,
      link: "/dashboard/settings",
    },
  ];

  return (
    <div
      className={` ${
        openSidebar ? "w-[20%]" : "w-[5%]"
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300 border-r-2 border-gray-500 filter-blur(20) overflow-y-auto overflow-x-hidden z-50`}
    >
      <FaCircleChevronLeft
        className={`absolute cursor-pointer -right-3 top-9 w-7 z-10  ${
          !openSidebar && "rotate-180"
        }`}
        onClick={() => dispatch(toggleSidebar())}
        alt=""
        size={24}
      />
      <div className="flex gap-x-4 items-center">
        <img
          className=" h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
          alt="Your Company"
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !openSidebar && "scale-0"
          }`}
        >
          Dashboard
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
          >
            <a href={Menu?.link} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white "
            } `}>
              <span className="rounded-md border border-1 border-gray-500 p-2">
                {Menu.icon}
              </span>
              <span
                className={`${
                  !openSidebar && "hidden"
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               mt-9 } `}
        onClick={() => {
          dispatch(logoutUser());
          router.push("/");
        }}
      >
        <TbLogout2 size={18} />
        <span
          className={`
           ${!openSidebar && "hidden"}
          origin-left duration-200`}
        >
          Logout
        </span>
      </p>
    </div>
  );
};
export default Sidebar;
