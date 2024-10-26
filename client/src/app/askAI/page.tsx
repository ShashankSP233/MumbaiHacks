"use client";

import SidebarComponent from './SideComponent';
import ChatInterface from './ChatInterface';
import Demo from './sidebar/Demo';
import { Flamenco } from "next/font/google";
import React, { useState } from 'react';

const sofia = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});

interface Message {
  sender: string;
  text: string;
}

export default function AskAIPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Dashboard');
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to Naaya! How can I assist you today?" }
  ]);
  const [chatHistories, setChatHistories] = useState<{ id: string; history: string }[]>([]);

  const saveChatHistory = (history: string) => {
    const newChatId = `Chat ${chatHistories.length + 1}`;
    setChatHistories([...chatHistories, { id: newChatId, history }]);
  };

  return (
    <div>
      <React.Fragment>
        <div className={`flex w-screen ${sofia.className}`}>
          <div className='hidden sm:flex'>
            <SidebarComponent setSelectedMenuItem={setSelectedMenuItem} chatHistories={chatHistories} />
          </div>
          <div className='w-full'>
            {selectedMenuItem === 'Dashboard' ? (
              <ChatInterface messages={messages} setMessages={setMessages} saveChatHistory={saveChatHistory} selectedMenuItem={selectedMenuItem} />
            ) : (
              <Demo chatHistory={[]} />
            )}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}