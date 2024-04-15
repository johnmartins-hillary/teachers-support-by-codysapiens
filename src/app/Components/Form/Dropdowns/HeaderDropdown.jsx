"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { selectUser } from "../../../../lib/features/userSlice";
import { logoutUser } from "../../../../lib/features/authSlice";

const HeaderDropdown = () => {
  const { userProfileImage } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="w-[30px] h-[30px] rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        {userProfileImage ? (
          <img
            src={userProfileImage}
            alt=""
            className="w-full h-full rounded-full"
          />
        ) : (
          <FaRegUserCircle className="w-full h-full text-gray-500" size={30} />
        )}
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md group  border  px-5 py-4 transition-colors hover:border-gray-300  dark:border-neutral-700 dark:bg-neutral-800/30 backdrop-blur-lg z-100">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/settings"
              className="block w-full px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 rounded-md text-white cursor-pointer"
              role="menuitem"
            >
              Profile
            </a>
            <p
              className="text-gray-500 w-full px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 rounded-md flex gap-4 cursor-pointer text-white"
              role="menuitem"
              onClick={() => {
                dispatch(logoutUser());
                router.push("/");
              }}
              onKeyDown={() => {}}
            >
              <TbLogout2 size={18} />
              <span className={` origin-left duration-200`}>Logout</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
