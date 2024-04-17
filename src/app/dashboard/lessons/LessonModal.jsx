import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const LessonModal = ({ lesson, onClose }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-500" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}><AiOutlineClose /></button>
        <h2 className="text-xl font-bold mb-4">{lesson.title}</h2>
        {lesson.lessonType == 'text' && (
          <p className="text-gray-600">{lesson.description}</p>
        ) }{ lesson.lessonType == 'video' && (
          <div>
            <h3 className="text-lg font-bold mb-2">Video:</h3>
            <video controls title={lesson.title} src={lesson.media} width="100%" height="315" frameborder="0" allowfullscreen>Your browser does not support the video element.</video>
          </div>
        )} {lesson.lessonType == 'audio' && (
          <div>
            <h3 className="text-lg font-bold mb-2">Audio:</h3>
            <audio controls src={lesson.media}>
            Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonModal;
