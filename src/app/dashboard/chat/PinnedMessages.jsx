import React from 'react';

const PinnedMessages = ({ pinnedMessages }) => {
  return (
    <div className="w-1/4 p-4 h-full">
      <h2 className="text-lg font-bold mb-2">Pinned Messages</h2>
      <ul className="flex flex-col gap-2 overflow-y-auto max-h-screen">
        {pinnedMessages.map(message => (
          <li key={message.id} className="bg-gray-200 p-2 rounded-md">{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedMessages;
