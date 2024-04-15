import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import HeaderDropdown from "../Form/Dropdowns/HeaderDropdown";
import Input from "../Form/Input";

const Header = () => {
  return (
    <div className="px-8 py-4 flex justify-between border-b-2 border-b-gray-500 w-full items-center">
      <Input
        placeholder="Search"
        customClassName={"rounded-full w-[350px] outline-none"}
      />
      <div className="flex gap-10 items-center">
        <IoIosNotificationsOutline size={24} cursor={"pointer"} />
        <HeaderDropdown />
      </div>
    </div>
  );
};

export default Header;
