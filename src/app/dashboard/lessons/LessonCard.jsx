import React from "react";
import { HiThumbUp } from "react-icons/hi";
import { HiThumbDown } from "react-icons/hi";
import { SlEye } from "react-icons/sl";
import { FaBookReader } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";

const LessonCard = ({ lesson, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold mb-2">{lesson.title}</h3>
      <p className="text-gray-600 mb-2">{lesson.description.length > 30 ? lesson.description.substring(0, 30) + "..." : lesson?.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="mr-1 flex items-center">{lesson.lessonType === "video" ? <SlEye /> : lesson.lessonType="text" ?<FaBookReader /> :  <IoHeadset />}: {lesson.students}</span>
          <span className="mr-1 flex items-center"><HiThumbUp />: {lesson.likes}</span>
          <span className="flex items-center" ><HiThumbDown />: {lesson.dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
