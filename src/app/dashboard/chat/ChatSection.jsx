import React from 'react';
import { SiPinboard } from "react-icons/si";

const ChatWindow = ({ selectedStudent, messages, newMessage, setNewMessage, sendMessage, pinMessage }) => {
  return (
    <div className="w-1/2 border-l border-r border-gray-300 h-full">
      <div className="h-80 overflow-y-auto px-4 py-2 h-full">
        <h2 className="text-lg font-bold mb-2">Chat with {selectedStudent ? selectedStudent.name : 'Select a student'}</h2>
        {selectedStudent && messages.map(message => (
          <div key={message.id} className="mb-2">
            <div className="font-bold">{message.sender}</div>
            <div className={`bg-gray-200 rounded-lg p-2 ${message.pinned ? 'border border-yellow-500' : ''}`}>
              {message.text}
              {!message.pinned && (
                <button onClick={() => pinMessage(message.id)} className="ml-2 text-xs text-gray-500"><SiPinboard /></button>
              )}
            </div>
            <div className="text-xs text-gray-500">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 border-t border-gray-300 p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full border border-gray-300 rounded-md px-2 py-1"
        />
        <button onClick={sendMessage} className="ml-2 bg-purple-500 text-white px-4 py-1 rounded-md">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
