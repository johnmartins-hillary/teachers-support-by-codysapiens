// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal, teacher }) => {
  return (
    <div className={`fixed h-full w-full top-0 left-0  bg-gray-800 opacity-75 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      {/* <div className="absolute inset-0 "></div> */}
      <div className="bg-white rounded-lg shadow-lg p-4 inset-1">
        <h3 className="text-lg font-bold mb-2">Send Message to {teacher?.name}</h3>
        <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" rows="4" placeholder="Type your message..."></textarea>
        <button onClick={closeModal} className="bg-purple-500 text-white px-4 py-2 rounded-md">Send</button>
      </div>
    </div>
  );
};

export default Modal;
