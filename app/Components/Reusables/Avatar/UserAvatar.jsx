import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  setUserProfileImg,
} from "../../../Redux/features/userSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { getImagePreviewFile } from "../../../Helpers/generals";

const UserAvatar = () => {
  const { userProfileImage } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { files } = e.target;
    const readFile = getImagePreviewFile(files);
    dispatch(setUserProfileImg(readFile));
  };

  return (
    <div className="w-[30px] h-[30px] rounded-full cursor-pointer">
      <label htmlFor="file" className="w-full h-full">
        {userProfileImage ? (
          <img src={userProfileImage} alt="" className="w-full h-full rounded-full" />
        ) : (
          <FaRegUserCircle className="w-full h-full" size={30} />
        )}
      </label>
      <input
        type="file"
        name="file"
        id="file"
        accept=".png, .jpeg, .jpg,  .jfif, .webp, .png"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UserAvatar;
