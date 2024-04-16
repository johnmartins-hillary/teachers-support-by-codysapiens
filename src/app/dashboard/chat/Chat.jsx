"use client"

import React, { useState } from 'react';
import StudentsList from './StudentList';
import Chat from './ChatSection';
import PinnedMessages from './PinnedMessages';
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";


const ChatPage = () => {
  const [students] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    // Add more students here
  ]);
 const [selectedStudent, setSelectedStudent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [pinnedMessages, setPinnedMessages] = useState([]);

  const sendMessage = () => {
    if (!selectedStudent || newMessage.trim() === '') return;
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'Teacher', // Assuming teacher is the sender
      timestamp: new Date().toISOString(),
      pinned: false
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  const pinMessage = (id) => {
    const pinnedMessage = messages.find(message => message.id === id);
    if (pinnedMessage) {
      setPinnedMessages([...pinnedMessages, pinnedMessage]);
    }
  };

  return (
    <PageWrapper>
    <div className="flex text-gray-500 px-8 h-full">
     <StudentsList students={students} setSelectedStudent={setSelectedStudent} />
      <Chat
        selectedStudent={selectedStudent}
        messages={messages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
        pinMessage={pinMessage}
      />
      <PinnedMessages pinnedMessages={pinnedMessages} />
    </div>
    </PageWrapper>
  );
};

export default ChatPage;
