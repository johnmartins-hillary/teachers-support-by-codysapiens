import React, { useState } from 'react';

const LessonForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('text');
  const [media, setMedia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLesson = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      type,
      media,
      students: 0,
      likes: 0,
      dislikes: 0
    };
    onSubmit(newLesson);
    setTitle('');
    setDescription('');
    setType('text');
    setMedia('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Create New Lesson</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Lesson Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Lesson Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
          ></textarea>
        </div>
        <div className="mb-4">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
          >
            <option value="text">Text Lesson</option>
            <option value="video">Video Lesson</option>
            <option value="audio">Audio Lesson</option>
          </select>
        </div>
        {type === 'video' || type === 'audio' ? (
          <div className="mb-4">
                <input
                type="text"
                placeholder={`${type === 'video' ? 'Video' : 'Audio'} URL`}
                value={media}
                onChange={(e) => setMedia(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
              />
          </div>
        ) : null}
        <button
          type="submit"
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Create Lesson
        </button>
      </form>
    </div>
  );
};

export default LessonForm;

