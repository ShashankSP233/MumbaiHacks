import React from "react";

interface Message {
  sender: string;
  text: string;
}

interface ChatHistoryProps {
  chatHistory: Message[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  return (
    <div className="w-64 p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <div className="space-y-2">
        {chatHistory.map((message, index) => (
          <div key={index} className="p-2 border rounded-lg bg-white">
            <p className="font-semibold">{message.sender}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;